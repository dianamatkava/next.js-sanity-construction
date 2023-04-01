import BaseInterface from "./Base.interface"
import InlineCSSInterface from "../CSSInterfaces/InlineCSS.interface"

export default interface InlineInterface extends BaseInterface {
    /**
     * Component name to use
     */
    component: 'inline'

    /**
     * HTML tag name
     */
    tag: 
    | 'a'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'li'
    | 'span'

    /**
     * CSS style
     */
    style?: InlineCSSInterface,

    /**
     * CSS tag attributes (href, data, blank)
     */
    tagAttributes?: any[],

}