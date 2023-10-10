import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
    return <header>
        <h1><a href="/" onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/' + t.id} onClick={event => {
                event.preventDefault();
                props.onChangeMode(event.target.id);
            }}>{t.title}</a>
        </li>)
        /**
         *  key를 사용하는 이유
         *  - 컴포넌트의 변화를 감지하기 위해
         *  - 안정적인 고유성을 부여하기 위해
         */
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props) {
    return <h2>{props.title}, {props.body}</h2>
}

function App() {
    /**
     * const _mode = useState('READ');
     * const mode = _mode[0];
     * const setMode = _mode[1];
     * 초기값
     * 초기값은 0번째 인덱스 값
     * state 값 변경은 1번째 인덱스 값으로
     */
    const [mode, setMode] = useState('WELCOME');
    const topics = [
        {id: 1, title: 'html', body: 'html is...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'js', body: 'js is...'}
    ]
    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ') {
        content = <Article title="Read" body="Hello, Read"></Article>
    }
    return (
        <div>
            <Header title="REACT" onChangeMode={() => {
                mode = 'WELCOME'
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                mode = 'READ'
            }}></Nav>
            {content}
        </div>
    );
}

export default App;
