import { useEffect, useState } from "react"

const Todocomponent = ()=>{
    // const [myTask, setMyTask] = useState([
    //     "Go to Market",
    //     "Buy vegetable",
    //     "Watch tv",
    //     "Dance"
    // ]);
    const [myTask, setMyTask] = useState([
        {Text:'Go to market', complete:false},
        {Text:'Buy vegetable', complete:false},
        {Text:'watch TV', complete:false},
        {Text:'Dance', complete:false},
        {Text:'singing', complete:false}
    ])
    const [activeValue, setActiveValue] = useState(myTask.length)
    const handleAddTask = ()=>{
        // console.log("Add")
        if (item) {
            let arr = [...myTask, {Text:item,complete:false}]
            setMyTask(arr)
            setItem("") 
        }
    };
    const [item, setItem] = useState("");
    useEffect(()=>{
        const arr = [...myTask]
        let newArr = arr.filter((each)=> !each.complete).length
        setActiveValue(newArr)

    },[myTask])
    function handleChange(e){
        setItem(e.target.value);
    }
    function handleCheckedBox(index){
        console.log("this is clicked", index);
        let arr = [...myTask]
        arr[index].complete = !arr[index].complete 
        setMyTask(arr)
        
        let countArray = arr.filter((each)=>!each.complete)
        setActiveValue(countArray.length)
        console.log(countArray)
          
    }

    return<>
    <h1>My To do app</h1>
    <input type="text" placeholder="Add Itme here" onChange={handleChange} value={item}></input>
    <button onClick={handleAddTask} >Add</button>

    <ul>
        {myTask.map((eachValue, index)=>(
            <li>
                <input type="checkbox" checked={eachValue.complete}onChange={() =>handleCheckedBox(index)}/>
                <span style={{textDecoration:eachValue.complete ? 'line-through': ""}}>{eachValue.Text}</span>
            </li>
        ))}
    </ul>
    Active Todo item = {activeValue}
    </>
}
export default Todocomponent