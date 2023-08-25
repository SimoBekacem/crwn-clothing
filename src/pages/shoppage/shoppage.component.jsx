import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview-component';
import CollectionPage from '../collectionpage/collection-component';
import './shoppage.style.scss'




const ShopPage = () => {
        return (
        <div className='shop-page'>
            <Routes>
                <Route index element={<CollectionOverview />} />
                <Route path=':collectionId' element={<CollectionPage />} />
            </Routes>
        </div>
    )
};  
export default ShopPage;