import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import styles from "./HomePage.module.css";
import FandQAccordion from "../../Components/FandQAccordion/FandQAccordion"

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs, genres, FandQs } = data;

  // console.log("FandQs", FandQs);

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
      <FandQAccordion FandQs = {FandQs} />
    </>
  );
}