import { FieldRow7 } from "../FieldRow/FieldRow7"

/**
 * A check box represents an independent or non-exclusive choice.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.id] Automatically puts the "id" in the "input" and "label".
 * @param {boolean} [props.field=true] When grouping inputs, wrap each input in a container with the field value. This ensures a consistent spacing between inputs.
 * @param {string} [props.label] Automatically puts text in the "label" ("children" will be used if there is nothing).
 */
export function CheckBox7({ children, label, id, field = true, ...props }) {
    const labeltext = label || children;

    if (field) {
        return (
            <FieldRow7>
                <input type="checkbox" id={id} {...props} />
                <label htmlFor={id}>
                    {labeltext}
                </label>
            </FieldRow7>
        )
    }

    return (
        <>
            <input type="checkbox" id={id}  {...props} />
            <label htmlFor={id}>
                {labeltext}
            </label>
        </>
    )
}