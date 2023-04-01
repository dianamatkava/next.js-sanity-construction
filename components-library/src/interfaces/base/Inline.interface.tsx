import BlockInterface from "./Block.interface"
import FaIconInterface from "./FaIcon.interface"
import BaseCSSInterface from "../CSSInterfaces/BaseCSS.interface"
import InlineCSSInterface from "../CSSInterfaces/InlineCSS.interface"

export default interface InlineInterface {
    /**
     * Component name to use
     */
    component: 'inline'

    /**
     * HTML tag name
     */
    tag: string,

    /**
     * inline text
     */
    text?: string,

    /**
     * CSS style
     */
    style?: BaseCSSInterface | InlineCSSInterface,

    /**
     * CSS tag attributes
     */
    tagAttributes?: any[],

    /**
     * Inline children
     */
    children?: this | BlockInterface | FaIconInterface
}