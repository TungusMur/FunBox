import { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddressesBar from '../AddressesBar';
import { changeAddress } from '../store/reducers/reducerAddress';
import Ymap from '../Ymap';
import './App.scss';

const App = ({ reducerData, changePointsAddress }) => {
  const [data, setData] = useState([]);

  const map = useRef(null);
  const inputAddress = useRef();

  useEffect(() => {
    setData((oldData) => {
      oldData[reducerData.index] = {
        address: reducerData.address,
        coordinates: reducerData.coordinates,
      };
      return [...oldData];
    });
  }, [reducerData]);

  return (
    <div className="app">
      <AddressesBar inputAddress={inputAddress} data={data} setData={setData} />
      <Ymap map={map} inputAddress={inputAddress} changePointsAddress={changePointsAddress} data={data} />
    </div>
  );
};

export default connect((reducerData) => ({ reducerData: reducerData.reducerData.data }), {
  changePointsAddress: changeAddress,
})(App);
