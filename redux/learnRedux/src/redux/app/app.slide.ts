import {  createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


  // Define a type for the slice state
interface app {
  mode: string
}
// Define the initial state using that type
const initialState: app = {
  mode: 'light'
}

export const appSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeMode: (state,action) =>{
      state.mode = action.payload;
    }
    

  },
  
})

export const {changeMode} = appSlide.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default appSlide.reducer