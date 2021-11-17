import { YMaps, Map, ZoomControl } from 'react-yandex-maps';
import { useCallback, useEffect, useRef, useState } from 'react';
import Addresses from './Addresses';

const App = () => {
  const [data, setData] = useState([]);
  const [ymaps, setYmaps] = useState(0);

  const map = useRef(null);
  const inputAddress = useRef(null);

  const mapState = {
    center: [54.314192, 48.403132],
    control: 'zoomControl',
    zoom: 12,
  };

  const createMultiRout = (maps) => {
    const multiRoute = new maps.multiRouter.MultiRoute(
      {
        referencePoints: data.map(({ cityName }) => [cityName]),
        params: {
          routingMode: 'line',
        },
      },
      {
        boundsAutoApply: true,
      }
    );

    return multiRoute;
  };

  const onLoad = useCallback((e) => {
    // eslint-disable-next-line no-unused-vars
    const input = new e.SuggestView(inputAddress.current);

    setYmaps(e);
  }, []);

  useEffect(() => {
    if (ymaps) {
      map.current.geoObjects.removeAll();
      map.current.geoObjects.add(createMultiRout(ymaps));
    }
  }, [data]);

  return (
    <div className="App">
      <div className="addressBar">
        <input
          ref={inputAddress}
          type="text"
          id="suggest"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && inputAddress.current.value) {
              setData([...data, { cityName: inputAddress.current.value }]);

              inputAddress.current.value = '';
            }
          }}
        />
        <button
          onClick={() => {
            setData([...data, { cityName: inputAddress.current.value }]);

            inputAddress.current.value = '';
          }}
        >
          Добавить адрес
        </button>
        <Addresses data={data} setData={setData} />
      </div>
      <YMaps query={{ apikey: '5664d34a-3b0b-4593-8152-842cd1ebea28', load: ['SuggestView'] }}>
        <Map
          modules={['multiRouter.MultiRoute']}
          state={mapState}
          instanceRef={map}
          onLoad={onLoad}
          width={`70%`}
          height={550}
        >
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default App;
