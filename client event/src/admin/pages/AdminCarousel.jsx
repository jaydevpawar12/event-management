import React, { useState } from 'react'
import { useAddCarouselMutation, useDeleteCarouselMutation, useGetCarouselQuery } from '../../redux/api/adminApi'

const AdminCarousel = () => {
    const { data } = useGetCarouselQuery()
    const [carouselData, setCarouselData] = useState()
    const [addCarousel] = useAddCarouselMutation()
    const [deleteCarousel] = useDeleteCarouselMutation()
    const handleChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setCarouselData({ ...carouselData, [name]: files[0] })
        } else {
            setCarouselData({ ...carouselData, [name]: value })
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (carouselData) {
            const fd = new FormData()
            fd.append("caption", carouselData.caption)
            fd.append("image", carouselData.image)
            addCarousel(fd)
        }
    }

    return <div className='conatiner px-5 py-3'>
        <div className='text-end m-5'>
            <button type="button" data-bs-toggle="modal" data-bs-target="#carouselModal" class="btn btn-warning">Add carousel</button>
        </div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Caption</th>
                    <th scope="col">Carousel Iamge</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope='row'>{i + 1}</th>
                        <td>{item.caption}</td>
                        <td>
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.image}`} height="100px" width="100px" alt="" />
                        </td>
                        <td>
                            <button type="button" onClick={e => deleteCarousel(item._id)} class="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


        <div class="modal fade" id="carouselModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 offset-sm-3">
                                    <div class="card">
                                        <div class="card-header">Home Slides</div>
                                        <form onSubmit={handleSubmit} >
                                            <div class="card-body">
                                                <div>
                                                    <label for="image" class="form-label">Choose Image</label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="file"
                                                        name='image'
                                                        class="form-control"
                                                        id="image"
                                                        placeholder="Enter your Slide"
                                                    />
                                                    <div class="valid-feedback">Looks good!</div>
                                                    <div class="invalid-feedback">Please choose a username.</div>
                                                </div>
                                                <div class="mt-2">
                                                    <label for="caption" class="form-label">Caption</label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='caption'
                                                        class="form-control"
                                                        id="caption"
                                                        placeholder="Enter Your Email"
                                                    />
                                                    <div class="valid-feedback">Looks good!</div>
                                                    <div class="invalid-feedback">Please choose a username.</div>
                                                </div>
                                                <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Add</button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default AdminCarousel