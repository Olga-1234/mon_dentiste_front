/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from '../config/index';

import axios from "axios";
export const fetchAppointmentCabinet = createAsyncThunk("Appointment/fetch", async () => {
  
  try {
    // const token = await (await axios.post(`${config.api}/auth/signIn`, data)).data;


    // console.log('les token', token.accessToken);
    // console.log('les id', token.roles);
    // console.log('dans le bon', token.id);

     const idCabinet = parseInt(localStorage.getItem("cabinets"));
      
    

    const response = await axios.get(
      `${config.api}/appointment/cabinet/${idCabinet}`,     {
        headers: {
            'x-access-token': `${localStorage.getItem('token')}`
        }
    }
    );
    console.log("la reponse est ok", response);

    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});



const appointmentCabinetSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppointmentCabinet.fulfilled, (state, { payload }) => {
      try {
        state.appointments = [];
        state.appointments.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });

    builder.addCase(fetchAppointmentCabinet.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchAppointmentCabinet.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default appointmentCabinetSlice.reducer;
