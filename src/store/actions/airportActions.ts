import { AppDispatch } from "..";
import axios from "../../axios/axios";
import { IAirport, ServerResponse } from "../../models/models";
import { airportSlice } from "../slices/airportSlice";

export const getAirports = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(airportSlice.actions.getAirports());
      const response = await axios.get<ServerResponse<IAirport>>("airports");
      dispatch(airportSlice.actions.getAirportsSuccess(response.data.results));
    } catch (error) {
      dispatch(airportSlice.actions.getAirportsFailure(error as Error));
    }
  }
}