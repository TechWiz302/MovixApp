import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import SwitchTabs from '../../SwitchTabs/SwitchTabs'
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../Carousel/Carousel';



function Trending() {

    const [endpoint, setEndpoint] = useState("day");
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
     }

    return (
        <div className='carouselSection'>
            <ContentWrapper >
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Trending