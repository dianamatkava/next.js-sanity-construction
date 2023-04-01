import BaseCSSInterface from "../CSSInterfaces/BaseCSS.interface"

export default interface FaIconInterface {
    /**
     * Component name to use
     */
    iconName: string

    /**
     * Fa icon style
     */
    style?: BaseCSSInterface
}