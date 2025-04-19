import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} Spinner7Props 
 * @property {boolean} [animate] To animate the spinner, add an animate value.
 */

/**
 * A spinner or loader, also referred as ProgressRing, is a type of progress control to indicate that an operation is underway and its completion time is unknown.
 * @param {Spinner7Props | React.ComponentProps<"span">} props 
 * @returns {React.ReactNode}
 */
export function Spinner7({ animate, className = "", ...props }) {
    return (
        <span className={`loader ${conditionString(animate, "animate")} ${className}`} {...props}></span>
    )
}