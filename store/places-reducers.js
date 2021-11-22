import { ADD_PLACE } from "./places-actions";
import Place from "../models/place";

const initialState = {
    places: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            console.log('reducer add ==', action);
            const newPlace = new Place(
                new Date().toString(),
                action.placeData.title
            );
            console.log('newPlace =: ', newPlace);
            return {
                ...state,
                places: state.places.concat(newPlace),
            };
        default:
            return state;
    }
}