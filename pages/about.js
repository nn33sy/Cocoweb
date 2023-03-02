

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
        <div id="Text">

<p>I am Coralie Llucia-How-Choong, a highly skilled and experienced sculpture conservator/restorer with a passion for preserving the beauty and cultural significance of sculptures and objects of art. I received my training in City and Guilds London art school in 2015 and have honed my skills through years of hands-on experience, working on a wide range of projects for some of the most prestigious institutions, museums and conservation studios.</p>

<p>Throughout my career, I have worked in London, Venice, and Brussels, gaining a broad and diverse range of experience in conservation and restoration. From the intricate details of historical monuments to the dynamic forms of contemporary masterpieces, I have a deep understanding of the unique challenges and considerations involved in preserving each type of sculpture and objects of art.</p>

<p>Whether working in a museum setting or with a private collector, I approach each project with the utmost care and attention to detail. My goal is to ensure that each sculpture remains as close to its original condition as possible, while also taking into account the needs and goals of each individual client.</p>
<p>With my deep knowledge of the materials and techniques used in creating sculptures, combined with my expertise in conservation and restoration, I am confident in my ability to provide the highest quality services to each of my clients. If you are looking for a sculpture conservator/restorer with a commitment to ethical and sustainable practices, who has a passion for preserving the beauty and cultural significance of sculptures, I would be honored to work with you.

</p>
</div>
<h1>Contact</h1>
<div id="contactText">
  <a href="https://www.google.com/maps/place/Rue+du+Chevreuil+4,+1000+Bruxelles,+Belgique/@50.8380281,4.3431966,17z/data=!4m6!3m5!1s0x47c3c47ab20dc999:0x6e2f42cdf621a499!8m2!3d50.8380281!4d4.3453853!16s%2Fg%2F11c5c79_c5"
  target="_blank" rel="noopener noreferrer">
  <p>4 rue du Chevreuil, 1000 Brussels</p> 
  </a>

<a href="tel:+44 7557 004907"> 
<p> +32 478131371 </p>
</a>

<a href="mailto:llucia.coralie@gmail.com">
  <p>coralie.how.atelier@gmail.com</p>
</a>
<a href="https://www.instagram.com/coralie_how_atelier/?hl=fr" target="_blank" rel="noopener noreferrer">
  <p>instagram: @coralie.how.atelier</p>
</a>

</div>


</div>          
            


        </div>
        
     );
}
 
export default About;