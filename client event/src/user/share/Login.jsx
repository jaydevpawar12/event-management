import React, { useEffect, useState } from 'react'
import { useLoginUserMutation } from '../../redux/api/authApi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Login = () => {
    const [user, setUser] = useState({})
    const [login, { data, isSuccess }] = useLoginUserMutation()

    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        login(user)
    }
    const navi = useNavigate()

    const { user: loggedInUser } = useSelector(state => state.auth)
    useEffect(() => {
        if (loggedInUser) {
            if (loggedInUser.role === 'admin') {
                navi("/admin")
            }
            if (loggedInUser.role === 'user') {
                navi("/account")
            }
        }
    }, [loggedInUser])

    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    {/* <pre>{JSON.stringify(userLogin, null, 2)}</pre> */}
                    <div class="card">
                        <div class="card-header">Login</div>
                        <form onSubmit={handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        type="text"
                                        value={user.email}
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
                                        onChange={handleChange}
                                        type="password"
                                        name='password'
                                        value={user.password}
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <Link to="/register" >Create Account</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login
