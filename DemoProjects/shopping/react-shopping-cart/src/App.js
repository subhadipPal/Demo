import React, {useState} from 'react';
import data from './data.json';
import {Products} from "./components/products";

function App() {

    const [state, setState] = useState({
        products: data.products,
        size: '',
        sort: ''
    });

    return (
        <div className='grid-container'>
            <header>
                <a href='/'>React Shopping Cart</a>
            </header>
            <main>
                <div className='content'>
                    <div className='main'>
                        <Products products={state.products}   />
                    </div>
                    <div className='sidebar'>
                        Cart Items
                    </div>
                </div>
            </main>
            <footer>
                All rights is reserved.
            </footer>
        </div>
    );
}

export default App;
