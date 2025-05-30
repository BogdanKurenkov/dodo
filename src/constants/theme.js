export const theme = {
    colors: {
        white: '#F4F4F1',
        black: '#111110',
        orange: '#FF6900',
        glass_button: 'linear-gradient(98.19deg, rgba(73, 73, 78, 0.5) 15.13%, rgba(73, 73, 78, 0.3) 80.56%)'

    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    breakpoints: {
        sm: '480px',
        m: '767.98px',
        md: '992px',
        lg: '1440px',
        xl: '1920px',
    },
    mixins: {
        flexCenter: `
          display: flex;
          justify-content: center;
          align-items: center;
        `,
        flexBetween: `
        display: flex;
        justify-content: space-between;
        align-items: center;
      `
    },
    font: {
        family: "'NeueHaasUnicaW1G',sans-serif",
        rooftop: "Rooftop, sans-serif",
    },
};
