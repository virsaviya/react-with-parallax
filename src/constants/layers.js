import React from "react";

// import each section component
// to be rendered on the layers.
import SampleComp from "../js/components/SampleComp";


// To render a background image to a layer, 
// pass true then select the image in style.css.
// To render content to a layer, pass in the desired component.
// Keep all other layers as false.
// Change "name" for navbar link text.
// Add/delete sections as needed.
const layers = [
{
  name: "Thai Beach",
  layers: {
    fore: false,
    base: true,
    back: false,
    deep: false,
  }
},
{
  name: "CT Fall",
  layers: {
    fore: false,
    base: true,
    back: true,
    deep: false,
  }
},
{
  name: "Light Steel Blue",
  layers: {
    fore: <SampleComp />,
    base: true,
    back: false,
    deep: false,
  }
},
{
  name: "Misty Trees",
  layers: {
    fore: false,
    base: true,
    back: true,
    deep: true,
  }
},
{
  name: "Peach Puff",
  layers: {
    fore: true,
    base: true,
    back: false,
    deep: false,
  }
},
{
  name: "Venician Homes",
  layers: {
    fore: false,
    base: true,
    back: true,
    deep: false,
  }
},
{
  name: "Green Yellow",
  layers: {
    fore: false,
    base: true,
    back: false,
    deep: false,
  }
} 
]
export default layers;