import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import './Addresses.scss';

const AddressesList = ({ data, setData }) => {
  const [active, setActive] = useState('');

  const handleOnDragEnd = (result) => {
    const item = data;

    const [recorderedItem] = item.splice(result.source.index, 1);

    if (result.destination) item.splice(result.destination.index, 0, recorderedItem);
    setActive('');
    setData([...item]);
  };

  return (
    <DragDropContext
      onDragEnd={handleOnDragEnd}
      onDragStart={() => {
        setActive('active');
      }}
    >
      <Droppable droppableId="characters">
        {(provided) => (
          <div>
            <ul
              className={`addressList ${active}`}
              style={{ height: 80 * data.length }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.length
                ? data.map(({ address }, index) => {
                    return (
                      <Draggable key={index} draggableId={`${index}`} index={index}>
                        {(provide) => (
                          <li {...provide.draggableProps} {...provide.dragHandleProps} ref={provide.innerRef}>
                            <p>{`${address}`}</p>
                            <button
                              onClick={() => {
                                data.splice(index, 1);

                                setData([...data]);
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
