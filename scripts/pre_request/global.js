

function resolveGlobal(json,key){
    const prefix="GLOBAL_";
    key=`${prefix}${key}`;

    //query>param>body
    const globalValue=json?.[key];
    if(!globalValue?.key){
        return;
    }
    const query=globalValue?.query;
    const param=globalValue?.param;
    const body=globalValue?.body;
    if(query){

        if(json?.query){
            json.query[query]=pm.globals.get(globalValue.key)
        }
        else
        {
            json.query[query]={[globalValue.key]:pm.globals.get(globalValue.key)};
        }
        return;
    }
      if(param){

        if(json?.param){
            json.param[param]=pm.globals.get(globalValue.key)
        }
        else
        {
            json.param[param]={[globalValue.key]:pm.globals.get(globalValue.key)};
        }
        return;
    }
     if(body){

        if(json?.body){
            json.body[body]=pm.globals.get(globalValue.key)
        }
        else
        {
            json.body[body]={[globalValue.key]:pm.globals.get(globalValue.key)};
        }
        return;
    }
}