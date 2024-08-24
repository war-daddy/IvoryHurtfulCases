import React, { useState, useEffect } from "react";

const ArrayPage = () => {
  const [grid, setGrid] = useState(createInitialGrid());
  const [snake, setSnake] = useState([[4, 4]]);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState([0, 1]);
  const [isGameOver, setIsGameOver] = useState(false);

  // Initialize the grid
  function createInitialGrid() {
    const rows = 10;
    const cols = 10;
    return Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  // Generate random food position
  function generateFood() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  // Handle keydown event to change the snake's direction
  useEffect(() => {
    const handleMovement = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection([-1, 0]);
          break;
        case "ArrowDown":
          setDirection([1, 0]);
          break;
        case "ArrowLeft":
          setDirection([0, -1]);
          break;
        case "ArrowRight":
          setDirection([0, 1]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleMovement);

    return () => {
      window.removeEventListener("keydown", handleMovement);
    };
  }, []);

  // Move the snake at set intervals
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [snake, direction, isGameOver]);

  // Update the snake's position
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];

    // Check for collisions
    if (checkCollision(newHead, newSnake)) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(newHead);

    // Check if the snake has eaten the food
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(generateFood());
    } else {
      newSnake.pop(); // Remove the last segment if no food was eaten
    }

    setSnake(newSnake);
  };

  // Check if the snake collides with the walls or itself
  const checkCollision = (head, snake) => {
    if (
      head[0] < 0 ||
      head[0] >= 10 ||
      head[1] < 0 ||
      head[1] >= 10 ||
      snake.some((segment) => segment[0] === head[0] && segment[1] === head[1])
    ) {
      return true;
    }
    return false;
  };

  // Check if a position is part of the snake
  const isSnake = (position) => {
    return snake.some(
      (segment) => segment[0] === position[0] && segment[1] === position[1],
    );
  };

  // Check if a position is where the food is
  const isFood = (position) => {
    return food[0] === position[0] && food[1] === position[1];
  };

  // Render the grid
  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: "flex" }}>
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: 20,
              height: 20,
              backgroundColor: isSnake([rowIndex, colIndex])
                ? "green"
                : isFood([rowIndex, colIndex])
                  ? "red"
                  : "white",
              border: "1px solid black",
            }}
          />
        ))}
      </div>
    ));
  };

  // Reset the game
  const resetGame = () => {
    setSnake([[4, 4]]);
    setFood(generateFood());
    setDirection([0, 1]);
    setIsGameOver(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Snake Game</h1>
      {isGameOver ? (
        <>
          <h2>Game Over</h2>
          <button onClick={resetGame}>Restart</button>
        </>
      ) : (
        <div>{renderGrid()}</div>
      )}
    </div>
  );
};

export default ArrayPage;
