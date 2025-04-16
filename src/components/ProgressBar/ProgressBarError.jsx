/**
 * @typedef {object}  ProgressBarErrorProps 
 * @property {number} [props.ariaValuemin]
 * @property {number} [props.ariaValuemax] 
 * @property {number} [props.ariaValuenow]
 */

/**
 * "div" element with role="progressbar" and class "error"
 * @param {ProgressBarErrorProps | React.ComponentProps.<"div">} props 
 * @returns {React.ReactNode}
 */
export function ProgressBarError({
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuenow = 100,
    ...props
}) {
    return (
        <div
            className="error"
            role="progressbar"
            aria-valuemin={ariaValuemin}
            aria-valuemax={ariaValuemax}
            aria-valuenow={ariaValuenow}
            {...props}
        >
            <div style={{ width: ariaValuenow + "%" }}></div>
        </div>
    )
}