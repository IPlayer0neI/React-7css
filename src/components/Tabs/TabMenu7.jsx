import { TabMenuItem7 } from "./TabMenuItem7";

/**
 * "menu" element with role="tablist".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string[]} [props.list] A list of "button" elements with role="tab".
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