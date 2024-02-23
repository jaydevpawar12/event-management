import React, { useRef, useState } from 'react'

import HomeSlider from '../components/HomeSlider'
import { useGetPackagesQuery } from '../../redux/api/publicApi'
import { Link } from 'react-router-dom'
import { useGetCmsQuery } from '../../redux/api/cmsApi'
import { useAddContactMutation } from '../../redux/api/contactApi'

const Home = () => {
    const { data } = useGetPackagesQuery()

    return <>
        <HomeSlider />
        <div className='container'>
            <div className='row m-2'>

                {
                    data && data.result.map(item => <div className='col-lg-4 col-md-6  col-sm-12s'>
                        <div className='col-'>
                            <Link className='text-decoration-none' to={`/details/${item._id}`}>
                                <div class="card ">
                                    <div class="card-header bg-dark-subtle text-center"> <strong>{item.name}</strong></div>
                                    <div class="card-body bg-danger-subtle">
                                        <div className='d-flex  justify-content-center align-items-center'>
                                            <img className='rounded-4' src={`${import.meta.env.VITE_BASE_URL}/${item.hero[0]}`} height="250px" width="250px" alt="" />
                                        </div>

                                    </div>
                                    <div class="card-footer bg-dark-subtle text-center"><strong>{item.desc}</strong></div>
                                </div>
                            </Link>
                        </div>

                    </div>)
                }
            </div>
        </div>
        <Footer />
    </>
}
const Footer = () => {
    const { data } = useGetCmsQuery()
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        budget: ""
    })
    const [addContact] = useAddContactMutation()
    const handleChange = e => {
        const { name, value } = e.target
        setContactData({ ...contactData, [name]: value })
    }
    const ref = useRef(null);
    const handleSubmit = e => {
        e.preventDefault()
        addContact(contactData)
        setContactData({
            name: "",
            email: "",
            mobile: "",
            message: "",
            budget: ""
        })
    }

    return <div div className='bg-dark-subtle'>
        {/* <pre>{JSON.stringify(contactData)}</pre> */}
        <div class="container">
            <div class="row">
                <div class="p-3 col-lg-6 col-sm-12 ">
                    <div class="card">
                        <div class="card-header text-center"><strong>Get Enquiry Call</strong></div>
                        <form onSubmit={handleSubmit} >
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        ref={ref}
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        value={contactData.name}
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        ref={ref}
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={contactData.email}
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="mobile" class="form-label">Mobile Number</label>
                                    <input
                                        ref={ref}
                                        type="text"
                                        name="mobile"
                                        onChange={handleChange}
                                        value={contactData.mobile}
                                        class="form-control"
                                        id="mobile"
                                        placeholder="Enter Your mobile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div className='mt-2'>
                                    <select class="form-select" onChange={handleChange}
                                        name='budget' ref={ref} value={contactData.budget}>
                                        <option selected>Choose Your Budget</option>
                                        <option>10,000</option>
                                        <option >50,000</option>
                                        <option >1,00,000</option>
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <div>
                                        <label for="textarea" class="form-label">Requirement Message</label>
                                        <textarea onChange={handleChange}
                                            class="form-control" ref={ref} value={contactData.message} placeholder="Enter Your message" name='message' id="textarea"></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-info w-100 mt-3">
                                    Get Call
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='p-3 col-lg-6 col-sm-12 '>
                    {
                        data && data.result.map(item => <div className='p-4 '>
                            <div>
                                <h2>{item.brandname}</h2>
                            </div>
                            <div>
                                <strong><i class="bi bi-telephone-fill"></i> : {item.mobile}</strong>
                            </div>
                            <div>
                                <strong><i class="bi bi-envelope-at-fill"></i> : {item.email}</strong>
                            </div>
                            <div>
                                <p> <i class="bi bi-geo-alt-fill"></i> {item.address}</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
        {/* <div className=' w-100 h-100 bg-dark-subtle'  >
            <div className='container  '>
                <div className='col-'>
                   
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 offset-sm-3">
                                <div class="card">
                                    <div class="card-header">Enquiry</div>
                                    <div class="card-body">
                                        <div>
                                            <label for="name" class="form-label">First name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please choose a username.</div>
                                        </div>
                                        <div class="mt-2">
                                            <label for="email" class="form-label">First Email</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="email"
                                                placeholder="Enter Your Email"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please choose a username.</div>
                                        </div>
                                        <div class="mt-2">
                                            <label for="password" class="form-label">Password</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="password"
                                                placeholder="Enter Your Password"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">Please choose a password.</div>
                                        </div>
                                        <div class="mt-2">
                                            <label for="cpassword" class="form-label"
                                            >Confirm Password</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="cpassword"
                                                placeholder="Confirm Your Password"
                                            />
                                            <div class="valid-feedback">Looks good!</div>
                                            <div class="invalid-feedback">
                                                Please Recheck Your Password.
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary w-100 mt-3">
                                            Signup
                                        </button>
                                        <p class="text-center mt-3">
                                            Already Have Account? <a href="#">Login</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
}

export default Home