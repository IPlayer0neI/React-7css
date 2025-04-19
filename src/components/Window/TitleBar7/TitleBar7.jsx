import { conditionString } from "../../../utils/ternaryDie";
import { TitleBarControls7 } from "./TitleBarControls7";
import { TitleBarText7 } from "./TitleBarText7";

/**
 * @typedef {("minimize" | "help" | "restore" | "close" | "maximize")} BarControls
 */

/**
 * @typedef {object} TitleBar7Props 
 * @property {React.ReactNode} [children]
 * @property {BarControls[]} [controls]
 * @property {React.ReactNode} [label]  Automatically puts text in the "label".
 * @property {boolean} [active=true] Place an active value either on the window container or the title bar itself to enable the active styles for the controls.
 */

/**
 * At the top edge of the window, inside its border, is the title bar (also reffered to as the caption or caption bar), which extends across the width of the window. The title bar identifies the contents of the window.
 * Include command buttons associated with the common commands of the primary window in the title bar. These buttons act as shortcuts to specific window commands.
 * @param {TitleBar7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function TitleBar7({ children, label, active, className = "", controls, ...props }) {
    return (
        <div className={`title-bar ${conditionString(active, "active")} ${className}`} {...props}>
            {
                label && (
                    <TitleBarText7>
                        {label}
                    </TitleBarText7>
                )
            }
            {
                controls && (
                    <TitleBarControls7 controls={controls}/>
                )
            }
            {children}
        </div>
    )
}