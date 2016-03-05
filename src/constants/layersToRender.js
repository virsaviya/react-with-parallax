// toggle true/false to render layers
// add/delete groups as needed

import React from "react";
import SampleComp from "../js/components/SampleComp";


let layersToRender = [
  {
    fore: false,
    base: <SampleComp id={1}/>,
    back: false,
    deep: false,
  },
  {
    fore: false,
    base: true,
    back: true,
    deep: false,
  },
  {
    fore: <SampleComp id={3}/>,
    base: true,
    back: false,
    deep: false,
  },
  {
    fore: false,
    base: true,
    back: true,
    deep: true,
  },
  {
    fore: true,
    base: true,
    back: false,
    deep: false,
  },
  {
    fore: false,
    base: true,
    back: true,
    deep: false,
  },
  {
    fore: false,
    base: true,
    back: false,
    deep: false,
  }
]
export default layersToRender;