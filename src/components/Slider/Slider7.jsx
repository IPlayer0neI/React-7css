import { FieldRow7 } from "../FieldRow/FieldRow7"

/**
 * A slider, sometimes called a trackbar control, consists of a bar that defines the extent or range of the adjustment and an indicator that shows the current value for the control...
 * @param {object} props
 * @param {boolean} [props.field=true] When grouping inputs, wrap each input in a container with the field value. This ensures a consistent spacing between inputs.
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