import { useEffect, useState } from "react";
import { Restaurant_Menu_URL } from "./constants";

const useFetchMenuData = (resId) => {
    const [resInfo,setResInfo] = useState(null)

    useEffect(()=>{
        fetchResInfo();
    },[])

    const fetchResInfo = async ()=>{
        const data = await fetch(Restaurant_Menu_URL + resId)
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo
}

export default useFetchMenuData;