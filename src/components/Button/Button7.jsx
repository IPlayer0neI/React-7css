import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} Button7Props 
 * @property {React.ReactNode} [children]
 * @property {boolean} [classDefault=false] A default button (in Windows, hitting the Enter key in a dialog context triggers the button) has a greenish-blue border and a light blue gradient shade.
 */

/**
 * A command button, also referred to as a push button, is a control that causes the application to perform some action when the user clicks it.
 * @param {Button7Props | React.ComponentProps<"button">} props
 * @returns {React.ReactNode}
 */
export function Button7({ children, classDefault = false, ...props }) {
    return (
        <button className={conditionString(classDefault, "default")} {...props}>
            {children}
        </button>
    )
}