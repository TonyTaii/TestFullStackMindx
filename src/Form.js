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


   

  
    return (
      <form className="form">
        <input  style={{width:260}} placeholder={eng? "Enter task ..." : lang.holder}value={value} onChange={(e)=>setValue(e.target.value)}/>
        <input type='date'style={{width:200}} onChange={(e)=>{setDate(e.target.valueAsDate)}}/>
        <button style={{width:110}} onClick={handleOnClick}>{eng? 'Submit': lang.submit}</button>
      </form>
    );
  };
  
  export default Form;
  