import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";
import { useEffect } from "react";
import { setSHOP_DATA } from '../../redux/slices/shop-slice';

import './collection-overview-style.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionOverview = () => {
    const shop_data = useSelector(state => state.shop.value.shop_data);
    const dispatch = useDispatch();
    const bringData = async () => {
        try{
            const datacollection = collection(firestore,'collections');
            const data = await getDocs(datacollection);
            const filtreddata = data.docs[0].data().data
            dispatch(setSHOP_DATA(filtreddata));
    
        }catch{
            console.error();
        }
    }
    
    useEffect(()=>{
        bringData()
    },[])

    return (
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