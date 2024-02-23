import React, { useEffect, useState } from 'react'
import { useGetPackageDetailQuery, useGetPackagesQuery } from '../../redux/api/publicApi'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { useAddOrderMutation } from '../../redux/api/orderApi'
import { useSelector } from 'react-redux'

const Payment = () => {
    const { cart } = useSelector(state => state.cart)
    const [addOrder, { isSuccess }] = useAddOrderMutation()
    // const { data } = useGetPackagesQuery()
    const [paymentData, setPaymentData] = useState({})
    const handleChange = e => {
        const { files } = e.target
        setPaymentData({ ...paymentData, payment: files[0] })

    }
    const handleSubmit = e => {
        const fd = new FormData()
        fd.append("packageId", id),
            fd.append("payment", paymentData.payment)
        addOrder(fd)
    }
    const navi = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            return navi("/account")
        }

    }, [isSuccess])

    return <>

        <div className='d-lg-flex m-5  '  >
            <div class="col-md-12 col-lg-6 p-lg-3 d-flex flex-column gap-3">
                <div class="">

                    <div>
                        <img src="data:image/png;base64,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" alt="" />
                    </div>

                </div>
                <div class=" fw-semibold">Scan Here</div>
                <input onChange={handleChange} type="file" name="payment" id="" />
            </div>
            <div className='col-md-12 col-lg-6 p-sm-3'>
                {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
                {
                    cart && cart.map(item => <div class="d-flex justify-content-between gap-2 border-2 p-4 border">
                        <div class="">
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.hero[0]}`} className='rounded-4' height="100px" width="100px" alt="" />
                        </div>
                        <div class="">{item.name}</div>
                        <div class="">{item.price}</div>

                    </div>
                    )
                }
                <div class="">  <button
                    onClick={e => addOrder({ packageId: cart.map(item => item._id) })}
                    // onClick={handleSubmit}
                    className='btn btn-primary'>
                    Place My Order
                </button></div>
                {/* {
                    data && <>
                        <div class="card">
                            <div class="card-header">{data.result.name}</div>
                            <div class="card-body">
                                <img src={`http://localhost:5000/${data.result.hero}`} height="250px" alt="" />
                            </div>

                        </div>
                        <div className='d-flex gap-5'>
                            <div>
                                <button
                                    // onClick={e => addOrder({ packageId: cart.map(item => item._id) })}
                                    onClick={handleSubmit}
                                    className='btn btn-primary'>
                                    Place My Order
                                </button>
                            </div>
                            <div>
                                <input onChange={handleChange} type="file" name="payment" id="" />
                            </div>
                        </div>



                    </>
                } */}
            </div>
        </div>
    </>
}

export default Payment