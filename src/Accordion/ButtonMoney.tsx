import React from "react";

export type PropsData = {
    banknots: string,
    value: number,
    number: String
}
export type PropsButtonMoney = {
    rubl: PropsData[],
    callback: (n: string) => void

}
export const ButtonMoney: React.FC<PropsButtonMoney> = (props) => {

    let onClickHandler = (e: string) => {
        return  props.callback(e)
    }
    return <div>
        <ul>{props.rubl.map((m, i) => <li key={i}>
            <span>{m.banknots}</span>
            <span>{m.value}</span>
            <span>{m.number}</span>
        </li>)}</ul>
        <button onClick={() => onClickHandler('All')}>ALL</button>
        <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
        <button onClick={() => onClickHandler('RUBLS')}>Rub</button>

    </div>
}