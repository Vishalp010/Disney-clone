import { useState } from "react";
import './App.css'
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMoviesList from "./Components/GenreMoviesList";

export default function App() {
  const [count,setCount] = useState(0)
  
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMoviesList/>
    </div>
  )
}