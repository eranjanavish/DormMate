import axios from "axios";
const url = 'https://boardme-6e370-default-rtdb.firebaseio.com/';
async function store(data,token){
    try{
    const res = await axios.post(url + '/add.json'+ `?auth=${token}`,data);
    return res.data.name;
    }
    catch(err)
    {
      console.log(err)
    }

  }

async function getData(){
  try{
  const res = await axios.get(url + '/add.json');
  return res.data
  }
  catch(err)
  {
      console.log(err + " Data Retrieving Error")
  }

}

export {store,getData};