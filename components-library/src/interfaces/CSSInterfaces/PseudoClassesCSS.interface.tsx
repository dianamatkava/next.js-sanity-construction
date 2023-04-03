import ExtraCSSInterface from "./ExtraCSS.interface"

export default interface PseudoClassesCSSInterface extends ExtraCSSInterface{
    /**
     * prefix
     */
    prefix:
        | 'hover:'
        | 'focus:'
}