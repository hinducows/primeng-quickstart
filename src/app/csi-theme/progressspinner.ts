import type { ProgressSpinnerDesignTokens } from '@primeuix/themes/types/progressspinner';

 export default {
    colorScheme: {
        dark: {
            root: {
                colorOne: "{red.400}",
                colorTwo: "{blue.400}",
                colorFour: "{yellow.400}",
                colorThree: "{green.400}"
            }
        },
        light: {
            root: {
                colorOne: "{blue.50}",
                colorTwo: "{blue.200}",
                colorFour: "{blue.800}",
                colorThree: "{blue.500}"
            }
        }
    }
} satisfies ProgressSpinnerDesignTokens;