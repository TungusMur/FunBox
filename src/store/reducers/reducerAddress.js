export const GET_ADDRESS = 'GET_ADDRESS';

const defaultState = {
  data: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ADDRESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export const changeAddress = (ymaps, data) => (dispatch) => {
  const myGeocoder = ymaps.geocode(data.coordinates, { json: false });

  // eslint-disable-next-line no-underscore-dangle
  myGeocoder.then((res) =>
    dispatch({
      type: GET_ADDRESS,
      payload: {
        index: data.index,
        address: res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text,
        coordinates: data.coordinates,
      },
    })
  );
};
