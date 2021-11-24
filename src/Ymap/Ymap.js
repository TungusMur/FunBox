import { useCallback, useEffect, useState, useRef } from 'react';
import { YMaps, Map, ZoomControl } from 'react-yandex-maps';
import сreateMultiRout from './сreateMultiRout';
import './Ymap.scss';

const mapState = {
  center: [55.755819, 37.617644],
  controls: [],
  zoom: 8,
};
const Ymap = ({ inputAddress, changeAddress, data }) => {
  const [ymaps, setYmaps] = useState(null);

  const map = useRef(null);

  useEffect(() => {
    if (ymaps) {
      inputAddress.current.value = '';
      map.current.geoObjects.removeAll();
      map.current.geoObjects.add(сreateMultiRout(ymaps, map, data, changeAddress));
    }
  }, [data]);

  const onLoad = useCallback((e) => {
    // eslint-disable-next-line no-unused-vars
    const input = new e.SuggestView(inputAddress.current);
    setYmaps(e);
  }, []);
  return (
    <div className="ymap">
      <YMaps
        query={{
          apikey: '5664d34a-3b0b-4593-8152-842cd1ebea28',
          load: ['SuggestView', 'geocode'],
        }}
      >
        <Map
          modules={['multiRouter.MultiRoute']}
          state={mapState}
          instanceRef={map}
          onLoad={onLoad}
          width={`100%`}
          height={`100%`}
        >
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};
export default Ymap;
