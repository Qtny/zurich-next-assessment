import { fetchAllUsers } from "@/lib/server/users";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (page: number) => {
        return await fetchAllUsers(page, 5);
    }
)