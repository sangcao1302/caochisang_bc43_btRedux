import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import { Provider } from 'react-redux';
import {store} from "./ReduxSV/configStore"


import  SinhVien  from './Redux/SinhVien';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //      <Provider store={store}>
  //     <SinhVien/>
  // </Provider>
  // </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
           
              <Route path='' element={<SinhVien/>}></Route>
             

              {/* <Route path='*' element={<Navigate to={'/'} />}></Route> */}
            
            
        </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

