import React from 'react'
import "./Details.scss"
import useFetch from '../../hooks/UseFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailsBanner/DetailsBanner';
import Cast from './Cast/Cast';
import VideosSection from './VideosSection/VideosSection';
import Similar from './Carousels/Similar';
import Recommendation from './Carousels/Recommendation';



function Details() {

  const { mediaType, id } = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video={data?.results} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details