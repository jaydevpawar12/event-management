import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../../redux/api/authApi'


const Register = () => {
    const [userData, setUserData] = useState({})

    const [addUser, { isSuccess }] = useRegisterUserMutation()
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (userData.name && userData.email && userData.password && userData.cpassword) {
            addUser(userData)
        }
    }
    const navi = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navi("/login")
        }
    }, [isSuccess])

    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <form onClick={handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        name='name'
                                        onChange={handleChange}
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="mobile" class="form-label">Mobile Number</label>
                                    <input
                                        name='mobile'
                                        onChange={handleChange}
                                        type="number"
                                        class="form-control"
                                        id="mobile"
                                        placeholder="Enter your mobile number"
                                    />

                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        name='email'
                                        onChange={handleChange}
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
                                        name='password'
                                        onChange={handleChange}
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
                                    >Confirm Password</label>
                                    <input
                                        name='cpassword'
                                        onChange={handleChange}
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
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link to="/login" href="#">Login</Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register