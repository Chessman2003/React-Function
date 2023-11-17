import React from 'react';

export type Item = {
  id: number,
  title: string,
  text: string
}

type Props = {
  item: Item,
  onDelete: (id: number) => void
}

const ListItem = ({ item, onDelete }: Props) => {
    return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <button onClick={() => onDelete(item.id)}>Удалить</button>
      </div>
    );
  };
  
  export default ListItem;