import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// khởi tạo dữ liệu user
interface User {
    id: number,
    name: string,
    email: string,
}
// Define a type for the slice state
interface CounterState {
    listUsers: Array<User>
}

export const fetchListUser = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/fetchListUser',
    // logic fetch api 
    async (userId, thunkAPI) => {
        const res =  await fetch('http://localhost:8000/users');
        const data = await res.json();
        return data;
    },
  )

// Define the initial state using that type
const initialState: CounterState = {
  listUsers: [],
}

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("check action" , action);
    })
    },
})

export const {  } = userSlide.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlide.reducer