# <h1 align='center'>[SUIT YOURSELF](https://card-workout-tau.vercel.app/)</h1>

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/3d4c2ead-3bd0-46cc-9768-961a2276a546" width="100px" alt="homepage"/>      
      </td>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/971ecb3a-6530-46d2-be9c-5a02000a126c" width="100px" alt="aboutPage" />      
      </td>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/c147c5ad-8b25-41c4-8505-f4efd9006270" width="100px" alt="exercisePageNoExercisesChosen" />
      </td>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/4a8887e5-2733-4bae-8935-d5ec87712fe8" width="100px" alt="exercisePageWithExercisesChosen" />      
      </td>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/c115faef-fc46-44fa-9b69-d73ee86c2c29" width="100px" alt="cardsStart" />      
      </td>
      <td>
        <img src="https://github.com/GMSoudersJr/card-workout/assets/44438849/2346ab10-acca-4d5e-a58b-e36f58dadfa7" width="100px" alt="exerciseCards" />      
      </td>
    </tr>
  </table>
</div>


## Overview
A *mobile-first*, *web-based* card workout [SUIT YOURSELF](https://card-workout-tau.vercel.app/)

During the pandemic, I was intrigued by a video of a boxer using a deck of cards to determine the number of push-ups he would do.
After trying it a few times...

> [!Warning]
> Doing only one exercise for a full deck is **OVERKILL!**

My *spin* on it was to have each suit represent a different exercise instead of a <ins>full deck</ins> of push-ups.

> [!Tip]
> ♣️ = Crunches (core exercise)
> 
> ♦️ = Jumping Jacks (4 corners, 4 body parts move)
> 
> ♥️ = Push-ups (an exercise I love)
> 
> ♠️ = Squats (leg exercise)

Also, friends were interested as well, but they did not want to carry around a deck of cards.

## The Problem
Carrying around a deck of cards and remembering which exercise is for which suit in the middle of the workout.

## Current Status

**LIVE LINK:** https://card-workout-tau.vercel.app

## Future Plans

> [!Note]
> Connect a backend so users can:
> - login and track their exercises / workouts
> - save a workout and continue later
> - time workouts
> - save completed workouts
> - repeat workouts to see improvements in conditioning

## Running the Project
This project is being built with Svelte using TypeScript and testing is done with Playwright.

To run a version locally on your own machine

Optional:
```bash
#make a directory and change into it:
mkdir newDirectory && cd newDirectory
```

Required:
```bash
#clone the repository into the current directory over SSH:
git clone git@github.com:GMSoudersJr/card-workout
#change into newly cloned directory:
cd card-workout
#run this command to install all dependencies:
npm install
```

for a local development server, run:
```bash
npm run dev
```

run this commmand to build:

```bash
npm run build
```

## Dev Dependencies
- [Svelte](https://svelte.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [Playwright](https://playwright.dev/)
