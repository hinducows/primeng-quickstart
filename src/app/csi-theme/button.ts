import type { ButtonDesignTokens } from '@primeuix/themes/types/button';

 export default {
    root: {
        lg: {
            fontSize: "1.125rem",
            paddingX: "1rem",
            paddingY: "0.5rem",
            iconOnlyWidth: "3rem"
        },
        sm: {
            fontSize: "0.875rem",
            paddingX: "0.75rem",
            paddingY: "0.375rem",
            iconOnlyWidth: "1.75rem"
        },
        gap: "0.5rem",
        label: {
            fontWeight: "500"
        },
        paddingX: "1rem",
        paddingY: "{form.field.padding.y}",
        badgeSize: "1rem",
        focusRing: {
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}"
        },
        borderRadius: "{border.radius.sm}",
        raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2),0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        iconOnlyWidth: "2.5rem",
        transitionDuration: "{form.field.transition.duration}",
        roundedBorderRadius: "99rem"
    },
    colorScheme: {
        dark: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "{purple.900}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{purple.200}",
                    hoverColor: "{purple.900}",
                    activeColor: "{purple.900}",
                    borderColor: "{button.help.background}",
                    hoverBackground: "{purple.100}",
                    activeBackground: "{purple.50}",
                    hoverBorderColor: "{button.help.hover.background}",
                    activeBorderColor: "{button.help.active.background}"
                },
                info: {
                    color: "{blue.900}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{blue.200}",
                    hoverColor: "{blue.900}",
                    activeColor: "{blue.900}",
                    borderColor: "{button.info.background}",
                    hoverBackground: "{blue.100}",
                    activeBackground: "{blue.50}",
                    hoverBorderColor: "{button.info.hover.background}",
                    activeBorderColor: "{button.info.active.background}"
                },
                warn: {
                    color: "{button.warn.background}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{yellow.200}",
                    hoverColor: "{yellow.950}",
                    activeColor: "{yellow.950}",
                    borderColor: "{yellow.950}",
                    hoverBackground: "{yellow.100}",
                    activeBackground: "{yellow.50}",
                    hoverBorderColor: "{button.warn.hover.background}",
                    activeBorderColor: "{button.warn.active.background}"
                },
                danger: {
                    color: "{red.900}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{red.200}",
                    hoverColor: "{red.900}",
                    activeColor: "{red.900}",
                    borderColor: "{button.danger.background}",
                    hoverBackground: "{red.100}",
                    activeBackground: "{red.50}",
                    hoverBorderColor: "{button.danger.hover.background}",
                    activeBorderColor: "{button.danger.active.background}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{primary.color}",
                    hoverBackground: "{primary.hover.color}",
                    activeBackground: "{primary.active.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    activeBorderColor: "{primary.active.color}"
                },
                success: {
                    color: "{green.900}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{green.200}",
                    hoverColor: "{green.900}",
                    activeColor: "{green.900}",
                    borderColor: "{button.success.background}",
                    hoverBackground: "{green.100}",
                    activeBackground: "{green.50}",
                    hoverBorderColor: "{button.success.hover.background}",
                    activeBorderColor: "{button.success.active.background}"
                },
                contrast: {
                    color: "{surface.950}",
                    focusRing: {
                        color: "{surface.0}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.0}",
                    hoverColor: "{surface.950}",
                    activeColor: "{surface.950}",
                    borderColor: "{surface.0}",
                    hoverBackground: "{surface.100}",
                    activeBackground: "{surface.200}",
                    hoverBorderColor: "{surface.100}",
                    activeBorderColor: "{surface.200}"
                },
                secondary: {
                    color: "{surface.300}",
                    focusRing: {
                        color: "{blue.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.800}",
                    hoverColor: "{surface.200}",
                    activeColor: "{surface.100}",
                    borderColor: "{surface.800}",
                    hoverBackground: "{surface.700}",
                    activeBackground: "{surface.600}",
                    hoverBorderColor: "{surface.700}",
                    activeBorderColor: "{surface.600}"
                }
            },
            text: {
                help: {
                    color: "{purple.200}",
                    hoverBackground: "color-mix(in srgb, {purple.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {purple.900}, transparent 0%)"
                },
                info: {
                    color: "{blue.200}",
                    hoverBackground: "color-mix(in srgb, {blue.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {blue.900}, transparent 0%)"
                },
                warn: {
                    color: "{yellow.200}",
                    hoverBackground: "color-mix(in srgb, {yellow.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {yellow.900}, transparent 0%)"
                },
                plain: {
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                danger: {
                    color: "{red.200}",
                    hoverBackground: "color-mix(in srgb, {red.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {red.900}, transparent 0%)"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)"
                },
                success: {
                    color: "{green.200}",
                    hoverBackground: "color-mix(in srgb, {green.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {green.900}, transparent 0%)"
                },
                contrast: {
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                secondary: {
                    color: "{surface.400}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                }
            },
            outlined: {
                help: {
                    color: "{purple.200}",
                    borderColor: "{purple.200}",
                    hoverBackground: "color-mix(in srgb, {purple.100}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {purple.50}, transparent 0%)"
                },
                info: {
                    color: "{blue.200}",
                    borderColor: "{blue.200}",
                    hoverBackground: "color-mix(in srgb, {blue.900}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {blue.800}, transparent 0%)"
                },
                warn: {
                    color: "{yellow.200}",
                    borderColor: "{yellow.200}",
                    hoverBackground: "color-mix(in srgb, {yellow.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {yellow.900}, transparent 0%)"
                },
                plain: {
                    color: "{surface.0}",
                    borderColor: "{surface.600}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                danger: {
                    color: "{red.200}",
                    borderColor: "{red.200}",
                    hoverBackground: "color-mix(in srgb, {red.950}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {red.900}, transparent 0%)"
                },
                primary: {
                    color: "{primary.color}",
                    borderColor: "{primary.700}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)"
                },
                success: {
                    color: "{green.200}",
                    borderColor: "{green.200}",
                    hoverBackground: "color-mix(in srgb, {green.900}, transparent 0%)",
                    activeBackground: "color-mix(in srgb, {green.800}, transparent 0%)"
                },
                contrast: {
                    color: "{surface.0}",
                    borderColor: "{surface.500}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                secondary: {
                    color: "{surface.400}",
                    borderColor: "{surface.700}",
                    hoverBackground: "rgba(255, 255, 255, 0.04)",
                    activeBackground: "rgba(255, 255, 255, 0.16)"
                }
            }
        },
        light: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{purple.700}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{button.help.background}",
                    hoverBackground: "{purple.800}",
                    activeBackground: "{purple.900}",
                    hoverBorderColor: "{button.help.hover.background}",
                    activeBorderColor: "{button.help.active.background}"
                },
                info: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{blue.700}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{button.info.background}",
                    hoverBackground: "{blue.800}",
                    activeBackground: "{blue.900}",
                    hoverBorderColor: "{button.info.hover.background}",
                    activeBorderColor: "{button.info.active.background}"
                },
                warn: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{yellow.900}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{button.warn.background}",
                    hoverBackground: "{yellow.800}",
                    activeBackground: "{yellow.700}",
                    hoverBorderColor: "{button.warn.hover.background}",
                    activeBorderColor: "{button.warn.active.background}"
                },
                danger: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{red.700}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{button.danger.background}",
                    hoverBackground: "{red.800}",
                    activeBackground: "{red.900}",
                    hoverBorderColor: "{button.danger.hover.background}",
                    activeBorderColor: "{button.danger.active.background}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{primary.color}",
                    hoverBackground: "{primary.hover.color}",
                    activeBackground: "{primary.active.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    activeBorderColor: "{primary.active.color}"
                },
                success: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{green.800}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{button.success.background}",
                    hoverBackground: "{green.900}",
                    activeBackground: "{green.950}",
                    hoverBorderColor: "{button.success.hover.background}",
                    activeBorderColor: "{button.success.active.background}"
                },
                contrast: {
                    color: "{surface.0}",
                    focusRing: {
                        color: "{surface.950}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.950}",
                    hoverColor: "{surface.0}",
                    activeColor: "{surface.0}",
                    borderColor: "{surface.950}",
                    hoverBackground: "{surface.900}",
                    activeBackground: "{surface.800}",
                    hoverBorderColor: "{surface.900}",
                    activeBorderColor: "{surface.800}"
                },
                secondary: {
                    color: "{surface.600}",
                    focusRing: {
                        color: "{blue.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.100}",
                    hoverColor: "{surface.700}",
                    activeColor: "{surface.800}",
                    borderColor: "{surface.100}",
                    hoverBackground: "{surface.200}",
                    activeBackground: "{surface.300}",
                    hoverBorderColor: "{surface.200}",
                    activeBorderColor: "{surface.300}"
                }
            },
            text: {
                help: {
                    color: "{purple.700}",
                    hoverBackground: "{purple.100}",
                    activeBackground: "{purple.200}"
                },
                info: {
                    color: "{blue.700}",
                    hoverBackground: "{blue.100}",
                    activeBackground: "{blue.200}"
                },
                warn: {
                    color: "{yellow.900}",
                    hoverBackground: "{yellow.100}",
                    activeBackground: "{yellow.200}"
                },
                plain: {
                    color: "{surface.700}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                danger: {
                    color: "{red.700}",
                    hoverBackground: "{red.50}",
                    activeBackground: "{red.100}"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "{primary.50}",
                    activeBackground: "{primary.100}"
                },
                success: {
                    color: "{green.800}",
                    hoverBackground: "{green.100}",
                    activeBackground: "{green.200}"
                },
                contrast: {
                    color: "{surface.950}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                secondary: {
                    color: "{surface.500}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                }
            },
            outlined: {
                help: {
                    color: "{purple.700}",
                    borderColor: "{purple.700}",
                    hoverBackground: "{purple.100}",
                    activeBackground: "{purple.200}"
                },
                info: {
                    color: "{blue.700}",
                    borderColor: "{blue.700}",
                    hoverBackground: "{blue.100}",
                    activeBackground: "{blue.200}"
                },
                warn: {
                    color: "{yellow.900}",
                    borderColor: "{yellow.700}",
                    hoverBackground: "{yellow.100}",
                    activeBackground: "{yellow.200}"
                },
                plain: {
                    color: "{surface.700}",
                    borderColor: "{surface.200}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                danger: {
                    color: "{red.700}",
                    borderColor: "{red.700}",
                    hoverBackground: "{red.100}",
                    activeBackground: "{red.200}"
                },
                primary: {
                    color: "{primary.color}",
                    borderColor: "{primary.200}",
                    hoverBackground: "{primary.50}",
                    activeBackground: "{primary.100}"
                },
                success: {
                    color: "{green.800}",
                    borderColor: "{green.700}",
                    hoverBackground: "{green.100}",
                    activeBackground: "{green.200}"
                },
                contrast: {
                    color: "{surface.950}",
                    borderColor: "{surface.700}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                secondary: {
                    color: "{surface.500}",
                    borderColor: "{surface.200}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                }
            }
        }
    }
} satisfies ButtonDesignTokens;