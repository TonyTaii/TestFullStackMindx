import { useContext } from "react";
import { Context } from "./Context";

const Form = () => {
  
  const {value,setValue,entry,setEntry,lang,eng,date,setDate} =useContext(Context)
 


  const handleOnClick=(e)=>{
    e.preventDefault()
    if(value&&date!=='')
    {const newTask=[...entry,{title: value, completed: false,date:date}]
      
      
      setEntry(newTask)
      setValue('')

}else{alert('Hãy nhập đủ công việc và ngày hoàn thành')}}

function dhm (ms) {
  const days = Math.floor(ms / (24*60*60*1000));
  const daysms = ms % (24*60*60*1000);
  const hours = Math.floor(daysms / (60*60*1000));
  const hoursms = ms % (60*60*1000);
  const minutes = Math.floor(hoursms / (60*1000));
  const minutesms = ms % (60*1000);
  const sec = Math.floor(minutesms / 1000);
  return days + ":" + hours + ":" + minutes + ":" + sec;
}
   
console.log(date)
// console.log((new Date()).toISOString().split('T')[0])
console.log((date-(new Date())))

  
    return (
      <form className="form">
        <input  style={{width:260}} placeholder={eng? "Enter task ..." : lang.holder}value={value} onChange={(e)=>setValue(e.target.value)}/>
        <input type='date'style={{width:200}} onChange={(e)=>{setDate(e.target.valueAsDate)}}/>
        <button onClick={handleOnClick}>{eng? 'Submit': lang.submit}</button>
      </form>
    );
  };
  
  export default Form;
  