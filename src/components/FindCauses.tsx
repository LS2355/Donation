import tempData from '../data/tempData.js'
// import CauseCards from './subcomponents/CauseCards.tsx'
import '../styles/main.scss'
import { useEffect, useState } from 'react';

function FindCauses() {

  const [currentCause, setCurrentCause] = useState<number>(1)

  function pers (val1, val2) { //it would be better to do this calc everytime that the raised amount has increased but for now this works to save computation over memory
    return `${(val1/val2).toFixed(2)}%`
  }
  

console.log(tempData)

  return(
    <section id='FindCauses' className='w-screen max-w-[1800px] h-full min-h-screen flex flex-wrap justify-center'>
      <div className='flex justify-center w-full h-[60px]'>
        <div className='mt-32 search-bar'>
          <div className='flex flex-wrap items-center justify-center w-1/6 hover:bg-black font-kod'>catagories</div>
          <div className='w-4/6 border-x'></div>  
          <div className='flex flex-wrap items-center justify-center w-1/6 hover:bg-black font-kod'>Other</div>
        </div>  
      </div>
      
      <div className='w-full h-[80vh] flex justify-center mx-6 mt-40'>
        <div className='flex-col flex-wrap h-full'>
          <div className='bg-black w-52 h-52'><div className='pb'><div className={`w-[${/*here i will put the complete persentage which will already be stored in the data*/}%] pbVal`}></div></div></div>
        

          {/* <CauseCards
          causeTitle = {tempData[currentCause].name}
          amountRaised = {tempData[currentCause].amountRaised}
          goal = {tempData[currentCause].goal}
          id = {tempData[currentCause].id}
          causeImg = {tempData[currentCause].img}
          setCurrentCause = {setCurrentCause}
          /> */}
        </div>
        <div className='h-full'></div>
        <div className='h-full'></div>

        

      </div>










    </section>
  )
}
export default FindCauses