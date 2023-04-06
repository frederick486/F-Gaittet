import './productList.css'
import Product from '../product/Product'
// import {products} from '../../data'

import Booki from '../../img/Booki.png'
import Linkedin from '../../img/linkedin-feed.png'

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
          img={Booki} 
          link='https://frederick486.github.io/Booki/'
        />
        <Product
          img={Linkedin} 
          link='https://www.linkedin.com/feed/'
        />
        <Product
          img={Booki} 
          link='https://frederick486.github.io/Booki/'
        />
        <Product
          img={Booki} 
          link='https://frederick486.github.io/Booki/'
        />
        <Product
          img={Linkedin} 
          link='https://www.linkedin.com/feed/'
        />
        <Product
          img={Booki} 
          link='https://frederick486.github.io/Booki/'
        />

      </div>
    </div>
  )
}

export default ProductList
