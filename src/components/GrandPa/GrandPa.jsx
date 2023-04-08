import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./GrandPa.css";

const GrandPa = () => {
    const ring = "diamond";
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
           <section className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
           </section>
        </div>
    );
};

export default GrandPa;