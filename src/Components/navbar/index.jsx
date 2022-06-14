import './style.css'
import Logo from './images/Logo.png'
import Pesquisar from './images/search.png'
import Sino from './images/bell.png'

function Navbar() {
    return(
        <div className='navbar'>
            <div className='logoMenu'>
                <img className='logoimg' src={Logo} />
                <nav className='menu-items'>
                    <a href="">Start</a>
                    <a href="">Shows</a>
                    <a href="">Movies</a>
                    <a href="">New</a>
                    <a href="">My list</a>
                </nav>
            </div>
            <div className='icons'>
                <img src={Pesquisar}/>
                <img src={Sino}/>
            </div>
        </div>
    )
}

export default Navbar