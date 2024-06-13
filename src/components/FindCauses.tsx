import '../styles/main.scss'

function FindCauses() {




  return(
    <section id='FindCauses' className='w-screen max-w-[1800px] h-full min-h-screen flex flex-wrap justify-center'>
      <div className='w-full h-16 bg-gray-600'>search</div>
      <div className='cause_card' onClick={()=>console.log("here i want to open the details")}>
        <div className="flex items-center justify-center w-full h-10 text-xl text-center bg-black ">Cause Name</div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' className='absolute bottom-0 left-0 rounded-md w-52 max-h-52' />






      <div className='absolute bottom-0 right-0 flex flex-wrap items-center justify-center w-48 h-16 rounded-tl-md'>
        <button className="font-bold text-black bg-white border-2 border-black rounded-md w-44 h-14 font-heading">VIEW</button>  
      </div>
      </div>




    </section>
  )
}
export default FindCauses