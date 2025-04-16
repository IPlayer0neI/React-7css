/**
 * @typedef {object} ProgressBarPausedProps 
 * @property {number} [ariaValuemin]
 * @property {number} [ariaValuemax] 
 * @property {number} [ariaValuenow]
 */

/**
 * "div" element with role="progressbar" and class "paused".
 * @param {ProgressBarPausedProps | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function ProgressBarPaused({
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuenow = 100,
    ...props
}) {
    return (
        <div
            className="paused"
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