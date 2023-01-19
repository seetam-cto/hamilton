import React from 'react';
import { bool, shape, string } from 'prop-types';
// import { useTile } from '@magento/peregrine/lib/talons/ProductOptions/useTile';


const Option = props => {
    // const { disabled, item } = props;
    // const { label, value } = item;
    const {
        // hasFocus,
        // isSelected,
        disabled='false',
        item: { label, value_index },
        onClick
    } = props;
    // let text = item.label
    const talonProps = useTile({
        onClick,
        value_index
    });
    
    const { handleClick } = talonProps;
    console.log('onclick', handleClick);    

    return (
        <option value={label} disabled={disabled} onClick={handleClick}>
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
