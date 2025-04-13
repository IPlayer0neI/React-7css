import { conditionString } from "../../utils/ternaryDie"
import { ListBoxComplexOption7 } from "./ListBoxComplexOption7"
import { GetArrayComponent } from "../../utils/GetArrayComponent"

/**
 * @typedef {Array}  ListBoxComplexItemArray
 * @property {string} 0
 * @property {"selected"} 1
 */ 

/**
 * @typedef {string|ListBoxComplexItemArray} ListBoxComplexItem
 */

/**
 * "ul" element with role="listbox".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.shadow=true] To add a drop shadow to the list box, use the shadow value.
 * @param {boolean} [props.hover=true]  To add a hovering style on the list box items, use the hover value.
 * @param {ListBoxComplexItem[]} [props.list] A list of "li" elements with role="option". An array can be used where the second value represents the value of "selected".
 */
export function ListBoxComplex7({ children, shadow = true, hover = true, list, ...props }) {
    return (
        <ul role="listbox" className={`${conditionString(shadow, "has-shadow")} ${conditionString(hover, "has-hover")}`} {...props}>
            {children}
            {
                list.map(function(option){
                    return (
                       <GetArrayComponent Component={ListBoxComplexOption7} value={option} key={option}/>
                    )
                })
            }
        </ul>
    )
}