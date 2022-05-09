//Styles
import './css/App.css';

//Compo
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registeration from './pages/Registeration/Registeration';
import Addemployee from './pages/addEmployees/Addemployee';
import Health from './pages/healthdec/Health';
import Details from './pages/companydetails/Details';
import Review from './pages/review/Review';
import Payment from './pages/payment/Payment';
import Tabsbar from './components/tabsbar/Tabsbar';
import Topbar from './components/topbar/Topbar';

function App() {
 return (
  <div className='container'>
   <Topbar />

   <BrowserRouter>
    <Tabsbar />
    <Switch>
     <Route exact path='/taw-me'>
      <Registeration />
     </Route>

     <Route path='/addemployee'>
      <Addemployee />
     </Route>

     <Route path='/health'>
      <Health />
     </Route>

     <Route path='/details'>
      <Details />
     </Route>
     <Route path='/review'>
      <Review />
     </Route>
     <Route path='/payement'>
      <Payment />
     </Route>
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
