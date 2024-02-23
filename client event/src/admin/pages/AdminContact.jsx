import React from 'react'
import { useGetContactQuery } from '../../redux/api/adminApi'

const AdminContact = () => {
    const { data } = useGetContactQuery()

    return <div className='px-5 py-3'>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Message</th>
                    <th scope="col">Budget</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.message}</td>
                        <td>{item.budget}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default AdminContact