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
        <h1 className='pl-title'>Bienvenu sur mon portfolio</h1>
        <p className="pl-desc">
          Vous trouverez ci-dessous quelques exemples des projets que j'ai réalisés. 
          Pour accéder au site, cliquez sur sa miniature…
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
