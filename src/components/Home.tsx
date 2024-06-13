import Hero from "./Hero"

import '../styles/index.css'
function HomePage() {
  const compPersentage = 30;
  const donoPersentage = 70;

  
  return (
    <div className="max-w-[1400px]">
      <Hero/>
      
      <div className="flex flex-wrap w-full px-6 py-5 my-20">
        <div className="Home_section-title w-2/6 flex flex-wrap align-middle justify-center h-auto max-h-[600px] px-2 py-1">
          <h1 className="text-3xl">What we Do</h1>
        </div>
        <div className="w-4/6 px-2 py-1 Home_section-content flex flex-wrap align-middle justify-center h-auto max-h-[600px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis debitis omnis libero error nostrum illo mollitia ea cupiditate tenetur! 
        </div>
      </div>

      <div className="flex flex-wrap w-full px-6 py-5 my-20">
        <div className="w-4/6 px-2 py-1 Home_section-content flex flex-wrap align-middle justify-center h-auto max-h-[600px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis debitis omnis libero error nostrum illo mollitia ea cupiditate tenetur! 
        </div>
        <div className="Home_section-title w-2/6 flex flex-wrap align-middle justify-center h-auto max-h-[600px] px-2 py-1">
          <h1 className="text-3xl">How it works</h1>
        </div>        
      </div>

      <div className="w-full max-w-[1200px] flex flex-wrap justify-center mt-24 mb-20">
        <div className="flex justify-center w-full"><h1 className="text-4xl text-center">Money Distrabution</h1></div>
        <div className="flex flex-wrap items-center justify-center w-2/5 px-2 py-3 mt-20">
          <div className="w-full h-24 border border-white rounded-md">
            <div className="flex flex-wrap w-full h-1/2">
              <div className="grid w-4/5 h-full text-2xl border-r border-white place-content-center">Goes to Cause</div> 
              <div className="grid w-1/5 h-full text-2xl text-center place-content-center">{donoPersentage} %</div> 
            </div>  
            <div className="flex flex-wrap w-full border-t h-1/2">
              <div className="grid w-4/5 h-full text-2xl border-r border-white place-content-center">DoNation</div> 
              <div className="grid w-1/5 h-full text-2xl text-center place-content-center">{compPersentage} %</div> 
            </div>  
          </div>
        
        </div>
        <div className="flex flex-wrap justify-center w-3/5 px-2 py-3 pl-12 mt-20 text-xl align-middle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae expedita excepturi consectetur totam iure similique, aspernatur ipsam ipsa quibusdam, illo magnam minus voluptatem, repellat ducimus nisi! Recusandae molestiae explicabo quod similique, ut rem? Ipsa voluptatem cupiditate numquam mollitia impedit, inventore molestias, consequuntur sit pariatur repudiandae dolore aliquam ab minima. </div>
      </div>
    </div>
  )
}

export default HomePage