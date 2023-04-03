import BlockInterface from "./Block.interface";
import InlineInterface from "./Inline.interface";
import FaIconInterface from "./FaIcon.interface";


export default interface BaseInterface {

    /**
     * text
     */
    text?: string,

    /**
     * Block children
     */
    children?: (BlockInterface | InlineInterface | FaIconInterface)[]

}