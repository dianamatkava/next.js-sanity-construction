import { BaseLogo } from "../../../interfaces/HeaderInterfaces"
import { IconComponent } from "../base/DynamicIcon"
import { useState } from "react";

export default function Logo({...props}: BaseLogo) {
    const Icon = IconComponent[props.icon];
    const [iconSize, setIconSize] = useState(props.size)
    const [iconColor, setIconColor] = useState(props.color)
    return (
        <Icon className={`${iconSize} ${iconColor} self-center text-xl font-semibold whitespace-nowrap mx-6`}/>
    )
}
