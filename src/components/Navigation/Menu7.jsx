import { conditionString } from "../../utils/ternaryDie"

/**
 * Menus are hierarchical lists of commands or options available to users in the current context.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.hover] To add the hovering/mouse-over trigger, you can add a hover value.
 */
export function Menu7({ children, hover = true, ...props }) {
    return (
        <ul role="menu" className={conditionString(hover, "can-hover")} {...props}>
            {children}
        </ul>
    )
}
