import React from 'react';
import { func, shape, string } from 'prop-types';
import { useCategoryTree } from '@magento/peregrine/lib/talons/CategoryTree';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Branch from './categoryBranch';
import Leaf from './categoryLeaf';
import defaultClasses from './categoryTree.module.css';
import { Link } from 'react-router-dom';

const Tree = props => {
    const {
        categoryId,
        onNavigate,
        setCategoryId,
        updateCategories,
        tabIndex
    } = props;

    const talonProps = useCategoryTree({
        categoryId,
        updateCategories
    });

    const { data, childCategories, categoryUrlSuffix } = talonProps;
    const classes = useStyle(defaultClasses, props.classes);

    // for each child category, render a direct link if it has no children
    // otherwise render a branch
    const branches = data
        ? Array.from(childCategories, childCategory => {
            const [id, { category, isLeaf }] = childCategory;
            return isLeaf ? (
                <Leaf
                    key={id}
                    category={category}
                    onNavigate={onNavigate}
                    categoryUrlSuffix={categoryUrlSuffix}
                    tabIndex={tabIndex}
                />
            ) : (
                <Branch
                    key={id}
                    category={category}
                    setCategoryId={setCategoryId}
                    tabIndex={tabIndex}
                />
            );
        })
        : null;

    return (
        <div className={classes.root} data-cy="CategoryTree-root">
            <ul className={classes.tree}>
                {branches}
                <Link to="/new-launches">New-Launches</Link>
            </ul>
        </div>
    );
};

export default Tree;

Tree.propTypes = {
    categoryId: string,
    classes: shape({
        root: string,
        tree: string
    }),
    onNavigate: func.isRequired,
    setCategoryId: func.isRequired,
    updateCategories: func.isRequired,
    tabIndex: func.isRequired
};
