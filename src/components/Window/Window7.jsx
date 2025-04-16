import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} Window7Props 
 * @property {React.ReactNode} [props.children]
 * @property {boolean} [props.active=true] Place an active value either on the window container or the title bar itself to enable the active styles for the controls.
 * @property {boolean} [props.glass=true] You can produce this "striking aspect" of the window with a glass value.
 */

/**
 * "div" element with class "window".
 * @param {Window7Props | React.ComponentProps.<"div">} props 
 * @returns {React.ReactNode}
*/
export function Window7({ children, active = true, glass = false, ...props }){
    return (
        <div className={`window ${conditionString(active, "active")} ${conditionString(glass, "glass")}`} {...props}>
            {children}
        </div>
    )
}