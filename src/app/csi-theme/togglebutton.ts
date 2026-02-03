import type { ToggleButtonDesignTokens } from '@primeuix/themes/types/togglebutton';

 export default {
    icon: {
        disabledColor: "{form.field.disabled.color}"
    },
    root: {
        lg: {
            padding: "0.25rem",
            fontSize: "1.125rem"
        },
        sm: {
            padding: "0.25rem",
            fontSize: "0.75rem"
        },
        gap: "0.5rem",
        padding: "0.25rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        fontWeight: "500",
        borderRadius: "{border.radius.md}",
        disabledColor: "{form.field.disabled.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        disabledBorderColor: "{form.field.disabled.background}"
    },
    content: {
        lg: {
            padding: "0.25rem 0.625rem"
        },
        sm: {
            padding: "0.25rem 0.375rem"
        },
        padding: "0.25rem 0.5rem",
        borderRadius: "{border.radius.sm}",
        checkedShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.02),0 1px 2px 0 rgba(0, 0, 0, 0.04)"
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{gray.250}",
                hoverColor: "{gray.25}",
                checkedColor: "{gray.25}"
            },
            root: {
                color: "{gray.250}",
                background: "{gray.700}",
                hoverColor: "{gray.300}",
                borderColor: "{togglebutton.background}",
                checkedColor: "{gray.25}",
                hoverBackground: "{gray.950}",
                checkedBackground: "{togglebutton.background}",
                checkedBorderColor: "{togglebutton.checked.background}"
            },
            content: {
                checkedBackground: "{gray.900}"
            }
        },
        light: {
            icon: {
                color: "{gray.500}",
                hoverColor: "{gray.900}",
                checkedColor: "{gray.900}"
            },
            root: {
                color: "{gray.500}",
                background: "{gray.50}",
                hoverColor: "{gray.700}",
                borderColor: "{togglebutton.background}",
                checkedColor: "{gray.900}",
                hoverBackground: "{gray.100}",
                checkedBackground: "{togglebutton.background}",
                checkedBorderColor: "{togglebutton.checked.background}"
            },
            content: {
                checkedBackground: "{gray.0}"
            }
        }
    }
} satisfies ToggleButtonDesignTokens;