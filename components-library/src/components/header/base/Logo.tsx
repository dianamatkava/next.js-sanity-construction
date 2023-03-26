import { LogoItem } from "../../../interfaces/HeaderInterfaces"
import { IconComponent } from "../../../defaults/iconMapper"

export default function Logo({...props}: LogoItem) {
    const Icon = IconComponent[props.icon];
    return (
        <a 
            href="/#" 
            className="flex items-center"> 
                <Icon />
                <span className="self-center text-xl font-semibold whitespace-nowrap mx-6">logoType</span>
        </a>
    )
}
