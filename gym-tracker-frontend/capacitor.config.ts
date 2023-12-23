import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wracce.gymtracker',
  appName: 'Clear GYM Tracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
