import './Navbar.scss';

function Navbar(){
     
    return (
        <section className="navbar-section text-[--color-1] sticky top-0 rounded-full">
             <nav className="sticky">
                <ul className="flex gap-5 justify-end p-5 ">
                    <li className='hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear'>
                        <a  href="#about-section">About</a>
                    </li>
                    <li className='hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear'>
                        <a  href="#">Contact</a>
                    </li>
                    <li className='hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear'>
                        <a  href="#">Projects</a>
                    </li>
                    <li className='hover:-translate-y-1 transition-all hover:shadow-xl rounded-lg p-2 ease-linear'>
                        <a  href="#">Education</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar