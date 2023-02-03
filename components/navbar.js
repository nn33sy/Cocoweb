import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            
            <div class="header" >
                
            <div>
             <Link href="/">
                
                <h1>Coralie How Atelier</h1>
                <h5>Sculpture and object conservation</h5>
               
            </Link>
            
            </div>
            
            <div>
    
            </div>
            </div>
{/*
                <div class="brand">
                    <div class="brandname">
                <Link href="/"><h1>Coralie How ?</h1></Link>
                </div>
                <Link href="/">
                <Image class="logo" src={HomeImg}></Image>
                </Link>
                </div>
           

                <Link href="/about"> 
       
      </Link>
    */}

        </nav>
     );  
}
 
export default Navbar;