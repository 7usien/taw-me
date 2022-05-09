import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Tabsbar.css';

export default function Tabsbar() {
 return (
  <div className='tabsbar'>
   <div className='tabsbar__container'>
    <div className='tabsbar__heading'>
     <NavLink to='/'>
      Registeration
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
     <NavLink to='/addemployee'>
      add Employees
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
     <NavLink to='/health'>
      Health Declaration
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
     <NavLink to='/details'>
      Company Details
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
     <NavLink className='disabledTab' to='/review'>
      Review& Confirm
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
     <NavLink to='/payement'>
      Payment
      <span>
       <i className='material-icons'>more_vert</i>
      </span>
     </NavLink>
    </div>
   </div>
  </div>
 );
}
