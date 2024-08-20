import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { cottanCandy } from './themes/cottonCandy'
import './App.css'

const PageContainer = styled.div`
  background-color: ${cottanCandy.backgroundColor};
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

function App() {
  const [user, setUser] = useState(null)

  return (
    <PageContainer>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </PageContainer>
  )
}

export default App
