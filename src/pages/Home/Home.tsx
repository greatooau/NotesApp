import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <nav>
                <h1 className='title'>What a Note</h1>
                <div className='navOptions'>
                    <ul>
                        <li className='option'>Add note</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export { Home };