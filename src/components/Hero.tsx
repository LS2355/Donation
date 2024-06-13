import { NavLink } from 'react-router-dom'
import '../styles/main.scss'

function Hero () {
 
  return (
    <section id="Hero" className="relative grid max-w-[1400px] h-[90dvh] place-content-center">


      <div className='flex flex-wrap text-center'>
        <h1 className='w-full px-3 mt-36 text-8xl'>Donate with someone Elses Money</h1>
        <div className='flex flex-wrap justify-center w-full mt-24'>
          <NavLink to='./Find-Cause' id='Search_cause' className='hero_btn'>Search for cause</NavLink>
          <NavLink to='./Create-Cause' id='Submit_cause' className='hero_btn'>Submit A cause</NavLink>
        </div>
        <div className='flex justify-center w-full'>
          <h3 className='w-2/5 text-2xl text-center mt-36'>We get it. There are people and causes you want to support but its hard to give when you need it your self. Now you can send money to causes with buy watching and sharing ads</h3>
        </div>
      </div>
    </section>
  )
}
export default Hero