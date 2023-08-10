import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './passing-props-to-component/App.jsx'
// import UnnecessaryState from './remove-unnecessary-state/UnnecessaryState.jsx'
// import Gallery from './complete-the-gallery/Gallery.jsx'
// import Form from './fix-stuck-form-input/Form'
// import LightSwitch from './responding-to-events/LightSwitch'
import DrinkList from './coditional-rendering/DrinkList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UnnecessaryState /> */}
    {/* <Gallery /> */}
    {/* <Form /> */}
    {/* <LightSwitch /> */}
    <DrinkList />
  </React.StrictMode>,
)
