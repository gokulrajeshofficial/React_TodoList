// import logo from './logo.svg';
import './App.css'
import { useState} from 'react'
function App() {
 const [toDo , setToDo] = useState('')
 const [toDoS , setToDoS] = useState([])
 const d = new Date();
 let day = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day[d.getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{ console.log(e.target.value);setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> setToDoS([...toDoS ,{text : toDo , status : false , id : Date.now()}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDoS.map((elem)=>{
           return(<div className="todo">
           <div className="left">
             <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(e.target)
              setToDoS(toDoS.filter(elemChg =>{
                if(elemChg.id === elem.id)
                {
                  elemChg.status = e.target.checked ; 
                }
                return  elemChg
              }))
              }} value={elem.status} type="checkbox" name="" id="" />
             <p>{elem.text}</p>
           </div>
           <div className="right" >
             <i onClick={()=>{
              setToDoS(toDoS.filter(elemChg =>{
                return (elem.id !== elemChg.id)
               
             }))
             }} className="fas fa-times"></i>
           </div>
         </div>)

        })}
        <div  >
        <h2 className='active'>Active To Do list</h2>
        <ul className='activeList'>
        {
          toDoS.map((obj)=>{
            if(obj.status)
            {
              return(<li>{obj.text}</li>)
            }
            return null;
          })
        }
        </ul>
        </div>
       
      </div>
    </div>
  );
}

export default App;

