import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import './AddressesList.scss';

const AddressesList = ({ data, deleteAddress, changeAddressData }) => {
  const [active, setActive] = useState('');

  const handleOnDragEnd = (result) => {
    changeAddressData(data, result.source.index, result.destination ? result.destination.index : null);
    setActive('');
  };

  useEffect(() => {
    console.log(data.length);
  }, [data.length]);

  return (
    <DragDropContext
      onDragEnd={handleOnDragEnd}
      onDragStart={() => {
        setActive('active');
      }}
    >
      <Droppable droppableId="characters">
        {(provided) => (
          <div className={`addressList ${active}`} style={{ height: `${60 * (data.length + 1)}px` }}>
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.length
                ? data.map(({ address }, index) => {
                    return (
                      <Draggable key={index} draggableId={`${index}`} index={index}>
                        {(provide) => (
                          <li {...provide.draggableProps} {...provide.dragHandleProps} ref={provide.innerRef}>
                            <p>{`${address}`}</p>
                            <button
                              onClick={() => {
                                deleteAddress(index);
                              }}
                            >
                              Удалить
                            </button>
                          </li>
                        )}
                      </Draggable>
                    );
                  })
                : null}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default AddressesList;
