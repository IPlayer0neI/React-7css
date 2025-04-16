import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * @typedef {object} SliderVertical7Props 
 * @property {number} [props.field] When grouping inputs, wrap each input in a container with the field value. This ensures a consistent spacing between inputs.
 */

/**
 * "div" element with class "is-vertical" with an "input" with type="range" inside.
 * @param {SliderVertical7Props | React.ComponentProps.<"input">} props 
 * @returns {React.ReactNode}
 */
export function SliderVertical7({ field, ...props }) {
    if (field) {
        return (
            <FieldRow7>
                <div className="is-vertical">
                    <input type="range" {...props} />
                </div>
            </FieldRow7>
        )
    }

    return (
        <div className="is-vertical">
            <input type="range" {...props} />
        </div>
    )
}