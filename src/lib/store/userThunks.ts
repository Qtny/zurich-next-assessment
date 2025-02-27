import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (page: number) => {
        const response = await axios.get(`http://localhost:3001/billing?page=${page}`);
        if (response.status === 200) {
            console.log("something")
            return response.data.data;
        }
    }
)