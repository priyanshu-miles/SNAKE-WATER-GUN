# 🐍 Snake Water Gun Game (C)

A simple command-line implementation of the classic **Snake, Water, Gun** game in the C programming language.

The computer randomly selects one of the three options, and the player enters their choice. The program then determines the winner based on the game rules.

## 🎮 Game Rules

- 🐍 Snake drinks Water → Snake Wins
- 💧 Water drowns Gun → Water Wins
- 🔫 Gun kills Snake → Gun Wins
- Same choices result in a Draw.

## 📋 Player Choices

| Input | Choice |
|-------|--------|
| 0 | Snake |
| 1 | Water |
| 2 | Gun |

## 🚀 Features

- Random computer choice using `rand()`
- Simple user input
- Win, Lose, or Draw result
- Beginner-friendly C project
- Uses conditional statements for game logic

## 🛠️ Technologies Used

- C Programming Language
- Standard C Libraries
  - `stdio.h`
  - `stdlib.h`
  - `time.h`

## ▶️ How to Compile and Run

### Using GCC

Compile:

```bash
gcc GAME.c -o game
```

Run:

```bash
./game
```

### Windows (MinGW)

```bash
gcc GAME.c -o game.exe
game.exe
```

## 💻 Example Output

```
CHOOSE
0 FOR SNAKE
1 FOR WATER
2 FOR GUN

0
COMPUTER'S CHOICE 2
OHH YOU LOST !! :(
```

## 📂 Project Structure

```
.
├── GAME.c
└── README.md
```

## 🔮 Future Improvements

- Validate invalid user input.
- Display names instead of numbers for computer choices.
- Play multiple rounds.
- Keep track of scores.
- Add colorful console output.
- Refactor the game logic using functions or switch statements.

## 📚 Learning Objectives

This project helps beginners practice:

- Variables
- Conditional statements (`if-else`)
- User input/output
- Random number generation
- Basic game logic in C

## 📄 License

This project is open source and available under the MIT License.

---

Made by using C.
My friend helped me in making UI and also used css , html and javascript.
