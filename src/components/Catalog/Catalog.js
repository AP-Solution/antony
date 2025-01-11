import React from 'react';
import './Catalog.scss';

const products = [
    { id: 1, title: 'Product 1', price: '$10', imgSrc: 'https://dummyimage.com/150x150/fff/aaa' },
    { id: 2, title: 'Product 2', price: '$15', imgSrc: 'https://dummyimage.com/150x150/fff/bbb' },
    { id: 3, title: 'Product 3', price: '$20', imgSrc: 'https://dummyimage.com/150x150/fff/ccc' },
    { id: 4, title: 'Product 4', price: '$25', imgSrc: 'https://dummyimage.com/150x150/fff/ddd' },
    { id: 5, title: 'Product 5', price: '$30', imgSrc: 'https://dummyimage.com/150x150/fff/eee' },
    { id: 6, title: 'Product 6', price: '$35', imgSrc: 'https://dummyimage.com/150x150/fff/f00' },
    { id: 7, title: 'Product 7', price: '$40', imgSrc: 'https://dummyimage.com/150x150/fff/aaa' },
    { id: 8, title: 'Product 8', price: '$45', imgSrc: 'https://dummyimage.com/150x150/fff/bbb' },
];

export const Catalog = () => {
    return (
        <div className="catalog">
            <h1 className='catalog__title'>Catalog</h1>
            <div className="catalog__content">
                <ul className='catalog__list'>
                    {products.map((product) => (
                        <li key={product.id} className="catalog__card">
                            <img className="catalog__card-img" src={product.imgSrc} alt={product.title} />
                            <div className="catalog__card-info">
                                <h3 className="catalog__card-title">{product.title}</h3>
                                <p className="catalog__card-price">Price: {product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
