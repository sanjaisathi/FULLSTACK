a=[10,20,30,[40.4,50.5],"a","KEC",true]
console.log(a);

//for...in
for(var i in a)
{
    console.log("Element at",i,"is",a[i]);
}
for(var j in a[3])
{
    console.log("Element of inner array at",j,"is",a[3][j]);
}

//for...of
for(var i of a)
{
    console.log(i);
}
for(var j of a[3])
{
    console.log(j);
}

//for each
Array=[10,20,30]
Array.forEach((element)=>{
    console.log(element)
})
//Type-2
Array=[10,20,30]
Array.forEach((element,index)=>{
    console.log("Element is",element,"and it is",element);
    console.log("index is",index,"element is",element);
}
)