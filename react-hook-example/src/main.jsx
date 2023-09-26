import React from 'react'
import ReactDOM from 'react-dom/client'
// import UseState from './hooks/useState/UseState'
// import UseEffect from './hooks/useEffect/UseEffect'
import App from './hooks/useContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    <App />
  </React.StrictMode>,
)
