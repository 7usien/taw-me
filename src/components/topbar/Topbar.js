import './Topbar.css';

export default function Topbar() {
 return (
  <div className='topbar'>
   <div className='topbar__container'>
    <nav>
     <ul>
      <li>
       <a href='/#link'>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='' />
       </a>
      </li>
      <li>
       <a href='/#link'>Tawuniya SME Medical Sales</a>
      </li>
      <li>
       <a href='/#link'>
        Back to Tawuniya.sa
        <span className='material-icons'>navigate_next</span>
       </a>
      </li>
      <li>
       <a href='/#link'>
        العربية <span className='material-icons'>language</span>
       </a>
      </li>
     </ul>
    </nav>
   </div>
  </div>
 );
}
