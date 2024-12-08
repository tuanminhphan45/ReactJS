import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// khởi tạo dữ liệu blog
interface blog {
    id: number,
    title: string,
    author: string,
    content: string
}


export const fetchListBlogs = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/fetchListBlogs',
    // logic fetch api 
    async () => {
        const res =  await fetch('http://localhost:8000/blogs');
        const data = await res.json();
        return data;
    },
  )

// khởi tạo giá trị interface đầu vào truyền vào redux
  interface iBlogPlayload {
    title: string,
    author: string,
    content: string
}
export const createNewBlog = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/createNewBlog',
    // logic fetch api 
    async (playload:iBlogPlayload, thunkApi) => {
        const res =  await fetch('http://localhost:8000/blogs', {
          method: "POST",
          body: JSON.stringify({
            title : playload.title,
            author: playload.author,
            content: playload.content
          }),
          headers: {
            "Content-Type":"application/json"
          }

        });
        const data = await res.json();
        if(data && data.id ) {
          thunkApi.dispatch(fetchListBlogs())
        }
        console.log("data dc truyền từ view to redux", data);
        return data;
    },
  )
 
  export const updateAUser = createAsyncThunk(
      // đơn giản là tên hiện thị trong redux tookit =)) 
      'users/updateABlog',
      // logic fetch api 
      async (playload:blog, thunkApi) => {
          console.log(">>>playload data", playload);
          const res =  await fetch(`http://localhost:8000/blogs/${playload.id}`, {
            method: "PUT",
            body: JSON.stringify({
              title: playload.title,
              author: playload.author,
              content: playload.content
            }),
            headers: {
              "Content-Type":"application/json"
            }
  
          });
          const data = await res.json();
          if(data && data.id ) {
            thunkApi.dispatch(fetchListBlogs())
          }
          // console.log("data dc truyền từ view to redux", data);
          return data;
      },
    )

  export const deleteABlog = createAsyncThunk(
    // đơn giản là tên hiện thị trong redux tookit =)) 
    'users/deleteAUser',
    // logic fetch api 
    async (playload:any, thunkApi) => {
        // console.log(">>>playload data", playload);
        await fetch(`http://localhost:8000/blogs/${playload.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type":"application/json"
          }

        });
        thunkApi.dispatch(fetchListBlogs())

    },
  )
  // Define a type for the slice state
interface CounterState {
  listBlogs: Array<blog>,
  isCreateSuccess: boolean
  isUpdateSuccess: boolean;
  isDeleteSuccess: boolean;
}
// Define the initial state using that type
const initialState: CounterState = {
    listBlogs: [],
  isCreateSuccess: false,
  isUpdateSuccess: false,
  isDeleteSuccess:false
}

export const blogSlide = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    resetCreate: (state) => {
      state.isCreateSuccess = false;
    },
    resetDelete: (state) => {
        state.isDeleteSuccess = false;
    }
    

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchListBlogs.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("check action" , action);
      state.listBlogs = action.payload;
    }),
    builder.addCase(createNewBlog.fulfilled, (state, action) => {
        // Add user to the state array
        console.log("check action" , action);
        state.isCreateSuccess = false;
      })
    builder.addCase(deleteABlog.fulfilled, (state, action) => {
        // Add user to the state array
        console.log("check action" , action);
        state.isDeleteSuccess = false;
      })
    },
})

export const {resetCreate,resetDelete} = blogSlide.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default blogSlide.reducer