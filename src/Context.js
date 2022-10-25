import { createContext, useEffect, useState } from "react";
export const Context = createContext();

export default function Provider({ children }) {
  const [value, setValue] = useState("");
  const [date,setDate] = useState('')
  const [check, setCheck] = useState("");
  const [entry, setEntry] = useState([]);
  const [eng,setEng]=useState(true)
//   useEffect(() => {
//     window.onbeforeunload = () => {
//       localStorage.setItem("entry", JSON.stringify(entry));
//       localStorage.setItem("eng", JSON.stringify(eng))
//     };
//     window.onload = () => {
//       setEntry(JSON.parse(localStorage.getItem("entry")));
//       setEng(JSON.parse(localStorage.getItem("eng")))
//     };
//   }, [entry]);

  

  const lang =  {
      header1: ["Bạn có ", " việc chưa thực hiện!"],
      header2: "Hiện các việc chưa làm",
      holder: "Nhập việc cần làm...",
      submit: "Gửi",
      footer: "Thực hiện bởi Mindx 🔥",
      lang: "Chọn ngôn ngữ:",
    }
  

  return (
    <Context.Provider
      value={{ value, setValue, entry, setEntry, check, setCheck,lang,eng,setEng,date,setDate }}
    >
      {children}
    </Context.Provider>
  );
}
