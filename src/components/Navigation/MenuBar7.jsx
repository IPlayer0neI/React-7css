import { conditionString } from "../../utils/ternaryDie";
import { MenuBarItem7 } from "./MenuBarItem7";

/**
 * @typedef {object} MenuBar7Props
 * @property {React.ReactNode} [children]
 * @property {boolean} [hover] To add the hovering/mouse-over trigger, you can add a hover value.
 * @property {string[]} [list]  A list of "option" elements.
 */

/**
 * "ul" element with role="menubar".
 * @param {MenuBar7Props | React.ComponentProps<"ul">}
 * @returns {React.ReactNode}
 */
export function MenuBar7({ children, hover = true, list, className = "", ...props }) {
    return (
        <ul role="menubar" className={`${conditionString(hover, "can-hover")} ${className}`} {...props}>
            {children}
            {
                list && list.map(function (item, index) {
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