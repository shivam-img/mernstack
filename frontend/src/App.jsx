import { useState, useEffect } from 'react'
import './App.css'
import AppSidebar from './page/AppSidebar'
import AppHeader from './page/AppHeader'
import RoutesComp from './routes/protected/Routes'

function App() {

  return (
    <>

      <AppHeader />
      {/* <AppSidebar /> */}
      <RoutesComp />


    </>
  )
}

export default App
