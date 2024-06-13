import { useEffect} from "react";

function DetectClickOutsideComponent(ref:React.MutableRefObject<HTMLDivElement | undefined>, state: React.Dispatch<React.SetStateAction<boolean>>) {

  useEffect(()=>{
    
    function handleClickOutside (event) {
      console.log(event)
      if (ref.current && !ref.current.contains(event.target)) {
        //what i want to happen when clicked outside ref
        state(false)
      }
    }
    //bind the event Listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      //unbind the event listener to clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
    
  },[ref])
}

export default DetectClickOutsideComponent