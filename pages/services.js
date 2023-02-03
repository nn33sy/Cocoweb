import Link from 'next/link'
import Image from 'next/image'
import Statue from '../public/statue.png'
import React from 'react'




const Services = () => {
   
    return(
        <div>
  
       

        <div class="services">
         
            <div>
            <Image  class="imgcenter" id="statueServices" src={Statue}></Image>

            </div>
            <div>
            <h1>Services</h1>
            <p>Native from Reunion Island, I have studied <br />the art of sculpture and 3D objects
            <br />conservation/restoration in London and<br />have since 2015 worked various project in
            <br />London, Paris, Venice and Brussels.</p>
          

             <p>My specialities are the treatment wood,<br />stone and plaster artifacts, using modern
             <br />and traditional techniques. I work from my<br />atelier and in situ upon request.</p>

             <p>Services includes:</p>
             <p>• Conditions and treatment reports (no <br /> authentification)<br />
             • Restorations and repairs <br />
             • Light and deep cleaning <br />
             • Sourcing of colaborator for complex case 
             <br />or objects presenting other materials that
             <br /> are out of my specialities.
            </p>
            <p>The atelier's access is available only by appointment.</p>
            
             <div class="bookbutton" id="buttonservice">
             <Link href="https://form.jotform.com/230292368728362"
             target="_blank" rel="noopener noreferrer">
                <h3>  Book an appointment  </h3>
                </Link>
             </div>
            </div>

        </div>
        </div>
    )
}
export default Services;