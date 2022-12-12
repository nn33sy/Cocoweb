import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

import BackImg from '../public/bouddha.png'
import Button from '../public/favicon.ico'

import Link from 'next/link'


export default function Home() {
  return (

    <div class="hello">

   
     
      <div class="frame">
      <Link href="/about"> 
        <Image class="try" 
                src={BackImg}
               /> 
      </Link>
      <Link href="/workshop"> <img src={BackImg}></img> </Link>
        </div>



{/*
<Image class="frame" src={BackImg}  style="width:100%;"/>
      <Link href="/about"> <img src={"./favicon.ico"}></img> </Link>
    
        <Link href="/workshop"><img src={"./favicon.ico"}></img> Workshop</Link>
       <Image src={BackImg}/>*/}

    { /*   <Navbar/>*/}
  
    </div>
   
   
  )
}


