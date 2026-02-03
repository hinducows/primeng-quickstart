import type { TagDesignTokens } from '@primeuix/themes/types/tag';

 export default {
    icon: {
        size: "0.75rem"
    },
    root: {
        gap: "0.25rem",
        padding: "0.25rem 0.5rem",
        fontSize: "0.75rem",
        fontWeight: "600",
        borderRadius: "{border.radius.sm}",
        roundedBorderRadius: "99rem"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{blue.50}",
                background: "{blue.700}"
            },
            warn: {
                color: "{yellow.50}",
                background: "{yellow.900}"
            },
            danger: {
                color: "{red.50}",
                background: "{red.800}"
            },
            primary: {
                color: "{primary.300}",
                background: "color-mix(in srgb, {primary.500}, transparent 84%)"
            },
            success: {
                color: "{green.50}",
                background: "color-mix(in srgb, {green.800}, transparent 0%)"
            },
            contrast: {
                color: "{surface.950}",
                background: "{surface.0}"
            },
            secondary: {
                color: "{surface.300}",
                background: "{surface.800}"
            }
        },
        light: {
            info: {
                color: "{blue.900}",
                background: "{blue.100}"
            },
            warn: {
                color: "{yellow.950}",
                background: "{yellow.50}"
            },
            danger: {
                color: "{red.900}",
                background: "{red.100}"
            },
            primary: {
                color: "{primary.700}",
                background: "{primary.100}"
            },
            success: {
                color: "{green.950}",
                background: "{green.100}"
            },
            contrast: {
                color: "{surface.0}",
                background: "{surface.950}"
            },
            secondary: {
                color: "{surface.600}",
                background: "{surface.100}"
            }
        }
    }
} satisfies TagDesignTokens;