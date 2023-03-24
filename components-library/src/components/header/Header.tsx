import React, { useState } from "react";
import "./Header.css";
import {icons} from "../../defaults/iconMapper"
import { AiOutlineMenu } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";


import {HeaderInterface, BaseBlock} from "../../interfaces/HeaderInterfaces";



export default function Block({...props}: BaseBlock) {
    return ()
}


export default function Header({...props}: HeaderInterface) {

    const [style, setProps] = useState(props)
    
    const tesBbtn = () => {
        style.bgColor = 'bg-sky-800'
        setProps(style)
        console.log('HERE')
    }

    return (

        
        // <header className="print">
            
        //     <nav className={`${[props.borderColor, style.bgColor, props.paddingX].filter(Boolean)} lg:px-6 py-2.5`}> 
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



