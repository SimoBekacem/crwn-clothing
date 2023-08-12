import React from 'react';
import { useSelector } from 'react-redux';

import './collection-overview-style.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = () => {
    const collections = useSelector(state => state.shop.value.SHOP_DATA)
    return (
        <div className="collection-overview">
            {
                collections.map(item => {
                    return(
                        <CollectionPreview title={item.title} items={item.items}/>
                    )
                })
            }
        </div>
    )
}
export default CollectionOverview;