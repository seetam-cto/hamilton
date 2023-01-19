import React, { Fragment, useMemo } from 'react';
import { arrayOf, node, number, oneOfType, shape, string } from 'prop-types';
import {
    Option as InformedOption,
    Select as InformedSelect,
    useFieldState
} from 'informed';
import Option from './option';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { FieldIcons, Message } from '../Field';
import defaultClasses from './select.module.css';
import Icon from '../Icon';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

const arrow = <Icon src={ChevronDownIcon} size={24} />;

const Select = props => {
    const {
        before,
        classes: propClasses,
        field,
        items,
        message,
        onSelectionChange,
        getItemKey,
        selectedValue,
        isEverythingOutOfStock,
        outOfStockVariants,
        attribute_code,
        ...rest
    } = props;
    // console.log("select", selectedValue, attribute_code);
    const fieldState = useFieldState(field);
    const classes = useStyle(defaultClasses, propClasses);
    const inputClass = fieldState.error ? classes.input_error : classes.input;

    // const options = items.map(
    //     ({ disabled = null, hidden = null, label, value, key = value }) => (
    //         <InformedOption
    //             key={key}
    //             disabled={disabled}
    //             hidden={hidden}
    //             value={value}
    //             onClick={onSelectionChange}
    //         >
    //             {label || (value != null ? value : '')}
    //         </InformedOption>
    //     )
    // );
    // console.log('testing', items);
    let options = items.map(item => <Option item={item} onClick={onSelectionChange} />)
    // const tiles = useMemo(
    //     () =>
    //         items.map(item => {
    //             const isSelected = item.label === selectedValue.label;
    //             let isOptionOutOfStock;
    //             if (outOfStockVariants && outOfStockVariants.length > 0) {
    //                 const flatOutOfStockArray = outOfStockVariants.flat();
    //                 isOptionOutOfStock = flatOutOfStockArray.includes(
    //                     item.value_index
    //                 );
    //             }

    //             // console.log('testing', item);
    //             return (
    //                 <Option
    //                     key={getItemKey(item)}
    //                     isSelected={isSelected}
    //                     item={item}
    //                     onClick={onSelectionChange}
    //                     isEverythingOutOfStock={isEverythingOutOfStock}
    //                     isOptionOutOfStock={isOptionOutOfStock}
    //                     attribute_code={attribute_code}
    //                 />
    //             );
    //         }),
    //     [
    //         getItemKey,
    //         selectedValue.label,
    //         items,
    //         onSelectionChange,
    //         isEverythingOutOfStock,
    //         outOfStockVariants
    //     ]
    // );

    return (
        <Fragment>
            <FieldIcons after={arrow} before={before}>
                <InformedSelect {...rest} className={inputClass} field={field}>
                    {options}
                </InformedSelect>
            </FieldIcons>
            <Message fieldState={fieldState}>{message}</Message>
        </Fragment>
    );
};

export default Select;

Select.propTypes = {
    before: node,
    classes: shape({
        input: string
    }),
    field: string.isRequired,
    items: arrayOf(
        shape({
            key: oneOfType([number, string]),
            label: string,
            value: oneOfType([number, string])
        })
    ),
    message: node
};
