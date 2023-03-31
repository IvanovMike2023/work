import React from "react";
type AccordionProps = {
    title: string,
    collapsed: boolean
}
function Accordion(props:AccordionProps) {
    if(props.collapsed===true)
    return (<div>
        <AccordionTitle title={props.title} />
        <AccordionBody />
    </div>)
    else return (<div> <AccordionTitle title={props.title} /></div>)
}
function AccordionTitle(props:any){
    return <h3>{props.title}Меню</h3>
}
function AccordionBody(){
    return (<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>)
}
export default Accordion