import React from 'react';

const Employee = ({ employee, children }) => {
 const handleCollapase = (e) => {
  if (
   e.target.parentNode.parentNode.parentNode.nextSibling.classList[1] ===
   'hidden'
  ) {
   const parent = e.target.parentNode.parentNode.parentNode;
   parent.nextSibling.classList.remove('hidden');
  } else {
   const parent = e.target.parentNode.parentNode.parentNode;
   parent.nextSibling.classList.add('hidden');
  }
 };

 return (
  <>
   <tbody className={employee.family.length > 0 ? 'haveFamily' : 'noFamily'}>
    <tr>
     <td>
      {employee.family.length > 0 ? (
       <span onClick={handleCollapase} className='collapse'></span>
      ) : (
       ''
      )}
     </td>
     <td>
      <label className='form-checkbox'>
       <input type='checkbox' name='checkbox' />
      </label>
     </td>

     <td>{employee.name}</td>
     <td>{employee.id}</td>
     <td>{employee.relation}</td>
     <td>
      <label className='fileLabel'>
       <input title='' name='' type='file' />
       <span className='hint'></span>
      </label>
     </td>
     <td>{employee.uploaded ? <span className='done'></span> : ''}</td>
     <td></td>
     <td></td>
    </tr>
   </tbody>

   <tbody className={employee.family.length > 0 ? 'subFamily hidden' : ''}>
    {employee.family.map((member, index) => (
     <tr key={index}>
      <td>
       <span className='subSelect'></span>
      </td>
      <td>
       <label className='form-checkbox'>
        <input type='checkbox' name='checkbox' />
       </label>
      </td>
      <td>{member.name}</td>
      <td>{member.id}</td>
      <td>{member.relation}</td>
      <td>
       <label className='fileLabel'>
        <input title='' name='' type='file' />
        <span className='hint'></span>
       </label>
      </td>
      <td>{employee.uploaded ? <span className='done'></span> : ''}</td>

      <td></td>
      <td></td>
     </tr>
    ))}
   </tbody>
  </>
 );
};

export default Employee;
