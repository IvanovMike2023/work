import React from "react";
export  function sum(a:number,b:number,c:number){
return a+b+c
}
export  function mult(a:number,b:number,c:number){
return a*b*c
}
export function splitTest(sentense:string){
let text = sentense.toLowerCase().split(' ')
    let res = text


    return res.map(m=>m.replace('-','')).map(m=>m.replace('!','')).filter(m=>m.trim())
}
