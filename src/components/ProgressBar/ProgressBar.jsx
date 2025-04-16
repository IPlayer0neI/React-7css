import { conditionString } from "../../utils/ternaryDie";

/**
 * @typedef {object} ProgressBarProps 
 * @property {number} [ariaValuemin]
 * @property {number} [ariaValuemax] 
 * @property {number} [ariaValuenow]
 * @property {boolean} [animate]
 */

/**
 * "div" element with role="progressbar".
 * @param {ProgressBarProps | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
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