import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Header from './components/Header/Header';
import { Home, Footer, SearchResult, Explore, Error, Details } from "./components"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);


  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async() => {
    let promises = [];
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    });

    dispatch(getGenres(allGenres))
  }



  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
