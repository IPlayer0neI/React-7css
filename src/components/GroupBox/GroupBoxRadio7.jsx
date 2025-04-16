import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * @typedef {object} GroupBoxRadio7Props 
 * @property {React.ReactNode} [children]
 * @property {string} [id] Automatically puts the "id" in the "input" and "label".
 * @property {string} [label] Automatically puts text in the "label" ("children" will be used if there is nothing).
 */

/**
 * "input" element with "label" element.
 * @param {GroupBoxRadio7Props | React.ComponentProps<"input">} props
 * @returns {React.ReactNode}
 */
export function GroupBoxRadio7({ id, label, children, ...props }) {
    const labeltext = label || children;

    return (
        <FieldRow7 >
            <input id={id} type="radio" {...props} />
            <label htmlFor={id}>
                {labeltext}
            </label>
        </FieldRow7>
    )
}