import './styles.css'
import one from '../../Images/one.png'

function Toptcard(props) {

    return (
        <div className='numberstop'>
            <img className='topnumber' src={`../../src/Images/${props.topnumber}.png`} />
            <img className='topimage' src={`../../src/Images/${props.topimg}.png`} />
        </div>
    )
  }
  
  export default Toptcard