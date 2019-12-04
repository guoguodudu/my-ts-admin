const REACT_APP_PROXY_URL=process.env.REACT_APP_PROXY_URL;
if(REACT_APP_PROXY_URL=="pro"){//生产环境
    APIUrl="生产环境的请求地址";
}else if(REACT_APP_PROXY_URL=="dev"){//测试环境
    APIUrl="测试环境";
}else{//本地跑的服务
    APIUrl="本地或者默认请求地址";
}
