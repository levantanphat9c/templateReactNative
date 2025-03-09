import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {ROUTE_NAME} from '@/Navigation/RouteName';
import {HomeStackScreenProps} from '@/Navigation/NavigationType';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {CounterActions, CounterReducerSelectors} from '@/ReduxSaga/Counter';
import AppText from '@/Components/AppText';

const HomeScreen = ({
  navigation,
}: HomeStackScreenProps<ROUTE_NAME.HOME_SCREEN>) => {
  const value = useSelector(CounterReducerSelectors.selectCount);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(CounterActions.incrementSaga());
  };

  console.log('render HomeScreen');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE_NAME.SETTING_SCREEN, {
            userId: '123',
          });
        }}>
        <AppText type={'BUTTON_2'} color={'red'}>
          Go to Setting Screen
        </AppText>
        <Text>{Config.API_URL}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Increment</Text>
        <AppText type={'TITLE_1'} color={'red'} onPress={onIncrement}>
          {value}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
