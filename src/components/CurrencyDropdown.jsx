import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const CurrencyDropdown = ({
  favorites,
  currencies,
  currency,
  setCurrency,
  title,
  handleFavourite,
}) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {favorites?.map((favorite) => {
            return (
              <option className="bg-gray-200" value={favorite} key={favorite}>
                {favorite}
              </option>
            );
          })}
          {currencies
            ?.filter((c) => !favorites.includes(c))
            ?.map((currency) => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
        </select>
        <button
          onClick={() => handleFavourite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          {favorites.includes(currency) ? <HiStar className="text-yellow-500" fontSize='1.1rem' /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
