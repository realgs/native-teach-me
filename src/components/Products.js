import React from 'react';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColors: ['#518ff5', '#673ab7', '#27a768', '#de5347', '#821510'],
      products: [
        {
          "imageUrl": "http://lb0.dstatic.pl/images/product-thumb/60011368-sukienka-potis-amp-verso-w-abstrakcyjnym-wzorze-z-tkaniny-mini-karnawalowa-balowe-z-dlugimi-rekawami.jpg",
          "title": "L'af balowa",
          discountPercent: 50,
          oldPrice: 100,
          price: 49.99
        },
        {
          "imageUrl": "//lb5.dstatic.pl/images/product-thumb/74653040-sukienka-ella-dora-z-dlugim-rekawem.jpg",
          "title": "Ptakmoda.com",
          discountPercent: 50,
          oldPrice: 200,
          price: 99.99
        },
        {
          "imageUrl": "http://lb5.dstatic.pl/images/product-thumb/73186691-sukienka-paris-z-linii-wow-point-ivon-40-showroom-pl.jpg",
          "title": "Ivon wieczorowa",
          discountPercent: 71,
          oldPrice: 569,
          price: 219.99
        },
        {
          "imageUrl": "//lb0.dstatic.pl/images/product-thumb/54522168-sukienka-latina-chica-q-robert-kupisz-l-showroom-pl.jpg",
          "title": "Guess",
          discountPercent: 35,
          oldPrice: 200,
          price: 129.99
        },
      ],
    };
  }
  componentDidMount() {
    try {
      if (this.state.backgroundColors) {
        const newBackground = Math.floor(Math.random() * 5);
        //document.body.style = `background: ${this.state.backgroundColors[newBackground]};`;
      }
    } catch (e) {
      console.log('Error loading the list of products: ' + e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
  }
  render() {
    return (
      <div className="content">
        <div className="content__row">
        {this.state.products.map((product, index) => { return (
          <div className="product" key={index}>
            <div className="product__image">
              <img src={product.imageUrl} alt={product.title}></img>
            </div>
            <div className="product__desc">
                {
                  product.discountPercent != null ? (
                  <div className="product__price">
                    <span className="product-price product-price--promo">{product.price} zł</span>
                    <span className="product-price product-price--old">{product.oldPrice} zł</span>
                  </div>
                  ) : (
                    <div className="product__price">
                      <span className="product-price product-price--regular">{product.price} zł</span>
                    </div>
                  )
                }
              <span className="product-title">{product.title}</span>
            </div>
          </div>
        );})}
        </div>
        <div className="content__row">
          <img src="./images/more.svg" alt="show more"></img>
        </div>
      </div>
    );
  }
}