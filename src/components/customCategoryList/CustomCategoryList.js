import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./customCategoryList.css";
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { Link } from "react-router-dom";

const CustomCategoryList = () => {

    const categories = useSelector(state => {
        let category = state?.categories
        if (category) {
            let selectedCategory = category?.selectedCategory;
            let urlSuffix = category?.urlSuffix;

            let allCategoriesList = category?.categoryAllList;


            let data = allCategoriesList.filter(category => {
                return category.uid === selectedCategory
            });
            return { data: data[0], urlSuffix }
        }
    })

    console.log(categories?.data?.children);

    let itemUrl = (urlPath) => {
        const categoryUrl = resourceUrl(
            `/${urlPath}${categories.urlSuffix || ''}`
        );
        return categoryUrl
    }



    return (
        <>
            <div className="custom-cateogry-list">
                {
                    categories?.data?.children.map(item => {
                        return (
                            <Link to={itemUrl(item.url_path)}>
                                <div className="custom-category-child">
                                    <img src={item.image} />
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </>
    )
}

export default CustomCategoryList;
