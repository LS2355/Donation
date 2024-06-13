import { useRef, useState } from "react";
import DetectClickOutsideComponent from "./subcomponents/ClickedOutSideRef";

function Login ({setLoginFormActive} : {setLoginFormActive: React.Dispatch<React.SetStateAction<boolean>>}) {

  const [isItLogin, setIsItLogin]= useState(true)

  const loginWrapperRef = useRef<HTMLDivElement | undefined>()
  DetectClickOutsideComponent(loginWrapperRef, setLoginFormActive)


const useTheLoginForm = (
  <>
    <p>Login</p>
    <form>
      <div className="user-box">
        <input required name="" type="text" />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input required name="" type="password" />
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </a>
    </form>
    <p>Don't have an account? <a className="a2" onClick={()=>setIsItLogin(false)}>Sign up!</a></p>
  </>
)


const useTheSignInForm = (
  <>
  <p>Sign In</p>
  <form>
    <div className="user-box">
      <input required name="email" type="text"/>
      <label htmlFor="email">Email</label>
    </div>
    <div className="user-box">
      <input required name="first_name" type="text"/>
      <label htmlFor="first_name">First Name</label>
    </div>
    <div className="user-box">
      <input type="text" required name="Lastname"/>
      <label htmlFor="last_name">Last Name</label>
    </div>
    <div className="user-box">
      <input type="text" required name="password"/>
      <label htmlFor="password">Password</label>
    </div>
    <div className="user-box">
      <input type="text" required name="confirm_password"/>
      <label htmlFor="confirm_password">Confirm Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sign In
    </a>
  </form>
<p>Have an account already? <a className="a2" onClick={()=>setIsItLogin(true)}>Login!</a></p>
  </>
)





  return(
    <div className="fixed top-0 left-0 z-40 h-full bg-black/[.60] w-dvw">
      <div className="login-box" ref={loginWrapperRef}>
        {isItLogin ? useTheLoginForm: useTheSignInForm}
      </div>
    </div>
  )
}

export default Login;