import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Fonts } from 'react-native-paper/src/types';

const webFonts: Fonts = {
  regular: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  medium: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  light: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  thin: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  }
};

const iosFonts: Fonts = {
  regular: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  medium: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  light: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  thin: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
};

const androidFonts: Fonts = {
  regular: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  medium: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  light: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
  thin: {
    fontFamily: 'AcuminPro-Regular',
    fontWeight: "normal",
  },
};

const fontConfig = {
    web: webFonts,
    ios: iosFonts,
    android: androidFonts
};

  export default {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
  };