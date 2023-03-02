
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
            <div id="Text">
        <p>Attention all artists, art enthusiasts, and vintage lovers! Do you have a passion for creating, restoring, and preserving vintage pieces? Do you love scouring flea markets for unique finds but don't know how to restore them to their former glory? If so, I have the perfect opportunity for you!</p>
         
         <p>I am offering workshops on restoration, gilding, and the making of art supplies such as watercolors, inks, and soft pastels. In these workshops, you will learn from me, an experienced art conservator who has honed my skills over many years. You will gain hands-on experience in the traditional techniques of gilding, including gold leaf application and aging. Restoring decorative surfaces, and learning how to make your own watercolors, inks, and soft pastels from scratch using high-quality, natural materials.</p>

        <p>Bring your flea market finds along and, with my guidance, you will learn how to restore them to their former glory. Whether you're looking to restore an antique object or sculpture, I will provide you with the knowledge and skills you need to give your finds a new lease on life.</p>
        <p>The dates and prices of these workshops will be posted on my Instagram page, so make sure to follow me for updates. If you would like to be updated via email, simply register with me and I will keep you informed.</p>
        <p>Whether you're an aspiring artist, an experienced professional, or simply someone with a love for art and preservation, these workshops will provide you with the knowledge and skills you need to take your craft to the next level. You will leave each workshop with a newfound appreciation for the art of restoration and the tools to bring your own artistic vision to life.</p>
        <p>So why wait? Sign up for my workshops today and join a community of like-minded artists and art enthusiasts. Learn the traditional techniques of gilding and make your own art supplies while restoring your flea market finds with my guidance!</p>
       <p>For more information and to register, complete the form below!</p>
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