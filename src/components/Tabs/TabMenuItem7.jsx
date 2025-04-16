/**
 * @typedef {object} TabMenuItem7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "button" element with role="tab".
 * @param {TabMenuItem7Props | React.Component<"button">} props 
 * @returns {React.ReactNode}
 */
export function TabMenuItem7({ children, ...props }) {
    return (
        <button role="tab" {...props}>
            {children}
        </button>
    )
}