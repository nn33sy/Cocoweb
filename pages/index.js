import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import BackImg from '../public/backgroung.jpeg'

import Link from 'next/link'

export default function Home() {
  return (
    <div class="frame">

  
        <Image src={BackImg}  style="width:200%;"/>
      { /*  <Link href="/about"> <img src={"./favicon.ico"}></img> </Link>
    
        <Link href="/workshop"><img src={"./favicon.ico"}></img> Workshop</Link>
       <Image src={BackImg}/>*/}

    { /*   <Navbar/>*/}
    <div>
      
    </div>
    </div>
    
   
  )
}

