/**
 * @param {object} props 
 * @property {React.ElementType} props.Component 
 * @property {string| string[]} props.value 
 * @returns {React.ReactNode}
 */
export function GetArrayComponent({ Component, value }) {
    if (Array.isArray(value)) {
        console.log("opa", value)
        let props = {};
        props[value[1]] = true;

        return (
            <Component {...props}>
                {value[0]}
            </Component>
        )
    }

    return (
        <Component>
            {value}
        </Component>
    )
}