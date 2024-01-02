import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from '../store/ItemSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const FetchItems = () => {
    const FetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch();

    useEffect(() => {
      if(FetchStatus.fetchingDone) return;

      const controller = new AbortController()
      const signal = controller.signal

      dispatch(fetchStatusActions.markFetchStart())
      fetch("http://localhost:8080/items",{ signal })
      .then((res)=> res.json())
      .then(({items})=>{
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.markFetchEnd())
        dispatch(itemActions.addInitialItems(items[0]))
      })
    
      return () => {
        controller.abort()
      }
    }, [FetchStatus])
    

  return (
    <></>
  )
}

export default FetchItems