import { FieldRow7 } from "../FieldRow/FieldRow7";

/**
 * @typedef {object} Slider7Props 
 * @property {boolean} [props.field=true] When grouping inputs, wrap each input in a container with the field value. This ensures a consistent spacing between inputs.
 */

/**
 * A slider, sometimes called a trackbar control, consists of a bar that defines the extent or range of the adjustment and an indicator that shows the current value for the control...
 * @param {Slider7Props | React.ComponentProps.<"input">} props 
 * @returns {React.ReactNode}
 */
export function Slider7({ field = true, ...props }) {
    if (field) {
        return (
            <FieldRow7>
                <input type="range" {...props} />
            </FieldRow7>
        )
    }

    return (
        <input type="range" {...props} />
    )
}