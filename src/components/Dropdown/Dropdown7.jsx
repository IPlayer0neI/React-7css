import { DropdownOption7 } from "./DropdownOption7";
import { GetArrayComponent } from "../../utils/GetArrayComponent";

/**
 * @typedef {Array}  DropdowOptionListItemArray
 * @property {string} 0
 * @property {"selected"} 1
 */

/**
 * @typedef {string | DropdowOptionListItemArray} DropdowOptionItem 
 */

/**
 * @typedef {object} Dropdown7Props 
 * @property {React.ReactNode} [children]
 * @property {DropdowOptionItem[]} [list] A list of "option" elements. An array can be used where the second value represents the value of "selected".
 */

/**
 * A drop-down list box allows the selection of only a single item from a list. In its closed state, the control displays the current value for the control. The user opens the list to change the value.
 * @param {Dropdown7Props | React.Component<"select">}
 * @returns {React.ReactNode}
 */
export function Dropdown7({ children, list, ...props }) {
    return (
        <select {...props}>
            {
                list && (
                    list.map(function (option, index) {
                        return (
                            <GetArrayComponent key={index} Component={DropdownOption7} value={option} />
                        )
                    })
                )
            }
            {children}
        </select>
    )
}