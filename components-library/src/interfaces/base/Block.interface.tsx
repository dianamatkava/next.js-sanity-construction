import BlockCSSInterface from "../CSSInterfaces/BlockCSS.interface"
import BaseInterface from "./Base.interface"


export default interface BlockInterface extends BaseInterface {
    /**
     * Component name to use
     */
    component: 'block'

    /**
     * CSS style
     */
    style: BlockCSSInterface,

    /**
     * CSS tag attributes
     */
    blockAttributes?: any[], // TODO: 

}