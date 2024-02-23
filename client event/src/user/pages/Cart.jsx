import React, { useEffect, useState } from 'react'
import { useGetPackageDetailQuery } from '../../redux/api/publicApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart, removeFromCart } from '../../redux/slices/cartSlice'

const Cart = () => {
    // const { id } = useParams(id)
    // const { data } = useGetPackageDetailQuery(id)
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [value, setValue] = useState()
    useEffect(() => {
        // dispatch(())
    }, [])
    const Total = cart.reduce((previousValue, currentValue) => {
        return (previousValue + currentValue.price)
    }, 0)
    console.log(Total);

    const GstValue = (Total * 18) / 100
    const GrandTotal = GstValue + Total
    console.log(GrandTotal)

    const { user } = useSelector(state => state.auth)

    const navi = useNavigate()

    const handleClick = e => {
        if (user === null) {
            return navi("/login")
        } else {
            return navi(`/payment`)
        }
    }

    return <div className='container'>
        <div className="container my-3">
            <div className="text-end">
                <button type="button" onClick={e => dispatch(removeAllCart())} class="btn btn-danger">Delete All </button>

            </div>
            <div className="row flex-wrap   ">
                <div className="col-md-12 col-lg-6 p-lg-3  ">
                    {
                        cart && cart.map(item => <div className='d-flex gap-4 mb-2 w-100 border-1 border-danger rounded-2 bg-light-subtle p-2 shadow-lg  ' >
                            <div>
                                {/* <img src={item.hero} height="100px" width="100px" alt="" /> */}
                                <img src={`${import.meta.env.VITE_BASE_URL}/${item.hero[0]}`} className='rounded-4' height="100px" width="100px" alt="" />
                            </div>
                            <div className='d-flex flex-column  w-100'>
                                <div className='d-flex  justify-content-between '>
                                    {/* <div>1</div> */}
                                    {/* <div className='bg-danger ms-auto'>2</div> */}
                                    <strong>{item.name}</strong>
                                    <strong className='ms-auto'>Price : ${item.price}</strong>
                                </div>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-danger  align-items-end" onClick={e => dispatch(removeFromCart(item._id))}>Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                    {/* <ul class="list-group  gap-5">
                        {
                            cart && cart.map(item => <li className='list-group-item d-flex  justify-content-between'>

                               
                                <h5>{item.name}</h5>
                                <p>${item.desc}</p>
                                <p>${item.price}</p>
                                <button type="button" class="btn btn-danger  align-items-end" onClick={e => dispatch(removeFromCart(item._id))}>Delete</button>

                            </li>
                            )
                        }
                    </ul> */}
                </div>
                <div className=" col-md-12 col-lg-6 p-sm-3 shadow-lg ">
                    <div class="card">
                        <div class="card-header"><strong>Order Summary</strong>

                        </div>

                        <div class="card-body d-grid gap-2">
                            <h6>Package Price:$ {Total.toFixed(2)}</h6>
                            <h6>GST:$ {GstValue.toFixed(2)}</h6>
                            <h6>Total Amount:$ {GrandTotal.toFixed(2)}</h6>
                            {/* <h6>Total:${Gst}</h6> */}
                            <button onClick={handleClick} type="button" class="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
}

export default Cart