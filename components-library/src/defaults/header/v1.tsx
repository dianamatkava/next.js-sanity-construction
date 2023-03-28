import React from "react";
import {HeaderInterface, BlockItem, InlineItem, BaseLogo} from "../../interfaces/HeaderInterfaces"


// --------- Header inline items --------------------
export const DefaultHeaderInlineItem1: InlineItem = {
    component: 'inline',
    tag: 'span',
    text: "Test1"
}

export const DefaultHeaderInlineItem2: InlineItem = {
    component: 'inline',
    tag: 'a',
    text: "Test2",
    link: "/#"
}

export const DefaultHeaderItemLogo: BaseLogo = {
    component: 'logo',
    icon: "FaCubes",
}

// --------- Header inline items end ----------------



// --------- Header block items ---------------------
export const DefaultHeaderBlockItem1: BlockItem = {
    component: 'block',
    text: "Test2"
}
// --------- Header block items end -----------------



export const DefaultHeaderProps: HeaderInterface = {
    // Base block params
    bgColor: "bg-red-200",
    borderColor: "border-black",
    round: "",
    marginX: "",
    marginY: "",
    paddingX: "px-[20px]",
    paddingY: "",
    width: "",
    height: "",
    
    // Items
    items: [
        DefaultHeaderInlineItem2,
        DefaultHeaderBlockItem1,
        DefaultHeaderItemLogo,
    ]

}
