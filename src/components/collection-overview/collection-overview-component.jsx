import React from 'react';
import { useSelector } from 'react-redux';


import { fetchData } from '../../redux/slices/shop-slice';

import './collection-overview-style.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { CircleLoader } from 'react-spinners';


const CollectionOverview = () => {
    const shop_data = useSelector(state => state.shop.value.shop_data);
    return (shop_data.length === 0)?(
        <div className="loader">
            <CircleLoader size='100' />
        </div>
    )
    :(
        <div className="collection-overview">
            {
                shop_data.map(item => {
                    return(
                        <CollectionPreview title={item.title} items={item.items}/>
                    )
                })
            }
        </div>
    )
}
export default CollectionOverview;