import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuBar from './components/Common/MenuBar'
import Footers from './components/Common/Footers';
import Home from './routes/Home'
import About from './routes/About';
import Register from './routes/Register';
import Login from './routes/Login';
import Sell from './routes/sell/Open'
import SellSecret from './routes/sell/Secret'
import SellDetail from './routes/sell/Detail'
import Buy from './routes/buy/Open'
import BuyDetail from './routes/buy/Detail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
