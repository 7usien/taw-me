import React from 'react';

const Employee = ({ employee, children }) => {
 return (
  <tr className={employee.family ? 'haveFamily' : 'noFamily'}>
   <td>{employee.family ? '^' : ''}</td>
   <td>
    <label class='form-checkbox'>
     <input
      type='checkbox'
      name='checkbox'
      checked={employee.uploaded ? true : false}
     />
    </label>
   </td>
   <td>{employee.name}</td>
   <td>{employee.id}</td>
   <td>{employee.relation}</td>
   <td>
    <label>
     <input type='file' />
     Max size:5MB
    </label>
   </td>
   <td>{employee.uploaded ? <span className='done'></span> : ''}</td>
   <td></td>
   <td></td>
  </tr>
 );
};

export default Employee;
