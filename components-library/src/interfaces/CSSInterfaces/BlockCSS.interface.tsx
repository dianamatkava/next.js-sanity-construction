import BaseCSSInterface from "./BaseCSS.interface"


export default interface BlockCSSInterface extends BaseCSSInterface {
    
    /**
     * width
     */
    width?: string,

    /**
     * maxWidth
     */
    maxWidth?: string,

    /**
     * height
     */
    height?: string,

    /**
     * maxHeight
     */
    maxHeight?: string,

    /**
     * justifyContent
     */
    justifyContent?: string,

    /**
     * flexDirection
     */
    flexDirection?: string,

    /**
     * overflow
     */
    overflow?: string,

    /**
     * boxShadow
     */
    boxShadow?: string

    /**
     * ringColor
     */
    ringColor?: string
}