import InlineInterface from "../../interfaces/base/Inline.interface"
import BlockInterface from "../../interfaces/base/Block.interface"
import FaIconInterface from "../../interfaces/base/FaIcon.interface"

import {MainHeaderBlockStyles} from './v1HeaderStyles'
import { Children } from "react"


const HeaderLogoIcon: FaIconInterface = {
    iconName: "" // TODO:
}

const HeaderLogoLinkProps: InlineInterface = {
    component: "inline",
    tag: "a",
    // TODO: style
    children: [HeaderLogoIcon]
}


const HeaderLogoBlockProps: BlockInterface = {
    component: "block",
    // TODO: style
    children: [HeaderLogoLinkProps]
}



const HeaderMenuBlockProps: BlockInterface = {
    component: "block"
    // TODO: style
}



const HeaderMenuHiddenIcon: FaIconInterface = {
    iconName: "" // TODO:
}


const HeaderMenuHiddenBtnProps: InlineInterface = {
    component: "inline",
    tag: "button",
    children: [HeaderMenuHiddenIcon]
}


const HeaderHiddenMenuBlockProps: BlockInterface = {
    component: "block",
    // TODO: style
    children: [HeaderMenuHiddenBtnProps]
}



const HeaderActionBtnsProps: BlockInterface = {
    component: "block"
    // TODO: style
}



export const DefaultHeaderV1Props: BlockInterface = {
    component: 'block',
    style: MainHeaderBlockStyles,
    children: [
        HeaderLogoBlockProps,
        HeaderMenuBlockProps,
        HeaderHiddenMenuBlockProps,
        HeaderActionBtnsProps
    ],
}
