import InlineInterface from "./Inline.interface"
import FaIconInterface from "./FaIcon.interface"
import BaseCSSInterface from "../CSSInterfaces/BaseCSS.interface"
import BlockCSSInterface from "../CSSInterfaces/BlockCSS.interface"


export default interface BlockInterface {
    /**
     * Component name to use
     */
    component: 'block'

    /**
     * Block text
     */
    text?: string,

    /**
     * CSS style
     */
    style?: BaseCSSInterface | BlockCSSInterface,

    /**
     * CSS tag attributes
     */
    blockAttributes?: any[],

    /**
     * Block children
     */
    children?: this | InlineInterface | FaIconInterface
}