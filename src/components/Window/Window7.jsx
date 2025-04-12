import { conditionString } from "../../utils/ternaryDie"

/**
 * "div" element with class "window".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.active=true] Place an active value either on the window container or the title bar itself to enable the active styles for the controls.
 * @param {boolean} [props.glass=true] You can produce this "striking aspect" of the window with a glass value.
 */
export function Window7({ children, active = true, glass = false, ...props }){
    return (
        <div className={`window ${conditionString(active, "active")} ${conditionString(glass, "glass")}`} {...props}>
            {children}
        </div>
    )
}