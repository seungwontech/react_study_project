import logo from './logo.svg';
import './App.css';
function Header(props){
    return <header>
        <h1><a href="/">{props.title}</a></h1>
    </header>
}
function Nav(){
    return <nav>
        <ol>
            <li>
                <a href="/">html</a>
            </li>
            <li>
                <a href="/">css</a>
            </li>
            <li>
                <a href="/">js</a>
            </li>
        </ol>
    </nav>
}
function Article(props){
    return <h2>{props.title}, {props.body}</h2>
}
function App() {
  return (
    <div>
        <Header title="REACT"></Header>
        <Nav></Nav>
        <Article title="Welcome" body="Hello, WEB"></Article>
        <Article title="Welcome react" body="Hi"></Article>
    </div>
  );
}

export default App;
