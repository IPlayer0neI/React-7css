import { ComboBoxInput7 } from "./ComboBoxInput7";
import { ComboBoxButton7 } from "./ComboBoxButon7";
import { ComboBoxSelected7 } from "./ComboBoxSelected7";
import { ComboBoxOption7 } from "./ComboBoxOption7";

/**
 * @typedef {object} ComboBox7Props 
 * @property {React.ReactNode} [children] 
 * @property {string} [id] Automatically puts the "id" in the "input" and "label".
 * @property {boolean} [input=true] Automatically place an "input".
 * @property {boolean} [button=true] Automatically places a "button".
 * @property {string} [placeholder] Placeholder property for "input".
 * @property {string[]} [list] A list of "div" elements with role="option".
 */

/**
 * A combo box is a combination of a standard list box or a drop-down list and an editable text box, thus allowing users to enter a value that isn't in the list.
 * @param {ComboBox7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function ComboBox7({ children, button = true, input = true, placeholder, id, list, className = "", ...props }) {
    return (
        <div className={`combobox ${className}`} {...props}>
            {input && <ComboBoxInput7 id={id} placeholder={placeholder} />}
            {button && <ComboBoxButton7 />}
            {list && (
                <ComboBoxSelected7 id={id}>
                    {
                        list.map(function (option) {
                            return (
                                <ComboBoxOption7 key={encodeURIComponent(option)}>
                                    {option}
                                </ComboBoxOption7>
                            )
                        })
                    }
                </ComboBoxSelected7>
            )}
            {children}
        </div>
    )
}