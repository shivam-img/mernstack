import React, { useEffect, useState } from 'react'
import HomeSlider from '../components/Home/section-1/HomeSlider'
import ProductCards from '../components/Home/section-2/ProductCards'

function Home() {

    return (
        <main className='main  vh-100'>
            <div className='mainContaint'>
                <div className='homepage tradingPages'>
                    <HomeSlider />
                </div>
                <section className='section-padding'>
                    <ProductCards />
                </section>
            </div>
        </main>

    )
}

export default Home