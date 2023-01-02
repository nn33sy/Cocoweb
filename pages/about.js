import Link from 'next/link'
import Image from 'next/image'
import Img from '../public/image150.jpeg'
import ProfilPicture from '../public/photoCoco.jpeg'
const About = () => {
    return ( 
        <div class="hello" >
        <div class="frame">
           

            <div class="row">
            <div class="column">
           <p>Coralie est diplômée en conservation de sculptures par la City and Guilds London Art School, au Royaume-Uni. Ses spécialités sont le traitement d’objets en 3D de toutes tailles en bois, pierre, plâtre et pierres reconstituées.</p>
            <p>Au cours de ses études, elle a acquis de l’expérience à Londres au London Museum, à l’abbaye de Westminster et à l’Abbaye de San Giorgio Maggiore à Venise, Italie. Elle a ensuite travaillé pour des studios de conservation privés basés à Londres, tels que Carvers et Guilders Ltd ou elle a travaillé sur des pièces importantes de la Collection Royale et chez DBR Ltd sur des projets de conservations de bâtiments et monuments historiques. Parallèlement, elle a entrepris des projets de conservations d’arts anciens et contemporaines pour divers collectionneurs basés au Royaume- Uni, en Belgique et en France.</p>
    </div>
            <div class="column" >
                <Image class="imageprofile" src={ProfilPicture} ></Image>
            </div>
 
            </div>
            <Link href="/"> Home </Link>
        </div>
        </div>
     );
}
 
export default About;