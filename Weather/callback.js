const getUser = (callback) =>{

    setTimeout(() =>{
        callback( {name:"subhath"},undefined)
    },1000)
    
}

getUser((data,error)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log("Error");
    }
    
})


const chkAuth=(acb)=>{
    setTimeout(()=>{
        acb({auth:true},undefined)
    },1000);
    // setTimeout(()=>{
    //     acb(undefined,{error:'Auth error'})
    // },1000);
}

chkAuth((data,err)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log(err);
    }
})