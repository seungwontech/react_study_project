import logo from './logo.svg';
import './App.css';

function Header(props) {
    return <header>
        <h1><a href="/" onClick={function (event){
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    for(let i = 0; i < props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
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
    const topics = [
        {id:1, title:'html', body:'html is...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'js', body:'js is...'}
    ]
    return (
        <div>
            <Header title="REACT" onChangeMode={function (){
                alert('Header');
            }}></Header>
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
