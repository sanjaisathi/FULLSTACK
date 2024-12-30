async function funName() {
    setTimeout(()=>{
        console.log("hello");
    },1000)
    console.log(await "hello");
}
arrowFunName = async()=>{
    setTimeout(()=>{
        console.log("KEC");
    },4000)

    console.log(await "KEC");
}
funName()
arrowFunName()
/*var fun=funName()
var arrfun=arrowfunName()
console.log(fun)
console.log(arrfun)
arrowFunName = async() =>{
    console.log('KEC')
}
console.log(funName())
arrowFunName()*/