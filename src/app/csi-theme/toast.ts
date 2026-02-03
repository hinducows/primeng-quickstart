import type { ToastDesignTokens } from '@primeuix/themes/types/toast';

 export default {
    icon: {
        size: "1.125rem"
    },
    root: {
        width: "25rem",
        borderWidth: "1px",
        borderRadius: "{border.radius.sm}",
        transitionDuration: "{transition.duration}"
    },
    text: {
        gap: "0.5rem"
    },
    detail: {
        fontSize: "1rem",
        fontWeight: "500"
    },
    content: {
        gap: "0.5rem",
        padding: "{overlay.popover.padding}"
    },
    summary: {
        fontSize: "1rem",
        fontWeight: "500"
    },
    closeIcon: {
        size: "1rem"
    },
    closeButton: {
        width: "1.75rem",
        height: "1.75rem",
        focusRing: {
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}"
        },
        borderRadius: "50%"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{blue.300}",
                shadow: "0 4px 8px 0 rgba(2, 5, 10, 0.04)",
                background: "color-mix(in srgb, {blue.900}, transparent 5%)",
                borderColor: "{blue.700}",
                closeButton: {
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{blue.950}"
                },
                detailColor: "{gray.25}"
            },
            root: {
                blur: "10px"
            },
            warn: {
                color: "{yellow.300}",
                shadow: "0 4px 8px 0 rgba(9, 7, 0, 0.04)",
                background: "color-mix(in srgb, {yellow.900}, transparent 5%)",
                borderColor: "{yellow.700}",
                closeButton: {
                    focusRing: {
                        color: "{yellow.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{yellow.950}"
                },
                detailColor: "{gray.25}"
            },
            error: {
                color: "{red.300}",
                shadow: "0 4px 8px 0 rgba(10, 3, 3, 0.04)",
                background: "color-mix(in srgb, {red.900}, transparent 5%)",
                borderColor: "{red.700}",
                closeButton: {
                    focusRing: {
                        color: "{red.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{red.950}"
                },
                detailColor: "{gray.25}"
            },
            success: {
                color: "{green.500}",
                shadow: "0 4px 8px 0 rgba(1, 8, 4, 0.04)",
                background: "color-mix(in srgb, {green.900}, transparent 5%)",
                borderColor: "{green.800}",
                closeButton: {
                    focusRing: {
                        color: "{green.500}",
                        shadow: "none"
                    },
                    hoverBackground: "{green.950}"
                },
                detailColor: "{gray.25}"
            },
            contrast: {
                color: "{surface.950}",
                shadow: "0 4px 8px 0 rgba(0, 0, 1, 0.04)",
                background: "{surface.0}",
                borderColor: "{surface.100}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.100}"
                },
                detailColor: "{surface.950}"
            },
            secondary: {
                color: "{surface.300}",
                shadow: "0 4px 8px 0 rgba(4, 5, 6, 0.04)",
                background: "color-mix(in srgb, {surface.800}, transparent 5%)",
                borderColor: "{surface.700}",
                closeButton: {
                    focusRing: {
                        color: "{surface.300}",
                        shadow: "none"
                    },
                    hoverBackground: "{surface.700}"
                },
                detailColor: "{surface.0}"
            }
        },
        light: {
            info: {
                color: "{blue.700}",
                shadow: "0 4px 8px 0 rgba(2, 5, 10, 0.04)",
                background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                borderColor: "{blue.200}",
                closeButton: {
                    focusRing: {
                        color: "{blue.700}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{blue.100}"
                },
                detailColor: "{gray.900}"
            },
            root: {
                blur: "1.5px"
            },
            warn: {
                color: "{yellow.800}",
                shadow: "0 4px 8px 0 rgba(9, 7, 0, 0.04)",
                background: "color-mix(in srgb, {yellow.50}, transparent 5%)",
                borderColor: "{yellow.300}",
                closeButton: {
                    focusRing: {
                        color: "{yellow.800}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{yellow.100}"
                },
                detailColor: "{gray.900}"
            },
            error: {
                color: "{red.700}",
                shadow: "0 4px 8px 0 rgba(10, 3, 3, 0.04)",
                background: "color-mix(in srgb, {red.50}, transparent 5%)",
                borderColor: "{red.100}",
                closeButton: {
                    focusRing: {
                        color: "{red.700}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{red.100}"
                },
                detailColor: "{gray.900}"
            },
            success: {
                color: "{green.800}",
                shadow: "0 4px 8px 0 rgba(1, 8, 4, 0.04)",
                background: "color-mix(in srgb, {green.50}, transparent 5%)",
                borderColor: "{green.200}",
                closeButton: {
                    focusRing: {
                        color: "{green.800}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{green.100}"
                },
                detailColor: "{gray.900}"
            },
            contrast: {
                color: "{surface.50}",
                shadow: "0 4px 8px 0 rgba(0, 0, 1, 0.04)",
                background: "{surface.900}",
                borderColor: "{surface.950}",
                closeButton: {
                    focusRing: {
                        color: "{surface.50}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{surface.800}"
                },
                detailColor: "{surface.0}"
            },
            secondary: {
                color: "{surface.600}",
                shadow: "0 4px 8px 0 rgba(4, 5, 6, 0.04)",
                background: "color-mix(in srgb, {surface.100}, transparent 5%)",
                borderColor: "{surface.200}",
                closeButton: {
                    focusRing: {
                        color: "{surface.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    hoverBackground: "{surface.200}"
                },
                detailColor: "{surface.700}"
            }
        }
    }
} satisfies ToastDesignTokens;