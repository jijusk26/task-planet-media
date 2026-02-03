import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import Icon from '../components/icon';
import { SvgImageNames } from '../assets/svg-images';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { NavigationRoutes } from '../enums/navigation';

const Tab = createBottomTabNavigator();

export interface TabItemType {
  name: string;
  icon: keyof SvgImageNames;
  component: React.ComponentType<any>;
}

export const MainTab = () => {
  const TabItems: TabItemType[] = [
    {
      name: NavigationRoutes.HOME,
      component: HomeScreen,
      icon: 'HomeIcon',
    },
    {
      name: NavigationRoutes.WALLET,
      component: HomeScreen,
      icon: 'WalletIcon',
    },
    {
      name: NavigationRoutes.MENU,
      component: HomeScreen,
      icon: 'MenuIcon',
    },
    {
      name: NavigationRoutes.SHARE,
      component: HomeScreen,
      icon: 'ShareIcon',
    },
    {
      name: NavigationRoutes.PROFILE,
      component: HomeScreen,
      icon: 'ProfileIcon',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'transparent',
        },
        tabBarIconStyle: {
          flex: 1,
        },
        tabBarBackground: () => <TabBarBackground />,
      }}
    >
      {TabItems.map((item, index) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: (props: {
              focused: boolean;
              color: string;
              size: number;
            }) => (
              <Icon
                icon={item.icon}
                size={22}
                color={props.focused ? '#9b9b9c' : '#f6f2f2'}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const TabBarBackground = () => (
  <LinearGradient
    colors={['#0d1f50', '#192f6a', '#3b5998']}
    style={StyleSheet.absoluteFill}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
);

export default MainTab;
