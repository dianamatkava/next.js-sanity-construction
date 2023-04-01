import BlockCSSInterface from "../CSSInterfaces/BlockCSS.interface"

export default interface FaIconInterface {
    /**
     * Component name to use
     */
    iconName: string

    /**
     * Fa icon style
     */
    style?: BlockCSSInterface
}