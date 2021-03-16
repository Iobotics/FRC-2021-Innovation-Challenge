import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
    web: {
      regular: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
    },
    ios: {
      regular: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'AcuminPro-Regular',
        fontWeight: 'normal',
      },
    }
  };

  export default {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
  };