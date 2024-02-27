admin
    CRM
    packages CRUD  (make it dynamic for diffrent forms)
    user CRUD
    offer and coupons

user
    register
    login
    booking
    history
    invoice pdf

    * send email / sms register, invoice

reviews


    user
        name*
        email*
        mobile
        password*

    package
        name
        price
        desc
        images array

    coupon
        name
        code
        tnc

    orders
        userId
        packageId []
        paymentStatus
        couponId
        dateTime

    reviews
        userId
        rating
        desc
        images []
