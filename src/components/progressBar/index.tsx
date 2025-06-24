import React from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  progress: number;
};

export function ProgressBar({ progress }: Props) {
  const animatedWidth = React.useRef(new Animated.Value(progress)).current;

  React.useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        Progresso: <Text style={styles.percent}>{Math.round(progress)}%</Text>
      </Text>
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barFill, { width: widthInterpolated }]} />
      </View>
    </View>
  );
}