// this component serves as a visual test for custom theme tokens defined in `csi-theme`.
// it includes a variety of PrimeNG components to showcase the application of these tokens.
// the layout is organized into cards demonstrating different component types and token-based styling.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputOtpModule } from 'primeng/inputotp';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabsModule } from 'primeng/tabs';
import { StepperModule } from 'primeng/stepper';
import { DividerModule } from 'primeng/divider';
import { PopoverModule } from 'primeng/popover';
import { ChipModule } from 'primeng/chip';
import { TextareaModule } from 'primeng/textarea';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'theme-tokens-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    InputOtpModule,
    InputNumberModule,
    RadioButtonModule,
    ToggleButtonModule,
    MenuModule,
    MenubarModule,
    TieredMenuModule,
    PanelMenuModule,
    TabsModule,
    StepperModule,
    DividerModule,
    PopoverModule,
    ChipModule,
    TextareaModule,
  ],
  template: `
    <section class="tokens-demo">
      <div class="tokens-demo__header">
        <h2>Theme Tokens Demo</h2>
        <p class="tokens-demo__subtitle">
          Visual checks for custom tokens in <code>csi-theme</code>.
        </p>
      </div>

      <div class="tokens-demo__grid">
        <div class="tokens-demo__card">
          <h3>Buttons</h3>
          <div class="tokens-demo__row">
            <p-button label="Default" icon="pi pi-star" />
            <p-button label="Small" size="small" icon="pi pi-bolt" />
            <p-button label="Large" size="large" icon="pi pi-check" />
            <p-button icon="pi pi-heart" />
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Inputs</h3>
          <div class="tokens-demo__stack">
            <input pInputText [(ngModel)]="inputValue" placeholder="InputText" />
            <input pInputText [(ngModel)]="inputValueSm" pSize="small" placeholder="Small input" />
            <input pInputText [(ngModel)]="inputValueLg" pSize="large" placeholder="Large input" />
            <textarea
              pTextarea
              [(ngModel)]="textareaValue"
              rows="3"
              placeholder="Textarea"
            ></textarea>
            <textarea
              pTextarea
              [(ngModel)]="textareaValueSm"
              rows="2"
              pSize="small"
              placeholder="Textarea small"
            ></textarea>
            <textarea
              pTextarea
              [(ngModel)]="textareaValueLg"
              rows="2"
              pSize="large"
              placeholder="Textarea large"
            ></textarea>
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Select + Date</h3>
          <div class="tokens-demo__stack">
            <p-select
              [options]="cities"
              [(ngModel)]="selectedCity"
              optionLabel="label"
              placeholder="Select a city"
            />
            <p-select
              [options]="cities"
              [(ngModel)]="selectedCitySm"
              optionLabel="label"
              placeholder="Small select"
              styleClass="p-select-sm"
            />
            <p-select
              [options]="cities"
              [(ngModel)]="selectedCityLg"
              optionLabel="label"
              placeholder="Large select"
              styleClass="p-select-lg"
            />
            <p-datePicker [(ngModel)]="dateValue" showIcon="true" />
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>OTP + Number</h3>
          <div class="tokens-demo__stack">
            <p-inputotp [(ngModel)]="otpValue" [length]="4" />
            <p-inputotp [(ngModel)]="otpValueSm" [length]="4" styleClass="p-inputotp-sm" />
            <p-inputotp [(ngModel)]="otpValueLg" [length]="4" styleClass="p-inputotp-lg" />
            <p-inputnumber [(ngModel)]="numberValue" />
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Radio + Toggle</h3>
          <div class="tokens-demo__row">
            <div class="tokens-demo__option">
              <p-radioButton
                name="demoRadio"
                value="A"
                [(ngModel)]="radioValue"
                inputId="demo-radio-a"
              />
              <label for="demo-radio-a">Option A</label>
            </div>
            <div class="tokens-demo__option">
              <p-radioButton
                name="demoRadio"
                value="B"
                [(ngModel)]="radioValue"
                inputId="demo-radio-b"
              />
              <label for="demo-radio-b">Option B</label>
            </div>
            <p-toggleButton
              [(ngModel)]="toggleValue"
              onLabel="On"
              offLabel="Off"
              iconPos="right"
            />
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Menus</h3>
          <div class="tokens-demo__stack">
            <p-menubar [model]="menubarItems" />
            <div class="tokens-demo__menu-row">
              <p-menu [model]="menuItems" />
              <p-tieredmenu [model]="tieredItems" />
              <p-panelmenu [model]="panelMenuItems" />
            </div>
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Tabs + Stepper</h3>
          <div class="tokens-demo__stack">
            <p-tabs [(value)]="activeTab">
              <p-tablist>
                <p-tab [value]="0">Overview</p-tab>
                <p-tab [value]="1">Details</p-tab>
                <p-tab [value]="2">History</p-tab>
              </p-tablist>
              <p-tabpanels>
                <p-tabpanel [value]="0">Overview content</p-tabpanel>
                <p-tabpanel [value]="1">Details content</p-tabpanel>
                <p-tabpanel [value]="2">History content</p-tabpanel>
              </p-tabpanels>
            </p-tabs>

            <p-stepper [(value)]="activeStep">
              <p-step-list>
                <p-step [value]="0">Account</p-step>
                <p-step [value]="1">Profile</p-step>
                <p-step [value]="2">Confirm</p-step>
              </p-step-list>
              <p-step-panels>
                <p-step-panel [value]="0">Account step content</p-step-panel>
                <p-step-panel [value]="1">Profile step content</p-step-panel>
                <p-step-panel [value]="2">Confirm step content</p-step-panel>
              </p-step-panels>
            </p-stepper>
          </div>
        </div>

        <div class="tokens-demo__card">
          <h3>Divider + Popover + Chip</h3>
          <p-divider align="center">
            <span>Divider label</span>
          </p-divider>
          <div class="tokens-demo__row">
            <p-button label="Toggle Popover" (onClick)="popover.toggle($event)" />
            <p-popover #popover>
              <div class="tokens-demo__stack tokens-demo__popover">
                <span>Popover content line</span>
                <span>Spacing uses custom gap</span>
              </div>
            </p-popover>
            <p-chip label="Profile" image="https://i.pravatar.cc/36?img=15" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .tokens-demo {
        margin-top: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--p-content-border-color);
        border-radius: 12px;
        background: var(--p-content-background);
      }

      .tokens-demo__header h2 {
        margin: 0 0 0.25rem 0;
      }

      .tokens-demo__subtitle {
        margin: 0 0 1.5rem 0;
        color: var(--p-text-muted-color);
      }

      .tokens-demo__grid {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }

      .tokens-demo__card {
        border: 1px solid var(--p-content-border-color);
        border-radius: 12px;
        padding: 1rem;
        background: var(--p-content-background);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .tokens-demo__row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
      }

      .tokens-demo__stack {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .tokens-demo__menu-row {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .tokens-demo__option {
        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
      }

      .tokens-demo__popover {
        min-width: 200px;
      }
    `,
  ],
})
export class ThemeTokensDemo {
  inputValue = '';
  inputValueSm = '';
  inputValueLg = '';
  textareaValue = '';
  textareaValueSm = '';
  textareaValueLg = '';
  selectedCity: string | null = null;
  selectedCitySm: string | null = null;
  selectedCityLg: string | null = null;
  dateValue: Date | null = null;
  otpValue = '';
  otpValueSm = '';
  otpValueLg = '';
  numberValue = 24;
  radioValue = 'A';
  toggleValue = false;
  activeTab = 0;
  activeStep = 0;

  cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Chicago', value: 'CHI' },
    { label: 'San Francisco', value: 'SF' },
  ];

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Reports', icon: 'pi pi-chart-bar' },
    { separator: true },
    { label: 'Settings', icon: 'pi pi-cog' },
  ];

  menubarItems: MenuItem[] = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Open', icon: 'pi pi-folder-open' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-replay' },
      ],
    },
    {
      label: 'Help',
      items: [{ label: 'Docs', icon: 'pi pi-book' }],
    },
  ];

  tieredItems: MenuItem[] = [
    {
      label: 'Navigation',
      items: [
        { label: 'Search', icon: 'pi pi-search' },
        { label: 'Recent', icon: 'pi pi-clock' },
        {
          label: 'More',
          items: [
            { label: 'Favorites', icon: 'pi pi-star' },
            { label: 'Archive', icon: 'pi pi-inbox' },
          ],
        },
      ],
    },
  ];

  panelMenuItems: MenuItem[] = [
    {
      label: 'Account',
      icon: 'pi pi-user',
      items: [
        { label: 'Profile' },
        { label: 'Security' },
      ],
    },
    {
      label: 'Projects',
      icon: 'pi pi-briefcase',
      items: [
        { label: 'Active' },
        { label: 'Archived' },
      ],
    },
  ];
}
