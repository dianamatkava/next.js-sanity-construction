import InlineCSSInterface from "../../interfaces/CSSInterfaces/InlineCSS.interface"
import BlockCSSInterface from "../../interfaces/CSSInterfaces/BlockCSS.interface"
import OnSizeCSSInterface from "../../interfaces/CSSInterfaces/SizeCSS.interface"


// export const LgMainHeaderBlockStyles: OnSizeCSSInterface = {
//     prefix: 'lg:'
// }


export const MainHeaderBlockStyles: BlockCSSInterface = {
    // mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8
    display: 'flex',
    width: 'max-w-7xl',
    margin: 'mx-auto',
    padding: 'p-6',
    alignItems: 'items-center',
    justifyContent: 'justify-between',
    onSize: [] // TODO
}



export const HeaderLogoBlockStyles: BlockCSSInterface = {
    // flex lg:flex-1
    display: 'flex',
    onSize: [] // TODO
}

export const HeaderLogoLinkStyles: InlineCSSInterface = {
    // -m-1.5 p-1.5
    margin: '-m-1.5',
    padding: 'p-1.5',
}

export const HeaderLogoIconStyles: BlockCSSInterface = {
    // h-8 w-auto
    height: 'h-8',
    width: 'w-auto'
}



export const HeaderHiddenMenuBlockStyles: BlockCSSInterface = {
    // flex lg:hidden
    display: 'flex',
    onSize: [] // TODO
}

export const HeaderMenuHiddenBtnStyles: BlockCSSInterface = {
    // -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700
    margin: '-m-2.5',
    padding: 'p-2.5',
    display: 'inline-flex',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
    round: 'rounded-md',
    color: 'text-gray-700'

}
export const HeaderMenuHiddenIconStyles: BlockCSSInterface = {
    // h-6 w-6
    height: 'h-6',
    width: 'w-6'
}



export const HeaderMenuBlockStyles: BlockCSSInterface = {
    // hidden lg:flex lg:gap-x-12
    display: 'hidden',
    onSize: [] // TODO
}

export const HeaderMenuDropdownStyles: BlockCSSInterface = {
    // relative
    display: 'relative'
}

export const HeaderDropdownBtnStyles: InlineCSSInterface = {
    // flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900
    display: 'flex',
    alignItems: 'items-center',
    columnGap: 'gap-x-1',
    color: 'text-gray-900',
    fontSize: 'text-sm',
    fontWeight: 'font-semibold',


    padding: 'p-6',
}

export const HeaderDropdownIconStyles: BlockCSSInterface = {
    // h-5 w-5 flex-none text-gray-400
}

export const HeaderHiddenDropdownBlockStyles: BlockCSSInterface = {
    // p-4 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5
}

export const HeaderMenuItemStyles: InlineCSSInterface = {
    // text-sm font-semibold leading-6 text-gray-900
}



export const HeaderActionBtnsPropsStyles: BlockCSSInterface = {
    // hidden lg:flex lg:flex-1 lg:justify-end
}

export const HeaderActionBtnItemStyles: InlineCSSInterface = {
    // text-sm font-semibold leading-6 text-gray-900
}