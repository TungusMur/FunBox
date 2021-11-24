const сreateMultiRout = (ymaps, map, data, changeAddress) => {
  const route = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: data.map(({ coordinates }) => [coordinates]),
      params: {
        routingMode: 'auto',
        requestSendInterval: 0,
      },
    },
    {
      preventDragUpdate: true,
      wayPointDraggable: true,
      boundsAutoApply: true,
      balloonLayout: false,
    }
  );
  route.model.events.once('requestsuccess', () => {
    route.getWayPoints().each((point) => {
      point.events.add('dragend', () => {
        changeAddress(
          ymaps,
          point.properties.get('index'),
          // eslint-disable-next-line no-underscore-dangle
          point.geometry._coordinates
        );
      });
      point.events.add('click', () => {
        map.current.balloon.open(
          [point.properties.get('coordinates')[1], point.properties.get('coordinates')[0]],
          data[point.properties.get('index')].address
        );
      });
    });
  });
  return route;
};

export default сreateMultiRout;
