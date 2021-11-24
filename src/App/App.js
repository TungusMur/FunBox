import { useRef } from 'react';
import { connect } from 'react-redux';
import AddressesBar from '../AddressesBar';
import { changeItem, addItem, deleteItem, changeData } from '../store/reducers/reducerAddress';
import Ymap from '../Ymap';
import './App.scss';

const App = ({ reducerData, changeAddress, addAddress, deleteAddress, changeAddressData }) => {
  const inputAddress = useRef();

  return (
    <div className="app">
      <AddressesBar
        inputAddress={inputAddress}
        data={reducerData}
        addAddress={addAddress}
        deleteAddress={deleteAddress}
        changeAddressData={changeAddressData}
      />
      <Ymap inputAddress={inputAddress} changeAddress={changeAddress} data={reducerData} />
    </div>
  );
};

export default connect((reducerData) => ({ reducerData: reducerData.reducerData.data }), {
  changeAddress: changeItem,
  addAddress: addItem,
  deleteAddress: deleteItem,
  changeAddressData: changeData,
})(App);
