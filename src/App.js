import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuBar from './components/Common/MenuBar';
import Footers from './components/Common/Footers';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register/Register';
import Login from './pages/Login';
import Sell from './pages/sell/Open';
import SellSecret from './pages/sell/Secret';
import SellDetail from './pages/sell/Detail';
import Buy from './pages/buy/Open';
import BuyDetail from './pages/buy/Detail';

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
