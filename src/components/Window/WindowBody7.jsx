import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} WindowBody7Props 
 * @property {React.ReactNode} [props.children]
 * @property {boolean} [props.space]  You may use the space value to add some padding to the window body.
 */

/**
 * Every window has a boundary that defines its shape.
 * @param {WindowBody7Props | React.ComponentProps.<"div">} props 
 * @returns {React.ReactNode}
 */
export function WindowBody7({ children, space = false, ...props }) {
    return (
        <div className={`window-body ${conditionString(space, "has-space")}`} {...props}>
            {children}
        </div>
    )
}