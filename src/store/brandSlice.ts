// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Brand from '@/model/Brand';
import { RootState } from '@/store/store';

// eslint-disable-next-line @typescript-eslint/naming-convention
type initialStateType = {
  brandList: Brand[];
};

const brandList: Brand[] = [
  {
    id: 1,
    img: 'https://www.cdnlogo.com/logos/m/19/maruti-suzuki.svg',
    brandName: 'Maruti Suzuki',
    model: '',
    location: '',
    color: '',
    owners: '',
    manufacture: '',
    transmission: '',
    validupto: '',
    fitments: '',
    kms: '',
    photo: '',
  },
  {
    id: 2,
    img: 'https://www.pngfind.com/pngs/m/75-755922_hyundai-logo-englishsvg-wikipedia-hyundai-logo-transparent-png.png',
    brandName: 'Hyundai',
    model: '',
    location: '',
    color: '',
    owners: '',
    manufacture: '',
    transmission: '',
    validupto: '',
    fitments: '',
    kms: '',
    photo: '',
  },
];

const initialState: initialStateType = {
  brandList,
};

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    addBrand: (state, action: PayloadAction<Brand>) => {
      state.brandList.push(action.payload);
    },
    updateBrand: (state, action: PayloadAction<Brand>) => {
      const { payload } = action;
      state.brandList = state.brandList.map((brand) =>
        brand.id === payload.id ? { ...brand, ...payload } : brand,
      );
    },
    removeBrand: (state, action: PayloadAction<{ id: number }>) => {
      state.brandList = state.brandList.filter(
        (brand) => brand.id !== action.payload.id,
      );
    },
  },
});

export const { addBrand, updateBrand, removeBrand } = brandSlice.actions;
export const getBrandList = (state: RootState) => state.brand.brandList;

export default brandSlice.reducer;
