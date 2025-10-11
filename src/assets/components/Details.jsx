import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Photo from './photo';

export default function Detials() {

  const location = useLocation();
  const navigate = useNavigate();

  const { empolyees } = location.state || {};

  if (!empolyees) {
    return <p>no data found.</p>
  }
  return (
    <><div className='max-w-md mx-auto mt-10 p-6 bg-pink-50 rounded-xl shadow-lg border border-pink-300'>
      <div>
        <h2 className="text-2xl font-bold text-pink-600 mb-4 ml-[6rem]">Employee Details</h2>
        <ul className='space-y-3 text-pink-700'>
          <li><strong>company : </strong>{empolyees[0]}</li>
          <li><strong>post : </strong>{empolyees[1]}</li>
          <li><strong>city : </strong>{empolyees[2]}</li>
          <li><strong>no : </strong>{empolyees[3]}</li>
          <li><strong>Date : </strong>{empolyees[4]}</li>
          <li><strong>rate : </strong>{empolyees[5]}</li>
        </ul>
      </div>
      <div className='mt-6 text-center'>
        <button className='bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300'
          onClick={() => navigate("/Photo")}>
          Click pic</button>
      </div>
    </div>
    </>
  )
}
