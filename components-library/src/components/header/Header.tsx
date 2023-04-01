import React, { useState } from "react";
import "./Header.css";
import { Components, DynamicComponentRenderer } from "../base/DynamicComponent"
import {HeaderInterface} from "../../interfaces/HeaderInterfaces";


export function Header({...props}: HeaderInterface) {
    

    // const [navStyle, setProps] = useState(`${[props.borderColor, props.bgColor, props.paddingX, 'lg:px-6 py-2.5'].filter(Boolean)}`.replaceAll(",", " "))
    // const tesBbtn = () => {
    //     props.bgColor = props.bgColor == 'bg-blue-400' ? 'bg-transparent' : 'bg-blue-400'
    //     setProps(`${[props.borderColor, props.bgColor, props.paddingX, 'lg:px-6 py-2.5'].filter(Boolean)}`.replaceAll(",", " "))
    // }


    const [bgColor, setBgColor] = useState(props.bgColor)
    const [borderColor, setBorderColor] = useState(props.borderColor)
    const [round, setRound] = useState(props.round)
    const [marginX, setMarginX] = useState(props.marginX)
    const [marginY, setMarginY] = useState(props.marginY)
    const [paddingX, setPaddingX] = useState(props.paddingX)
    const [paddingY, setPaddingY] = useState(props.paddingY)
    const [width, setWidth] = useState(props.width)
    const [height, setHeight] = useState(props.height)


    function updateScale() {

        const bgColorValue = document.querySelector('[id="bgColor"]') as HTMLInputElement;
        const borderColorValue = document.querySelector('[id="borderColor"]') as HTMLInputElement;
        const roundValue = document.querySelector('[id="round"]') as HTMLInputElement;
        const widthValue = document.getElementById('width') as HTMLInputElement;
        const heightValue = document.querySelector('[id="height"]') as HTMLInputElement;
        const paddingXValue = document.querySelector('[id="paddingX"]') as HTMLInputElement;
        const paddingYValue = document.querySelector('[id="paddingY"]') as HTMLInputElement;
        const marginXValue = document.querySelector('[id="marginX"]') as HTMLInputElement;
        const marginYValue = document.querySelector('[id="marginY"]') as HTMLInputElement;

        setBgColor(bgColorValue.value)
        setBorderColor(borderColorValue.value)
        setRound(roundValue.value)
        setMarginX(marginXValue.value)
        setMarginY(marginYValue.value)
        setPaddingX(paddingXValue.value)
        setPaddingY(paddingYValue.value)
        setWidth(widthValue.value)
        // setHeight(heightValue.value)

    }
    return (
        <>
        <header>
            <div className={`${bgColor} border ${borderColor} ${round} ${width} ${height} ${paddingX} ${paddingY} ${marginX} ${marginY} flex flex-wrap justify-between items-center mx-auto`}> 
                <DynamicComponentRenderer items={props.items} />
            </div>
            <button onClick={() => setBgColor(bgColor == 'bg-transparent' ? 'bg-sky-400' : 'bg-transparent')}>bgColor to blue</button>
        </header>

        <div>
            SETTINGS:
            <p>Update block scale</p>
            <div className="m-4">
                <label htmlFor="bgColor">bgColor: </label>
                <input id='bgColor' defaultValue={bgColor} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="borderColor">borderColor: </label>
                <input id='borderColor' defaultValue={borderColor} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="round">round: </label>
                <input id='round' defaultValue={round} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="width">width: </label>
                <input id='width' defaultValue={width} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="height">height: </label>
                <input id='heigh' defaultValue={height} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="paddingX">paddingX: </label>
                <input id='paddingX' defaultValue={paddingX} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="paddingY">paddingY: </label>
                <input id='paddingY' defaultValue={paddingY} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="marginX">marginX: </label>
                <input id='marginX' defaultValue={marginX} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <div className="m-4">
                <label htmlFor="marginY">marginY: </label>
                <input id='marginY' defaultValue={marginY} className="bg-gray-100 w-[200px] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
            <button onClick={updateScale} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">Apply</button>
        </div>

        <div className="bg-blue-200 border-red-700"></div>

        <a href="#content" className="not-sr-only">
            Skip to content
        </a>
        
        </>
        
        
        // 
            
        //     
        //     {/* TODO: dark:bg-gray-800, lg:px-6: dinamicly change size when screen lg */}
        //         <div className="flex flex-wrap justify-between items-center mx-auto">
        //             <a 
        //                 href="/#" 
        //                 className="flex items-center"> 
        //                     <FaCubes className={props.items ? props.items[0].icon : ""} />
        //                     <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        //             </a>
                    
        //             <div className="flex items-center lg:order-2">
        //                 <a 
        //                     href="/#" 
        //                     className="
        //                         text-gray-800 dark:text-white hover:bg-gray-50 
        //                         focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 
        //                         lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        //                     >Log in
        //                 </a>
        //                 <a 
        //                     href="/#" 
        //                     className="
        //                         text-white bg-primary-700 hover:bg-primary-800 
        //                         focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 
        //                         lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
        //                         focus:outline-none dark:focus:ring-primary-800"
        //                     >Get started
        //                 </a>
        //                 <button 
        //                     data-collapse-toggle="mobile-menu-2" 
        //                     type="button" 
        //                     className="
        //                         inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
        //                         lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
        //                         focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        //                     aria-controls="mobile-menu-2" 
        //                     aria-expanded="false"
        //                 >
        //                     <span className="sr-only">Open main menu</span>
        //                     <AiOutlineMenu className="text-[1rem]"/>
        //                 </button>
        //             </div>

        //             <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        //                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        //                     <li>
        //                         <a 
        //                             href="/#" 
        //                             className="
        //                                 block py-2 pr-4 pl-3 text-white rounded bg-primary-700 
        //                                 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" 
        //                             aria-current="page"
        //                         >Home</a>
        //                     </li>
        //                     <li>
        //                         <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
        //                     </li>
        //                     <li>
        //                         <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
        //                     </li>
        //                     <li>
        //                         <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
        //                     </li>
        //                     <li>
        //                         <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
        //                     </li>
        //                     <li>
        //                         <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //     <button onClick={tesBbtn}>TEST</button>
        // </header>

        
    );
}



