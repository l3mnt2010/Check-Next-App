import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import API from "@/pages/api/api";
import { Data, Users, Login, Add, Register } from "@/interface/interface";
const initialState: Users = {
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: [],
  length: 0,
  token: {
    token: {
      token: "",
    },
  },
  information: {
    email: "",
    password: "",
  },
};

export const getUsers = createAsyncThunk(
  "get_users",
  async (id: number, thunkAPI) => {
    const response = await API.get<Users>(`/users?page=${id}`);
    return response.data.data;
  }
);
export const getPerPage = createAsyncThunk(
  "get_PerPage",
  async (id: number, thunkAPI) => {
    const response = await API.get<Users>(`/users?page=${id}`);
    return response.data.total_pages;
  }
);
export const getUsersSort = createAsyncThunk(
  "get_users_sort",
  async (id: number, thunkAPI) => {
    const response = await API.get<Users>(`/users?page=${id}`);
    response.data.data.sort((a: Data, b: Data) => {
      return b.id - a.id;
    });
    return response.data.data;
  }
);

export const addUser = createAsyncThunk(
  "blog/addUser",
  async (body: Add, thunkAPI) => {
    try {
      const response = await API.post<Data>("/user", body);
      return response.data;
    } catch (error: any) {
      if (error.name === "AxiosError") {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", async (body: Login) => {
  try {
    const response = await API.post("/login", body);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (body: Register) => {
    try {
      const response = await API.post("/register", body);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  return null;
});
export const deleteUsers = createAsyncThunk(
  "deleteUser",
  async (postId: number, thunkAPI) => {
    const response = await API.delete<Users>(`/users?page=1/${postId}`, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
const blogSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getPerPage.fulfilled, (state, action) => {
        state.total_pages = action.payload;
      })
      .addCase(getUsersSort.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token.token = action.payload;
        state.information.email = "eve.holt@reqres.in";
      })
      .addCase(logOut.fulfilled, (state) => {
        {
          state.token.token.token = "";
        }
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        const postId = action.meta.arg;

        state.data = state.data.filter((post) => post.id !== postId);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
    // .addCase(getContact.rejected, (state, action) => {})
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.postList.push(action.payload);
    // })
    // .addCase(addContact.rejected, (state, action) => {
    //   console.log(state, "hihi");
    // })
    // .addCase(getContactToPut.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isEdit = true;
    // })
    // .addCase(updateContact.fulfilled, (state, action) => {
    //   state.postList.find((post, index) => {
    //     if (post.id === action.payload.id) {
    //       state.postList[index] = action.payload;
    //       return true;
    //     }
    //     return false;
    //   });
    // })
    // .addCase(deletePost.fulfilled, (state, action) => {
    //   const postId = action.meta.arg;

    //   state.postList = state.postList.filter((post) => post.id !== postId);
    // })

    // .addDefaultCase((state, action) => {
    //   console.log(`action type: ${action.type}`, current(state));
    // });
  },
});

const blogReducer = blogSlice.reducer;

export default blogReducer;
