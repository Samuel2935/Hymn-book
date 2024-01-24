import React, { useRef } from 'react';

function AddLang({ setLists }) {
  const serialRef = useRef();
  const ethRef = useRef();
  const langRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const language = event.target.language.value;
    const ethnic = event.target.ethnic.value;

    const newlist = {
      id,
      language,
      ethnic,
    };
    setLists((prev) => {
      return prev.concat(newlist);
    });
    serialRef.current.value = '';
    ethRef.current.value = '';
    langRef.current.value = '';
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="S/N" ref={serialRef} />
      <input type="text" name="language" placeholder="language" ref={langRef} />
      <input type="text" name="ethnic" placeholder="ethnics" ref={ethRef} />
      <button>Add Language</button>
    </form>
  );
}

export default AddLang;
