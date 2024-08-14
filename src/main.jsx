import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRoute>
    <Route>
      <Route path="" element ={<Home/>}/>
      <Route path="" element ={<Oferta/>}/>
    </Route>
    </BrowseRoute>    
  </React.StrictMode>,
)