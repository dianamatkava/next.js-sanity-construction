import BlockInterface from "./Block.interface";
import InlineInterface from "./Inline.interface";
import FaIconInterface from "./FaIcon.interface";
import HoverSSInterface from "../CSSInterfaces/HoverCSS.interface";
import FocusSSInterface from "../CSSInterfaces/FocusCSS.interface";


export default interface BaseInterface {

    /**
     * text
     */
    text?: string,

    /**
     * CSS attributes (hover, focus)
     */
    cssAttributes?: (HoverSSInterface | FocusSSInterface)[],

    /**
     * Themes (dark, light)
     */
    themes?: any[],

    /**
     * Block children
     */
    children?: (BlockInterface | InlineInterface | FaIconInterface)[]

}