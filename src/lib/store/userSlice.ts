// app/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./userThunks";

type UserInterface = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
};

type UsersApiReturn = {
  billings: UserInterface[];
  totalPages: number;
  totalCount: number;
};

type UsersState = {
  users: UserInterface[];
  totalPages: number;
  totalCount: number;
  loading: boolean;
  error: object;
};

const initialState: UsersState = {
  users: [],
  totalPages: 0,
  totalCount: 0,
  loading: false,
  error: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UsersApiReturn>) => {
        state.users = action.payload.billings;
        state.totalPages = action.payload.totalPages;
        state.totalCount = action.payload.totalCount;
        state.loading = false;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
