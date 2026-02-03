import type { BadgeDesignTokens } from '@primeuix/themes/types/badge';

 export default {
    lg: {
        height: "1.75rem",
        fontSize: "0.875rem",
        minWidth: "1.75rem"
    },
    sm: {
        height: "1.25rem",
        fontSize: "0.625rem",
        minWidth: "1.25rem"
    },
    xl: {
        height: "2rem",
        fontSize: "1rem",
        minWidth: "2rem"
    },
    dot: {
        size: "0.5rem"
    },
    root: {
        height: "1.5rem",
        padding: "0 0.25rem",
        fontSize: "0.75rem",
        minWidth: "1.5rem",
        fontWeight: "700",
        borderRadius: "{border.radius.sm}"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{gray.800}",
                background: "{blue.200}"
            },
            warn: {
                color: "{gray.800}",
                background: "{yellow.200}"
            },
            danger: {
                color: "{gray.800}",
                background: "{red.200}"
            },
            primary: {
                color: "{primary.contrast.color}",
                background: "{primary.color}"
            },
            success: {
                color: "{gray.800}",
                background: "{green.200}"
            },
            contrast: {
                color: "{gray.950}",
                background: "{gray.0}"
            },
            secondary: {
                color: "{surface.300}",
                background: "{surface.800}"
            }
        },
        light: {
            info: {
                color: "{gray.0}",
                background: "{blue.600}"
            },
            warn: {
                color: "{gray.0}",
                background: "{yellow.900}"
            },
            danger: {
                color: "{gray.0}",
                background: "{red.700}"
            },
            primary: {
                color: "{primary.contrast.color}",
                background: "{primary.color}"
            },
            success: {
                color: "{gray.0}",
                background: "{green.800}"
            },
            contrast: {
                color: "{gray.0}",
                background: "{gray.950}"
            },
            secondary: {
                color: "{surface.600}",
                background: "{surface.100}"
            }
        }
    }
} satisfies BadgeDesignTokens;