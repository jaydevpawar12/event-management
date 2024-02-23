import React from 'react'
import { useActivateUserMutation, useDeactivateUserMutation, useGetUsersQuery } from '../../redux/api/adminApi'

const AdminUsers = () => {
    const { data } = useGetUsersQuery()
    const [activate] = useActivateUserMutation()
    const [deactivate] = useDeactivateUserMutation()
    const handleChange = e => {
        e.target.checked ? deactivate() : activate()
    }
    return <>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>
                            <div class="form-check form-switch">
                                <input onChange={e => handleChange} class="form-check-input" type="checkbox" id="id" />
                                <label class="form-check-label" for="id">status</label>
                            </div>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AdminUsers