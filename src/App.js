import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuBar from './components/Common/MenuBar';
import Footers from './components/Common/Footers';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register/Register';
import Login from './pages/Login';
import Sell from './pages/Sell/Open';
import SellSecret from './pages/Sell/Secret';
import SellDetail from './pages/Sell/Detail';
import Buy from './pages/Buy/Open';
import BuyDetail from './pages/Buy/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/build'}>
      <MenuBar/>
          <div className="content">
          <Switch>
              <Route exact path="/list" component={Sell}/>
              <Route exact path="/list/open" component={Sell}/>
              <Route exact path="/list/secret" component={SellSecret}/>
              <Route exact path="/list/:name" component={SellDetail}/>
              <Route exact path="/buy" component={Buy}/>
              <Route exact path="/buy/:name" component={BuyDetail}/>
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
