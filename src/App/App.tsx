import React from 'react';
import List from '../List/List';
import {Header} from '../Header/Header';

import './App.scss';

const App = () => {
    return(
        <div className='app'>
            <Header title={`Мой список`} />
            <List />
        </div>
    );
};

export default App;