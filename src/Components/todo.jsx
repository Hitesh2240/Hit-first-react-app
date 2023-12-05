import { useState } from "react";

const Todo = () => {
  const [myTask, setMyTask] = useState(["Go to market", "Watch TV", "Singing"]);

  const handleAddTask = () => {
    console.log("add");
    let arr = [...myTask,item]
    setMyTask(arr);
    // setMyTask(myTask.push(item))
  };

  const [item, setItem]= useState("")

  function handleChange(e){
    console.log(e.target.value)
    setItem(e.target.value)
  }


  return (
    <>
      <h1>To do App</h1>
      <input type="text" placeholder="Add something" onChange={handleChange} value={item} />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {myTask.map((eachValue) => (
          <li>{eachValue}</li>
        ))}
        ;
      </ul>
    </>
  );
};

export default Todo;
