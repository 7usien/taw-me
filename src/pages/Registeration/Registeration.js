import './Registeration.css';

import PageTitle from '../../components/PageTitle';
import Notifcation from '../../components/Notifcation';
import Table from '../../components/table/Table';
import Footer from '../../components/footer/Footer';

export default function Registeration() {
 return (
  <>
   <div className='content'>
    <PageTitle title='Employee’s health' />
    <Notifcation />

    <div className='tableWrap '>
     <div className='tableWrap__heading'>
      <h3>Please declare any of below cases by marking (√)</h3>
      <i>Any hospital admission during the last 12 months.</i>
      <ul className='headingIcons'>
       <li>No</li>
       <li>Yes</li>
       <li>
        <span className='no'></span>
       </li>
       <li>
        <span className='yes'></span>
       </li>
      </ul>
     </div>
     <Table />
    </div>
   </div>

   <Footer />
  </>
 );
}
