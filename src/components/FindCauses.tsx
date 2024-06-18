import tempData from '../data/tempData.js'
import CauseCards from './subcomponents/CauseCards.tsx'
import '../styles/main.scss'
import { useEffect, useState } from 'react';

function FindCauses() {

  const [currentCause, setCurrentCause] = useState<number>(0)
  const [causeData, setCauseData] = useState<object>(tempData)

  // useEffect(()=>{
    // getTheCardData()
  // })

  //  async function getTheCardData  () {
  //   try{
  //     const data = await tempData
  //     setCauseData(data)
  //   }
  //   catch(err){
  //     console.error("error fetching data: ", err)
  //   }
  //   }


//we will go off the screen size to see how many causes information we need 


//on page load i want to get that data and sent it straight to the CauseCards element






console.log(causeData)

  return(
    <section id='FindCauses' className='w-screen max-w-[1800px] h-full min-h-screen flex flex-wrap justify-center'>
      <div className='flex justify-center w-full h-[60px]'>
        <div className='mt-32 search-bar'>
          <div className='flex flex-wrap items-center justify-center w-1/6 hover:bg-black font-kod'>catagories</div>
          <div className='w-4/6 border-x'></div>  
          <div className='flex flex-wrap items-center justify-center w-1/6 hover:bg-black font-kod'>Other</div>
        </div>  
      </div>
      
      <div className='w-full min-h-[80vh] sm:100% flex justify-center mx-6 mt-40'>
          <CauseCards causesData={causeData}/>
      </div>










    </section>
  )
}
export default FindCauses