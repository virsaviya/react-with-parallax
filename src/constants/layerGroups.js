// toggle true/false to render layers
// add/delete groups as needed

import React from "react";
import SampleComp from "../js/components/SampleComp";


let layersToRender = [
  {
    fore: false,
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
    fore: true,
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