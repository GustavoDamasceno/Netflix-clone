import Navbar from '../../Components/navbar/'
import Fade from '../../Components/fade/'
import Tittleimg from '../../Images/MAID.png'
import Minilogo from '../../Images/Netflix_Symbol.png'
import btnplay from '../../Images/chevron-right.png'
import btninfo from '../../Images/info.png'
import './styles.css'

function App() {

  return (
    <div className='container'>
      <Navbar />

      <div className='preview'>
        <div className='showtittle'>
          <div className='netflixShow'>
            <img className='showpng' src={Minilogo}></img>
            <p className='pshow'>SHOW</p>
          </div>
          <img className='tittleimg' src={Tittleimg}/>
        </div>
        <div className='btnpreview'>
          <button className='playbtn'>
            <img className='btnimg' src={btnplay}/>
            <p className='txtbtnplay' >Play</p>
          </button>
          <button className='infobtn'>
            <img className='btnimg' src={btninfo}/>
            <p className='txtbtninfo'>More info</p>
          </button>
        </div>
      </div>

      <Fade />
    </div>
  )
}

export default App
