
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import FormInputs from './components/FormInputs';



function App() {
  return (
   
    <div className="App">

      <NavBar/>   
      
      <div className="row">

      
        <div className="col-md-2"></div>

        <div className="col-md-8">  
          <FormInputs/>
        </div>

        <div className="col-md-2"></div>

      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
  );
}

export default App;
