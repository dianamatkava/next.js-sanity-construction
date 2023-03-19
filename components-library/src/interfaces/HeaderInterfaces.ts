interface BaseBlock {
    bgColor: string,
    borderColor: string,
    round?: string | "",
    marginX?: string,
    marginY?: string,
    paddingX?: string,
    paddingY?: string,
    width?: string,
    height?: string,
}

interface BaseInLine {
    color?: string,
    size?: string,
    text: string,
}


export interface BlockItem extends BaseBlock {
    metaName?: string,
    icon?: string,
    text: string,
}

export interface InlineItem extends BaseInLine {
    metaName?: string,
    icon?: string,
}

export interface HeaderInterface extends BaseBlock {
    items?: BlockItem[] | InlineItem[]
}