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
            <div id="Text">
            <h1>Services</h1>
            <p>Native from Reunion Island, I have studied the art of sculpture and 3D objects
           conservation/restoration in London and have since 2015 worked various project in
            London, Paris, Venice and Brussels.</p>
          

             <p>My specialities are the treatment wood, stone and plaster artifacts, using modern
             and traditional techniques. I work from my atelier and in situ upon request.</p>

             <h1>Services includes:</h1>
             <p>• Conditions and treatment reports (no authentification)<br />
             • Restorations and repairs <br />
             • Light and deep cleaning <br />
             • Sourcing of colaborator for complex case 
             or objects presenting other materials that
              are out of my specialities.
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