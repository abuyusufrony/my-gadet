import React from 'react';

const Baneer = () => {
    return (
        <div className='w-full h-[640px] bg-[#9538E2]' >
            <h2 className='text-5xl'>this section are from banner</h2>
            <div cla>
                <h2 className='text-6xl text-white px-15 text-center  font-bold mt-9 '>
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories


                </h2>
                <p className=' text-white px-15 text-center text-lg mt-11 font-bold'>Explore the latest gadgets that will take your experience <br /> to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='flex justify-center '>
                    <button className="btn text-[#9538E2] rounded-2xl   mt-3.5 ">Shop Now</button>
                </div>
            </div>

        </div>
    );
};

export default Baneer;