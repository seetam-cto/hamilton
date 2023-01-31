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

    let options = items.map(item => <Option item={item} />)

    return (
        <Fragment>
            <FieldIcons after={arrow} before={before}>
                <InformedSelect {...rest} className={inputClass} field={field}>
                    <option value={null} defaultValue>{attribute_code}</option>
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
