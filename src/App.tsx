import React, {useState} from 'react';
import './App.css';
import {ButtonMoney, PropsData} from "./Accordion/ButtonMoney";
function App() {


    let [a,setA]=useState(1)
    let onClickAdd = () => {
        setA(a+1)
        console.log(a)
    }
    let onClickNull = () => {
        a=0
        setA(a)
        console.log(a)
    }
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState('any')
    let rubl: PropsData[] = money
    if (filter === 'RUBLS')
        rubl = money.filter((item) => {
            return item.banknots === 'RUBLS'
        })
    if (filter === 'Dollars')
        rubl = money.filter((item) => {
            return item.banknots === 'Dollars'
        })
    let onClickFilter = (namebutton: string) => {
        setFilter(namebutton)
    }
    return (
        <div className="App">
            <ButtonMoney rubl={rubl} callback={(value:string) => onClickFilter(value)}/>
            <span>{a}</span>
            <button onClick={onClickAdd}>A++</button>
            <button onClick={onClickNull}>A=0</button>
        </div>
    );
}
export default App;