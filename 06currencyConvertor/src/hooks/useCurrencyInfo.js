import {useEffect, useState} from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        //fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.24/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo