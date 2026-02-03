import type { ChipDesignTokens } from '@primeuix/themes/types/chip';

 export default {
    icon: {
        size: "0.875rem"
    },
    root: {
        gap: "0.5rem",
        paddingX: "0.5rem",
        paddingY: "0.25rem",
        borderRadius: "99rem",
        transitionDuration: "{transition.duration}"
    },
    image: {
        width: "1.125rem",
        height: "1.125rem"
    },
    removeIcon: {
        size: "0.875rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{form.field.focus.ring.shadow}"
        }
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{chip.color}"
            },
            root: {
                color: "{gray.25}",
                background: "{surface.800}"
            },
            removeIcon: {
                color: "{chip.color}"
            }
        },
        light: {
            icon: {
                color: "{chip.color}"
            },
            root: {
                color: "{gray.900}",
                background: "{surface.100}"
            },
            removeIcon: {
                color: "{chip.color}"
            }
        }
    }
} satisfies ChipDesignTokens;