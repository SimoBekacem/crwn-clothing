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
    const SHOP_DATA = useSelector(state => state.shop.value.SHOP_DATA);
    const { collectionId } = useParams();
    const items = filterdata(SHOP_DATA, collectionId)
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