import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_NEW_LAUNCHES } from './NewLaunches.gql';
import NewLaunchesItem from "../NewLaunchesItem";


const NewLaunches = props => {
    const { loading, error, data } = useQuery(FETCH_NEW_LAUNCHES, {
        variables: {
            "search": "milton"
        }

    });


    const [dataItem, setDataItem] = useState([]);


    useEffect(() => {
        if (data) {
            // console.log(data.products.items);    
            setDataItem(data.products.items);
        }
    }, [data])

    return (
        <>
            {
                !error && !loading &&
                dataItem.map((item, index) => <NewLaunchesItem item={item} key={item.uid} class={index % 2 == 0 ? "" : "reverse-newLaunch"} />)
            }
        </>
    )
}

export default NewLaunches;