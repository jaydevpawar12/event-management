import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPackageDetailQuery } from '../../redux/api/publicApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const Details = () => {
    const { id } = useParams()
    console.log(id);
    const { data } = useGetPackageDetailQuery(id)
    const [count, setCount] = useState([0])
    const dispatch = useDispatch()
    
    return <div className='container'>

        <div className='m-4'>
            {
                data && <div className=' row border-1 border-danger rounded-5 border p-3 shadow-lg' style={{ height: "" }}
                >
                    <div className='col-sm-12 col-lg-6'>
                        <div>
                            <img className='rounded-4 shadow-lg' src={`${import.meta.env.VITE_BASE_URL}/${data.result.hero[count]}`} style={{ maxWidth: "350px" }} alt="" />
                        </div>
                        <div className='d-flex gap-1 mt-3 flex-wrap' >
                            {
                                data.result.hero.map((item, i) => <div>
                                    <img onClick={e => setCount(i)} height={100} className='rounded-4' src={`${import.meta.env.VITE_BASE_URL}/${item}`} width={100} alt="" />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 '>
                        <div className=' d-flex flex-column gap-3'>
                            <div>
                                <h1>{data.result.name}</h1>
                            </div>
                            <div><p><strong>Price $ :</strong>{data.result.price}</p>
                            </div>
                            <div>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                {/* <i class="bi bi-star-half"></i> */}
                            </div>
                            <div >
                                {/* {data.result.desc} */}
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta architecto beatae unde at quam non corporis, asperiores alias nisi placeat iste quae ex quisquam harum.</p>
                            </div>
                            <div className='d-flex gap-2'>
                               
                                <button onClick={e => dispatch(addToCart(data.result))} type="button" class="btn btn-warning">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* 
                   
                    
                   
                     */}
                </div>


            }
        </div>
    </div>
}

export default Details