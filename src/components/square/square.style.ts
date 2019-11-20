import { StyleSheet } from 'react-native';
import { open, closed } from '../../styles/colors';
import { squareSize } from '../../styles/dimensions';

export default StyleSheet.create({
  container: {
    height: squareSize,
    width: squareSize,
    borderRadius: squareSize / 10,
    backgroundColor: closed,
    margin: 2,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  openContainer: {
    backgroundColor: open
  },
  squareText: {
    fontSize: 20
  }
});
