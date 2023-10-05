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
function Article(){
    return <h2>welcome</h2>
}
function App() {
  return (
    <div>
        <Header title="REACT"></Header>
        <Nav></Nav>
        <Article></Article>
    </div>
  );
}

export default App;
