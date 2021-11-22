import { useCallback } from 'react';
import AddressesList from '../AddressesList';

const AddressesBar = ({ inputAddress, data, setData }) => {
  const pressOnEnter = useCallback((e) => {
    if (e.key === 'Enter' && inputAddress.current.value.trim()) {
      setData((oldData) => [
        ...oldData,
        { address: inputAddress.current.value, coordinates: inputAddress.current.value },
      ]);
    }
  }, []);

  const pressOnButtonSearch = useCallback(() => {
    if (inputAddress.current.value.trim()) {
      setData((oldData) => [
        ...oldData,
        { address: inputAddress.current.value, coordinates: inputAddress.current.value },
      ]);
    }
  }, []);
  return (
    <div className="addressBar">
      <input ref={inputAddress} type="text" id="suggest" onKeyPress={pressOnEnter} />
      <button onClick={pressOnButtonSearch}>Добавить адрес</button>
      <AddressesList data={data} setData={setData} />
    </div>
  );
};

export default AddressesBar;
