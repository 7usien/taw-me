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
       <img src='/img/visa.svg' alt='' />
      </li>
      <li>
       <img src='/img/mada.svg' alt='' />
      </li>
      <li>
       <img src='/img/mastercard.svg' alt='' />
      </li>
      <li>
       <img src='/img/amex.svg' alt='' />
      </li>
      <li>
       <img src='/img/saddad.svg' alt='' />
      </li>
     </ul>
    </div>

    <div className='social'>
     <ul>
      <li>
       <img src='/img/facebook.svg' alt='' />
      </li>
      <li>
       <img src='/img/youtube.svg' alt='' />
      </li>
      <li>
       <img src='/img/twitter.png' alt='' />
      </li>
      <li>
       <img src='/img/linkedIn.svg' alt='' />
      </li>
      <li>
       <img src='/img/instagram.svg' alt='' />
      </li>
     </ul>
    </div>
   </div>
  </footer>
 );
}
