/* eslint-disable no-nested-ternary */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';

import Brand from '@/model/Brand';
import { useAppSelector } from '@/store/hooks';

// import { setFilters } from '../redux/slices/filterSlice';
// import { RootState } from '../redux/store/store';

interface FilterFormProps {}

const FilterForm: React.FC<FilterFormProps> = () => {
  const [filters, setFilters] = useState<any>({
    location: 'Chennai',
    bodyType: 'Hatchback',
    brand: ['Celerio'],
    owners: '1st Owner',
    budget: ['2L-4L'],
    fuelType: 'Petrol',
    transmission: 'Automatic',
  });

  const [options, setOptions] = useState<any>({
    location: ['Bangalore', 'Chennai', 'Mumbai', 'Delhi'],
    bodyType: ['Hatchback', 'Sedan', 'SUV'],
    brand: ['Wagon R', 'Celerio', 'Swift', 'Swift Dzire'],
    owners: ['1st Owner', '2nd Owner', '3rd Owner'],
    budget: ['Less than 2L', '2L-4L', '4L-6L', 'More than 6 L'],
    fuelType: ['Petrol', 'Diesel', 'CNG'],
    transmission: ['Automatic', 'Manual'],
  });
  // const dispatch = useDispatch();
  const brandtList: Brand[] = useAppSelector((state) => state.brand.brandList);
  const [filteredRecords, setFilteredRecords] = useState<any[]>([]);

  useEffect(() => {
    setFilteredRecords(brandtList);
  }, [brandtList]);

  const handleInputChange = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-1 justify-between p-5">
      <div className="flex-1">
        <div>
          <label>Location:</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="mt-[5px] bg-inherit p-2"
          >
            <option value="">Select Location</option>
            {options.location &&
              options.location.map((location: string) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
          </select>
        </div>

        <div>
          <div>
            <label>Brand :</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleInputChange}
              className="mt-[5px] bg-inherit p-2"
            >
              <option value="">Select Brand</option>
              {options.brand &&
                options.brand.map((type: string) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div>
          <label>Owners:</label>
          <div>
            {options.owners &&
              options.owners.map((owner: string) => (
                <div key={owner}>
                  <input
                    type="radio"
                    name="owners"
                    value={owner}
                    onChange={handleInputChange}
                    checked={filters.owners === owner}
                  />
                  <label>{owner}</label>
                </div>
              ))}
          </div>
        </div>
        <div>
          <label>Budget:</label>
          <div className="flex flex-wrap">
            {options.budget &&
              options.budget.map((value: string) => (
                <button
                  key={value}
                  type="button"
                  name="budget"
                  value={value}
                  onClick={() =>
                    handleInputChange({
                      target: { type: 'button', name: 'budget', value },
                    } as React.ChangeEvent<HTMLInputElement>)
                  }
                  className={
                    filters.budget.includes(value)
                      ? 'selected mb-2.5 mr-2.5 cursor-pointer border border-solid border-[#ddd] bg-white p-2'
                      : 'mb-2.5 mr-2.5 cursor-pointer border border-solid border-[#ddd] bg-white p-2'
                  }
                >
                  {value}
                </button>
              ))}
          </div>
        </div>

        <div>
          <label>Transmission:</label>
          <div>
            {options.transmission &&
              options.transmission.map((transmission: string) => (
                <div key={transmission}>
                  <div className="mb-4 flex items-center">
                    <input
                      type="radio"
                      name="transmission"
                      value={transmission}
                      onChange={handleInputChange}
                      checked={filters.transmission === transmission}
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      {transmission}
                    </label>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <button type="submit">Filter</button>
        </div>
      </div>

      <div className="flex-[2] px-5 py-0">
        <h3>Results</h3>
        {filteredRecords.length === 0
          ? brandtList?.map((record: any, index: number) => (
              <div key={record.id} className="p-4">
                <h4>Record {index + 1}</h4>
                <p>Model: {record.model}</p>
                <p>Color: {record.color}</p>
                <p>Location: {record.location}</p>
                <p>No of Owners: {record.owners}</p>
                <p>Transmission: {record.transmission}</p>
                <p>insurance Kms: {record.kms}</p>
                <p>Manufacture Year: {record.manufacture}</p>
              </div>
            ))
          : filteredRecords.map((record: any, index: number) => (
              <div key={record.id} className="p-4">
                <h4>Record {index + 1}</h4>
                <p>Model: {record.model}</p>
                <p>Color: {record.color}</p>
                <p>Location: {record.location}</p>
                <p>No of Owners: {record.owners}</p>
                <p>Transmission: {record.transmission}</p>
                <p>insurance Kms: {record.kms}</p>
                <p>Manufacture Year: {record.manufacture}</p>
              </div>
            ))}
      </div>
      <div className="right-section" />
    </div>
  );
};

export default FilterForm;
