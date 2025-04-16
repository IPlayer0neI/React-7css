import { dieTernary } from "../../utils/ternaryDie";
import { FieldRowStacked7 } from "../FieldRow/FieldRowStacked";
import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * @typedef {object} TextBox7Props 
 * @property {React.ReactNode} [children]
 * @property {string} [id] Automatically puts the "id" in the "input" and "label"
 * @property {boolean} [stacked=false] You can make use of the stacked value to position your label above the input instead of beside it.
 */

/**
 * A text box (also referred to as an edit control) is a rectangular control where the user enters or edits text. It can be defined to support a single line or multiple lines of text.
 * @param {TextBox7Props | React.Component<"input">} props 
 * @returns {React.ReactNode}
 */
export function TextBox7({ children, id, stacked = false, ...props }) {
    const FieldRowComponent = dieTernary(stacked, FieldRowStacked7, FieldRow7);
    
    return (
        <FieldRowComponent>
            <label htmlFor={id}>{children}</label>
            <input id={id} type="text" {...props} />
        </FieldRowComponent>
    )
}