import React, { useState } from 'react'

const ToDoList = () => {
  let [ToDoList, setToDoList] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!ToDoList.includes(toname)) {
      let finalList = [...ToDoList, toname];
      setToDoList(finalList);
    }
    else {
      alert("Alerady Exist......");
    }
    event.preventDefault();
  }
  let list=ToDoList.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} ToDoList={ToDoList} setToDoList ={setToDoList}/>
    )
  })
  return (
    <div className='To-do-list-body'>
      <div>
        <h1>
          To Do List
        </h1>
      </div>
      <div>
        <form onSubmit={saveToDoList} ><input type="text" name='toname'/><button>Save</button></form>
      </div>
      <div className='outer-div'>
      <ul>
        {list}
      </ul>
      </div>
    </div>
  )
}

export default ToDoList;
function ToDoListItems({value,indexNumber,ToDoList,setToDoList}){
let [status,setStatus]=useState(false);

  let deleteRow=()=>{
    let finalData=ToDoList.filter((v,i)=>i!==indexNumber);
    setToDoList(finalData);
  }
  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)?'complete':''} onClick={checkStatus}>{indexNumber+1} {value}  <span onClick={deleteRow}>&times;</span></li>
  )
}
