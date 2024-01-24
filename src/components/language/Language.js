import React, { useState } from 'react';
import './Language.css';
import AddLang from './AddLang';
import EditLang from './EditLang';

function Language() {
  const lang = [
    {
      id: 1,
      language: 'Igbo',
      ethnic: '1',
    },
    {
      id: 2,
      language: 'Hausa',
      ethnic: '2',
    },
    {
      id: 3,
      language: 'Yoruba',
      ethnic: '3',
    },
  ];
  const [lists, setLists] = useState(lang);
  const [updateState, setUpdateState] = useState(-1);

  return (
    <div>
      <AddLang setLists={setLists} />
      <div className="lang">
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditLang current={current} lists={lists} setLists={setLists} />
              ) : (
                <tr>
                  <td>{current.id}</td>
                  <td>{current.language}</td>
                  <td>{current.ethnic}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const id = event.target.id.value;
    const language = event.target.language.value;
    const ethnic = event.target.ethnic.value;
    const newList = lists.map((li) =>
      li.id === updateState
        ? { ...li, id: id, language: language, ethnic: ethnic }
        : li
    );
    setLists(newList);
    setUpdateState(-1);
  }
}

export default Language;
