import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} Spinner7Props 
 * @property {boolean} [animate] To animate the spinner, add an animate value.
 */

/**
 * A spinner or loader, also referred as ProgressRing, is a type of progress control to indicate that an operation is underway and its completion time is unknown.
 * @param {Spinner7Props | React.Component<"span">} props 
 * @returns {React.ReactNode}
 */
export function Spinner7({ animate, ...props }) {
    return (
        <span className={`loader ${conditionString(animate, "animate")}`} {...props}></span>
    )
}