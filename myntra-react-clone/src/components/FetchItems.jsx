import React from 'react'
import { useSelector } from "react-redux";

const FetchItems = () => {
    const FetchStatus = useSelector(store => store.fetchStatus)
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