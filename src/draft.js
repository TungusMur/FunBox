// route.model.events.add('requestsuccess', (e) => {
//   console.log(e.get('target'));
//   console.log(route.getRoutes());
//   // const wayPoints = route.getWayPoints();
//   // wayPoints.each((item) => {
//   //   item.events.add('Click', () => {
//   //     console.log('+');
//   //   });
//   // });
//   // return wayPoints;
// });
// route.model.events.add('requestsuccess', () => {
//   console.log('+');
//   const wayPoints = route.getWayPoints();
//   let newCoordinates = [];
//   wayPoints.each((item) => {
//     newCoordinates = [
//       ...newCoordinates,
//       {
//         cityName: item.properties.get('address')
//           ? item.properties.get('address')
//           : [item.properties.get('coordinates')[1], item.properties.get('coordinates')[0]],
//       },
//     ];
//   });
//   newCoordinates.forEach((item, index) => {
//     if (typeof item.cityName !== typeof data[index].cityName) {
//       // setCoordinates(newCoordinates);
//       setDataDebounce(newCoordinates);
//     } else if (item.cityName[0] !== data[index].cityName[0] && item.cityName[1] !== data[index].cityName[1]) {
//       // setCoordinates(newCoordinates);
//       setDataDebounce(newCoordinates);
//     }
//   });
// });
// let coordinatesList = [];
// let checkChange = false;
// wayPoints.each((item, index) => {
//   if (!item.properties.get('address') && item.properties.get('coordinates') !== data[index].cityName) {
//     console.log(item.properties.get('coordinates'));
//     coordinatesList = [...coordinatesList, { cityName: item.properties.get('coordinates') }];
//     checkChange = true;
//   } else {
//     coordinatesList = [...coordinatesList, { cityName: item.properties.get('address') }];
//   }
//   // console.log(item.properties);
//   // coordinatesList = [
//   //   ...coordinatesList,
//   //   // eslint-disable-next-line no-underscore-dangle
//   //   { address: item.properties._data.address, coordinates: [item.properties._data.coordinates] },
//   // ];
// });
// if (checkChange) {
//   setData(coordinatesList);
// }
//  });
// setMultiRoute(route);

// route.getWayPoints().each((item) => {
//   item.events.add('dragend', () => {
//     console.log('+');
//   });
// });

// map.current.getWayPoints().events.add('dragend', (e) => {
//   console.log(e.get('target'));
// });
// const myGeocoder = ymaps.geocode('Moscow', { results: 15 });
// myGeocoder.then(function (res) {
//   // Выведем в консоль данные, полученные в результате геокодирования объекта.
//   //  console.log(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text);
//   const m = res.geoObjects.get(0).properties.get('metaDataProperty');
//   console.log(m);
// });

// route.getPixelBounds().each((point) => {
//   point.events.add('drag', () => {
//     console.log('-');
//   });
//   // point.events.add('dragend', () => {
//   //   get(ymaps, {
//   //     index: point.properties.get('index'),
//   //     coordinates: [point.properties.get('coordinates')[1], point.properties.get('coordinates')[0]],
//   //   });
//   // });
// });
