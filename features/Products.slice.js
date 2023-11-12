import { createSlice } from "@reduxjs/toolkit"
import data from "../app/Data";

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        data: data,
        filteredData: data,
        filterDetails: { brands: [], colors: [], ratings: [] }
    },
    reducers: {
        filterByColor: (state, { payload }) => {
            state.filterDetails.colors = payload;
            state.filteredData = updateState(state.filterDetails)
            return state;
        },
        filterByBrand: (state, { payload }) => {
            state.filterDetails.brands = payload;
            state.filteredData = updateState(state.filterDetails)
            return state;
        },
        filterByRating: (state, { payload }) => {
            state.filterDetails.ratings = payload;
            state.filteredData = updateState(state.filterDetails)
            return state;
        },
        clearFilteres: ({data,filteredData,filterDetails}) => {
            [filteredData, filterDetails] = [data,{ brands: [], colors: [], ratings: [] }]
            return {data,filteredData,filterDetails};
        }
    },
})

function updateState(filterDetails) {
    return data.filter(elm => {
        return !filterDetails.colors.find(el => !elm.prodColors.includes(el))
            && !(!filterDetails.brands.includes(elm.prodBrand) && filterDetails.brands.length > 0)
            && !(!filterDetails.ratings.includes(elm.prodRating) && filterDetails.ratings.length > 0);
    })
}

export const { filterByColor, filterByBrand, filterByRating, clearFilteres } = ProductsSlice.actions
export default ProductsSlice.reducer;