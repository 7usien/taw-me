import './Notifcation.css';
export default function Notifcation() {
 return (
  <div className='notification'>
   <h2>
    {' '}
    <span className='icon'></span>
    Please make sure to attach the following supportive reports <i>*</i>
   </h2>
   <ol>
    <li>Medical report clarify declared medical case. </li>
    <li>Medical tests.</li>
   </ol>
   <p>* Last update should be one month from submitting date</p>
  </div>
 );
}
