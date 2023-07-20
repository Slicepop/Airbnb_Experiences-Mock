import { useState } from 'react'
import './style.css'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import katie from './assets/katie-zaferes.png'

//<Hero />
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
              img = {katie}
              description = 'Life lessons with Katie Zaferes'
              status = 'SOLD OUT'
              cost = '136'
              country = 'USA'
              reviewCount = {6}
              rating = {5}
            />
        </div>
    )
}

