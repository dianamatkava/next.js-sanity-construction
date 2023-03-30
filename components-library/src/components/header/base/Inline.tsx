import { InlineItem } from "../../../interfaces/HeaderInterfaces";
import { useState } from "react";
import { DynamicComponentRenderer } from "./DynamicComponent";


export default function Inline({...props}: InlineItem) {
    const InlineTag = props.tag as keyof JSX.IntrinsicElements;
    console.log(props, props.children)
    return (
        props.link ? (//flex items-center
            <InlineTag href={props.link} className=''> 
                {props.text}
                {props.children && <DynamicComponentRenderer items={(props.children)} />}
            </InlineTag>
        ) : (
            <InlineTag>
                {/* <DynamicComponentRenderer /> */}
            </InlineTag>
        )
            
        
        // <a 
        //     href="/#" 
        //     className="flex items-center"> 
        //     <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        // </a>
    
    )
}