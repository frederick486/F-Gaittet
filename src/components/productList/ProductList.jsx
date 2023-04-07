import './productList.css'
import Product from '../product/Product'
// import {products} from '../../data'

import FitClub from '../../img/fitclub.png'
import Kasa from '../../img/kasa.png'
import Ohmyfood from '../../img/ohmyfood.png'
import Booki from '../../img/Booki.png'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>Create & inspire. It's Lama</h1>
        <p className="pl-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Deserunt beatae accusantium odit iste, omnis velit itaque, 
            tempore harum asperiores facere eveniet tempora sint nisi 
            ut est nobis vero aliquid quasi.
        </p>
      </div>
      <div className="pl-list">

        {/* {products.map((item) => (
          <Product 
            key={item.id} 
            img={item.img} 
            link={item.link} 
          />
        ))} */}

        <Product
          img={FitClub} 
          link='https://fitclub-i6xuyrgis-frederick486.vercel.app/'
        />
        <Product
          img={Kasa} 
          link='https://kasa-vercel.vercel.app/'
        />
        <Product
          img={Ohmyfood} 
          link='https://frederick486.github.io/ohmyfood/'
        />
        <Product
          img={Booki} 
          link='https://frederick486.github.io/Booki/'
        />        
        <Product
          img={FitClub} 
          link='https://fitclub-i6xuyrgis-frederick486.vercel.app/'
        />
        <Product
          img={Kasa} 
          link='https://kasa-vercel.vercel.app/'
        />

      </div>
    </div>
  )
}

export default ProductList
