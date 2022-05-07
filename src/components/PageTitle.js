import './PageTitle.css';

export default function PageTitle({ title }) {
 return (
  <div className='page-title'>
   tell us about your <span>{title}</span>
  </div>
 );
}
