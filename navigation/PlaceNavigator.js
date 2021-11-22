import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import FavoriteScreen from "../screens/FavoriteScreen";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const PlacesNavigator = createStackNavigator({
    Places: PlaceListScreen,
    PlaceDetailScreen: PlaceDetailScreen,
    NewPlaceScreen: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
    }
});

const NewPlaceNavigator = createStackNavigator({
    NewPlaceScreen: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
    }
})

const FavoritePlaceNavigator = createStackNavigator({
    FavoriteScreen: FavoriteScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
    }
})

// export default createAppContainer(PlacesNavigator);
export default createAppContainer(
    createBottomTabNavigator(
        {
            Home: {
                screen: PlacesNavigator,
                navigationOptions: {
                    tabBarLabel: "Home",
                    tabBarOptions: {
                        activeTintColor: Colors.accent,
                    },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="md-home"
                                size={24}
                                color={tabInfo.focused ? Colors.accent : '#8e8e93'}
                            />
                        )
                    }
                }
            },
            NewPlace: {
                screen: NewPlaceNavigator,
                navigationOptions: {
                    tabBarLabel: "Add Place",
                    tabBarOptions: {
                        activeTintColor: Colors.accent,
                    },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="add-circle-outline"
                                size={26}
                                color={tabInfo.focused ? Colors.accent : '#8e8e93'}
                            />
                        )
                    }
                }
            },
            Favorite: {
                screen: FavoritePlaceNavigator,
                navigationOptions: {
                    tabBarLabel: "Favorite",
                    tabBarOptions: {
                        activeTintColor: Colors.accent,
                    },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="heart"
                                size={24}
                                color={tabInfo.focused ? Colors.accent : '#8e8e93'}
                            />
                        )
                    }
                }
            }
        }, {

    }
    )
)
