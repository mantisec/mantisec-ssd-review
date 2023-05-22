import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav>
            <div className = "logo">
                <Image src = "/mantisec-logo.png" width = {215} height = {125}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/assessment"><a>Assessment</a></Link>
            <Link href="/results"><a>Results</a></Link>
        </nav>
      );
}
 
export default Navbar
