import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img 
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" 
                className="a-img" 
            />
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className="a-sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, at neque
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni vitae accusantium perspiciatis porro modi. 
            Nesciunt commodi, odio maiores ad enim numquam 
            debitis ut fugiat cumque culpa sunt quaerat quidem aliquid.
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Internatinal Design Awards 2023</h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    A esse vero distinctio.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
