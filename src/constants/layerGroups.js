// toggle true/false to render layers
// add/delete groups as needed
let layerGroups = [
  { 
    id: 1,
    layers: {
      fore: false,
      base: true,
      back: false,
      deep: false,
    }
  },
  {
    id: 2,
    layers: {
      fore: false,
      base: true,
      back: true,
      deep: false,
    }
  },
  {
    id: 3,
    layers: {
      fore: true,
      base: true,
      back: false,
      deep: false,
    }
  },
  {
    id: 4,
    layers: {
      fore: false,
      base: true,
      back: true,
      deep: true,
    }
  },
  {
    id: 5,
    layers: {
      fore: true,
      base: true,
      back: false,
      deep: false,
    }
  },
  {
    id: 6,
    layers: {
      fore: false,
      base: true,
      back: true,
      deep: false,
    }
  },
  {
    id: 7,
    layers: {
      fore: false,
      base: true,
      back: false,
      deep: false,
    },
  }
]
export default layerGroups;