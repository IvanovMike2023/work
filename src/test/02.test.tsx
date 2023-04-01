import React from "react";
import {TypeStudent} from '../test/object'
let student:TypeStudent

beforeEach(()=>{
     student = {
         id: 1,
         name: 'Mike',
         age: 33,
         isActive: true,
         adress: {
             streetTitle: 'Svetlay',
             city: {
                 title: 'Baranovichi',
                 countryTitle: 'Belarus'
             }
         },
         technologies: [
             {id: 1, skil: 'HTML CSS JS TJS REACT'}
         ]
     }
})



test('Should be return technologies Tests',()=> {

       expect(student.technologies.length).toBe(1)
       expect(student.adress.streetTitle).toBe('Svetlay')

})
