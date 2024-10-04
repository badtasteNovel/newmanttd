// 從 Collection Runner 中讀取 JSON 測試檔案的資料

function paramAppend(req,json){
    req.url?.variables.clear();
    for(const key in json?.param??{}){
    req.url?.variables.add({
        "key": key,
        "value":json.param[key],
    })

    }

 }
 
function queryAppend(req,json){
    req.url?.query?.clear();
    for(const key in json?.query??{}){
       if(Array.isArray(json.query[key])){
            for(const index in json.query[key]){
                    req.url?.query?.add({
                            key:`${x}[]`,
                            value:json.query[key][index],
                            disabled:false,
                        })
       }
   }
       else{

       req.url?.query?.add({
           key:x,
           value:json.query[key],
           disabled:false,
       })//end add
   } // end else
  
}// end for
} // end queryAppend

 
 let jsonData = pm.iterationData.toObject();
 // 遍歷每個參數，將 `disabled` 設為 false
 if(pm.environment.get('cli')===true){
     pm.request.headers.add({key: 'Cookie', value:  pm.environment.get('cookies')})
     queryAppend(pm.request,jsonData);
     paramAppend(pm.request,jsonData);
   
 }
 
 
 