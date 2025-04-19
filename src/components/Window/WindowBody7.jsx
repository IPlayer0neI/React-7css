import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} WindowBody7Props 
 * @property {React.ReactNode} [children]
 * @property {boolean} [space]  You may use the space value to add some padding to the window body.
 */

/**
 * Every window has a boundary that defines its shape.
 * @param {WindowBody7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function WindowBody7({ children, space = false, className = "", ...props }) {
    return (
        <div className={`window-body ${conditionString(space, "has-space")} ${className}`} {...props}>
            {children}
        </div>
    )
}