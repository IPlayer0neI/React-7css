import { dieTernary } from "../../utils/ternaryDie";
import { FieldRow7 } from "../FieldRow/FieldRow7";
import { FieldRowStacked7 } from "../FieldRow/FieldRowStacked";

/**
 * "textarea" and "label" elements.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.id] Automatically puts the "id" in the "textarea" and "label".
 * @param {boolean} [props.stacked=false]  You can make use of the stacked value to position your label above the input instead of beside it.
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