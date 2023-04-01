import React from "react";
import {mult, splitTest, sum} from "./function";
let a:number
let b:number
let c:number
beforeEach(()=>{
     a =1
     b =2
     c =6
})



test('Should be return sum',()=> {

    const result = sum(a, b, c,)
    expect(result).toBe(9)
})
test('Should be return mult',()=> {
a=2
    const result = mult(a, b, c,)
    expect(result).toBe(24)
})
test ('shouold be return text',()=>{

     const sentense = "hellow my name"
     const sentense2 = "js - it is  programmiong!"

    const resulttext = splitTest(sentense)
    const resulttext2 = splitTest(sentense2)

    expect(resulttext[0]).toBe('hellow')
    expect(resulttext.length).toBe(3)

    expect(resulttext2[0]).toBe('js')
    expect(resulttext2.length).toBe(4)
 })