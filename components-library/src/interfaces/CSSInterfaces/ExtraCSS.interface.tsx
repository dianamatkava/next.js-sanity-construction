import BlockCSSInterface from "./BlockCSS.interface"
import InlineCSSInterface from "./InlineCSS.interface"


export default interface ExtraCSSInterface {
    /**
     * prefix
     */
    prefix: string

    /**
     * prefix
     */
    style: BlockCSSInterface | InlineCSSInterface
}