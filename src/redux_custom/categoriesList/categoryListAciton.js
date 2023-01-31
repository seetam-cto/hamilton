import { SAVE_CATEGORY_LIST, GET_CATEGORY_LIST, CURRENT_SELECTED_CATEGORY } from './categoryListType';

export const saveCategoryList = (data, activeId, categoryUrlSuffix) => {
    return {
        type: SAVE_CATEGORY_LIST,
        payload: data,
        active: activeId,
        urlSuffix: categoryUrlSuffix
    }
}

export const getCategoryList = () => {
    return {
        type: GET_CATEGORY_LIST
    }
}

export const currentSelectedCategory = (data) => {
    console.log(data);
    return {
        type: CURRENT_SELECTED_CATEGORY,
        payload: data
    }
}