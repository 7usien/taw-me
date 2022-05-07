import React from 'react';

const Subemployee = ({ subemployee }) => {
 return (
  <tr>
   <td></td>
   <td>
    <label class='form-checkbox'>
     <input
      type='checkbox'
      name='checkbox'
      checked={subemployee.uploaded ? true : false}
     />
    </label>
   </td>
   <td>{subemployee.name}</td>
   <td>{subemployee.id}</td>
   <td>{subemployee.relation}</td>
   <td>
    <label>
     <input type='file' />
     Max size:5MB
    </label>
   </td>
   <td>{subemployee.uploaded ? <span className='done'></span> : ''}</td>
   <td></td>
   <td></td>
  </tr>
 );
};

export default Subemployee;
