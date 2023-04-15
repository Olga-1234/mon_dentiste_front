

/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../config/index"
export const loginAsync = createAsyncThunk(
  "loginAsync/fetch",

  async (data) => {
    const token=localStorage.getItem("token");
    // localStorage.setItem("token", token.acces_token);


      console.log("le token", data)
    try {
     const response = await axios.post(
      `${config.api}/auth/signIn`,
      data, { headers: {"Authorization" : `Bearer ${token}`}}
    )

return response

    } catch (error) {
      console.log(
        " erreur avec le mot de passe : ",
        error
      );
    }
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    Login: [],
    login : {},
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
      try {
        state.Login = [];
        state.Login.push(payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });



    builder.addCase(loginAsync.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(loginAsync.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default loginSlice.reducer;


// const onSubmit = async (data) => {
//     try {
//       const token = await await (
//         await axios.post("http://localhost:3001/utilisateur/login", data)
//       ).data;

//       console.log("les users", token.acces_token);

//       localStorage.setItem("token", token.acces_token);

//       console.log("les information du login", data);

//       if (token) {
//         history.push("/dashboard");
//       }
//       console.log("la suite des data", data);
//     } catch (error) {
//       console.log(" erreur mauvais mot de passe : ", error);
//     }
//   };
