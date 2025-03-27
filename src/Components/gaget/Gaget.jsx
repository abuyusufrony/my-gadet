import React from 'react';
import { Link } from 'react-router';

const Gaget = ({ gagetlist }) => {
    const { product_image, product_title, price, productId } = gagetlist



    return (
        <div>
            {/* <h2>This from gaget</h2> */}
            <div className='card-conatiner '>

                <div className="card bg-slate-300 w-96 shadow-sm p-8 mt-6  ">
                    <figure className=' bg-gray-100   py-8 rounded-2xl'>
                        <img className='h-[196px] rounded-2xl'
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p>Price: {price}$</p>
                        <Link to={`/Gaget/${productId}`}>
                            <div className="card-actions ">
                                <button className="text-[#9538E2] border-2 rounded-2xl p-1.5 font-bold cursor-pointer hover:">More Details</button>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Gaget;