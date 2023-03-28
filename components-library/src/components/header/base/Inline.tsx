import { InlineItem } from "../../../interfaces/HeaderInterfaces";
import { useState } from "react";


export default function Inline({...props}: InlineItem) {
    const InlineTag = props.tag as keyof JSX.IntrinsicElements;
    
    return (
        props.link ? (
            <InlineTag href={props.link}>{props.text}</InlineTag>
        ) : (
            <InlineTag />
        )
            
        
        // <a 
        //     href="/#" 
        //     className="flex items-center"> 
        //     <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        // </a>
    
    )
}