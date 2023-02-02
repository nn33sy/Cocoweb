

import Image from 'next/image'
import ProfilePicture from '../public/cadre.png'






const About = () => {


  
    return ( 
      
        <div >
                   


      



          <div>
        <Image class="imgcenter" id="profile" src={ProfilePicture}></Image>
        </div>

        <div class="centerText" >
        <h1>About</h1>
        <div>

<p>A restoration Atelier nested in the heart of<br /> Brussels, near the place jeu de Balle, run by <br /> myself, Coralie Llucia-How-Choong. </p>

<p>I am a Sculpture and 3D objects<br />conservator/restorer, fully licenced from City<br />and Guilds London art school in 2015, my <br />specialities are the treatment of wood, stone
<br />and plaster artefacts.</p>
</div>
<h1>Contact</h1>
<div>
  <a href="https://www.google.com/maps/place/Rue+du+Chevreuil+4,+1000+Bruxelles,+Belgique/@50.8380281,4.3431966,17z/data=!4m6!3m5!1s0x47c3c47ab20dc999:0x6e2f42cdf621a499!8m2!3d50.8380281!4d4.3453853!16s%2Fg%2F11c5c79_c5">
  <p>4 rue du Chevreuil, 1000 Brussels</p> 
  </a>

<a href="tel:+44 7557 004907"> 
<p> +32 478131371 </p>
</a>

<a href="mailto:llucia.coralie@gmail.com">
  <p>coralie.how.atelier@gmail.com</p>
</a>
<a href="https://www.instagram.com/coralie_how_atelier/?hl=fr">
  <p>instagram: @coralie.how.atelier</p>
</a>

</div>


</div>          
            


        </div>
        
     );
}
 
export default About;