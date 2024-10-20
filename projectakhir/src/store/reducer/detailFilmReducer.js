const initialState = {
    film: {},
  };
  
  const detailFilmReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DETAIL_FILM":
        return { ...state, film: action.payload };
      default:
        return state;
    }
  };
  
  export default detailFilmReducer;
  