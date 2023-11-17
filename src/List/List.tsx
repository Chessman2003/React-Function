import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';

import { Item } from '../ListItem/ListItem';

const List = () => {
    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = () => {
        const newItem : Item = {
            id: items.length,
            title: `Заголовок ${items.length + 1}`,
            text: `Текст ${items.length + 1}`
        };
        setItems([...items, newItem]);
    };

    const handleDeleteItem = (id: number) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };
    return (
        <div>
            <button onClick={handleAddItem}>Добавить элемент</button>
            {
                items.map(item => (
                    <ListItem
                        key={item.id}
                        item={item}
                        onDelete={handleDeleteItem}
                    />
                ))
            }
        </div>
    );
};


export default List;