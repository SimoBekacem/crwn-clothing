import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';

import './collection-style.scss';

import CollectionItem from '../../components/colletion-item/collection-item.component';
const filterdata = (shop_data, category) => {
    let items ;
    shop_data.forEach(element => {
        if(element.routeName === category){
            items = element.items
        }
    })
    return items
}
const CollectionPage = () => {
    const shop_data = useSelector(state => state.shop.value.shop_data);
    const { collectionId } = useParams();
    const items = filterdata(shop_data, collectionId)
    return(
        <div className='collection-page'>
            <h2 className='title'>{collectionId}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}
export default CollectionPage;