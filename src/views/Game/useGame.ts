import { useState, useEffect, useReducer } from 'react';

// Models
import GameGrid, { GameGridElement } from '../../models/GameGrid';

let game = new GameGrid([1, 1], 1);

interface GridReducerAction {
  reset?: GameGridElement[];
  flag?: [number, number]
}

const reducer: React.Reducer<GameGridElement[], GridReducerAction> = (prevGrid, action) => {
  if (action.reset) {
    return action.reset;
  }
  if (action.flag) {
    prevGrid[action.flag[0]] = action.flag[1];
    return prevGrid;
  }
  return prevGrid;
}

const useGame = (size: [number, number], nBombs: number) => {
  const initialToDiscover = size[0] * size[1] - nBombs;

  useEffect(() => {
    game = new GameGrid(size, nBombs);
    modifGameGrid({ reset: game.getFlatGameGrid() });
  }, [size, nBombs]);

  const flatGrid = game.getFlatGrid();
  const [flatGameGrid, modifGameGrid] = useReducer(reducer, []);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [toDiscover, setToDiscover] = useState(initialToDiscover);

  const handleSquarePress = (i: number, j: number) => {
    if (game.isBomb(i, j)) {
      setLose(true);
    }
    const { discovered } = game.discover(i, j);
    setToDiscover(initialToDiscover - discovered)
    modifGameGrid({ reset: game.getFlatGameGrid() });
    if (toDiscover === nBombs) {
      setWin(true);
    }
  };

  const handleSquareLongPress = (i: number, j: number) => {
    const flag = game.putFlag(i, j);
    modifGameGrid({ flag });
  };

  const handleRestart = () => {
    game = new GameGrid(size, nBombs);
    modifGameGrid({ reset: game.getFlatGameGrid() });
    setToDiscover(initialToDiscover);
    setWin(false);
    setLose(false);
  };

  return { flatGrid, flatGameGrid, win, lose, handleSquareLongPress, handleSquarePress, handleRestart, toDiscover };
};

export default useGame;
