import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuBar from './components/Common/MenuBar'
import Footers from './components/Common/Footers';
import Home from './routes/Home'
import About from './routes/About';
import Register from './routes/Register';
import Login from './routes/Login';
import List from './routes/List'
import ListDetail from './routes/ListDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MenuBar/>
      <div className="content">
      <Switch>
          <Route exact path="/list" component={List}/>
          <Route exact path="/list/:name" component={ListDetail}/>
          <Route exact path="/aboutUs" component={About}/>
          <Route exact path="/logIn" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
      </Switch>
      </div>
      <Footers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
