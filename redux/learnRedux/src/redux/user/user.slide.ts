import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// khởi tạo dữ liệu user
interface User {
    id: number,
    name: string,
    email: string,
}


export const fetchListUsers = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/fetchListUsers',
    // logic fetch api 
    async () => {
        const res =  await fetch('http://localhost:8000/users');
        const data = await res.json();
        return data;
    },
  )

// khởi tạo giá trị interface đầu vào truyền vào redux
  interface iUserPlayload {
  name : string,
  email: string
}
export const createNewUser = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/createNewUser',
    // logic fetch api 
    async (playload:iUserPlayload, thunkApi) => {
        const res =  await fetch('http://localhost:8000/users', {
          method: "POST",
          body: JSON.stringify({
            name : playload.name,
            email: playload.email
          }),
          headers: {
            "Content-Type":"application/json"
          }

        });
        const data = await res.json();
        if(data && data.id ) {
          thunkApi.dispatch(fetchListUsers())
        }
        console.log("data dc truyền từ view to redux", data);
        return data;
    },
  )
  interface iEditUserPlayload {
    id: any;
    name : string,
    email: string
  }
  export const updateAUser = createAsyncThunk(
      // đơn giản là tên hiện thị trong redux tookit =)) 
      'users/updateAUser',
      // logic fetch api 
      async (playload:iEditUserPlayload, thunkApi) => {
          console.log(">>>playload data", playload);
          const res =  await fetch(`http://localhost:8000/users/${playload.id}`, {
            method: "PUT",
            body: JSON.stringify({
              name : playload.name,
              email: playload.email
            }),
            headers: {
              "Content-Type":"application/json"
            }
  
          });
          const data = await res.json();
          if(data && data.id ) {
            thunkApi.dispatch(fetchListUsers())
          }
          console.log("data dc truyền từ view to redux", data);
          return data;
      },
    )

  // Define a type for the slice state
interface CounterState {
  listUsers: Array<User>,
  isCreateSuccess: boolean
  isUpdateSuccess: boolean;
}
// Define the initial state using that type
const initialState: CounterState = {
  listUsers: [],
  isCreateSuccess: false,
  isUpdateSuccess: false
}

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetCreate: (state) => {
      state.isCreateSuccess = false;
    },
    resetUpdate(state) {
      state.isUpdateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("check action" , action);
      state.listUsers = action.payload;
    }),
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("check action" , action);
      state.isCreateSuccess = true;
    }),
    builder.addCase(updateAUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("check action" , action);
      state.isUpdateSuccess = true;
    })
    },
})

export const {resetCreate,resetUpdate} = userSlide.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlide.reducer