import { createTheme } from "@mui/system";


declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        desktop: true;
    }
}


// const StyleSheet = () => {
//     const theme = createTheme({
//         palette: {
//             sbn: {
//                 main: '#e3cc91',
//                 dark: 'blue',
//                 light: 'green',
//             },
//             hal: {
//                 main: '#CEE5D0',
//                 dark: 'blue',
//                 light: 'green',
//             }
//         },
//         breakpoints: {
//             values: {
//                 mobile: 300, // small phone
//                 tablet: 600, // phone
//                 desktop: 900, // small laptop
//             }
//         }
//     },
//     );
// }


export default StyleSheet;