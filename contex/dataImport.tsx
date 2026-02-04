import { createContext, ReactNode, useEffect, useState } from "react";
import { getData } from "@/util/api";

export const DataDownload = createContext<any>(null);

interface Props {
  children: ReactNode;
}

const DataProvider = ({ children }: Props) => {
    const [data, setData] = useState<any[]>([]);

    const loadData = async () => {
      const result = await getData(); 
      if(!result){
          setData([]);
          
      }
      else{
      const result_to_list = Object.keys(result).map((key) => ({
          id: key,
          name: result[key].name,
          phone: result[key].phone,
          address: result[key].address,
          total: result[key].total,
          available: result[key].available,
          bathroom: result[key].bathroom,
          price2: result[key].price2,
          price8: result[key].price8,
          price16: result[key].price16,
          picThumnail: result[key].picThumnail,
          picList: result[key].picList,
          searchId: result[key].searchid
        }));
    
    setData(result_to_list.reverse());
      }
  };

  useEffect(() => {
    loadData();
  }, []);

  const addTolist = (object:any,id:string) =>{
    setData((prev)=>[object,...prev])

  }

  const value = {
    data,
    addTolist,
    loadData
  };

  return (
    <DataDownload.Provider value={value}>
      {children}
    </DataDownload.Provider>
  );
};

export  {DataProvider};
