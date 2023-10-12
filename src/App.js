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
                props.onChangeMode(Number(event.target.id));
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

function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body)
        }}>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="Create"/></p>
        </form>
    </article>
}

function App() {
    /**
     * const _mode = useState('WELCOME');
     * const mode = _mode[0];
     * const setMode = _mode[1];
     * 초기값
     * 초기값은 0번째 인덱스 값
     * state 값 변경은 1번째 인덱스 값으로
     */
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState([
        {id: 1, title: 'html', body: 'html is...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'js', body: 'js is...'}
    ]);

    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body}
            const newTopics = [...topics] // 원본을 복제
            newTopics.push(newTopic); // 새로운값을 추가
            setTopics(newTopics); // 세팅
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>
    }
    return (
        <div>
            <Header title="REACT" onChangeMode={() => {
                setMode('WELCOME')
            }}></Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ')
                setId(_id);
            }}></Nav>
            {content}
            <a href="/create" onClick={event => {
                event.preventDefault();
                setMode('CREATE');
            }}>Create</a>
        </div>
    );
}

export default App;
