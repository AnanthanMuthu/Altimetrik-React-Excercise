/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import ReactJson from 'react-json-view';

import { HeaderContext } from '@/pages/home';
import { updateBrand } from '@/store/brandSlice';
import { useAppDispatch } from '@/store/hooks';

import Brand from '../model/Brand';

function BrandItem({
  id,
  img,
  brandName,
  model,
  location,
  color,
  owners,
  manufacture,
  transmission,
  validupto,
  fitments,
  kms,
}: {
  id: number;
  img: string;
  brandName: string;
  model: string;
  location: string;
  color: string;
  owners: string;
  manufacture: string;
  transmission: string;
  validupto: string;
  fitments: string;
  kms: string;
}) {
  console.log('### BrandItem', id, img, brandName);

  const headerText = useContext(HeaderContext);
  console.log('### filter ', headerText);

  const [showModal, setShowModal] = React.useState(false);
  const [formValues, setFormValues] = React.useState<any>({});
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formvalues: Brand = {
      id,
      model: event.target.model.value,
      location: event.target.location.value,
      color: event.target.color.value,
      owners: event.target.owners.value,
      manufacture: event.target.manufacture.value,
      transmission: event.target.transmission.value,
      validupto: event.target.validupto.value,
      fitments: event.target.fitments.value,
      kms: event.target.kms.value,
      img,
      brandName,
    };
    console.log('### formvalues', id, img, brandName, formvalues);
    setFormValues(formvalues);

    dispatch(updateBrand(formvalues));
  };

  return (
    <>
      <div className="group relative w-full" onClick={() => setShowModal(true)}>
        <div className="flex max-w-80 flex-col gap-1 rounded-lg border-[1px] bg-white px-4 py-3">
          <img className="h-48 object-scale-down" src={img} alt={brandName} />
          <div className="text-center text-base">{brandName} </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6  w-3/5">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">{headerText}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative flex-auto p-6">
                    <div className="mb-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="model"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Model
                        </label>
                        <input
                          type="text"
                          id="model"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={brandName}
                          value={brandName}
                          disabled={!!brandName}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="location"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={location || 'Chennai'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="color"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Color
                        </label>
                        <input
                          type="text"
                          id="color"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={color || 'Black'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="owners"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          No of Owners
                        </label>
                        <input
                          type="text"
                          id="owners"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={owners || '1'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="manufacture"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Year of Manufacture
                        </label>
                        <input
                          type="text"
                          id="manufacture"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={manufacture || '2024'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="transmission"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Transmission
                        </label>
                        <input
                          type="text"
                          id="transmission"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={transmission || '4'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="validupto"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Insurance Valid upto
                        </label>
                        <input
                          type="text"
                          id="validupto"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={validupto || '2025'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="fitments"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          External Fitments
                        </label>
                        <input
                          type="text"
                          id="fitments"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={fitments || 'Fitments'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="kms"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Kms
                        </label>
                        <input
                          type="text"
                          id="kms"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder={kms || '10000'}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="photo"
                          className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                          Photo
                        </label>
                        <input
                          type="file"
                          id="photo"
                          className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0  file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                        />
                      </div>
                    </div>

                    {/* <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button> */}
                    <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                      <button
                        className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                        type="submit"
                        // onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
                {formValues?.model && (
                  <div className="p-20">
                    <h6>JSON Preview</h6>

                    <ReactJson src={formValues} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  );
}

export default BrandItem;
