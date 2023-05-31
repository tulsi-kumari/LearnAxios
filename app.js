const axios=require('axios')

//using promises

// axios.get('url')
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e)
// })

//using async await

const fetchBTCPrice=async()=>{
   try{
      const res= await axios.get('url')
      console.log(res.data)
    
   }catch (err){
      console.log(err)
   }
}