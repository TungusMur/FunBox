const сreateMultiRout = (ymaps, map, data, changePointsAddress) => {
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
  // route.events.once('update', () => {
  //   route.getWayPoints().each((point) => {
  //     point.events.add('dragend', () => {
  //       changePointsAddress(ymaps, {
  //         index: point.properties.get('index'),
  //         coordinates: [point.properties.get('coordinates')[1], point.properties.get('coordinates')[0]],
  //       });
  //     });

  //     point.events.add('click', () => {
  //       map.current.balloon.open(
  //         [point.properties.get('coordinates')[1], point.properties.get('coordinates')[0]],
  //         data[point.properties.get('index')].address
  //       );
  //     });
  //   });
  // });
  route.model.events.once('requestsuccess', () => {
    route.getWayPoints().each((point) => {
      point.events.add('dragend', () => {
        console.log(point);
        changePointsAddress(ymaps, {
          index: point.properties.get('index'),
          // coordinates: [point.properties.get('coordinates')[1], point.properties.get('coordinates')[0]],
          // eslint-disable-next-line no-underscore-dangle
          coordinates: point.geometry._coordinates,
        });
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
