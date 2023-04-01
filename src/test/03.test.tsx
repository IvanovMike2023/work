import React from "react";
import {TypeStudent} from '../test/object'
import {AddTecnolog} from "./FunctionForTest";
let student:TypeStudent

beforeEach(()=>{
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        adress: {
            streetTitle: "Svetlay",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                skil: "HTML"
            },
            {
                id: 2,
                skil: "CSS"
            },
            {
                id: 3,
                skil: "React"
            }
        ]
    }
})
test('Should be return technologies Tests',()=> {
AddTecnolog(student,'Tests')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].skil).toBe('Tests')

})


      

