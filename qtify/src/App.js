import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Outlet } from "react-router-dom";
import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
  fetchFAndQs
} from "./api/api";

function App() {
  const [data, setData] = useState({});

  // const r = {
  //   topAlbums: [{}, {}, {}, {}],
  //    newAlbums: [{}, {}, {}, {}],
  //    genres: ['rock', 'pop', 'jazz'],
  //    songs: []
  // };

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        // Object.assign would also work
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
    generateData("FandQs", fetchFAndQs);
    
  }, []);

  console.log("data from the app.js ",data);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [], FandQs = [] } = data;

  // console.log("topAlbums from app",topAlbums);
  console.log("FandQs from app",FandQs);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs, genres, FandQs } }} />
      </StyledEngineProvider>
    </>
  );
}

// {data: {
//   topAlbums: [],
//   newAlbums: [],
//   genres: [],
//   songs: []
// }}

export default App;