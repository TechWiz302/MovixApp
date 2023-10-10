import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import SwitchTabs from '../../SwitchTabs/SwitchTabs'
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../Carousel/Carousel';

function Popular() {
    const [endpoint, setEndpoint] = useState("movie");
    const {data, loading} = useFetch(`/${endpoint}/popular`)

    console.log("Popular: ", data);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
     }

    return (
        <div className='carouselSection'>
            <ContentWrapper >
                <span className="carouselTitle">
                    What's Popular
                </span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default Popular