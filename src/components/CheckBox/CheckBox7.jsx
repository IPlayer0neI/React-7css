import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * @typedef {object} CheckBox7Props
 * @property {React.ReactNode} [children]
 * @property {string} [id] Automatically puts the "id" in the "input" and "label".
 * @property {boolean} [field=true] When grouping inputs, wrap each input in a container with the field value. This ensures a consistent spacing between inputs.
 * @property {string} [label] Automatically puts text in the "label" ("children" will be used if there is nothing).
 */

/**
 * A check box represents an independent or non-exclusive choice.
 * @param {CheckBox7Props | React.ComponentProps<"input">} props
 * @returns {React.ReactNode}
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