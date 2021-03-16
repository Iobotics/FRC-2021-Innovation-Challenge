import React from 'react';

import { registerRootComponent } from 'expo';

import App from './src/app/App';

import Fonts from './src/fonts/font-provider';
import { Provider as PaperProvider } from 'react-native-paper';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(() => { return (
    <PaperProvider theme={Fonts}>
        <App/>
    </PaperProvider>
) });
