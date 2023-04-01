import React from "react";
import {TypeStudent} from "./object";

export let AddTecnolog=(student:TypeStudent,skil:string)=>{
student.technologies.push({id: 3, skil: skil})
}
