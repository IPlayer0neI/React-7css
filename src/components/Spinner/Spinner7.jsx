import { conditionString } from "../../utils/ternaryDie";

/**
 * A spinner or loader, also referred as ProgressRing, is a type of progress control to indicate that an operation is underway and its completion time is unknown.
 * @param {object} props
 * @param {boolean} [props.animate] To animate the spinner, add an animate value.
 */
export function Spinner7({ animate, ...props }){
    return (
        <span className={`loader ${conditionString(animate, "animate")}`} {...props}></span>
    )
}