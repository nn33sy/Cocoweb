
import Image from 'next/image'
import Link from 'next/link'
import 'react-calendar/dist/Calendar.css'
import Jar from '../public/pigmentjaryellow.png'


const workshop = () => {
    return (
<div>
       
<Image  class="imgcenter" id="jar_workshop" src={Jar}></Image>
          
          <div class="centerText">
           

            <h1>Workshops</h1>
            <div>
        <p>The atelier is also hosting fabulous workshops for the<br />art lovers and the curious makers.
         Come and join me <br /> in one of the many modules.</p>
         
         <p>If you have an object and the wish to restore it <br />
         yourself, I will be hosting a special workshop <br />
         including a visit in the flea market, a hot drink and <br />
         croissant followed by a 3 hour session in the atelier <br />
         (including materials and tools) where I help you <br />
         with your project.</p>

        <p>Other modules will be including various technique on<br />
        how to make your own paints, inks, pastels and more. <br />
        Introductions to oil gilding, verre englomisée, icone <br />
        painting and jappaning.</p>
        <p>Follow me on instagram for the full informations.</p>
        </div>
        <div class="bookbutton" id="buttonworkshop">
             <Link href="https://form.jotform.com/230292267118353"
             target="_blank" rel="noopener noreferrer">
                <h3>  Request informations </h3>
                </Link>
             </div>
     
        </div>
     
            
        
        </div>
                       ) }
 
export default workshop;