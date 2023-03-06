interface BaseBlock {
    bgColor: string,
    borderColor: string,
    round: string,
    marginX: string,
    marginY: string,
    width?: string | null,
    height?: string | null,
}

interface BaseInLine {
    color: string,
    size: string,
}


interface Item extends BaseBlock, BaseInLine {
    metaName: string | null,
    icon: string | null,
    title: string,
}


interface HeaderInterface extends BaseBlock {
    items?: Item[] | null
}


export default HeaderInterface