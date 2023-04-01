import React from "react";
export type TypeCity={
    title: string
    countryTitle: string

}
export type TypeAddress={
    streetTitle:string
    city: TypeCity
}
export type TypeTechnologies= {
    id: number
    skil: string

}
export type TypeStudent={
    id: number
    name: string
    age: number
    isActive: boolean
    adress: TypeAddress
    technologies: TypeTechnologies[]
}
const student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
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