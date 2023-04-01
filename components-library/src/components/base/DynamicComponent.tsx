import { BlockItem, InlineItem, BaseLogo } from "../../interfaces/HeaderInterfaces";
import Block from "./Block"
import Inline from "./Inline"
import Logo from "./Logo"


type ComponentKey = {
    [key: string]: any;
};

export const Components: ComponentKey = {
    block: Block,
    inline: Inline,
    logo: Logo
};
  

export function DynamicComponentRenderer({items}: {items: (BlockItem | InlineItem | BaseLogo)[] | undefined}) {
    return (
      <>
        {items && items.map(
            function(props) {
                const DynamicComponent = Components[props.component];
                return <DynamicComponent {...props} />;
            }
        )}
      </>
    );
}
