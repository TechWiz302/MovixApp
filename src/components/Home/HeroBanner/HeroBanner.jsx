import React, { useEffect, useState } from 'react'
import "./HeroBanner.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/UseFetch';
import { useSelector } from 'react-redux';
import Img from '../../lazyLoadImage/Img';
import ContentWrapper from '../../contentWrapper/ContentWrapper';



function HeroBanner() {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg)
  }, [data])

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  const buttonSearch = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  }


  return (
    <div className='heroBanner'>

      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer">
        
      </div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">
              Welcome
            </span>
            <span className="subTitle">
              Million of Movies, TV shows and people to discover.
              Explore Now
            </span>
            <div className="searchInput">
              <input type="text" name="" id="" placeholder='Search for movies or tv shows...' onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
              <button onClick={buttonSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

      </ContentWrapper>


    </div>
  )
}

export default HeroBanner
