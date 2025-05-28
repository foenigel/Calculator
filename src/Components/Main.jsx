import React, {useState} from "react";
import { evaluate } from "mathjs";
import { BsBatteryHalf, BsWifi, BsReception4 } from "react-icons/bs";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [equation, setEquation] = useState([]);

    const userInput = (value) => {
        setEquation(prev => {
            if (value === 'C') return '';
            if (value === 'Del') return prev.slice(0, -1);
            return [...prev, value];
        });
        console.log(equation);
        setInputValue(prev => {
            if (value === 'C') return '';
            if (value === 'Del') return prev.slice(0, -1);
            if (value == '%') {
                try{
                    return evaluate(`${prev} / ${100}`);
                }
                catch{
                    return evaluate(`${prev.slice(0, -1)} / ${100}`);
                }
            } 
            if (value === '=') {
                try {
                    return evaluate(prev).toString();
                } catch {
                    return 'Error';
                }
            }
            return prev + value;
        });
    };
    
    return ( <div className="relative bg-white-400 w-full h-full flex flex-col items-center justify-center sm:min-h-[500px]">
            <div className="relative  bg-gray-800 shadow-2xl shadow-black/50 overflow-hidden w-full h-full flex flex-col items-center justify-center sm:my-6 sm:rounded-3xl sm:border-4 sm:border-white sm:max-w-[400px] ">
                <div className="bg-black/15 w-full h-[20px] absolute top-0 flex items-center justify-end gap-2 p-5 sm:relative">
                    <BsReception4 size={19} color="#FFFFFF"/>
                    <BsWifi size={21} color="#FFFFFF"/>
                    <BsBatteryHalf size={22} color="#FFFFFF"/>
                </div>
                <div className="bg-gray-800 min-h-[100px] rounded-tl-2xl rounded-tr-2xl relative flex flex-col px-5 items-center justify-center w-full sm:py-10 sm:h-1/3">
                        <h4 className="text-sky-400 text-xs absolute mb-16 right-4 sm:mb-10">{equation}</h4>
                        <h1 className="flex text-white text-5xl font-semibold absolute right-4 sm:-mb-6">{inputValue}</h1>
                </div>
                <div className="relative h-2/3 w-full bg-gray-800/90 rounded-bl-2xl min-h-fit rounded-br-2xl py-0 px-9 flex items-center justify-center sm:py-8">
                    <div className="relative text-base xl:gap-4 xl:text-2xl w-full h-fit">
                        <div className="relative">
                        <div className="grid grid-cols-4 gap-x-2 mb-4 grid-rows-1 sm:mb-2">
                        <button className="w-auto h-auto rounded-lg p-2 bg-whiteShade text-black text-2xl sm:text-xl" onClick={() => userInput('C')}>C</button>
                        <button className="w-auto h-auto rounded-lg  bg-whiteShade text-black text-2xl sm:text-xl" onClick={() => userInput('.')}>.</button>
                        <button className="w-auto h-auto rounded-lg  bg-whiteShade text-black text-2xl sm:text-xl" onClick={() => userInput('%')}>%</button>
                        <button className="w-auto h-auto rounded-lg  bg-whiteShade text-black text-2xl sm:text-xl" onClick={() => userInput('Del')}>Del</button>
                        </div>
                        <div className="flex gap-x-2">
                        <div className="grid grid-cols-3 gap-x-2 gap-y-4 grid-rows-4 w-3/4 sm:gap-y-2">
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('7')}>7</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('8')}>8</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('9')}>9</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('4')}>4</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('5')}>5</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('6')}>6</button>
                        <button className="w-auto h-auto p-2 rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('1')}>1</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('2')}>2</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('3')}>3</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl sm:text-xl" onClick={() => userInput('0')}>0</button>
                        <button className="w-auto h-auto rounded-lg bg-grayShade text-white text-2xl col-span-2 sm:text-xl" onClick={() => userInput('=')}>=</button>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-4 gap-y-4 w-1/4 sm:gap-y-2">
                        <button className="w-auto h-auto rounded-lg bg-orangeShade text-white text-2xl sm:text-xl" onClick={() => userInput('+')}>+</button>
                        <button className="w-auto h-auto rounded-lg bg-orangeShade text-white text-2xl sm:text-xl" onClick={() => userInput('-')}>-</button>
                        <button className="w-auto h-auto rounded-lg bg-orangeShade text-white text-2xl sm:text-xl" onClick={() => userInput('*')}>*</button>
                        <button className="w-auto h-auto rounded-lg bg-orangeShade text-white text-2xl sm:text-xl" onClick={() => userInput('/')}>/</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div> );
}
 
export default Main;