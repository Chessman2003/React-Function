import React from 'react';

const ListItem = ({ item, onDelete }) => {
    return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <button onClick={() => onDelete(item.id)}>Удалить</button>
      </div>
    );
  };
  
  export default ListItem;