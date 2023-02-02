import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

import TableImg from '../public/table.png'
import Light from '../public/light2.png'
import Statue from '../public/statue2.png'

import Jar from '../public/pigmentjaryellow2.png'




export default function Home() {
  return (
<>


   
     <div class="home">
   
    <div class="table">
<div>
  <a href="../about">
  
    <Image class="selectimg" id="light" src={Light}></Image>
   
     
    </a>
    <a href="../services">
    <Image  class="selectimg" id="statue" src={Statue}></Image>
    </a>
    <a href="../workshop">
    <Image  class="selectimg" id="jar" src={Jar}></Image>
    </a>
</div>

    
  
    <Image class="selectimg" id="table" src={TableImg}></Image>
  

    
    </div>
     

</div>

        </>

   
   
  )
}


