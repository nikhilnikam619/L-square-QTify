//  import React, { useEffect, useState } from "react";
//  import Cardi from "../components/Card/Card";
//  import Hero from "../components/Hero/Hero";
//  import { Grid } from "@mui/material";
// import axios from 'axios'

// // import Section from "../components/Section/Section";




//  export default function Home(){


//     const [data,setData]=useState([])


//     const fetcapi=async()=>{
        
//     let res=await axios.get("https://qtify-backend-labs.crio.do/albums/top")

//     let data=res.data
//      console.log(data)
//     setData(data)

//     }



// useEffect(()=>{


// fetcapi()


// },[])

//     return(
// //key={data.id}  image={data.image} title={data.title} follows={data.follows}
//         <>
//  <Hero/>

//        <Grid container spacing={2}>
//             {data.map((item)=>(
//                   <Grid   key={item.id} lg={3} sm={6} xs={12} md={4}>
                 
//                  <Cardi image={item.image} slug={item.slug} follows={item.follows} songs={item.songs}/>
                 
                 
//                   </Grid>
     

//             ))}
           
//         </Grid>

      

//         </>
//     )




//  }


import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../api/api";
//  import Cardi from "../components/Card/Card";
 import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import styles from "./HomePage.module.css";

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