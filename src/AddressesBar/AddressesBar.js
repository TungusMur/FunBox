import { useCallback } from 'react';
import AddressesList from '../AddressesList';
import './AddressesBar.scss';

const AddressesBar = ({ inputAddress, data, addAddress, deleteAddress, changeAddressData }) => {
  const pressOnEnter = useCallback((e) => {
    if (e.key === 'Enter' && inputAddress.current.value.trim()) {
      addAddress({
        address: inputAddress.current.value,
        coordinates: inputAddress.current.value,
      });
    }
  }, []);

  const pressOnButtonSearch = useCallback(() => {
    if (inputAddress.current.value.trim()) {
      addAddress({
        address: inputAddress.current.value,
        coordinates: inputAddress.current.value,
      });
    }
  }, []);
  return (
    <div className="address">
      <div className="addressBar">
        <input placeholder="Введите адрес" ref={inputAddress} type="text" id="suggest" onKeyPress={pressOnEnter} />
        <button onClick={pressOnButtonSearch}>Добавить адрес</button>
      </div>
      <AddressesList data={data} deleteAddress={deleteAddress} changeAddressData={changeAddressData} />
    </div>
  );
};

export default AddressesBar;
