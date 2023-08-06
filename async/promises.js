const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ user: "Alex" })
        }, 1000)

        // setTimeout(()=>{
        //     reject({error:"user Error"})
        // },1000)
    })
}

const chkAuth = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ auth: true })
        }, 1000)

        // setTimeout(()=>{
        //     reject({error:"Auth Error"})
        // },1000)
    })
}

// getUser().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

chkAuth().then(() => {
    return getUser()
}).then((data) => {
    console.log(data)
})
    .catch((error) => {
        console.log(error)
    })