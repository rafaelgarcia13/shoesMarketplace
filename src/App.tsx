import { ShoesScroll } from 'components/shoesScroll/ShoesScroll';
import React from 'react';
import { SafeAreaView } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ShoesScroll />
    </SafeAreaView>
  );
};

export { App };
