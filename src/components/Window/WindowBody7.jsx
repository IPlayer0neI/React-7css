import { conditionString } from "../../utils/ternaryDie";

/**
 * Every window has a boundary that defines its shape.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.space]  You may use the space value to add some padding to the window body.
 */
export function WindowBody7({ children, space = false, ...props }){
    return (
        <div className={`window-body ${conditionString(space, "has-space")}`} {...props}>
            {children}
        </div>
    )
}