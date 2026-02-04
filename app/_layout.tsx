import FavouriteBoardings from '@/contex/favourites';
import { DataProvider } from '@/contex/dataImport';
import { Drawer } from 'expo-router/drawer';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from '@/contex/auth';

export default function RootLayout() {

  return (
    <AuthContext>
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <FavouriteBoardings>
        <DataProvider>

      <Drawer initialRouteName="(atabs)" screenOptions={
         {swipeEnabled: false,}
        
      }>
        <Drawer.Screen
          name="(atabs)"
          options={{
            title: 'Find or Add listing',
            headerShown: false,
          }}
        />
        
      </Drawer>
      </DataProvider>
      </FavouriteBoardings>
    </SafeAreaProvider>
    </AuthContext>
  );
}
