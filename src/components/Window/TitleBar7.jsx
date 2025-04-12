import { conditionString } from "../../utils/ternaryDie";

/**
 * At the top edge of the window, inside its border, is the title bar (also reffered to as the caption or caption bar), which extends across the width of the window. The title bar identifies the contents of the window.
 * Include command buttons associated with the common commands of the primary window in the title bar. These buttons act as shortcuts to specific window commands.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {React.ReactNode} [props.label]  Automatically puts text in the "label".
 * @param {boolean} [props.active=true] Place an active value either on the window container or the title bar itself to enable the active styles for the controls.
 */
export function TitleBar7({ children, label, active, ...props }) {
    return (
        <div className={`title-bar ${conditionString(active, "active")}`} {...props}>
            <div className="title-bar-text">{label}</div>
            <div className="title-bar-controls">
                {children}
            </div>
        </div>
    )
}