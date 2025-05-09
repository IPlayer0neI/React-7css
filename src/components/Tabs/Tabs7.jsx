import { TabMenu7 } from "./TabMenu7";
import { TabPanel7 } from "./TabPanel7";

/**
 * @typedef {string|React.ReactNode} ListPanel
 */

/**
 * @typedef {object} Tabs7Props 
 * @property {React.ReactNode} [children]
 * @property {string[]} [listMenu]  A list of "button" elements with role="tab".
 * @property {ListPanel[]} [listPanel]  A list of "article" element with role="tabpanel".
 */

/**
 * Tabs provide a way to present related information on separate labeled pages.
 * @param {Tabs7Props | React.ComponentProps<"section">} props 
 * @returns {React.ReactNode}
 */
export function Tabs7({ children, listMenu, listPanel, className = "", ...props }) {
    return (
        <section className={`tabs ${className}`} {...props}>
            {
                listMenu && <TabMenu7 list={listMenu} />
            }
            {children}
            {
                listPanel && listPanel.map(function (panel, index) {
                    return (
                        <TabPanel7 key={index}>
                            {panel}
                        </TabPanel7>
                    )
                })
            }
        </section>
    )
}