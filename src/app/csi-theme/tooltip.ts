import type { TooltipDesignTokens } from '@primeuix/themes/types/tooltip';

 export default {
    root: {
        gutter: "0.5rem",
        shadow: "{overlay.popover.shadow}",
        padding: "0.75rem 0.75rem",
        maxWidth: "12.5rem",
        borderRadius: "{overlay.popover.border.radius}"
    },
    colorScheme: {
        dark: {
            root: {
                color: "{gray.800}",
                background: "{gray.100}"
            }
        },
        light: {
            root: {
                color: "{gray.0}",
                background: "{gray.800}"
            }
        }
    }
} satisfies TooltipDesignTokens;