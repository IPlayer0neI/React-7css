import { conditionString } from "../../utils/ternaryDie";

/**
 * "div" element with role="progressbar".
 * @param {object} props
 * @param {number} [props.ariaValuemin]
 * @param {number} [props.ariaValuemax] 
 * @param {number} [props.ariaValuenow]
 * @param {boolean} [props.animate]
 */
export function ProgressBar({
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuenow = 100,
    animate,
    ...props
}) {
    return (
        <div
            role="progressbar"
            className={conditionString(animate, "animate")}
            aria-valuemin={ariaValuemin}
            aria-valuemax={ariaValuemax}
            aria-valuenow={ariaValuenow}
            {...props}
        >
            <div style={{ width: ariaValuenow + "%" }}></div>
        </div>
    )
}