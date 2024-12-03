import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './index2welcome.css';
import { useNavigate } from 'react-router-dom';
const Welcome=()=>{

    const navigate=useNavigate()
    const handleSignIn=()=>{
        navigate('/Login')
    }
    const handleSkip=()=>{
        navigate('/SignUp')
    }

    const handleSignUp=()=>{
        navigate('/SignUp')
    }
    return(
        <div className='welcome'>
            <div className='welcomeskip'>
            <p onClick={handleSkip}>skip</p>
            </div>
            
            <div className='welcomepage'>
           
            <div className='welcomehead'>
           <h1>Welcome to</h1>
           <span className='welcomespan'>FoodHub</span>
           <p>Your favourite foods delivered<br></br> fast at your door.</p>
           </div>
           
           <div className='welcomebottom'>
            <div className='sign'>
            <p>sign in with</p>
            </div>
            <div className='buttonbottom'>
                <a href='https://www.facebook.com/login/'>
            <button><FaFacebook className='fafacebook'/>FaceBook</button></a>
            <a href='https://accounts.google.com/'>
            <button><FaGoogle className='fagoogle'/>Google</button></a>
            </div>
            
            <div className='buttonstart'>
            <button onClick={handleSignUp}>Start with email or phone</button>
            <p>Already have an account?<span className='signIn' onClick={handleSignIn}>sign in</span></p>
            </div>
           </div>
           
           
           </div>
           
           
           
        </div>
    )
}
export default Welcome;