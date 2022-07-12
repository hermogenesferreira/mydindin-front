import React from 'react';
import LayoutBase from '../components/LayoutBase';
const ErrorPage = () => {
  return (
    <LayoutBase>
      <div className="grid h-screen place-content-center font-bold text-2xl place-items-center">
        <p>404 ERROR!</p>
        <p>PAGE NOT FOUND.</p>
      </div>
    </LayoutBase>
  );
};

export default ErrorPage;
