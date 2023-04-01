import BaseCSSInterface from "./BaseCSS.interface"


export default interface BlockCSSInterface extends BaseCSSInterface {
    
    /**
     * width
     */
    width?: string,

    /**
     * height
     */
    height?: string,

    /**
     * justifyContent
     */
    justifyContent?: string,

    /**
     * flexDirection
     */
    flexDirection?: string,

}