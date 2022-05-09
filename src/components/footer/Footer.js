import './Footer.css';

export default function Footer() {
 return (
  <footer className='footer'>
   <div className='footer__container'>
    <div className='rights'>
     Copyright © Tawuniya 2021. All Right Reserved
     <a href='/privacy'>Privacy Policy</a>
    </div>

    <div className='pay'>
     <ul>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/visa.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/mada.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/mastercard.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/amex.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/saddad.svg'} alt='' />
      </li>
     </ul>
    </div>

    <div className='social'>
     <ul>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/facebook.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/twitter.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/linkedIn.svg'} alt='' />
      </li>
      <li>
       <img src={process.env.PUBLIC_URL + '/img/instagram.svg'} alt='' />
      </li>
     </ul>
    </div>
   </div>
  </footer>
 );
}
