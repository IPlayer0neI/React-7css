import React from "react";
import { conditionString } from "../../utils/ternaryDie";
import { MenuBarItem7 } from "./MenuBarItem7";

/**
 * "ul" element with role="menubar".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.hover] To add the hovering/mouse-over trigger, you can add a hover value.
 * @param {string[]} [props.list]  A list of "option" elements.
 * 
 */
export function MenuBar7({ children, hover = true, list, ...props }) {
    return (
        <ul role="menubar" className={conditionString(hover, "can-hover")} {...props}>
            {children}
            {
                list && list.map(function(item, index){
                    return (
                        <MenuBarItem7 key={index}>
                            {item}
                        </MenuBarItem7>
                    )
                })
            }
        </ul>
    )
}