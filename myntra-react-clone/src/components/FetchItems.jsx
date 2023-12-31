import React from 'react'
import { useSelector } from "react-redux";

const FetchItems = () => {
    const FetchStatus = useSelector(store => store.fetchStatus)

    useEffect(() => {
      if(FetchStatus.fetchingDone) return;
      
      const controller = new AbortController()
      const signal = controller.signal

      fetch().then()
    
      return () => {
        controller.abort()
      }
    }, [FetchStatus])
    

  return (
    <>
        <div>
            Fetch Status :{FetchStatus.fetchingDone}
            Current Fetch Status :{FetchStatus.currentlyFetching}
        </div>
    </>
  )
}

export default FetchItems