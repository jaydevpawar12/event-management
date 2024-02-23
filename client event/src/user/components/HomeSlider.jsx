import React from 'react'
import { useGetCarouselQuery } from '../../redux/api/cmsApi'

const HomeSlider = () => {
    const { data } = useGetCarouselQuery()
    return <>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {
            data && <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner " style={{ height: "75vh" }}>
                    {data.map((item, i) => <div style={{ height: "75vh" }} class={` carousel-item  ${i === 0 && "active"} `}>
                        <img className='' src={`${import.meta.env.VITE_BASE_URL}/${item.image}`} alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{item.caption}</h5>
                        </div>
                    </div>)}

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        }
    </>
}

export default HomeSlider