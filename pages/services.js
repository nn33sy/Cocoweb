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
            <p>Conservation and restoration of sculptures is a specialized field that involves preserving and repairing the physical integrity of a piece of artwork. It requires a deep understanding of the materials and techniques used in creating the sculpture, as well as an appreciation for the artist's intent and the cultural significance of the piece.</p>
          

             <p>The services offered at Coralie How Atelier includes:</p>

       
             <p>•Cleaning: The removal of dirt, grime, and other contaminants that can build up on the surface of a sculpture over time. This is typically done using specialized tools and techniques that are gentle enough not to harm the sculpture.<br />
             • Stabilization: The reinforcement of a sculpture's structural integrity, which may involve filling cracks, reinforcing weakened areas, or repairing broken parts. This is typically done using materials that are compatible with the original materials used in the sculpture.<br />
             • Consolidation: The strengthening of fragile or degraded materials, such as stone, plaster, or ceramic, to prevent further damage. This may involve applying a consolidating solution to the surface of the sculpture or injecting a consolidant into the material.<br />
             • Reassembly: The reattachment of broken pieces or the reconstruction of missing parts. This may involve the use of adhesives, mechanical fasteners, or traditional joinery techniques, depending on the materials used in the sculpture and the nature of the damage. < br/>
             • Protecting: The application of protective coatings or enclosures to prevent further damage from environmental factors, such as sunlight, moisture, or pollutants. This may involve the use of UV-resistant coatings, or other protective measures.
            </p>
            <p>I work closely with curators, museum staff, and artists to ensure that the conservation and restoration of a sculpture is carried out in a manner that is sensitive to the artistic and cultural significance of the piece.</p>
            
            <p>In addition to the above services, I also provide a condition and treatment report for each sculpture I work on. This report includes:</p>
            <p>• A detailed assessment of the sculpture's current condition, including a description of any damage or degradation that has occurred. <br />
            • A proposal for the necessary conservation and restoration work, including the estimated cost.<br />
            • A description of the materials and techniques that will be used during the conservation and restoration process. <br />
            • A record of any previous conservation and restoration work that has been carried out on the sculpture.<br />
            • A discussion of any ethical or cultural considerations that must be taken into account during the conservation and restoration process.</p>
             <p>The condition and treatment report is an important document that provides a clear understanding of the state of the sculpture and the steps that will be taken to preserve and repair it. It also serves as a record of the conservation and restoration work that has been carried out, which is important for the long-term care and preservation of the sculpture.</p>
             <p>It's important to note that the condition and treatment reports produced by conservation and restoration professionals are not meant to serve as an authentication of the artwork. Authenticating a work of art requires a deep knowledge of the artist, their techniques, and the cultural context in which the artwork was created. This is typically the domain of art historians, curators, and other experts in the field of art history.</p>
             <p>The goal of a conservation and restoration treatment report is to provide a detailed record of the physical condition of the sculpture and the steps that have been taken to preserve and repair it. It is not meant to establish the authenticity or value of the artwork.</p>
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