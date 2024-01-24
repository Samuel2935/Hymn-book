import React from 'react';


function EditLang({current, lists, setLists}) {
    function handleInput(event){
        const name = event.target.value;
        const value = name.value;
       const newList = lists.map((li)=>(
            li.id === current.id ? {...li, name:value}:li
        ))
        setLists(newList);
    }
    
  return (
    <tr>
      <td>
        <input type="text" name="id" value={current.id}/>
      </td>
      <td>
        <input type="text" onChange={handleInput} name="language" value={current.language}/>
      </td>
      <td>
        <input type="text" name="ethnic" value={current.ethnic}/>
      </td>
      <td>
        <button type="submit">update</button>
      </td>
    </tr>
  );
}

export default EditLang;
