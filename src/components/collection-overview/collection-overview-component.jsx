import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";

import './collection-overview-style.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionOverview = () => {
    const [shop_data, setshop_data] = useState([]);
    const bringData = async () => {
        try{
            const datacollection = collection(firestore,'collections');
            const data = await getDocs(datacollection);
            const filtreddata = data.docs[0].data().data
            setshop_data(filtreddata)
    
        }catch{
            console.error();
        }
    }
    bringData()
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