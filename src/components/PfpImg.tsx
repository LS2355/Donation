import { useState } from 'react';
import '../styles/main.scss'
function PFP({setLoginFormActive, loggedIn, setLoggedIn,} : {loggedIn: boolean, setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, setLoginFormActive: React.Dispatch<React.SetStateAction<boolean>>}) {

  const [showPfpMenu, setShowPfpMenu] = useState<boolean>(false)
  

  const isLoggedIn : JSX.Element = (
    <button className="Btn bg-slate-500 btn-md" onClick={()=>setShowPfpMenu(!showPfpMenu)}>
      <div className="sign">
        <svg viewBox="0 0 512 512">
          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      </div>
      <div className="text">Profile</div>
    </button>
  );
  const notLoggedIn : JSX.Element = (
    <button className="bg-purple-400 Btn btn-md" onClick={()=>{setLoginFormActive(true);}}>
      <div className="sign">
        <svg viewBox="0 0 512 512">
          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      </div>
      <div className="text">Login</div>
    </button>
  );

  const pfpMenu = (
    <div className='absolute bottom-0 w-44 h-56 translate-y-[105%] rounded-md right-4 overflow-hidden'>
      <div className="relative flex flex-col flex-wrap w-full h-full overflow-hidden text-black bg-white">
        <nav className='list-none'>
          <li className='PfpMenuItem'><a href='out' className='w-full h-full'>LINK</a></li>
          <li className='PfpMenuItem'><a href='out' className='w-full h-full'>LINK</a></li>
          <li className='PfpMenuItem'><a href='out' className='w-full h-full'>LINK</a></li>
          <li className='PfpMenuItem'><a href='out' className='w-full h-full'>LINK</a></li>
          <li className='PfpMenuItem'><a href='out' className='w-full h-full'>LINK</a></li>
        </nav>        
      






        <div className='absolute bottom-0 flex flex-wrap items-end justify-center w-full p-1 bg-[#141516]'>
          <button className="bg-red-600 Btn btn-sm" onClick={()=>{setShowPfpMenu(false); setLoggedIn(false)}}>
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </div>
            <div className="text">Logout</div>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
    {loggedIn ? isLoggedIn : notLoggedIn}
    {showPfpMenu ? pfpMenu : ""}
    </>

  )
}

export default PFP;