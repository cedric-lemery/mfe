import React from 'react';
import ReactDOM from 'react-dom';

// Mount function to start u the app
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    );
};

// if we are in isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container
export {mount};