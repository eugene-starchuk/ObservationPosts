import globalHook from 'use-global-hook';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    selectedImage: 0,
    selectedMenuIndex: 0,
    // selectedSource: 'https://i.imgur.com/RnJW0N2.jpg',
});

const actions = {
    setSelectedMenuIndex: (store, value) => {
        store.setState({ selectedMenuIndex: value });
        console.log(value);
    },
    setSelectedImage: (store, value) => {
        store.setState({ selectedImage: value });
        console.log(value);
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
