import { conditionString } from "../../utils/ternaryDie";
import { ListBoxComplexOption7 } from "./ListBoxComplexOption7";
import { GetArrayComponent } from "../../utils/GetArrayComponent";
import React from "react";

/**
 * @typedef {Array}  ListBoxComplexItemArray
 * @property {string} 0
 * @property {"selected"} 1
 */

/**
 * @typedef {string|ListBoxComplexItemArray} ListBoxComplexItem
 */

/**
 * @typedef {object} ListBoxComplex7Props
 * @property {React.ReactNode} [children]
 * @property {boolean} [shadow=true] To add a drop shadow to the list box, use the shadow value.
 * @property {boolean} [hover=true]  To add a hovering style on the list box items, use the hover value.
 * @property {ListBoxComplexItem[]} [list] A list of "li" elements with role="option". An array can be used where the second value represents the value of "selected".
 */

/**
 * "ul" element with role="listbox".
 * @param {ListBoxComplex7Props | React.ComponentProps<"ul">}
 * @returns {React.ReactNode}
 */
export function ListBoxComplex7({ children, shadow = true, hover = true, list, className = "", ...props }) {
    return (
        <ul role="listbox" className={`${conditionString(shadow, "has-shadow")} ${conditionString(hover, "has-hover")} ${className}`} {...props}>
            {children}
            {
                list.map(function (option) {
                    return (
                        <GetArrayComponent Component={ListBoxComplexOption7} value={option} key={option} />
                    )
                })
            }
        </ul>
    )
}