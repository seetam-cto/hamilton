import React from 'react';
import { bool, shape, string } from 'prop-types';

const Option = props => {
    // const { disabled, item } = props;
    // const { label, value } = item;
    const {
        // hasFocus,
        // isSelected,
        disabled='false',
        item: { label, value_index }
    } = props;

    return (
        <option value={value_index} disabled={disabled}>
            {label}
        </option>
    );
};

Option.propTypes = {
    disabled: bool,
    item: shape({
        label: string,
        value: string.isRequired
    }).isRequired
};

Option.defaultProps = {
    disabled: false
};

export default Option;
