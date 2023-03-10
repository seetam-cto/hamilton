import React, { useRef } from 'react';
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

const AddToListButtonIcon = props => {
    const talonProps = useAddToListButton(props);
    const buttonRef = useRef();

    const {
        buttonProps,
        buttonText,
        errorToastProps,
        isSelected,
        loginToastProps,
        successToastProps
    } = talonProps;

    useCommonToasts({ errorToastProps, loginToastProps, successToastProps });
    const { buttonProps: ariaButtonProps } = useButton(buttonProps, buttonRef);

    const classes = useStyle(defaultClasses, props.classes);
    const buttonClass = isSelected ? 'button wishlist selected' : 'button wishlist';

    return (
        <button ref={buttonRef} className={buttonClass} {...ariaButtonProps}>
            {props.icon}
            {buttonText}
        </button>
    );
};

export default AddToListButtonIcon;

AddToListButtonIcon.defaultProps = {
    icon: HeartIcon
};

AddToListButtonIcon.propTypes = {
    afterAdd: func,
    beforeAdd: func,
    classes: shape({
        root: string,
        root_selected: string
    }),
    icon: element
};
