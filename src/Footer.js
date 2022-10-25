import { useContext } from "react";
import { Context } from "./Context";

const Footer = () => {

  const {lang,eng,setEng} =useContext(Context)
    return (
      <div>
        <h3>{eng? 'Made by MindX 🔥' : lang.footer}</h3>
        <div>
          <span>{eng? "Available on": lang.lang}</span>
          <span className={eng?"languague-picker": "languague-picker selected"} onClick={()=>{setEng(false)}}>🇻🇳</span>
          <span className={eng?"languague-picker selected": "languague-picker"}  onClick={()=>{setEng(true)}}>🇺🇸</span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  