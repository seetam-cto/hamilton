import React from 'react';
import { createTestInstance } from '@magento/peregrine';

import Receipt from '../receipt';

jest.mock('@magento/venia-ui/lib/classify');

jest.mock('@magento/peregrine/lib/talons/Checkout/Receipt/useReceipt', () => {
    const handleCreateAccount = jest.fn();
    const handleViewOrderDetails = jest.fn();
    const isSignedIn = false;

    const useReceipt = jest.fn(() => ({
        handleCreateAccount,
        handleViewOrderDetails,
        isSignedIn
    }));

    return { useReceipt };
});

const onClose = jest.fn();
const props = { onClose };

test('renders a Receipt component correctly', () => {
    const component = createTestInstance(<Receipt {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
});
