import React, { useState } from 'react'
import { useAddReviewMutation, useDeleteReviewMutation, useGetReviewsQuery, useUpdateReviewMutation } from '../../redux/api/adminApi'

const AdminReviews = () => {
    const { data } = useGetReviewsQuery()
    const [review, setReview] = useState({})
    const [addReview] = useAddReviewMutation()
    const [updateReview] = useUpdateReviewMutation()
    const [removeReview] = useDeleteReviewMutation()
    const handleChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setReview({ ...review, [name]: files[0] })
        } else {
            setReview({ ...review, [name]: value })
        }
    }
    const updateReviewChange = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setReview({ ...review, [name]: files[0] })
        } else {
            setReview({ ...review, [name]: value })
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (review.rating && review.desc) {
            addReview(review)
        }
    }
    const reviewUpdateSubmit = e => {
        e.preventDefault()
        // if (review.rating && review.desc) {
        // }
        updateReview(review)
    }
    return <div className='px-5 py-3'>
        <div className='text-end mb-5'>
            <button className=' btn btn-primary' data-bs-toggle="modal" data-bs-target="#reviewModal">Add Review </button>
        </div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th >#</th>
                    <th >userId</th>
                    <th >Rating</th>
                    <th >desc</th>
                    <th >image</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.result.map((item, i) => <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        {/* <td>{item.userId}</td> */}
                        <td>{item.rating}</td>
                        <td>{item.desc}</td>
                        <td><img src={`${import.meta.env.VITE_BASE_URL}/${item.hero}`} alt="" width="50" height="50" /></td>
                        <td>
                            <button onClick={e => setReview(item)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editreviewModal">Edit</button>
                            <button className="btn btn-danger" onClick={removeReview(item._id)} >Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <div class="modal fade" id="reviewModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <pre>{JSON.stringify(review, null, 2)}</pre>

                        <div class="modal-body">
                            {/* <input onChange={handleChange} className='form-control' placeholder='text' type="text" name="userId" id="" /> */}
                            <input onChange={handleChange} className='form-control' placeholder='number' type="number" name="rating" id="" />
                            <input onChange={handleChange} className='form-control' placeholder='text' type="text" name="desc" id="" />
                            <input onChange={handleChange} className='form-control' placeholder='file' type="file" name="hero" id="" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editreviewModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={reviewUpdateSubmit} >
                        <pre>{JSON.stringify(review, null, 2)}</pre>

                        <div class="modal-body">
                            {/* <input onChange={handleChange} className='form-control' placeholder='text' type="text" name="userId" id="" /> */}
                            <input onChange={updateReviewChange} className='form-control' placeholder='number' type="number" name="rating" id="" />
                            <input onChange={updateReviewChange} className='form-control' placeholder='text' type="text" name="desc" id="" />
                            <input onChange={updateReviewChange} className='form-control' placeholder='file' type="file" name="hero" id="" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AdminReviews