function ProgressBar ({progress}: {progress: number}) {

// once progress reaches 95%+ progress bar will change color


  const parentDiv = {
    height: '4px',
    width: '100%',
    backgroundColor: 'grey',
  }

  const childDiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: progress >= 95 ?'#33ff33': progress <= 15 ? 'red': progress >= 16 && progress <=25? 'yellow':'green',
    borderRadius: 40
  }



  return (
    <div style={parentDiv} className='absolute bottom-0 z-10 w-full'>
      <div style={childDiv} className='ani-load'>
      </div>
    </div>
  )
}

export default ProgressBar