import React, { useState } from "react";
import "./app.css";
const App = () => {
  const [title, setTitle] = useState("");
  const [detailed, setDetails] = useState("");
  const [tasks, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...tasks];
    copytask.push({ title, detailed });
    setTask(copytask);
    setTitle("");
    setDetails("");
  };
  const deletebtn = (idx) => {
    const copy = [...tasks];
    copy.splice(idx, 1);
    setTask(copy);
  };
  return (
    <div className="parent">
      <form className="input" action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          placeholder="Heading"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name="textarea"
          placeholder="Start Writing Your Notes"
          value={detailed}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button>ADD NOTE</button>
      </form>
      <div className="notescorner">
        <h1>All Notes</h1>
        <div className="notes">
          {tasks.map((task, idx) => {
            return (
              <div key={idx}>
                <h1>{task.title}</h1>
                <p>{task.detailed}</p>
                <button onClick={() => deletebtn(idx)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
