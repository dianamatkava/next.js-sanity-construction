import { BlockItem } from "../../interfaces/HeaderInterfaces";
import { DynamicComponentRenderer } from "./DynamicComponent";

export default function Block({...props}: BlockItem) {
    return (
        <div className="">
            {props.children && <DynamicComponentRenderer items={(props.children)} />}
        </div>
    );
}