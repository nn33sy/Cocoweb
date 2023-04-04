import Link from 'next/link'
import Image from 'next/image'
import Statue from '../public/statue.png'
import React, { useEffect} from "react"




const Services = () => {
    useEffect(() => {
        document.title = "Coralie How Atelier";  
      }, []);
    return(
        <div>
  
       

        <div class="services">
         
            <div>
            <Image  class="imgcenter" id="statueServices" src={Statue}></Image>

            </div>
            <div id="Text">
            <h1>Services</h1>
            <p>Conservation and restoration of sculptures is a specialized field that involves preserving and repairing the physical integrity of a piece of artwork. It requires a deep understanding of the materials and techniques used in creating the sculpture, as well as an appreciation for the artist's intent and the cultural significance of the piece.</p>
          

             <p>The services offered at Coralie How Atelier includes:</p>

       
             <p>• <b>Cleaning:</b> The removal of dirt, grime, and other contaminants that can build up on the surface of a sculpture over time. This is typically done using specialized tools and techniques that are gentle enough not to harm the sculpture.<br />
             • <b>Stabilization:</b> The reinforcement of a sculpture's structural integrity, which may involve filling cracks, reinforcing weakened areas, or repairing broken parts. This is typically done using materials that are compatible with the original materials used in the sculpture.<br />
             • <b>Consolidation:</b> The strengthening of fragile or degraded materials, such as stone, plaster, or ceramic, to prevent further damage. This may involve applying a consolidating solution to the surface of the sculpture or injecting a consolidant into the material.<br />
             • <b>Reassembly:</b> The reattachment of broken pieces or the reconstruction of missing parts. This may involve the use of adhesives, mechanical fasteners, or traditional joinery techniques, depending on the materials used in the sculpture and the nature of the damage.  < br/>
             • <b>Protecting:</b> The application of protective coatings or enclosures to prevent further damage from environmental factors, such as sunlight, moisture, or pollutants. This may involve the use of UV-resistant coatings, or other protective measures.
            </p>
            <p>In addition to the above services, I also provide a condition and treatment report for each sculpture and object I work on.</p>
            
            <p>I work closely with curators, museum staff, and artists to ensure that the conservation and restoration of a sculpture is carried out in a manner that is sensitive to the artistic and cultural significance of the piece.</p>
          
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