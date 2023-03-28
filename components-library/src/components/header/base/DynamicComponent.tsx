import { BlockItem, InlineItem, BaseLogo } from "../../../interfaces/HeaderInterfaces";
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
  

export function DynamicComponentRenderer({...items}: (BlockItem | InlineItem | BaseLogo)[]) {
    return (
      <>
        {items.map(
            function(props) {
                const DynamicComponent = Components[props.component];
                return <div><DynamicComponent {...props} /></div>;
            }
        )}
      </>
    );
}
