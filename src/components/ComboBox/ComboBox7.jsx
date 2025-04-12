import { ComboBoxInput7 } from "./ComboBoxInput7"
import { ComboBoxButton7 } from "./ComboBoxButon7"
import { ComboBoxSelected7 } from "./ComboBoxSelected7"
import { ComboBoxOption7 } from "./ComboBoxOption7"

/**
 * A combo box is a combination of a standard list box or a drop-down list and an editable text box, thus allowing users to enter a value that isn't in the list.
 * @param {object} props 
 * @param {React.ReactNode} [props.children] 
 * @param {string} [props.id] Automatically puts the "id" in the "input" and "label".
 * @param {boolean} [props.input=true] Automatically place an "input".
 * @param {boolean} [props.button=true] Automatically places a "button".
 * @param {string} [props.placeholder] Placeholder property for "input".
 * @param {string[]} [props.list] A list of "div" elements with role="option".
 */
export function ComboBox7({ children, button = true, input = true, placeholder, id, list, ...props }) {
    return (
        <div className="combobox" {...props}>
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