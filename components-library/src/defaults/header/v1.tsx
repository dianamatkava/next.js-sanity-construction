import InlineInterface from "../../interfaces/base/Inline.interface"
import BlockInterface from "../../interfaces/base/Block.interface"
import FaIconInterface from "../../interfaces/base/FaIcon.interface"

import {
    HeaderActionBtnItemStyles,
    HeaderActionBtnsPropsStyles, 
    HeaderDropdownBtnStyles, 
    HeaderDropdownIconStyles, 
    HeaderHiddenDropdownBlockStyles, 
    HeaderHiddenMenuBlockStyles, 
    HeaderLogoBlockStyles, 
    HeaderLogoIconStyles, 
    HeaderLogoLinkStyles, 
    HeaderMenuBlockStyles, 
    HeaderMenuDropdownStyles, 
    HeaderMenuHiddenBtnStyles, 
    HeaderMenuHiddenIconStyles, 
    HeaderMenuItemStyles, 
    MainHeaderBlockStyles
} from './v1HeaderStyles'


const HeaderLogoIcon: FaIconInterface = {
    iconName: "", // TODO;
    style: HeaderLogoIconStyles,
}

const HeaderLogoLinkProps: InlineInterface = {
    component: "inline",
    tag: "a",
    style: HeaderLogoLinkStyles,
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
    style: HeaderMenuItemStyles
}

const HeaderHiddenDropdownBlockProps: BlockInterface = {
    component: "block",
    style: HeaderHiddenDropdownBlockStyles,
    children: [ // TODO: use complex dropdown items
        HeaderMenuItemProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps,
        HeaderMenuItemProps
    ]
}

const HeaderDropdownIcon: FaIconInterface = {
    iconName: "", // TODO:
    style: HeaderDropdownIconStyles
}

const HeaderDropdownBtnProps: InlineInterface = {
    component: "inline",
    tag: "button",
    style: HeaderDropdownBtnStyles,
    children: [HeaderDropdownIcon]
}

const HeaderMenuDropdownProps: BlockInterface = {
    component: "block",
    style: HeaderMenuDropdownStyles,
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
    iconName: "", // TODO:
    style: HeaderMenuHiddenIconStyles
}

const HeaderMenuHiddenBtnProps: InlineInterface = {
    component: "inline",
    tag: "button",
    style: HeaderMenuHiddenBtnStyles,
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
    style: HeaderActionBtnItemStyles
}

const HeaderActionBtnsProps: BlockInterface = {
    component: "block",
    style: HeaderActionBtnsPropsStyles,
    children: [HeaderActionBtnItemProps]
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
