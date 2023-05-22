import Image from 'next/image'

const Footer = () => {
    return ( 
        <footer>
            <a href="https://github.com/mantisec/sammwise">
                <Image src ="/mantisec-footer.png" width = {385} height={75} />
            </a>
        </footer>
     );
}
 
export default Footer;
