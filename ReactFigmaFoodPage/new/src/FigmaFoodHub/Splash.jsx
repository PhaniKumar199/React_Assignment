import { useNavigate } from 'react-router-dom';
import './index1.css';
const Splash=()=>{
    const navigate=useNavigate();
    const handleSplash=()=>{
        navigate('/Welcome')
    }
    return(
        <div className="splash-bg">
            <div>
                <img src='/assets/Splash.png' alt='splash' onClick={handleSplash}/>
            </div>
        </div>
    )
}
export default Splash;