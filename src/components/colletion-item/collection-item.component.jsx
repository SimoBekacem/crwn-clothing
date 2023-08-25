import React from 'react';
import { useDispatch } from 'react-redux';

import './collection-item.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addtocard } from '../../redux/slices/card-slice';

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const dispash = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          dispash(addtocard({ id, name, imageUrl, price, quantity: 1 }));
        }}
      >
        {' '}
        Add to cart{' '}
      </CustomButton>
    </div>
  );
};
export default CollectionItem;
