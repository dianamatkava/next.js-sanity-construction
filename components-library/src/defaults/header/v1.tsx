import InlineInterface from "../../interfaces/base/Inline.interface"
import BlockInterface from "../../interfaces/base/Block.interface"
import FaIconInterface from "../../interfaces/base/FaIcon.interface"

import {HeaderActionBtnsPropsStyles, HeaderHiddenMenuBlockStyles, HeaderLogoBlockStyles, HeaderMenuBlockStyles, MainHeaderBlockStyles} from './v1HeaderStyles'
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
    style: HeaderLogoBlockStyles,
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
    style: HeaderMenuBlockStyles,
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
    style: HeaderHiddenMenuBlockStyles,
    children: [HeaderMenuHiddenBtnProps]
}


const HeaderActionBtnItemProps: InlineInterface = {
    component: "inline",
    text: 'DefaultItem',
    tag: "a",
    // TODO: style 
}

const HeaderActionBtnsProps: BlockInterface = {
    component: "block",
    style: HeaderActionBtnsPropsStyles,
    children: [HeaderMenuHiddenBtnProps]
}

export const DefaultHeaderV1Props: BlockInterface = {
    component: 'block',
    style: MainHeaderBlockStyles,
    children: [
        HeaderLogoBlockProps,
        HeaderHiddenMenuBlockProps,
        HeaderMenuBlockProps,
        HeaderActionBtnsProps
    ],
}
