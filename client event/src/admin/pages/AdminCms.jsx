import React, { useState } from 'react'
import { useAddCmsMutation, useDeleteCmsMutation, useGetCmsQuery } from '../../redux/api/adminApi'

const AdminCms = () => {
    const { data } = useGetCmsQuery()
    const [cmsData, setCmsData] = useState({})
    const [addCms] = useAddCmsMutation()
    const [deleteCms] = useDeleteCmsMutation()
    
    const handleChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setCmsData({ ...cmsData, [name]: files[0] })
        } else {
            setCmsData({ ...cmsData, [name]: value })
        }
    }
    const handleSubmit = e => {
        console.log("CALLED");
        e.preventDefault()
        if (cmsData.brandname && cmsData.email && cmsData.mobile && cmsData.address && cmsData.socialMediaLinks && cmsData.logo) {
            const fd = new FormData()
            fd.append("brandname", cmsData.brandname)
            fd.append("mobile", cmsData.mobile)
            fd.append("address", cmsData.address)
            fd.append("email", cmsData.email)
            fd.append("link", cmsData.socialMediaLinks)
            fd.append("logo", cmsData.logo)
            addCms(fd)
        }
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Cms</div>
                        <form onSubmit={handleSubmit} >
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">Brand name</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        name='brandname'
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="Email" class="form-label">First Email</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="Mobile" class="form-label">Mobile</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        name='mobile'
                                        id="Mobile"
                                        placeholder="Enter Your Mobile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>

                                <div class="mt-2">
                                    <label for="address" class="form-label">Address</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        name='address'
                                        id="address"
                                        placeholder="Enter Your Address"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>

                                <div class="mt-2">
                                    <label for="logo" class="form-label">logo</label>
                                    <input
                                        onChange={handleChange}
                                        type="file"
                                        class="form-control"
                                        name='logo'
                                        id="logo"
                                        placeholder="Enter Your logo"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>



                                <div class="mt-2">
                                    <label for="socialMediaLinks" class="form-label">Media socialMediaLinkss</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        name='socialMediaLinks'
                                        id="socialMediaLinks"
                                        placeholder="Enter Your socialMediaLinks"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >name</th>
                    <th >mobile</th>
                    <th >email</th>
                    <th >Address</th>
                    <th >Logo</th>
                    <th >Links</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr>
                        <td>{i + 1}</td>
                        <td>{item.brandname}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.logo}`} height="100px" width="100px" alt="" />
                        </td>
                        <td>{item.socialMediaLinks}</td>
                        <td>
                            <button type="button" onClick={e => deleteCms(item._id)} class="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </>
}

export default AdminCms