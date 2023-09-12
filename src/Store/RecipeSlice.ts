import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface recipeData {
  recipeData: Array<any>;
}

const initialState: recipeData = {
  recipeData: [],
};

export const getRecipeByIngridents = createAsyncThunk(
  "recipe/fetchRecipeByIngrident",
  async (payload: any) => {
    let ingridentUrl =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=3c648243&app_key=cf1978e920d1219b7716f49e7854ffb5&tag=";

    // console.log(":::::x ",payload.ingridentString.length)
    // console.log()

    if (payload.ingridentString.length == 0) ingridentUrl += "potato";
    else ingridentUrl += payload.ingridentString;

    // console.log("{}{}GHJKGJ{}{}{}",payload.ingridentList.length)

    const data = await axios.get(ingridentUrl);
    console.log("76890", data);
    return data;
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeByIngridents.fulfilled, (state, action) => {
      state.recipeData = action.payload.data.hits;
    });
  },
});

export default recipeSlice.reducer;
