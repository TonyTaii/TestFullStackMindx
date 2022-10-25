import { useContext, useEffect, useRef, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Context } from "./Context";

const ListEntry = (props) => {
  const { entry, setEntry} = useContext(Context);
  const [active, setActive] = useState(false);

  const handleClickComplete = (index) => {
    if (active) {
      const a = [...entry];
      a[index].completed = true;
      setEntry(a);
    } else {
      const a = [...entry];
      a[index].completed = false;
      setEntry(a);
    }
    setActive(!active);
  };
  return (
    <div
      onClick={()=> handleClickComplete(props.index)}
      className={
        props.completed ? "todo-item-container done " : "todo-item-container"
      }
    >
      {props.completed? (
        <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
      ) : (
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
      )}
      <div className="item-title">{props.title}</div>
      <div style={{marginLeft:30,fontSize:20}}>{props.date}</div>
    </div>
  );
};

const TodoList = () => {
  const { entry,check,date} = useContext(Context);
  const [filterEntry,setFilterEntry]=useState(entry)
  useEffect(()=>setFilterEntry(entry.filter((item)=>item.completed===false)),[check])
 
  // console.log(date)
  // // console.log((new Date()).toISOString().split('T')[0])
  // console.log((date-(new Date())))
  // Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  // const diffTime = Math.abs(date2 - date1);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

const dateRemain=(a)=>{
  const b=(Math.abs(a -(new Date()))/ (1000 * 60 * 60 * 24)).toFixed(0)
 return(`${b} days remaining to complete...`)
}



  return (
    <div className="todo-list-container">
      { check? filterEntry.map((item, i) => (
        <ListEntry
          key={i}
          index={i}
          completed={item.completed}
          title={item.title}
          date={dateRemain(item.date)}
        />
      )): entry.map((item, i) => (
        <ListEntry
          key={i}
          index={i}
          completed={item.completed}
          title={item.title}
          date={dateRemain(item.date)}
        />
      ))
      
      }
    </div>
  );
};

export default TodoList;
