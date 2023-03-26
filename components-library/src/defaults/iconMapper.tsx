import {FaCubes} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";


export type IconKey = {
    [key: string]: React.ComponentType<any>;
};

export const IconComponent: IconKey = {
    FaCubes: FaCubes,
    AiOutlineMenu: AiOutlineMenu,
}

// function Story(props: string) {
//     // Correct! JSX type can be a capitalized variable.
//     const SpecificStory = components[props.storyType];
//     return <SpecificStory story={props.story} />;
