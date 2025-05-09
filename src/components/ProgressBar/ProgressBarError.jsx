/**
 * @typedef {object}  ProgressBarErrorProps 
 * @property {number} [ariaValuemin]
 * @property {number} [ariaValuemax] 
 * @property {number} [ariaValuenow]
 */

/**
 * "div" element with role="progressbar" and class "error"
 * @param {ProgressBarErrorProps | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function ProgressBarError({
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuenow = 100,
    className = "",
    ...props
}) {
    return (
        <div
            className={`error ${className}`}
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