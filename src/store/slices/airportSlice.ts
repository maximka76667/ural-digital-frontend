import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport } from "../../models/models";

interface AirportState {
  airports: IAirport[],
  loading: boolean,
  error: string,
}

const initialState: AirportState = {
  airports: [],
  loading: false,
  error: "",
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirports: (state) => {
      state.loading = true;
      state.error = "";
    },
    getAirportsSuccess: (state, action: PayloadAction<IAirport[]>) => {
      state.airports = action.payload;
      state.loading = false;
      state.error = "";
    },
    getAirportsFailure: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message
    }
  }
});

export default airportSlice.reducer;
