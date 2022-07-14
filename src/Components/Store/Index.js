const { createSlice, configureStore, current } = require("@reduxjs/toolkit")

const InitialState = {
    movies:'',
    selectedMovie:''
}
const MovieSlice = createSlice({
    name: "Movie",
    initialState: InitialState,
    reducers : {
        MovieDetail : (state, action) => {
            state.movies= action.payload
            console.log("action",action.payload)
            
        },
        Movieselected : (state, action) => {
            state.selectedMovie= action.payload
            console.log("action",action.payload)
            
        }
       
        

    }
})
const store = configureStore({
    reducer:{
        movie: MovieSlice.reducer
        
    }
})
export const movieActions = MovieSlice.actions;

export default store;