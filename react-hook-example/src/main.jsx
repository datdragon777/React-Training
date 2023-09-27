import React from 'react'
import ReactDOM from 'react-dom/client'
// import UseState from './hooks/useState/UseState'
// import UseEffect from './hooks/useEffect/UseEffect'
// import App from './hooks/useContext/App'
// import SaveReference from './hooks/useRef/SaveReference'
// import QueryToDOMElement from './hooks/useRef/QueryToDOMElement'
// import Lazy from './loading/lazy/Lazy'
import App from './loading/suspense/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <App /> */}
    {/* <SaveReference /> */}
    {/* <QueryToDOMElement /> */}
    {/* <Lazy /> */}
    <App />
  </React.StrictMode>,
)
