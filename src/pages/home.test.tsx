/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import React from 'react';

import Home from './home';

// Mocking the useAppSelector hook
jest.mock('@/store/hooks', () => ({
  useAppSelector: jest.fn(),
}));

// Mocking the BrandItem component
jest.mock('@/components/brands', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="brand-item-mock" />),
}));

describe('Homepage', () => {
  it('renders Homepage component', () => {
    // Mocking the useAppSelector response
    const mockBrandList = [
      { id: 1, name: 'Toyota' },
      { id: 2, name: 'Honda' },
      // Add more mock data as needed
    ];
    jest
      .spyOn(require('@/store/hooks'), 'useAppSelector')
      .mockReturnValue(mockBrandList);

    // Render the component
    const { getByText, getByTestId } = render(<Home />);

    // Example: Test if the headerText is rendered
    expect(getByText('Brand Details')).toBeInTheDocument();

    // Example: Test if BrandItem component is rendered for each brand in the list
    expect(getByTestId('brand-item-mock')).toBeInTheDocument();
    expect(getByTestId('brand-item-mock')).toHaveAttribute('data-id', '1'); // Assuming BrandItem renders a data-id attribute

    // You can add more tests for other parts of the component based on your requirements
  });
});
