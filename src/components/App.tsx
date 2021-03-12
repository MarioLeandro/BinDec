import React from 'react';
import Header from './Header';
import BinaryConverter from './BinaryConverter'
import {ThemeProvider} from '../contexts/ThemeContext';

const App = () => {
    return(
        <ThemeProvider>
            <Header/>
            <BinaryConverter/>
        </ThemeProvider>
    );
}

export default App;