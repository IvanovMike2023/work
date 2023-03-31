import React from "react";

 export type PropsCarsArray = {

    manufacturer: string,
    model: string

}

type PropsCars={
      data:PropsCarsArray[]
}
export  const MicroTask:React.FC<PropsCars>=(props)=>{
    return (
        <div>
            {props.data.map((cars,index)=>{
                return <div>{index}<h3>Производитель : {cars.model}</h3><h3>Модель : {cars.model}</h3></div>
            })}
        </div>
    )
}

