import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ToliqMalumod({harit}) {
  let navlink = useNavigate();
  let datas = JSON.parse(localStorage.getItem("datas")) || [];
  const [mainImage, rasimOzgartirish] = useState(datas.image4[0]);

  function haridim() {
    harit(1)
    const storedData = localStorage.getItem("haridlarim");
    let existingData = JSON.parse(storedData) || [];
    let newData = datas;
    existingData.push(newData);
    localStorage.setItem("haridlarim", JSON.stringify(existingData));
    navlink("/");
  }

  function habarlar(e123) {
    const existingData = localStorage.getItem("habar");
    let data1212 = existingData ? JSON.parse(existingData) : [];
    data1212.push(e123);
    localStorage.setItem("habar", JSON.stringify(data1212));
  }

  return (
    <div className="bg-base-100 py-[60px]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <button onClick={() => rasimOzgartirish(datas.image4[0])}>
                <img
                  src={datas.image4[0]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              </button>
              <button onClick={() => rasimOzgartirish(datas.image4[1])}>
                <img
                  src={datas.image4[1]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              </button>
              <button onClick={() => rasimOzgartirish(datas.image4[2])}>
                <img
                  src={datas.image4[2]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              </button>
              <button onClick={() => rasimOzgartirish(datas.image4[3])}>
                <img
                  src={datas.image4[3]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{datas.name}</h2>
            <p className="text-gray-600 mb-4">BREND: {datas.brend}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${datas.chegirma}</span>
              <span className="text-gray-500 line-through">${datas.narh}</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Other SVG icons */}
            </div>
            <p className="text-gray-700 mb-6">{datas.text}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <button onClick={() => { haridim(); habarlar(`Tabriklayman siz harid qildinggiz siz sotib olgan narsa ${datas.name} 😁`) }} className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Qoshimcha malumodlar:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Lorem ipsum dolor sit . Autem repellat quae odio,  </li>
                <li> Autem repellat quae odio, aspernatur inventore</li>
                <li>aspernatur inventore commodi temporibus</li>
                <li>alias in quo molestias!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToliqMalumod;
