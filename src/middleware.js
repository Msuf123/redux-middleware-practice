export const fetch_async=(store)=>(next)=>async(action)=>{
    const result=await fetch('https://dummyjson.com/products/1').then((res)=>res.json())
    console.log(result)
    return next(action)
}