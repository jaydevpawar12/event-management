import React from 'react'
import { useGetOrdersQuery, useUpdateOrderMutation } from '../../redux/api/adminApi'

const AdminOrders = () => {
    const { data } = useGetOrdersQuery()
    const [updateOrder] = useUpdateOrderMutation()
    return <div className='px-5 py-3'>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >UserId</th>
                    <th >PackageId</th>
                    <th >PaymentStatus</th>
                    <th >PaymentDoc</th>
                    <th >CouponId</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.userId}</td>
                        <td>{item.packageId}</td>
                        <td>{item.paymentStatus}</td>
                        <td>
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.paymentDoc}`} height="50px" alt="" />
                        </td>
                        <td>{item.couponId}</td>
                        <td>
                            <button onChange={e => updateOrder}>Edit</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default AdminOrders