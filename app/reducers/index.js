import * as types from '../actions/actionTypes';

const initialState = {
    items: {
        items: []
    },
    item: {}
};

export default function (state = initialState, action = 'id') {
    switch (action.type) {
        case types.ADD_ITEMS:
            const items = [...state.items.items];            
            filterDuplicates(state, action.payload.items).forEach(item => items.push(item));
            return {
                ...state,
                items: {
                    items: items,
                    totalItems: action.payload.totalItems
                }
            };
        case types.ADD_ITEM:
            state.item[action.id] = action.payload;
            return { ...state, item: state.item };
    
        default:
            return state;
    }
}

const filterDuplicates = (state, items, key = 'id') => {
    return items.filter(item => state.items.items.map(value => value[key]).indexOf(item[key]) === -1)
};

const getItemIndex = (items, id) => {
    return items.findIndex(item => item.id === id);
};
