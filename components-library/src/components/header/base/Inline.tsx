import { InlineItem } from "../../../interfaces/HeaderInterfaces";
import {IconComponent, IconKey} from "../../../defaults/iconMapper"
import { useState } from "react";


export default function Inline({...props}: InlineItem) {
    const InlineTag = props.tag as keyof JSX.IntrinsicElements;
    const [color, setColor] = useState(props.color)
    return (
        props.link ? (
            <InlineTag href={props.link} />
        ) : (
            <InlineTag href={props.link} />
        )
            
        
        // <a 
        //     href="/#" 
        //     className="flex items-center"> 
        //     <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        // </a>
    
    )
}