import { GetArrayComponent } from "../../utils/GetArrayComponent"
import { ListBoxOption7 } from "./ListBoxOption7"

/**
 * @typedef {Array}  ListBoxComplexItemArray
 * @property {string} 0
 * @property {"selected"} 1
 */ 

/**
 * @typedef {string|ListBoxComplexItemArray} ListBoxItem
 */

/**
 * With a list box, users can select from a set of values presented in a list that is always visible.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {ListBoxItem[]} [props.list]  A list of "option" elements. An array can be used where the second value represents the value of "selected".
 */
export function ListBox7({ children, list, ...props }) {
    return (
        <select {...props}>
            {children}
            {
                list && (
                    list.map(function(option){
                        return <GetArrayComponent Component={ListBoxOption7} value={option} key={option}/>
                    })
                )
            }
        </select>
    )
}