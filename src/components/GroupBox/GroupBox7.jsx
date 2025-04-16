import { GroupBoxLegend7 } from "./GroupBoxLegend7";
import { GroupBoxRadio7 } from "./GroupBoxRadio7";

/**
 * @typedef {object} GroupBox7Props
 * @property {React.ReactNode} [children]
 * @property {string} [legend] You can provide your group with a label by placing a legend value.
 * @property {string[]} [list] A list of "input" elements with type="radio" inside an element with class "field-row".
 * @property {string} [name] "name" property for "input" elements.
 */

/**
 * A group box is a special control you can use to organize a set of controls. A group box is a rectangular frame with an optional label that surrounds a set of controls.
 * @param {GroupBox7Props | React.Component<"fieldset">} props
 * @returns {React.ReactNode}
 */
export function GroupBox7({ children, legend, list, name, ...props }) {
    return (
        <fieldset {...props}>
            {
                legend && (
                    <GroupBoxLegend7>
                        {legend}
                    </GroupBoxLegend7>
                )
            }

            {children}
            {
                list && list.map(function (label) {
                    return (
                        <GroupBoxRadio7 key={encodeURIComponent(label)} id={encodeURIComponent(label)} name={name}>
                            {label}
                        </GroupBoxRadio7>
                    )
                })
            }
        </fieldset>
    )
}