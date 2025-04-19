import { Help7 } from "../Controls/Help7"
import { Minimize7 } from "../Controls/Minimize7";
import { Maximize7 } from "../Controls/Maximize7";
import { Close7 } from "../Controls/Close7";
import { Restore7 } from "../Controls/Restore7";

/**
 * @typedef {("minimize" | "help" | "restore" | "close" | "maximize")} BarControls
 */

/**
 * @param {object} props 
 * @param {BarControls[]} props.controls 
 * @returns {React.ReactNode}
 */
function BarControlsRender({ controls }) {
    function hasValue(control) {
        return controls.findIndex((c) => c == control) > -1;
    }

    return (
        (
            <TitleBarControls7>
                {hasValue("help") && <Help7 />}
                {hasValue("minimize") && <Minimize7 />}
                {hasValue("maximize") && <Maximize7 />}
                {hasValue("close") && <Close7 />}
                {hasValue("restore") && <Restore7 />}
            </TitleBarControls7>
        )
    )
}

/**
 * @typedef {object} TitleBarControls7Props 
 * @property {React.ReactNode} [children]
 * @property {BarControls[]} [controls]
 */

/**
 * "p" element with class "title-bar-controls".
 * @param {TitleBarControls7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function TitleBarControls7({ children, className = "", controls, ...props }) {
    return (
        <div className={`title-bar-controls ${className}`} {...props}>
            {children}
            {
                controls && (
                    <BarControlsRender controls={controls} />
                )
            }
        </div>
    )
}