/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable testing-library/prefer-screen-queries */
// FilterForm.test.jsx
import { fireEvent,render } from '@testing-library/react';
import React from 'react';

import Filter from './filter';

// Mocking the useAppSelector hook
jest.mock('@/store/hooks', () => ({
  useAppSelector: jest.fn(),
}));

describe('FilterForm', () => {
  it('renders FilterForm component', () => {
    // Mocking the useAppSelector response
    const mockBrandList = [
      {
        id: 1,
        model: 'Celerio',
        color: 'Blue',
        location: 'Chennai',
        owners: '1st Owner',
        transmission: 'Automatic',
        kms: 50000,
        manufacture: 2020,
      },
      // Add more mock data as needed
    ];
    jest
      .spyOn(require('@/store/hooks'), 'useAppSelector')
      .mockReturnValue(mockBrandList);

    // Render the component
    const { getByLabelText, getByText } = render(<Filter />);

    // Example: Test if the "Location" dropdown renders correctly
    const locationDropdown = getByLabelText('Location:');
    expect(locationDropdown).toBeInTheDocument();

    // Example: Simulate a change in the "Location" dropdown
    fireEvent.change(locationDropdown, { target: { value: 'Chennai' } });

    // You can add more tests for other parts of the component based on your requirements
  });
});
