import {
  createAsyncThunk,
  createSlice,
  combineReducers,
} from "@reduxjs/toolkit";
import { dataSlice } from "./getuser.slice";
import AuthService, { API } from "@/service/service.user";
import {
  Data,
  Users,
  Login,
  Add,
  Register,
  LoginCredentials,
  AuthState,
} from "@/interface/interface";
import { per_Page_Slice } from "./getPerPage";
import { registerSlice } from "./register.slice";
import { productSlice } from "./getproduct";
import { getOnlyProduct, only_productSlice } from "./getonlyproduct.slice";
import { getCarts } from "./getcart";

const authService = new AuthService();
// const initialState: Users = {
//   page: 0,
//   per_page: 0,
//   total: 0,
//   total_pages: 0,
//   data: [],
//   length: 0,
//   token: {
//     token: {
//       token: "",
//     },
//   },
//   information: {
//     email: "",
//     password: "",
//   },
// };

// export const getUsersSort = createAsyncThunk(
//   "get_users_sort",
//   async (id: number, thunkAPI) => {
//     const response = await API.get<Users>(`/users?page=${id}`);
//     response.data.data.sort((a: Data, b: Data) => {
//       return b.id - a.id;
//     });
//     return response.data.data;
//   }
// );

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

// export const loginUser = createAsyncThunk<void, LoginCredentials>(
//   "auth/loginUser",
//   async (credentials, thunkAPI) => {
//     try {
//       // Gọi phương thức login từ AuthService
//       const token = await authService.login(credentials);

//       // Lưu trạng thái đăng nhập trong Redux hoặc thực hiện các tác vụ khác cần thiết
//       thunkAPI.dispatch(authSlices.actions.loginSuccess(token));
//     } catch (error) {
//       thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const authSlices = createSlice({
//   name: "auth",
//   initialState: { isAuthenticated: false, token: null },
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.token = action.payload;
//     },
//     // Các reducer khác của authSlice
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.pending, (state) => {
//       // Xử lý trạng thái loading hoặc các tác vụ trước khi đăng nhập (nếu cần thiết)
//     });
//     builder.addCase(loginUser.rejected, (state, action) => {
//       // Xử lý lỗi nếu cần thiết
//     });
//   },
// });

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (body: Register) => {
//     try {
//       const response = await API.post("/register", body);
//       return response.data;
//     } catch (error: any) {
//       throw new Error(error.response.data.message);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk<void, void>(
//   "auth/logoutUser",
//   async (_, thunkAPI) => {
//     try {
//       authService.logout(); // authService là một service xử lý việc đăng nhậ
//       thunkAPI.dispatch(authSlice.actions.logoutSuccess());
//     } catch (error) {
//       thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // const blogSlice = createSlice({
// //   name: "contact",
// //   initialState,
// //   reducers: {},

// //   extraReducers(builder) {
// //     builder
// //       .addCase(getUsers.fulfilled, (state, action) => {
// //         state.data = action.payload;
// //       })
// //       .addCase(getPerPage.fulfilled, (state, action) => {
// //         state.total_pages = action.payload;
// //       })
// //       .addCase(getUsersSort.fulfilled, (state, action) => {
// //         state.data = action.payload;
// //       })
// //       .addCase(loginUser.fulfilled, (state, action) => {
// //         state.token.token = action.payload;
// //         state.information.email = "eve.holt@reqres.in";
// //       })
// //       .addCase(deleteUsers.fulfilled, (state, action) => {
// //         const postId = action.meta.arg;

// //         state.data = state.data.filter((post) => post.id !== postId);
// //       })
// //       .addCase(addUser.fulfilled, (state, action) => {
// //         state.data.push(action.payload);
// //       });
// //     // .addCase(getContact.rejected, (state, action) => {})
// //     // .addCase(addContact.fulfilled, (state, action) => {
// //     //   state.postList.push(action.payload);
// //     // })
// //     // .addCase(addContact.rejected, (state, action) => {
// //     //   console.log(state, "hihi");
// //     // })
// //     // .addCase(getContactToPut.fulfilled, (state, action) => {
// //     //   state.user = action.payload;
// //     //   state.isEdit = true;
// //     // })
// //     // .addCase(updateContact.fulfilled, (state, action) => {
// //     //   state.postList.find((post, index) => {
// //     //     if (post.id === action.payload.id) {
// //     //       state.postList[index] = action.payload;
// //     //       return true;
// //     //     }
// //     //     return false;
// //     //   });
// //     // })
// //     // .addCase(deletePost.fulfilled, (state, action) => {
// //     //   const postId = action.meta.arg;

// //     //   state.postList = state.postList.filter((post) => post.id !== postId);
// //     // })

// //     // .addDefaultCase((state, action) => {
// //     //   console.log(`action type: ${action.type}`, current(state));
// //     // });
// //   },
// // });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isAuthenticated: false },
//   reducers: {
//     logoutSuccess: (state) => {
//       state.isAuthenticated = false;
//     },
//     // Các reducer khác của authSlice
//   },
//   extraReducers: (builder) => {
//     builder.addCase(logoutUser.pending, (state) => {
//       // Xử lý trạng thái loading hoặc các tác vụ trước khi đăng xuất (nếu cần thiết)
//     });
//     builder.addCase(logoutUser.rejected, (state, action) => {
//       // Xử lý lỗi nếu cần thiết
//     });
//   },
// });

// const blogReducer = blogSlice.reducer;

// export default blogReducer;

const initialState: AuthState = {
  isAuthenticated: false,
  token: {
    token: {
      token: null,
    },
  },
};

export const loginUser = createAsyncThunk<void, LoginCredentials>(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const token = await authService.login(credentials);
      thunkAPI.dispatch(authSlice.actions.loginSuccess(token));
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk<void, void>(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await authService.logout();

      thunkAPI.dispatch(authSlice.actions.logoutSuccess());
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk(
  "get/getUser",
  async (id: number, thunkAPI) => {
    const response = await API.get<Users>(`/users?page=${id}`);
    return response.data.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.token.token.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isAuthenticated = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {});
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      // state.token.token.token = null;
    });
  },
});

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  get: dataSlice.reducer,
  getpage: per_Page_Slice.reducer,
  register: registerSlice.reducer,
  getproduct: productSlice.reducer,
  getonlyproduct: only_productSlice.reducer,
  getcart: getCarts,
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default rootReducer;
