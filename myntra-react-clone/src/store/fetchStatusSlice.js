import { createSlice } from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchingDone: false,  //true:"DONE", false: "PENDING"
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (status)=>{
            return status.fetchingDone = true
        },
        markFetchStart: (status)=>{
            return status.currentlyFetching = true
        },
        markFetchEnd: (status)=>{
            return status.currentlyFetching = false
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions

export default fetchStatusSlice