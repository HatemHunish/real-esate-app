import axios from "axios";

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '81b3e6052dmsha26862476f7338bp1a6fa9jsn2f25bf837cc3'
//   }


export const baseUrl='https://bayut.p.rapidapi.com';

export const fetchApi=async(url)=>{
 const {data}=await axios.get((url),{
     headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '81b3e6052dmsha26862476f7338bp1a6fa9jsn2f25bf837cc3'
  }
 }) ;
 
 return data
}