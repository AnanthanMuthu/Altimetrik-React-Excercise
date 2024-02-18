import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';
import { store } from '@/store/store';

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <main className="mt-20 flex min-h-screen justify-center">
          <Outlet />
        </main>
      </>
    </Provider>
  );
}

export default App;
