import { TabMenu7 } from "./TabMenu7";
import { TabPanel7 } from "./TabPanel7";

/**
 * @typedef {string|React.ReactNode} ListPanel
 */

/**
 * Tabs provide a way to present related information on separate labeled pages.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string[]} [props.listMenu]  A list of "button" elements with role="tab".
 * @param {ListPanel[]} [props.listPanel]  A list of "article" element with role="tabpanel".
 */
export function Tabs7({ children, listMenu, listPanel, ...props }) {
    return (
        <section className="tabs" {...props}>
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