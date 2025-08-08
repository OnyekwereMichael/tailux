'use client';

import React, { useState } from 'react';

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState('Monthly');

  const options = [
    { id: 'daily', label: 'Daily' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' }
  ];

  return (
    <div className="flex flex-wrap" role="radiogroup">
      {options.map((option, index) => {
        const isSelected = selectedOption === option.label;
        return (
          <button
            key={option.id}
            className={`px-5 py-2 text-sm font-medium border border-gray-700 
              dark:border-gray-600 
              transition-all duration-200
              ${index === 0 ? 'rounded-l-lg' : ''}
              ${index === options.length - 1 ? 'rounded-r-lg' : ''}
              ${
                isSelected
                  ? 'bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white border-transparent shadow-md'
                  : 'bg-[#ffffff08] hover:bg-[#ffffff15] text-gray-400 dark:text-gray-300'
              }`}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setSelectedOption(option.label)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default RadioGroup;
