import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogoutUserMutation } from '../../redux/api/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart } from '../../redux/slices/cartSlice'
import { useGetCmsQuery } from '../../redux/api/cmsApi'

const UserNavbar = () => {
    const { data } = useGetCmsQuery()
    const [logout, { isSuccess }] = useLogoutUserMutation()
    const { user } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            dispatch(removeAllCart())
        }
    }, [isSuccess])
    return <>
        <nav class="navbar navbar-expand-lg bg-dark-subtle text-black sticky-top">
            <div class="container">
                <a class="navbar-brand fst-italic fw-bold " >{
                    data && data.result.map(item => <div>
                        <img src={`${import.meta.env.VITE_BASE_URL}/${item.logo}`} className='rounded-5 me-2' height="80px" width="70px" alt="" />
                        <span className='fs-3 text-align-center'>{item.brandname}</span>
                    </div>

                    )
                }</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="/">Home</Link>
                        <Link to="/account" class="nav-link" >Account</Link>
                        {
                            user && user.role === "admin" && <Link to="/admin" className='nav-link'>Admin</Link>
                        }
                    </div>
                    <div className='ms-auto'>
                       
                        <Link to="/cart" type="button" class="btn btn-outline-primary me-2">
                            <i className="bi bi-cart"></i>
                            {cart.length}
                        </Link>
                        {
                            user
                                ? <button type='button' className='m-2 btn btn-primary' onClick={logout} >
                                    <i className='bi bi-arrow-down-right'></i>Logout
                                </button>

                                : <Link to="/login" type="button" class="btn btn-primary">
                                    <i className="bi bi-lock"></i> Login
                                </Link>
                        }



                    </div>
                </div>
            </div>
        </nav>


    </>
}

export default UserNavbar