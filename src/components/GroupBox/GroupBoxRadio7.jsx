import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * "input" element with "label" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.id] Automatically puts the "id" in the "input" and "label".
 * @param {string} [props.label] Automatically puts text in the "label" ("children" will be used if there is nothing).
 */
export function GroupBoxRadio7({ id, label, children, ...props }) {
    const labeltext = label || children;

    return (
        <FieldRow7 >
            <input id={id} type="radio" {...props}/>
            <label htmlFor={id}>
                {labeltext}
            </label>
        </FieldRow7>
    )
}