import logo from './logo.svg';
import './App.css';
function Header(){
    return <header>
        <h1><a href="/">WEB</a></h1>
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
        <Header></Header>
        <Nav></Nav>
        <Article></Article>
    </div>
  );
}

export default App;
