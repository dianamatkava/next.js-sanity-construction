import ExtraCSSInterface from "./ExtraCSS.interface"


export default interface OnSizeCSSInterface extends ExtraCSSInterface {
    /**
     * prefix
     */
    prefix: 
        | 'sm:'
        | 'md:'
        | 'lg:',
    
    /**
     * minWidth
     */
    minWidth: string,
    
    /**
     * maxWidth
     */
    maxWidth: string
}