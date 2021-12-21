import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectionTypeEnum } from "../../enums/TypeEnums";

interface iInitialState {
  selectedType: selectionTypeEnum | "";
}

const initialState: iInitialState = {
  selectedType: "",
};

export const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<selectionTypeEnum>) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setSelectedType } = singlePlayerSlice.actions;

export const singlePlayerSliceReducer = singlePlayerSlice.reducer;
