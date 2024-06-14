import { useEffect, useState} from "react";
import { CauseCardsInterface } from "./interfaces";

function CauseCards ({causeTitle, amountRaised, goal, id, causeImg, setCurrentCause}: CauseCardsInterface) {
  
  const smallCard = (
    <div>
      <div className='mx-6 mt-12 mb-4 w-52 h-52 cause_card'>
        
        <div id={myCause} className='absolute bottom-0 z-10'></div> {/* progress bar */}
        <div className='text-2xl cause_card_pop'>
          {amountRaised}
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <h1 className='text-lg w-52 cause_card_title'>{causeTitle}</h1>
      </div>
    </div>
  )

return(
  <>
  {smallCard}
  </>
)



}

export default CauseCards;