import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AdminCoupons,
  AdminLayout,
  AdminOrders,
  AdminPackages,
  AdminProtected,
  AdminReviews,
  AdminUsers,
  Dashboard
} from './admin'
import AdminContact from './admin/pages/AdminContact'
import UserLayout from './user/components/UserLayout'
import Home from './user/pages/Home'
import Register from './user/share/Register'
import Login from './user/share/Login'
import Account from './user/pages/Account'
import Details from './user/pages/Details'
import Payment from './user/pages/Payment'
import UserProtected from './user/components/UserProtected'
import Cart from './user/pages/Cart'
import AdminCms from './admin/pages/AdminCms'
import AdminCarousel from './admin/pages/AdminCarousel'


const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<UserLayout />}> */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<UserProtected compo={<Cart />} />} />
          <Route path='payment' element={<UserProtected compo={<Payment />} />} />
          <Route path='account' element={<UserProtected compo={<Account />} />} />
        </Route>

        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<AdminUsers />} />
          <Route path='coupons' element={<AdminCoupons />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='packages' element={<AdminPackages />} />
          <Route path='reviews' element={<AdminReviews />} />
          <Route path='contacts' element={<AdminContact />} />
          <Route path='cms' element={<AdminCms />} />
          <Route path='carousel' element={<AdminCarousel />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App