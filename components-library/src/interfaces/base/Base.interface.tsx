import HoverSSInterface from "../CSSInterfaces/HoverCSS.interface";
import FocusSSInterface from "../CSSInterfaces/FocusCSS.interface";


export default interface BlockInterface {

    /**
     * Block text
     */
    text?: string,

    /**
     * CSS attributes
     */
    cssAttributes?: (HoverSSInterface | FocusSSInterface)[],

    /**
     * Themes
     */
    themes?: any[],

}