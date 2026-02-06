// this file defines a custom theme preset for PrimeNG components, extending the base CSITheme with additional css rules that utilize design tokens.
// some components require additional css to match Figma styling beyond Prime's initial tokens/styling.

import type { Preset } from "@primeuix/themes/types";
import type { ExtendedCSS } from "@primeuix/themes/types";
import CSITheme from "./csi-theme";

// mergeCss function combines existing css with new styles that reference design tokens
const mergeCss = (base: ExtendedCSS, extra: string): ExtendedCSS => {
  if (!base) {
    return extra;
  }

  if (typeof base === "function") {
    return (options) => `${base(options)}\n${extra}`;
  }

  return `${base}\n${extra}`;
};

const getCss = (value: unknown): ExtendedCSS =>
  value && typeof value === "object" && "css" in value
    ? (value as { css?: ExtendedCSS }).css
    : undefined;

const CSIPreset: Preset = {
  ...CSITheme,
  components: {
    ...CSITheme.components,
    button: {
      ...CSITheme.components?.button,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["button"]),
        // custom css for various components for further customization using design tokens 
        `
.p-button {
    font-size: dt('button.font.size');
    line-height: dt('button.line.height');
}

.p-button.p-button-sm {
    font-size: dt('button.sm.font.size');
    gap: dt('button.sm.gap');
    line-height: dt('button.sm.line.height');
}

.p-button.p-button-lg {
    font-size: dt('button.lg.font.size');
    gap: dt('button.lg.gap');
    line-height: dt('button.lg.line.height');
}

.p-button.p-button-icon-only {
    height: dt('button.icon.only.height');
}

.p-button.p-button-icon-only.p-button-sm {
    height: dt('button.sm.icon.only.height');
}

.p-button.p-button-icon-only.p-button-lg {
    height: dt('button.lg.icon.only.height');
}

.p-button .p-button-icon {
    font-size: dt('button.figma.icon.size');
}
 
.p-button .p-button-icon svg,
.p-button svg.p-button-icon {
    stroke: dt('button.figma.stroke.color');
    stroke-width: dt('button.figma.stroke.width');
    stroke-dasharray: dt('button.figma.stroke.style');
}
`
      ),
    },
    inputtext: {
      ...CSITheme.components?.inputtext,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["inputtext"]),
        `
.p-inputtext {
    font-size: dt('inputtext.font.size');
    line-height: dt('inputtext.line.height');
}

.p-inputtext.p-inputtext-sm {
    font-size: dt('inputtext.sm.font.size');
    line-height: dt('inputtext.sm.line.height');
}

.p-inputtext.p-inputtext-lg {
    font-size: dt('inputtext.lg.font.size');
    line-height: dt('inputtext.lg.line.height');
}
`
      ),
    },
    select: {
      ...CSITheme.components?.select,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["select"]),
        `
.p-select {
    font-size: dt('select.font.size');
    line-height: dt('select.line.height');
}

.p-select.p-select-sm {
    font-size: dt('select.sm.font.size');
    line-height: dt('select.sm.line.height');
}

.p-select.p-select-lg {
    font-size: dt('select.lg.font.size');
    line-height: dt('select.lg.line.height');
}
`
      ),
    },
    datepicker: {
      ...CSITheme.components?.datepicker,
      date: {
        ...CSITheme.components?.datepicker?.date,
        width: "{datepicker.date.cell.width}",
        height: "{datepicker.date.cell.height}",
      },
    },
    inputotp: {
      ...CSITheme.components?.inputotp,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["inputotp"]),
        `
.p-inputotp .p-inputotp-input {
    height: dt('inputotp.input.height');
}

.p-inputotp.p-inputotp-sm .p-inputotp-input {
    height: dt('inputotp.input.sm.height');
}

.p-inputotp.p-inputotp-lg .p-inputotp-input {
    height: dt('inputotp.input.lg.height');
}
`
      ),
    },
    inputnumber: {
      ...CSITheme.components?.inputnumber,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["inputnumber"]),
        `
.p-inputnumber-button {
    height: dt('inputnumber.button.height');
}
`
      ),
    },
    radiobutton: {
      ...CSITheme.components?.radiobutton,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["radiobutton"]),
        `
.p-radiobutton,
.p-radiobutton-box {
    border-radius: dt('radiobutton.border.radius');
}
`
      ),
    },
    togglebutton: {
      ...CSITheme.components?.togglebutton,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["togglebutton"]),
        `
.p-togglebutton {
    font-size: dt('togglebutton.font.size');
    width: dt('togglebutton.width');
    height: dt('togglebutton.height');
}

.p-togglebutton.p-togglebutton-sm {
    font-size: dt('togglebutton.sm.font.size');
    gap: dt('togglebutton.sm.gap');
    width: dt('togglebutton.sm.width');
    height: dt('togglebutton.sm.height');
}

.p-togglebutton.p-togglebutton-lg {
    font-size: dt('togglebutton.lg.font.size');
    gap: dt('togglebutton.lg.gap');
    width: dt('togglebutton.lg.width');
    height: dt('togglebutton.lg.height');
}

.p-togglebutton.p-togglebutton-icon-only {
    padding: dt('togglebutton.icon.only.padding.y') dt('togglebutton.icon.only.padding.x');
}

.p-togglebutton .p-togglebutton-icon {
    font-size: dt('togglebutton.figma.icon.size');
}
`
      ),
    },
    menu: {
      ...CSITheme.components?.menu,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["menu"]),
        `
.p-menu .p-submenu-header {
    font-size: dt('menu.submenu.label.font.size');
    line-height: dt('menu.submenu.label.line.height');
}
`
      ),
    },
    tabs: {
      ...CSITheme.components?.tabs,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["tabs"]),
        `
.p-tab {
    font-size: dt('tabs.tab.font.size');
    line-height: dt('tabs.tab.line.height');
}
`
      ),
    },
    stepper: {
      ...CSITheme.components?.stepper,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["stepper"]),
        `
.p-step-title {
    font-size: dt('stepper.step.title.font.size');
}
`
      ),
    },
    divider: {
      ...CSITheme.components?.divider,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["divider"]),
        `
.p-divider {
    gap: dt('divider.gap');
}
`
      ),
    },
    popover: {
      ...CSITheme.components?.popover,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["popover"]),
        `
.p-popover-content {
    gap: dt('popover.content.gap');
}
`
      ),
    },
    chip: {
      ...CSITheme.components?.chip,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["chip"]),
        `
.p-chip-image,
.p-chip img {
    border-radius: dt('chip.image.border.radius');
}
`
      ),
    },
    textarea: {
      ...CSITheme.components?.textarea,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["textarea"]),
        `
.p-textarea {
    line-height: dt('form.line.height');
}

.p-textarea.p-textarea-sm {
    line-height: dt('form.sm.line.height');
}

.p-textarea.p-textarea-lg {
    line-height: dt('form.lg.line.height');
}
`
      ),
    },
    panelmenu: {
      ...CSITheme.components?.panelmenu,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["panelmenu"]),
        `
.p-panelmenu-header-label {
    font-size: dt('navigation.submenu.label.font.size');
}
`
      ),
    },
    menubar: {
      ...CSITheme.components?.menubar,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["menubar"]),
        `
.p-menubar-submenu .p-menubar-item-label {
    font-size: dt('navigation.submenu.label.font.size');
}
`
      ),
    },
    tieredmenu: {
      ...CSITheme.components?.tieredmenu,
      css: mergeCss(
        getCss((CSITheme.components as Record<string, unknown> | undefined)?.["tieredmenu"]),
        `
.p-tieredmenu-submenu .p-tieredmenu-item-label {
    font-size: dt('navigation.submenu.label.font.size');
}
`
      ),
    },
  },
};

export default CSIPreset;
