// 從 Collection Runner 中讀取 JSON 測試檔案的資料

function paramAppend(req,json,key){
    req.url?.variables.clear();
    req.url?.variables.add({
        "key": "page_id",
        "value":json?.param?.[key],
    })
 }
 
 function queryAppend(req,json,...key){
     req.url?.query?.clear();
    key.forEach((x)=>{
 
         if(json?.query?.[x]&&Array.isArray(json?.query?.[x])){
                 for(const index in json.query[x]){
                     req.url?.query?.add({
                             key:`${x}[]`,
                             value:json.query[x][index],
                             disabled:false,
                         })
                 }
       
 
         }else if(json?.query?.[x]){
 
                req.url?.query?.add({
                 key:x,
                 value:json.query[x],
                 disabled:false,
             })
         }
        
       
 
    })
     console.log(req.url?.query);
 }
 
 let jsonData = pm.iterationData.toObject();
 // 遍歷每個參數，將 `disabled` 設為 false
 if(pm.environment.get('cli')===true){
     pm.request.headers.add({key: 'Cookie', value:  pm.environment.get('cookies')})
     queryAppend(pm.request,jsonData,'view_mode','page_ids','create_month_range','create_date_range');
     paramAppend(pm.request,jsonData,'page_id');
   
 }
 
 
 