import { InlineItem } from "../../../interfaces/HeaderInterfaces";
import {IconComponent, IconKey} from "../../../defaults/iconMapper"


export default function Inline({...props}: InlineItem) {
    const InlineTag = props.tag as keyof JSX.IntrinsicElements;


    return (
        <a 
            href="/#" 
            className="flex items-center"> 
            <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        </a>
    )
}