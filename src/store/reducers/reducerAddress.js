export const CHANGE_ITEM = 'CHANGE_ITEM ';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_DATA = 'CHANGE_DATA';

const defaultState = {
  data: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_ITEM:
      return {
        ...state,
        data: [
          ...state.data.map((item, index) =>
            index === payload.index
              ? {
                  address: payload.address,
                  coordinates: payload.coordinates,
                }
              : item
          ),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: [...state.data.filter((item, index) => (index !== payload ? item : null))],
      };
    case CHANGE_DATA:
      return {
        ...state,
        data: [...payload],
      };
    default:
      return state;
  }
};

export const changeItem = (ymaps, indexItem, newCoordinates) => (dispatch) => {
  const myGeocoder = ymaps.geocode(newCoordinates, { json: false });

  // eslint-disable-next-line no-underscore-dangle
  myGeocoder.then((res) =>
    dispatch({
      type: CHANGE_ITEM,
      payload: {
        index: indexItem,
        address: res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text,
        coordinates: newCoordinates,
      },
    })
  );
};

export const addItem = (dataItem) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      address: dataItem.address,
      coordinates: dataItem.coordinates,
    },
  });
};

export const deleteItem = (index) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: index,
  });
};

export const changeData = (data, indexSource, indexDestination) => (dispatch) => {
  const item = [...data];
  const [recorderedItem] = item.splice(indexSource, 1);
  if (typeof indexDestination === 'number') item.splice(indexDestination, 0, recorderedItem);
  dispatch({
    type: CHANGE_DATA,
    payload: [...item],
  });
};
