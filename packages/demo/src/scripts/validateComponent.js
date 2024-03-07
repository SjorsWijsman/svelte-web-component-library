export function validateComponent(
    name,
    component,
    componentList,
    onValidation
) {
    // Check if component has a defined title
    if (!component.title) {
        console.error(`[svelte-wc] ${name}: Component has no defined title.`);
        return false;
    }

    // Prevent double component titles
    if (
        componentList.some(
            (addedComponent) => addedComponent.title === component.title
        )
    ) {
        console.error(
            `[svelte-wc] ${name}: Component title (${component.title}) has already been defined`
        );
        return false;
    }

    // Check component props
    if (component.props) {
        for (let key of Object.keys(component.props)) {
            let prop = component.props[key];

            // Select controls validation
            if (prop.controls === "Select") {
                if (!prop.options || !Array.isArray(prop.options)) {
                    console.error(
                        `[svelte-wc] ${name}: [${key}] Select controls require an options prop as list`
                    );
                    return false;
                } else if (!prop.options?.length) {
                    console.error(
                        `[svelte-wc] ${name}: [${key}] Options list can not be empty`
                    );
                    return false;
                }
            }
        }
    }

    // If it passes each check
    onValidation();
    return true;
}
