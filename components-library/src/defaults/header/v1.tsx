import React from "react";
import {HeaderInterface, BlockItem, InlineItem} from "../../interfaces/HeaderInterfaces"


// --------- Header inline items --------------------
export const DefaultHeaderInlineItem1: InlineItem = {
    component: 'inline',
    text: "Test1"
}

export const DefaultHeaderInlineItem2: InlineItem = {
    component: 'inline',
    text: "Test2"
}

export const DefaultHeaderItemLogo: InlineItem = {
    text: "Test2",
    component: "Logo",
    icon: "FaCubes",
    size: "text-[2rem]"
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
    bgColor: "bg-transparent",
    borderColor: "border-gray-200",
    paddingX: "px-4",
    
    // Items
    items: [
        DefaultHeaderItemLogo,
    ]

}
