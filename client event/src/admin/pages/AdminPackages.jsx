import React, { useState } from 'react'
import { useAddPackageMutation, useGetPackagesQuery, useUpdatePackageMutation } from '../../redux/api/adminApi'

const AdminPackages = () => {
    const { data } = useGetPackagesQuery()
    const [addPackage] = useAddPackageMutation()
    const [updatePackage] = useUpdatePackageMutation()
    const [packageData, setPackageData] = useState({
        hero: []
    })
    const [inp, setInp] = useState([1])
    const handleSubmit = e => {
        console.log("click");
        e.preventDefault()
        if (packageData.name && packageData.price && packageData.desc) {
            const fd = new FormData()
            fd.append("name", packageData.name)
            fd.append("price", packageData.price)
            fd.append("desc", packageData.desc)

            for (const item of packageData.hero) {
                fd.append("hero", item)
            }

            addPackage(fd)
        }

    }
    const upadatePackageSubmit = e => {
        console.log("click");
        e.preventDefault()
        if (packageData.name && packageData.price && packageData.desc) {
            // const fd = new FormData()
            // fd.append("name", packageData.name)
            // fd.append("price", packageData.price)
            // fd.append("desc", packageData.desc)
            // fd.append("hero", packageData.hero)
            // fd.append("_id", packageData._id)

            updatePackage(packageData)
        }

    }
    const handleChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {

            setPackageData({ ...packageData, [name]: [...packageData[name], files[0]] })
        } else {
            setPackageData({ ...packageData, [name]: value })
        }

        console.log(packageData)
    }
    const updatePackageChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {

            setPackageData({ ...packageData, [name]: files[0] })
        } else {
            setPackageData({ ...packageData, [name]: value })
        }
    }
    return <div className='container px-5 py-3'>
        <div className="text-end mb-5">
            <button type="button" data-bs-toggle="modal" data-bs-target="#packageModal" class="btn btn-primary">Add</button>
        </div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>desc</th>
                    <th>publish</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td><img src={`${import.meta.env.VITE_BASE_URL}/${item.hero}`} alt="" width="50" height="50" /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.desc}</td>
                        <td>{item.publish ? "Publish" : "Draft"}</td>
                        <td>
                            <button onClick={e => setPackageData(item)} type="button" class="mx-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPackageModal">Edit</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


        <div class="modal fade" id="packageModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose Packages</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <pre>{JSON.stringify(packageData, null, 2)}</pre>
                        <div class="modal-body d-flex flex-column gap-2 ">
                            {
                                inp && inp.map((item, i) => <div className='btn btn-group'>
                                    <input className='form-control' onChange={handleChange} type="file" placeholder='' name="hero" id="" />
                                    {
                                        i === 0
                                            ? <button className='btn btn-info' onClick={e => setInp(inp.length < 5 ? [...inp, 1] : inp)}>+</button>
                                            : <button className='btn btn-danger' onClick={e => setInp(inp.filter((item, index) => index !== i))}>-</button>
                                    }

                                </div>
                                )
                            }

                            <input className='form-control' onChange={handleChange} placeholder='Enter Package Name' type="text" name="name" />
                            <input className='form-control' onChange={handleChange} type="number" placeholder='Package Price' name="price" />
                            <input className='form-control' onChange={handleChange} type="text" placeholder='desc' name="desc" />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Addd Package</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="modal fade" id="editPackageModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose Packages</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={upadatePackageSubmit}>
                        <pre>{JSON.stringify(packageData, null, 2)}</pre>
                        <div class="modal-body d-flex flex-column gap-2 ">
                            <input className='form-control' onChange={updatePackageChange} type="file" placeholder='' name="hero" id="" />
                            <input className='form-control' onChange={updatePackageChange} placeholder='Enter Package Name' type="text" name="name" />
                            <input className='form-control' onChange={updatePackageChange} type="number" placeholder='Package Price' name="price" />
                            <input className='form-control' onChange={updatePackageChange} type="text" placeholder='desc' name="desc" />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Addd Package</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>




    </div>



}





export default AdminPackages