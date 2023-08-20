import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';

import './collection-style.scss';

import CollectionItem from '../../components/colletion-item/collection-item.component';

import { CircleLoader } from 'react-spinners';

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
    return (shop_data.length==0)?(
        <div className="loader">
            <CircleLoader size='100' />
        </div>
    )
    :(
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