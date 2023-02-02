import Image from 'next/image'

import InstImg from '../public/instagram.svg'

import MailImg from '../public/mail.svg'
import PhoneImg from '../public/phone.svg'
import LocImg from '../public/location.svg'
const Footer = () => {
    return ( 
        <footer>
                   
            
               <div className='footerclass'>
             
                    <a href="mailto:coralie.how.atelier@gmail.com">
                    <Image class="logo" src={MailImg}></Image>
                    </a>
                    <a href="tel:+44 7557 004907"> 
                    <Image class="logo" src={PhoneImg}></Image>
                    </a>
                

              
                    <a href="https://www.instagram.com/coralie_how_atelier/?hl=fr" target="_blank" rel="noopener noreferrer">
                    <Image class="logo" src={InstImg}></Image>
                    </a>
                    <a href="https://www.google.com/maps?q=4+rue+du+Chevreuil,+1000+Brussels&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjEr6Onz_b8AhXESaQEHQ7bA-oQ_AUoAXoECAEQAw" 
                   target="_blank" rel="noopener noreferrer" >
                        <Image class="logo" src={LocImg}></Image>
                    </a>
                    </div>
        
    

            
        </footer>
     );
}
 
export default Footer;