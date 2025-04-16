import { TabMenuItem7 } from "./TabMenuItem7";

/**
 * @typedef {object} TabMenu7Props 
 * @property {React.ReactNode} [children]
 * @property {string[]} [list] A list of "button" elements with role="tab".
 */

/**
 * "menu" element with role="tablist".
 * @param {TabMenu7Props | React.Component<"menu">} props 
 * @returns {React.ReactNode}
 */
export function TabMenu7({ children, list, ...props }) {
    return (
        <menu role="tablist" {...props}>
            {children}
            {
                list && list.map(function (item, index) {
                    return (
                        <TabMenuItem7 key={index}>
                            {item}
                        </TabMenuItem7>
                    )
                })
            }
        </menu>
    )
}