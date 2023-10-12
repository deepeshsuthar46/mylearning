async function product(){
    var requestOptions = {
        method: 'GET',
       
      };
let data=fetch("http://localhost:8003/api/diffrent-type-of-data-html", requestOptions)
let apidata=await (await data).json()
return apidata
}
export {product}