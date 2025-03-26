import React, { useEffect, useState } from 'react';
import Gaget from '../gaget/Gaget';

const Gagets = () => {
    const [item, setitem] = useState([])
    useEffect(() => {

        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setitem(data))
    },
        [])
    return (
        <div>
            <h2>This section from gadgets {item.length}</h2>

            <div className='main ' >
                <div>
                    <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
                </div>
                <div className='flex'>
                    <div className='btn-container p-3.5 h-[440px] bg-gray-50 mt-8 mr-2.5 rounded-lg '>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">All Products</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Laptops</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Phones</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Accessories</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Smart Watches</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Macbook</button></div>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl">Charger</button></div>


                    </div>
                    <div className="product-conatiner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2.5 gap-2.5 ">
                        {
                            item.map(i => <Gaget gagetlist={i}></Gaget>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Gagets;