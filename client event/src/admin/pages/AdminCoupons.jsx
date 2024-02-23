import React, { useState } from 'react'
import { useAddCouponMutation, useGetCouponsQuery, useUpdateCouponsMutation } from '../../redux/api/adminApi'

const AdminCoupons = () => {
    const { data } = useGetCouponsQuery()
    const [addCoupon] = useAddCouponMutation()
    const [updateCoupon] = useUpdateCouponsMutation()
    const [coupon, setCoupon] = useState({})
    const handleChange = e => {
        const { name, value } = e.target

        setCoupon({ ...coupon, [name]: value })

    }
    const updateChange = e => {
        const { name, value } = e.target

        setCoupon({ ...coupon, [name]: value })

    }
    const handleSubmit = e => {
        e.preventDefault()
        addCoupon(coupon)
    }
    const updateSubmit = e => {
        e.preventDefault()
        updateCoupon(coupon)
    }
    return <div className='px-5 py-3'>
        <div className='text-end mb-5'>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#couponModal">Add Coupons</button>
        </div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >name</th>
                    <th >code</th>
                    <th >tnc</th>
                    <th >validity</th>
                    <th >Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.tnc}</td>
                        <td>{item.validity}</td>
                        <td>
                            <button
                                onClick={e => setCoupon(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal" className='btn btn-warning'>edit</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


        <div class="modal fade" id="couponModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <pre>{JSON.stringify(coupon, null, 2)}</pre>
                        <div class="modal-body d-flex flex-column gap-2">
                            <input onChange={handleChange} type="text" className='form-control' placeholder='name' name="name" id="" />
                            <input onChange={handleChange} type="text" className='form-control' placeholder='code' name="code" id="" />
                            <input onChange={handleChange} type="text" className='form-control' placeholder='tnc' name="tnc" id="" />
                            <input onChange={handleChange} type="date" className='form-control' placeholder='validity' name="validity" id="" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">add coupon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="updateModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={updateSubmit} >
                        <pre>{JSON.stringify(coupon, null, 2)}</pre>
                        <div class="modal-body d-flex flex-column gap-2">
                            <input onChange={updateChange} type="text" className='form-control' placeholder='name' name="name" id="" />
                            <input onChange={updateChange} type="text" className='form-control' placeholder='code' name="code" id="" />
                            <input onChange={updateChange} type="text" className='form-control' placeholder='tnc' name="tnc" id="" />
                            <input onChange={updateChange} type="date" className='form-control' placeholder='validity' name="validity" id="" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">add coupon</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AdminCoupons