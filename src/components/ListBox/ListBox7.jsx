import { GetArrayComponent } from "../../utils/GetArrayComponent";
import { ListBoxOption7 } from "./ListBoxOption7";

/**
 * @typedef {Array}  ListBoxItemArray
 * @property {string} 0
 * @property {"selected"} 1
 */

/**
 * @typedef {string|ListBoxItemArray} ListBoxItem
 */

/**
 * @typedef {object} ListBox7Props
 * @property {React.ReactNode} [children]
 * @property {ListBoxItem[]} [list]  A list of "option" elements. An array can be used where the second value represents the value of "selected".
 */

/**
 * With a list box, users can select from a set of values presented in a list that is always visible. 
 * @param {ListBox7Props | React.Component<"select">} props
 * @returns {React.ReactNode}
 */
export function ListBox7({ children, list, ...props }) {
    return (
        <select {...props}>
            {children}
            {
                list && (
                    list.map(function (option) {
                        return <GetArrayComponent Component={ListBoxOption7} value={option} key={option} />
                    })
                )
            }
        </select>
    )
}