/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config/index"
export const fetchCabinet = createAsyncThunk("Cabinet/fetch", async () => {
  try {
    // https://git.heroku.com/mon-dentiste.git
    // http://localhost:7000/api/article
    // https://git.heroku.com/mon-dentiste.git/api/article
    const response = await axios.get(
      `${config.api}/cabinet`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const cabinetSlice = createSlice({
  name: "cabinets",
  initialState: {
    cabinets: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCabinet.fulfilled, (state, { payload }) => {
      try {
        state.cabinets = [];
        state.cabinets.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });

    builder.addCase(fetchCabinet.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchCabinet.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default cabinetSlice.reducer;
