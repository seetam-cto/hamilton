import React, { useEffect, useState } from 'react';
import { bool, func, number, oneOfType, shape, string } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './tile.module.css';
import { useTile } from '@magento/peregrine/lib/talons/ProductOptions/useTile';
import './style.css'

const getClassName = (
    name,
    isSelected,
    hasFocus,
    isOptionOutOfStock,
    isEverythingOutOfStock
) =>
    `${name}${isSelected ? '_selected' : ''}${hasFocus ? '_focused' : ''}${isEverythingOutOfStock || isOptionOutOfStock ? '_outOfStock' : ''
    }`;

const Tile = props => {
    const {
        hasFocus,
        isSelected,
        item: { label, value_index },
        onClick,
        isEverythingOutOfStock,
        isOptionOutOfStock,
        attribute_code
    } = props;

    // console.log('color', value_index);


    const talonProps = useTile({
        onClick,
        value_index
    });

    const { handleClick } = talonProps;
    const classes = useStyle(defaultClasses, props.classes);
    const className =
        classes[
        getClassName(
            'root',
            isSelected,
            hasFocus,
            isOptionOutOfStock,
            isEverythingOutOfStock
        )
        ];

    const handleClickColor = (e) => {
        // setShadowColor(e.target.style.backgroundColor)
        let colorButton = document.querySelectorAll('.color-option-button');
        console.log(handleClick)
        colorButton.forEach(element => {
            if (e.target.style.backgroundColor !== element.style.backgroundColor) {
                element.style.boxShadow = 'none';
                //  element.style.border = 'none'
            } else {
                e.target.style.boxShadow = `0px 0px 10px ${e.target.style.backgroundColor}`;
                // e.target.style.border = '2px solid white'
            }
        });
    }

    const handleClickOption = (e) => {
        console.log(e.target);
    }

    console.log('attribute', attribute_code);

    return (
        <>
            {
                (attribute_code === 'color')
                    ?
                    <button
                        className={`${className} color-option-button options-child`}
                        style={{
                            backgroundColor: `${props.item.swatch_data?.value}`,
                            border: `${label == 'WHITE' ? '1px solid #00000033' : '2px solid white'}`,
                            outline: 'none'
                        }}
                        onClick={(event) => {
                            handleClick(event);
                            handleClickColor(event)
                        }}
                        title={label}
                        type="button"
                        data-cy="Tile-button"
                        disabled={isEverythingOutOfStock || isOptionOutOfStock}
                    >
                    </button>
                    :
                    <button
                        className={`${className} options-child`}
                        onClick={handleClick}
                        title={label}
                        type="button"
                        data-cy="Tile-button"
                        disabled={isEverythingOutOfStock || isOptionOutOfStock}
                    >
                        {label}
                    </button>
            }
            {/* :
                    <option
                        className={`${className}`}
                        onClick={handleClickOption}
                        title={label}
                        // type="button"
                        // data-cy="Tile-button"
                        disabled={isEverythingOutOfStock || isOptionOutOfStock}
                    >
                            {label}
                    </option>
            } */}
        </>
    );
};

export default Tile;

Tile.propTypes = {
    hasFocus: bool,
    isSelected: bool,
    item: shape({
        label: string.isRequired,
        value_index: oneOfType([number, string]).isRequired
    }).isRequired,
    onClick: func.isRequired
};

Tile.defaultProps = {
    hasFocus: false,
    isSelected: false
};
