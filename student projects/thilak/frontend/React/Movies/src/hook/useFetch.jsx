import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(undefined);
    async function fetchapi() {
        const response = await fetch(url)
        const responsedata = await response.json();
setData(data=>responsedata);
        
    }
    useEffect(()=>{
        fetchapi()
    },[])
  return {data}
}

export default useFetch
