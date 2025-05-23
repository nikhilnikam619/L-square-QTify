
import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../Api/Api.jsx";
 import Hero from "../components/Hero/Hero.jsx";
import Section from "../components/Section/Section.jsx";
import styles from "./Homepage.module.css";

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs, genres } = data;

  console.log("genres", genres);

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
    </>
  );
}