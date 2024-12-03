import { useContext } from "react";
import Context from "../Context/Context";
import './index.css';
const Child=()=>{
    const {setTheme}=useContext(Context)

   const handleToggle=()=>{
    setTheme((prevTheme)=>(prevTheme==='light' ? 'dark': 'light'));
   }
    return(
        <div className="c">
           <button onClick={handleToggle}>Toogle</button>
        </div>
    )
}
export default Child;