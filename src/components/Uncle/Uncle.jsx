import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money ,setMoney] = useContext(MoneyContext);
    return (
        <div >
            <h2>Uncle</h2>
            <p><small>Grandpa Money : {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000tK</button>
            <section className='flex'> 
            <Cusin>Nabil</Cusin>
            <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;