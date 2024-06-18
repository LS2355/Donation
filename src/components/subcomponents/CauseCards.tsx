import { useEffect, useState} from "react";
import { CauseCardsInterface } from "./interfaces";
import ProgressBar from "./progressBar";
import up_arrow from "../../assets/up_arrow.svg"

function CauseCards ({causesData}: {causesData: object}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) //need to add an event listener for when this changes
  let causeDataIdx = 0;
  const causeCardLayout = []


useEffect(()=>{
  window.addEventListener('resize', ()=>{setWindowWidth(window.innerWidth); console.log(windowWidth)})
})


//here we need to fetch the data
//when fetching data we will fetch complete random id's 
//im going to go of off the screen size not the window size because if someone makes the screen smaller i don't want unnessisary api calls





  const smallCardSize = 'mx-6 mt-12 mb-4 w-52 h-52 cause_card cursor-pointer'
  const mediumCardSize = 'mx-6 mt-12 mb-4 w-[410px] h-[205px] cause_card cursor-pointer'
  const largeCardSize = 'mx-6 mt-12 mb-4 w-[410px] h-[410px] cause_card cursor-pointer'

  




  const buildCard = (cardSize, causeTitle, amountRaised, progressPersentage, key)=> (
    <div key={key} className="flex flex-wrap justify-center w-full">
      <div className={cardSize} onClick={()=>console.log("click")} >
        
        <ProgressBar progress={progressPersentage}/>
        <div className='mr-2 text-2xl cause_card_pop '>
          <img src={up_arrow} className="w-5 h-4 mr-2" />
          {amountRaised}
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <h1 className='text-lg w-52 cause_card_title'>{causeTitle}</h1>
      </div>
    </div>
  )


//I can definatly make all this code into one function but for now it works so i will work on that later
  //if screen size is small we will do 6 small cards
  //if screen size is medium we will do 2 small cards 2 medium cards
  //if screen size is large we will do 1 big card 2 small cards 2 medium cards
  if (windowWidth < 429){
    //generate 6 small
    const childEl = []
    for(let i = 0; i < 5; i++){
      const causeDataCache = causesData[causeDataIdx]
      childEl.push(buildCard(smallCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }
    const el = (<div className="flex flex-col flex-wrap w-full h-full">{childEl}</div>)
    causeCardLayout.push(el)

  }
  else if (windowWidth < 699){
    //generate 4 medium 
    const childEl = []
    for(let i = 0; i < 4; i++){
      const causeDataCache = causesData[causeDataIdx]
      childEl.push(buildCard(mediumCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }
    const el = (<div className="flex flex-col flex-wrap justify-center w-full h-full">{childEl}</div>)
    causeCardLayout.push(el)
  }
  else if (windowWidth < 935){
    //generate 2 small 2 medium
    const smChildEl = []
    const mdChildEl = [];
    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      smChildEl.push(buildCard(smallCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      mdChildEl.push(buildCard(mediumCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))      
      causeDataIdx++
    }
    const el = (
      <>
        <div className="flex flex-col flex-wrap h-full">{smChildEl}</div>
        <div className="flex flex-col flex-wrap h-full">{mdChildEl}</div>
      </>
    )
    causeCardLayout.push(el)
  }
  else if (windowWidth < 1145){
    //generate 2 small 2 medium
    const smChildElLeft = [];
    const smChildElRight = [];
    const lgChildEl = []
    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      smChildElLeft.push(buildCard(smallCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    for(let i = 0; i < 1; i++){
      const causeDataCache = causesData[causeDataIdx]
      lgChildEl.push(buildCard(largeCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      smChildElRight.push(buildCard(smallCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    const el = (
      <>
        <div className="flex flex-col flex-wrap h-full">{smChildElLeft}</div>
        <div className="flex flex-wrap h-full">{lgChildEl}</div>
        <div className="flex flex-col flex-wrap h-full">{smChildElRight}</div>
      </>
    )
    causeCardLayout.push(el)
  }
  else {
    //generate 2 small 1 large 2 medium
    const smChildEl = []
    const mdChildEl = []
    const lgChildEl = []
    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      smChildEl.push(buildCard(smallCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    for(let i = 0; i < 1; i++){
      const causeDataCache = causesData[causeDataIdx]
      lgChildEl.push(buildCard(largeCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }

    for(let i = 0; i < 2; i++){
      const causeDataCache = causesData[causeDataIdx]
      mdChildEl.push(buildCard(mediumCardSize, causeDataCache.title, causeDataCache.amountRaised, causeDataCache.progressPersentage, causeDataIdx ))
      causeDataIdx++
    }
    const el =(
      <>
        <div className="flex flex-col flex-wrap h-full">{smChildEl}</div>
        <div className="flex flex-wrap h-full">{lgChildEl}</div>
        <div className="flex flex-col flex-wrap h-full">{mdChildEl}</div>
      </>
    )
    causeCardLayout.push(el)
  }



  return(causeCardLayout)
}

export default CauseCards;