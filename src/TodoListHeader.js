import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";


const Header = () => {



const[entryRemain,setEntryRemain]=useState('')
const {entry,check,setCheck,lang,eng} =useContext(Context)

useEffect(() => { setEntryRemain(entry.filter(entry => !entry.completed).length) })

  
    return <div className="header"><p style={{marginTop:1}}>{eng? "You have ":lang.header1[0]}{entryRemain} {eng? 'tasks left!':lang.header1[1]}</p>
  
    <p style={{marginTop:3,marginLeft:140,fontSize:15}}>{eng? "Not finished only":lang.header2}</p>
    <input type="checkbox" style={{height:20,width:20,marginBottom:0}} onClick={(e)=>{setCheck(e.target.checked)
      
      if(check){setCheck(!check)}} }></input>
    </div>;
  };
  
  export default Header;