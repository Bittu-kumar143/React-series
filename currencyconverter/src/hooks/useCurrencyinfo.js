import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const[data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8e1d12e2f7b42f222a50c598/latest/USD`)
        .then(() => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;