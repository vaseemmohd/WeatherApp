import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from "./store/index";

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(<Provider store={store} >
<App/>
</Provider>);
