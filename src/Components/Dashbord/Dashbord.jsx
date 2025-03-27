import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { setItem } from '../../script/Local';
import Gaget from '../gaget/Gaget';

const Dashbord = () => {



    const allpro = useLoaderData()
    console.log(allpro)
    const [product, setProduct] = useState([])

    const totalProducts = product.length;
    const totalPrice = product.reduce((sum, item) => sum + item.price, 0);


    useEffect(() => {
        const stringObject = setItem()
        const stringObjectInt = stringObject.map(s => parseInt(s))
        const addString = allpro.filter(a => stringObjectInt.includes(a.productId))

        setProduct(addString)

    }, [])

    const sorthandle = (sr) => {

        if (sr) {
            const sortList = [...product].sort((a, b) => a.price - b.price)
            setProduct(sortList)

        }
    }
    return (
        <div>

            <div>

                <div className='bg-[#9538E2] h-[250px] rounded'>
                    <div className="text-section text-center ">
                        <h2 className='text-3xl font-bold text-white pt-2.5 '>Dashboard</h2>
                        <p className='text-white font-light text-center pt-2.5'>  Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                        <div>  <button className="btn mt-1.5 bg-gray-200 rounded-2xl text-[#9538E2]">Phones</button></div>
                    </div>



                </div>

                <progress className="progress w-full"></progress>
                <div className=' flex justify-between'>
                    <h2 className='text-xl font-bold text-center bg-slate-100 '>Dashborad List are : </h2>

                    <button onClick={() => { sorthandle('price') }} className="btn">Sort by price</button>
                    <div className="bg-white p-2 rounded-lg shadow">
                        <span className="font-bold ">
                            Total: {totalProducts} items (${totalPrice.toFixed(2)})
                        </span>
                    </div>

                </div>
                <ul>
                    {
                        product.map(p => <Gaget gagetlist={p}></Gaget>)
                    }
                </ul>

                <div className="join grid grid-cols-2">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>

            </div>


        </div>

    );
};

export default Dashbord;

