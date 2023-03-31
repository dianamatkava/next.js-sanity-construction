interface Meta {
    component: string 
}

// --------- Base interfaces ---------------
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
    text?: string,
}

export interface BaseLogo extends BaseInLine{
    icon: string
}
// --------- Base interfaces END -----------



// --------- Base Items --------------------
export interface BlockItem extends BaseBlock, Meta {
    text: string,
    children?: (BlockItem | InlineItem | BaseLogo)[]
}

export interface InlineItem extends BaseInLine, Meta {
    tag: string,
    icon?: BaseLogo,
    link?: string,
    children?: (BlockItem | InlineItem | BaseLogo)[]
}

// --------- Base Items END ----------------


export interface HeaderInterface extends BaseBlock {
    items: (BlockItem | InlineItem | BaseLogo)[]
}