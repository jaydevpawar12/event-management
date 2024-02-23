import React from 'react'
import { useGetHistoryQuery } from '../../redux/api/userApi'

const Account = () => {
    const { data } = useGetHistoryQuery()
    return <>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >UserId</th>
                    <th >PackageId</th>
                    <th >Payment Sattus</th>
                    <th >Payment doc</th>
                    <th >CouponId</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>{item.userId}</td>
                        <td>{item.packageId}</td>
                        <td>{item.paymentStatus ? "Comaplete" : "pending"}</td>
                        <td>
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.paymentDoc} `} height="50px" alt="" />
                        </td>
                        <td>{item.couponId}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}
export default Account