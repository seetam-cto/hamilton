import { GET_CATEGORY_LIST, SAVE_CATEGORY_LIST, CURRENT_SELECTED_CATEGORY } from './categoryListType';

const initalState = {
    categoryAllList: [],
    selectedCategory: '',
    urlSuffix: ''
}

const categoryListReduer = (state=initalState, action) => {
    switch(action.type){
        case SAVE_CATEGORY_LIST: return {
            ...state,
            categoryAllList: action.payload,
            selectedCategory: action.active,
            urlSuffix: action.urlSuffix
        }
        case GET_CATEGORY_LIST: return {
            ...state
        }
        case CURRENT_SELECTED_CATEGORY: return {
            ...state,
            selectedCategory: action.payload
        }
        default: return state
    }
}


export default categoryListReduer;