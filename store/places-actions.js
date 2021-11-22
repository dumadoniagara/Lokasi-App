export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = title => {
    console.log('title di actions : ', title);
    return {
        type: ADD_PLACE,
        placeData: {
            title
        }
    }
}