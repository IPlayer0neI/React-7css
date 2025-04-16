import { dieTernary } from "../../utils/ternaryDie";
import { FieldRow7 } from "../FieldRow/FieldRow7";
import { FieldRowStacked7 } from "../FieldRow/FieldRowStacked";

/**
 * @typedef {object} TextArea7Props 
 * @property {React.ReactNode} [children]
 * @property {string} [id] Automatically puts the "id" in the "textarea" and "label".
 * @property {boolean} [stacked=false]  You can make use of the stacked value to position your label above the input instead of beside it.
 */

/**
 * "textarea" and "label" elements.
 * @param {TextArea7Props | React.Component<"textarea">} props 
 * @returns {React.ReactNode}
 */
export function TextArea7({ children, id, stacked = false, ...props }) {
    const FieldRowComponent = dieTernary(stacked, FieldRowStacked7, FieldRow7);
    return (
        <FieldRowComponent>
            <label htmlFor={id}>{children}</label>
            <textarea id={id} {...props} />
        </FieldRowComponent>
    )
}