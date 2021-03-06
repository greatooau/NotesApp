import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/index';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/' element={ <Home/> }/>
            </Routes>
        </div>
    );
};

export default App;
