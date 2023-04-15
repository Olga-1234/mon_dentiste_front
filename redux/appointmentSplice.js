/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from '../config/index';

import axios from "axios";
export const fetchAppointment = createAsyncThunk("Appointment/fetch", async () => {
  
  try {
  

     const id = localStorage.getItem("id");

     console.log(" l id dans le splice", id);
     console.log("localstorage", localStorage.getItem('id'));
    

    const response = await axios.get(
      `${config.api}/appointment/user/${id} `,     {
        headers: {
            'x-access-token': `${localStorage.getItem('token')}`
        }
    }
    );
    console.log("la reponse", response);

    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});



const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppointment.fulfilled, (state, { payload }) => {
      try {
        state.appointments = [];
        state.appointments.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });

    builder.addCase(fetchAppointment.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchAppointment.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default appointmentSlice.reducer;
