import "./App.css";
import Add from "./Components/Add";
import Tasks from "./Components/Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [len, setLen] = useState(data.length);
  const [button, setButton] = useState("Add");
  const [placeholder, setPlaceholder] = useState("Add a Text");
  const [index, setIndex] = useState();

  const updateData = (task) => {
    if (task !== "") {
      setData([...data, task]);
      setLen(len + 1);
    }
  };
  function deleteHandler() {
    data.length = 0;
    setLen(0);
    console.log(data);
  }
  function deleteItemHandler(index) {
    data.splice(index, 1);
    setData(data);
    setLen(len - 1);
    // console.log(index);
  }

  function editHandler(index, task) {
    data.splice(index, 1, task);
    setData(data);
    setTask("");
    setPlaceholder("Add a Text");
    setButton("Add");
  }

  function moveUpHandler(index) {
    let temp = data[index];
    deleteItemHandler(index);
    data.splice(index-1,0,temp);
    setData(data);
    setLen(data.length);
    setPlaceholder("Task Moved Up");
  }

  function moveDownHandler(index) {
    let temp = data[index];
    setPlaceholder(temp);
    deleteItemHandler(index);
    data.splice(index+1,0,temp);
    setData(data);
    setLen(data.length);
    setPlaceholder("Task Moved Down");
  }

  return (
    <div className="bg-[#653be0] w-[100vw] h-[100vh] flex pt-10">
      <div className="w-full h-full max-w-[600px] mx-auto">
        <p className="text-white uppercase font-bold text-4xl">My Tasks</p>
        <Add
          data={data}
          setData={setData}
          task={task}
          setTask={setTask}
          updateData={updateData}
          button={button}
          placeholder={placeholder}
          setPlaceholder={setPlaceholder}
          editHandler={editHandler}
          index={index}
        />
        <Tasks
          data={data}
          setData={setData}
          del={deleteHandler}
          len={len}
          delItem={deleteItemHandler}
          setButton={setButton}
          setPlaceholder={setPlaceholder}
          setIndex={setIndex}
          moveUp={moveUpHandler}
          moveDown={moveDownHandler}
        />
      </div>
    </div>
  );
}

export default App;
