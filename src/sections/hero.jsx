import { useState } from "react"
import chicaUteista from '../assets/img/chica-uteista.png'


function Hero(){

    const[frase, setFrase]= useState("click aqui")

    const getData = async () => {
        const result = await fetch('https://api.adviceslip.com/advice')
        const data = await result.json();
        const {advice} = data.slip;
        setFrase(advice)
        console.log(advice);
        console.log(data);
    }

    return(
        <div className="flex justify-center items-center my-[40px] mx-[60px] gap-40">
        {/* Texto + botón */}
        <section className="w-[400px] flex flex-col gap-[20px]">
            <h1 className="text-4xl">Construimos los futuros líderes del país</h1>
            <p>
            Las Unidades Tecnológicas de Santander se dedican a la formación de
            personas con sentido ético, pensamiento lógico y crítico.
            </p>
            {/* 👇 Se cambió getAphrase por getData */}
            <button 
            onClick={getData} 
            className="text-white bg-green-700 rounded-[25px] py-[15px] text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-green-800 hover:text-white"
            >
            {frase}
            </button>
        </section>

        {/* Imagen */}
        <img
            className="w-1/2 h-[500px] rounded-[15px] shadow-xl"
            src={chicaUteista}
            alt="imagen de una chica uteísta"
        />
    </div>
    )
}

export default Hero



    
