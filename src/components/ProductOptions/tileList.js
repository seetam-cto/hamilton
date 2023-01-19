import React, { useMemo, useState } from 'react';
import { arrayOf, func, object, shape, string } from 'prop-types';
import Tile from './tile';
import Select from '../Select/select';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import defaultClasses from './tileList.module.css';
import './style.css'

const TileList = props => {
    const {
        getItemKey,
        selectedValue = {},
        items,
        onSelectionChange,
        isEverythingOutOfStock,
        outOfStockVariants,
        attribute_code
    } = props;

    const [styleDropDown, setStyleDropDown] = useState(false);

    const classes = useStyle(defaultClasses, props.classes);



    const tiles = useMemo(
        () =>
            items.map(item => {
                const isSelected = item.label === selectedValue.label;
                let isOptionOutOfStock;
                if (outOfStockVariants && outOfStockVariants.length > 0) {
                    const flatOutOfStockArray = outOfStockVariants.flat();
                    isOptionOutOfStock = flatOutOfStockArray.includes(
                        item.value_index
                    );
                }

                // console.log('testing', item);
                return (
                    <Tile
                        key={getItemKey(item)}
                        isSelected={isSelected}
                        item={item}
                        onClick={onSelectionChange}
                        isEverythingOutOfStock={isEverythingOutOfStock}
                        isOptionOutOfStock={isOptionOutOfStock}
                        attribute_code={attribute_code}
                    />
                );
            }),
        [
            getItemKey,
            selectedValue.label,
            items,
            onSelectionChange,
            isEverythingOutOfStock,
            outOfStockVariants
        ]
    );

    // console.log('tileList', selectedValue);

    // console.log('Tile', Tile);

    const handleExpand = () => {
        setStyleDropDown(!styleDropDown)
    }

    console.log('attribute_code', attribute_code);

    return (
        attribute_code == 'color' ?
            <div className={`${classes.root}`}>{tiles}</div>
            :
            // <div className={'tiles-button'}>
            //     <div onClick={handleExpand}>{attribute_code}</div>
            //     {
            //         styleDropDown
            //         &&
                    <div>{tiles}</div>
            //     }
            // </div>
        // <Select
        //     items={items}
        //     className={'custom-dropdown'}
        //     onSelectionChange={onSelectionChange}
        //     field={attribute_code}
        //     getItemKey={getItemKey}
        //     selectedValue={selectedValue}
        //     isEverythingOutOfStock={isEverythingOutOfStock}
        //     outOfStockVariants={outOfStockVariants}
        //     attribute_code={attribute_code}
        // />

    )
};

TileList.propTypes = {
    classes: shape({
        root: string
    }),
    getItemKey: func,
    selectedValue: object,
    items: arrayOf(object),
    onSelectionChange: func
};

TileList.displayName = 'TileList';

export default TileList;
