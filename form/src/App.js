import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegistraionForm/RegisterForm';
import Folder from './components/folder/Folder';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    {/* this is commen */}
      <Router>
        <Switch>
          <Route path="/" exact component={RegisterForm}/>
          <Route path="/profile" component={Folder}/>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
