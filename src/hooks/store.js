import globalHook from 'use-global-hook';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    selectedMenuIndex: 0,
    selectedSource: 'https://i.pinimg.com/originals/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg',
});

const actions = {
    setSelectedMenuIndex: (store, value) => {
        store.setState({ selectedMenuIndex: value });
        console.log(value);
    },
    setSelectedSource: (store, value) => {
        store.setState({ selectedSource: value });
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
