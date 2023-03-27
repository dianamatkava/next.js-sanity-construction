import { BaseLogo } from "../../../interfaces/HeaderInterfaces"
import { IconComponent } from "../../../defaults/iconMapper"
import { useState } from "react";

export default function Logo({...props}: BaseLogo) {
    const Icon = IconComponent[props.icon];
    const [iconSize, setIconSize] = useState(props.size)
    const [iconColor, setIconColor] = useState(props.color)
    return (
        <Icon className={`${iconSize} ${iconColor}`}/>
    )
}
