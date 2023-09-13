// CustomRouter.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const CustomRouter = ({ children }) => (
  <BrowserRouter basename="/front-end-capstone-meta-x-coursera">
    {children}
  </BrowserRouter>
);

export default CustomRouter;
