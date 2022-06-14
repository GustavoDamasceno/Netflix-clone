import './styles.css'

import Topten from '../sections/topten'

import Mylist from '../sections/mylist/'
import Scifi from '../sections/scifi/'
import Seeagain from '../sections/seeagain/'
import Treending from '../sections/trending/'

function Fade() {

  return (
    <div className='bg'>
        <Seeagain ativi={'See again'}/>
        <Topten ativi={'Top 10 in brazil'}/>
        <Mylist ativi={'My list'}/>
        <Treending ativi={'Trending'}/>
        <Scifi ativi={'Sci-fi'}/>
    </div>
  )
}

export default Fade
