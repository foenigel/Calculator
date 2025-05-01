import React, {useState} from "react";
import { evaluate } from "mathjs";

const Main = () => {
    const [inputValue, setInputValue] = useState('');

    const userInput = (value) => {
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
    
    return ( <div className=" bg-gray-900 flex flex-col gap-4 items-center justify-center w-screen h-screen">
                <div className=" w-screen h-screen px-10 py-14 rounded-3xl max-h-[550px] max-w-[420px] bg-purple-600/20 backdrop-blur-3xl saturate-150 xl: xl:w-3/12 xl:h-full">
                    <h2 className="flex items-center bg-blue-200/20 rounded-xl text-white text-xl justify-end font-normal w-auto h-10 py-5 px-2 mb-8 xl:h-14 xl:text-3xl">{inputValue}</h2>
                    <div className="text-base grid grid-cols-4 grid-rows-5 gap-2 xl:gap-4 xl:h-5/6 xl:text-2xl">
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('1')}>1</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('2')}>2</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('3')}>3</button>
                        <button className="w-auto h-auto px-4 py-2 bg-yellow-500 text-white rounded-xl" onClick={() => userInput('+')}>+</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('4')}>4</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('5')}>5</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('6')}>6</button>
                        <button className="w-auto h-auto px-4 py-2  bg-yellow-500 text-white rounded-xl" onClick={() => userInput('-')}>-</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('7')}>7</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('8')}>8</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('9')}>9</button>
                        <button className="w-auto h-auto px-4 py-2  bg-yellow-500 text-white rounded-xl" onClick={() => userInput('*')}>*</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl" onClick={() => userInput('0')}>0</button>
                        <button className="w-auto h-auto px-4 py-2  bg-gray-200 rounded-xl" onClick={() => userInput('.')}>.</button>
                        <button className="w-auto h-auto px-4 py-2  bg-gray-200 rounded-xl" onClick={() => userInput('%')}>%</button>
                        <button className="w-auto h-auto px-4 py-2  bg-yellow-500 text-white rounded-xl" onClick={() => userInput('/')}>/</button>
                        <button className="w-auto h-auto px-4 py-2  bg-gray-400 text-white rounded-xl" onClick={() => userInput('C')}>C</button>
                        <button className="w-auto h-auto px-4 py-2  bg-gray-400 text-white rounded-xl" onClick={() => userInput('Del')}>Del</button>
                        <button className="w-auto h-auto px-4 py-2 bg-gray-200 rounded-xl col-span-2" onClick={() => userInput('=')}>=</button>
                    </div>
                </div>
    </div> );
}
 
export default Main;