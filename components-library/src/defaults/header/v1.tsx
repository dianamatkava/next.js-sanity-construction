import React from "react";
import {HeaderInterface, BlockItem, InlineItem, BaseLogo} from "../../interfaces/HeaderInterfaces"


// --------- Header inline items --------------------
export const DefaultHeaderInlineItem1: InlineItem = {
    component: 'inline',
    tag: 'a',
    link: '/#',
    text: "Test1"
}

export const DefaultHeaderItemLogo: BaseLogo = {
    component: 'logo',
    icon: "FaCubes",
}

export const DefaultHeaderInlineItemLogo: InlineItem = {
    component: 'inline',
    tag: 'a',
    link: "/#",
    children: [DefaultHeaderItemLogo]
}

// --------- Header inline items end ----------------



// --------- Header block items ---------------------
export const DefaultHeaderBlockItems: BlockItem = {
    component: 'block',
    text: "Test2",
    children: [
        DefaultHeaderInlineItem1,
        DefaultHeaderInlineItem1,
        DefaultHeaderInlineItem1
    ]
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
        DefaultHeaderInlineItemLogo,
        DefaultHeaderBlockItems,
    ]

}
