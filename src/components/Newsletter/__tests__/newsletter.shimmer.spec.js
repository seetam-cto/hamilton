import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import NewsletterShimmer from '../newsletter.shimmer';

jest.mock('@magento/venia-ui/lib/classify');

test('renders correctly', () => {
    const component = createTestInstance(<NewsletterShimmer />);
    expect(component.toJSON()).toMatchSnapshot();
});
