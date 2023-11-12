import { createSlice} from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
    name:"Categories",
    initialState: ["Phones", "Tablets", "Laptops", "TVs"],
    reducers: {}
})

export default CategoriesSlice.reducer