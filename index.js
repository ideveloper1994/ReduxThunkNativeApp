import { AppRegistry } from 'react-native';
import { AppConfig as App } from './app/store/config';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
