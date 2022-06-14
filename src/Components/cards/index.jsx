import './style.css'

function Cards(props) {
  return (
    <div className='cardcont'>
        <img src={`../../src/Images/${props.show}.png`}></img>
    </div>
  )
}

export default Cards