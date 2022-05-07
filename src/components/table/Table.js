import Employee from '../Employee';
import './Table.css';

export default function Table() {
 const employees = [
  {
   name: 'Ahmed Marwan Mostafa',
   id: '1234567890',
   relation: 'employee',
   uploaded: false,
   family: [
    {
     name: 'Wafaa Ahmed sayed',
     id: '7387283940',
     relation: 'spouse',
     uploaded: false,
    },
    {
     name: 'Mona  Ahmed Marwan Mostafa',
     id: '7387283940',
     relation: 'daguhter',
     uploaded: false,
    },
    {
     name: 'Ahmed  Ahmed Marwan Mostafa',
     id: '7387283940',
     relation: 'son',
     uploaded: false,
    },
   ],
  },

  {
   name: 'Mashal Marwan Mostafa',
   id: '1234567890',
   relation: 'employee',
   uploaded: false,
   family: [
    {
     name: 'Wafaa Ahmed sayed',
     id: '7387283940',
     relation: 'spouse',
     uploaded: false,
    },
    {
     name: 'Mona  Ahmed Marwan Mostafa',
     id: '7387283940',
     relation: 'daguhter',
     uploaded: false,
    },
    {
     name: 'Ahmed  Ahmed Marwan Mostafa',
     id: '7387283940',
     relation: 'son',
     uploaded: false,
    },
   ],
  },

  {
   name: 'soad samir ghanim',
   id: '1234567890',
   relation: 'employee',
   uploaded: true,
   family: [],
  },
 ];

 return (
  <div className='tableContainer'>
   <table className='m-15 form-table'>
    <thead>
     <tr>
      <td></td>
      <td>select</td>
      <td>name</td>
      <td>National ID / IQAMA</td>
      <td>Relationship</td>
      <td>Actions</td>
      <td>Done</td>
      <td>-</td>
      <td>-</td>
     </tr>
    </thead>

    <tbody>
     {employees.map((employee, index) => (
      <Employee key={index} employee={employee}></Employee>
     ))}
    </tbody>
   </table>
  </div>
 );
}
