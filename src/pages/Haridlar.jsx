import React, { useState, useEffect } from 'react';

function Haridlar() {
    // Initialize state with data from localStorage
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    console.log(data)
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("haridlarim"));
        if (storedData) {
            setData(storedData);
            calculateTotal(storedData); // Calculate total on initial load
        }
    }, []);

    function tozalash(id) {
        console.log("Removing item with id:", id);
        const updatedData = data.filter((item) => item.id !== id);
        console.log(updatedData)
        // Update state with the filtered data
        setData(updatedData);
        
        // Save the updated data back to localStorage
        localStorage.setItem("haridlarim", JSON.stringify(updatedData));
        
        // Recalculate the total after deletion
        calculateTotal(updatedData);
    }

    function calculateTotal(dataArray) {
        const totalPrice = dataArray.reduce((sum, item) => Number(sum) + Number(item.narh), 0);
        localStorage.setItem("narh",totalPrice)
        console.log(totalPrice)
        setTotal(totalPrice);
    }

    return (
        <div>
            <div className="bg-base-200 h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex items-center flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-base-200 rounded-lg shadow-md p-6 mb-4 div-32">
                                <table className="w-full">
                                    <thead>
                                        <tr className='div-31'>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Malumod</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                            <th className="text-left font-semibold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item,id) => (
                                            <tr key={id} className='div-31 tr'>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <img className="h-16 w-16 mr-4" src={item.image} alt="Product" />
                                                        <span className="font-semibold">{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">{item.narh}$</td>
                                                <td className="py-4">{item.text}</td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                        <span className="text-center w-8">1</span>
                                                        <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <button onClick={() => tozalash(item.id)} className="btn button10 z-50 btn-ghost btn-circle">
                                                        <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" alt="delete" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-base-200 rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                {data.map((item) => (
                                    <div key={item.id} className="flex justify-between mb-2">
                                        <span>{item.name}</span>
                                        <span>{item.narh}$</span>
                                    </div>
                                ))}
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${total}</span>
                                </div>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Haridlar;
