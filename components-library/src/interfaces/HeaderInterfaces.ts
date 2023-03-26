interface Meta {
    component: string 
}

export interface BaseBlock {
    bgColor?: string,
    borderColor?: string,
    round?: string | "",
    marginX?: string,
    marginY?: string,
    paddingX?: string,
    paddingY?: string,
    width?: string,
    height?: string,
}

export interface BaseInLine {
    color?: string,
    size?: string,
    text: string,

}


export interface BlockItem extends BaseBlock, Meta {
    text: string,
    children?: this | InlineItem
}

export interface InlineItem extends BaseInLine, Meta {
    icon?: string,
}

export interface LogoItem extends BaseInLine {
    icon: string
}

export interface HeaderInterface extends BaseBlock {
    items: BlockItem[] | InlineItem[] | []
}