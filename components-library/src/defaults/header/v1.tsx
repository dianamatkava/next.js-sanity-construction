import React from "react";
import {HeaderInterface, BlockItem, InlineItem} from "../../interfaces/HeaderInterfaces"


export const DefaultHeaderItem1: InlineItem = {
    text: "Test1"
}

export const DefaultHeaderItem2: InlineItem = {
    text: "Test2"
}

export const DefaultHeaderItemLogo: InlineItem = {
    text: "Test2",
    metaName: "Logo",
    icon: "FaCubes",
    size: "text-[2rem]"
}

export const DefaultHeaderProps: HeaderInterface = {
    bgColor: "bg-transparent",
    borderColor: "border-gray-200",
    paddingX: "px-4",
    items: [
        DefaultHeaderItemLogo,
        DefaultHeaderItem1,
        DefaultHeaderItem2
    ]

}
