import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} Menu7Props
 * @property {React.ReactNode} [children]
 * @property {boolean} [hover] To add the hovering/mouse-over trigger, you can add a hover value.
 */

/**
 * Menus are hierarchical lists of commands or options available to users in the current context.
 * @param {Menu7Props | React.ComponentProps<"ul">}
 * @returns {React.ReactNode}
 */
export function Menu7({ children, hover = true, className = "", ...props }) {
    return (
        <ul role="menu" className={`${conditionString(hover, "can-hover")} ${className}`} {...props}>
            {children}
        </ul>
    )
}
