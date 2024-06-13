import Donation_icon from '../assets/Donation_Icon.svg'
import { NavLink, Link } from 'react-router-dom';
import PFP from './PfpImg';
import '../styles/main.scss'
import '../styles/index.css'

function Navbar ({setLoginFormActive, loggedIn, setLoggedIn}: {setLoginFormActive: React.Dispatch<React.SetStateAction<boolean>>, loggedIn: boolean, setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}) {
  

 
  return (
    <div id='navbar' className="fixed top-0 left-0 z-10 h-16 border-b border-white w-dvw">
      <div className="relative flex flex-wrap justify-between w-full h-full px-3">
        <a href="#home" className='flex flex-wrap items-center justify-center h-full w-14'>
          <img src={Donation_icon} className='w-full h-14'></img>
        </a>
        <div className='flex flex-wrap items-center justify-center w-3/5 h-full'>
          <Link to="/" onClick={()=>{console.log("link1")}} className='flex flex-wrap items-center justify-center w-1/3 h-full transition-colors font-heading hover:text-hover-color'>HOME</Link>
          <NavLink to="/Find-Cause" onClick={()=>{console.log("link1")}} className='flex flex-wrap items-center justify-center w-1/3 h-full transition-colors font-heading hover:text-hover-color'>SEARCH</NavLink>
          <NavLink to="/Create-Cause" onClick={()=>{console.log("link1")}} className='flex flex-wrap items-center justify-center w-1/3 h-full transition-colors font-heading hover:text-hover-color'>CREATE</NavLink>
        </div>
        <div className='flex flex-wrap items-center justify-center h-full text-center'>
          <PFP 
            setLoginFormActive = {setLoginFormActive}
            loggedIn = {loggedIn}
            setLoggedIn = {setLoggedIn}
          />
        </div>
      </div>

    </div>
  )
}
export default Navbar;