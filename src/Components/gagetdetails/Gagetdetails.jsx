
import { useLoaderData, useParams } from 'react-router';
import back from '../../assets/banner.jpg'
import { getItem } from '../../script/Local';

const Gagetdetails = () => {

    const { productId } = useParams()
    const product = useLoaderData()
    const pId = parseInt(productId)

    console.log(product)

    // const param = useParams()

    const totalP = product.find(p => p.productId === pId)
    console.log(totalP)
    const { product_image, category, product_title, specification, price, availability, description, rating } = totalP;

    const handleadd = (id) => {

        getItem(id)
    }



    return (
        <div className=''>
            <div className='bg-[#9538E2] h-[450px] rounded'>
                <div className="text-section text-center ">
                    <h2 className='text-3xl font-bold text-white pt-2.5 '>Product Details</h2>
                    <p className='text-white font-light text-center pt-2.5'>  Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div>
                <div className=' flex justify-center -mt-52  border-amber-300      ' >

                    <div className="hero bg-base-200  w-[1180px]  rounded-2xl ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={product_image}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold ">{product_title}</h1>
                                <p className="py-6">
                                    <p className='font-bold'> price: {price}$</p>

                                    {description}

                                    <p> <span className='text-l font-bold mb-2.5'>specification:</span>
                                        {
                                            specification.map(p => <h2> {p}</h2>)
                                        }
                                    </p>
                                    <p className='font-bold'>Rating</p>
                                    <div className='flex  '>

                                        <p> {rating}</p>

                                        <div className="rating rating-md">
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" aria-label="5 star" />
                                        </div>
                                    </div>
                                </p>
                                <button onClick={() => handleadd(productId)} className="btn btn-primary rounded-2xl  ">Add To cart</button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='h-[380px] bg-gray-100 -mt-76 mb-3.5'>
                    {/* <h2>gg</h2> */}

                </div>
            </div>

        </div >
    );
};

export default Gagetdetails;