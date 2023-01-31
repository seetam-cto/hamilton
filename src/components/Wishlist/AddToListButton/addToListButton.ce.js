import React, { useEffect, useRef } from 'react';
import { element, func, shape, string } from 'prop-types';
import { Heart } from 'react-feather';
import { useAddToListButton } from '@magento/peregrine/lib/talons/Wishlist/AddToListButton/useAddToListButton';
import { useButton } from 'react-aria';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '../../Icon';
import defaultClasses from './addToListButton.module.css';
import { useCommonToasts } from './useCommonToasts';
import "./style.css"

const HeartIcon = <Icon size={20} src={Heart} />;

const AddToListButton = props => {
    const talonProps = useAddToListButton(props);
    const buttonRef = useRef();

    const {
        buttonProps,
        buttonText,
        errorToastProps,
        isSelected,
        loginToastProps,
        successToastProps,
        showIcon
    } = talonProps;

    // console.log('addListToButton',  props);

    useCommonToasts({ errorToastProps, loginToastProps, successToastProps });
    const { buttonProps: ariaButtonProps } = useButton(buttonProps, buttonRef);

    const classes = useStyle(defaultClasses, props.classes);
    const buttonClass = isSelected ? 'button wishlist selected' : 'button wishlist';

    function fillHeart() {
        if (props.showIcon) {
            let button = document.querySelector(`[data-button='heartButton']`);
            button.childNodes[0].childNodes[0].style.fill = '#EE3D43';
        }
    }
    useEffect(() => {
        if (isSelected) {
            fillHeart()
        }
    }, [])


    return (
        <button ref={buttonRef} className={!props.showIcon && buttonClass} {...ariaButtonProps} data-button='heartButton'>
            {props.showIcon && props.icon}
            {/* {props.icon} */}
            {/* {!props.showIcon && buttonText} */}
            {!props.showIcon && 'Wishilist'}
        </button>
    );
};

export default AddToListButton;

AddToListButton.defaultProps = {
    icon: HeartIcon
};

AddToListButton.propTypes = {
    afterAdd: func,
    beforeAdd: func,
    classes: shape({
        root: string,
        root_selected: string
    }),
    icon: element
};
