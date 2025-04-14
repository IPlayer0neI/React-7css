/**
 * @param {object} props
 * @param {React.ElementType} props.Component 
 * @param {string| string[]} props.value 
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