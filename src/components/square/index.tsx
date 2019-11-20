import React from 'react';
import styles from './square.style';
// import { squareSize } from '../../styles/dimensions';

import { TouchableOpacity, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { GameGridElement } from '../../models/GameGrid';

interface SquareProps {
  num: number;
  gameState: GameGridElement;
  size?: number;
  onPress: () => void;
  onLongPress: () => void;
}

const Square: React.FC<SquareProps> = ({
  num,
  size,
  gameState,
  onPress,
  onLongPress
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      gameState === GameGridElement.Displayed ? styles.openContainer : null,
      size ? { height: size, width: size } : null
    ]}
    onPress={onPress}
    onLongPress={onLongPress}>
    <View>
      {gameState === GameGridElement.Hidden || num === 0 ? (
        <Text />
      ) : gameState === GameGridElement.Flag ? (
        // <Icon name="flag" size={(size || squareSize) - 10} color="red" />
        <Text style={styles.squareText}>F</Text>
      ) : num === Infinity ? (
        // <Icon name="bomb" size={(size || squareSize) - 10} color="red" />
        <Text style={styles.squareText}>B</Text>
      ) : (
        <Text style={styles.squareText}>{num}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default Square;
