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


const HeaderMenuItemProps: InlineInterface = {
    component: 'inline',
    text: 'DefaultItem',
    tag: "a",
    // TODO: style
}

const HeaderHiddenDropdownBlockProps: BlockInterface = {
    component: "block",
    // TODO: style
    children: [ // TODO: use complex dropdown items
        HeaderMenuItemProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps
    ]
}

const HeaderDropdownIcon: FaIconInterface = {
    iconName: "" // TODO:
}

const HeaderDropdownBtnProps: InlineInterface = {
    component: "inline",
    tag: "button",
    children: [HeaderDropdownIcon]
}

const HeaderMenuDropdownProps: BlockInterface = {
    component: "block",
    // TODO: style
    children: [
        HeaderDropdownBtnProps,
        HeaderHiddenDropdownBlockProps
    ]
}

const HeaderMenuBlockProps: BlockInterface = {
    component: "block",
    // TODO: style
    children: [
        HeaderMenuDropdownProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps
    ]
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
