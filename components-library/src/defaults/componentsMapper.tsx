import Block from "../components/header/base/Block"
import Inline from "../components/header/base/Inline"
import Logo from "../components/header/base/Logo"


type ComponentKey = {
    [key: string]: any;
};

export const Components: ComponentKey = {
    block: Block,
    inline: Inline,
    logo: Logo
};
  