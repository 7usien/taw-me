import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Tabsbar from '../../components/tabsbar/Tabsbar';
import PageTitle from '../../components/PageTitle';
import Notifcation from '../../components/Notifcation';
import Table from '../../components/table/Table';
import Footer from '../../components/footer/Footer';

export default function Home() {
 return (
  <>
   <Topbar />
   <Tabsbar />
   <div className='content'>
    <PageTitle title='Employee’s health' />
    <Notifcation />

    <div className='tableWrap '>
     <h3>Please declare any of below cases by marking (√)</h3>
     <i>Any hospital admission during the last 12 months.</i>

     <Table />
    </div>
   </div>

   <Footer />
  </>
 );
}
