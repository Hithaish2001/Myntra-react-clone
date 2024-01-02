import { createSlice } from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchingDone: false,  //true:"DONE", false: "PENDING"
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (status)=> void(
             status.fetchingDone = true
        ),
        markFetchStart: (status)=>void(
            status.currentlyFetching = true
        ),
        markFetchEnd: (status)=>void(
             status.currentlyFetching = false
        )
    }
})

export const fetchStatusActions = fetchStatusSlice.actions

export default fetchStatusSlice