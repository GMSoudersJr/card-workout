import type { TSuit } from '../types/suit';
import type { TSuitExercise } from '../types/suitExercise';
import { exercises } from './exercisesDB';

interface Workout {
  name: string;
  description: string;
  suitExercises: TSuitExercise<TSuit>[];
}

export const workouts: Workout[] = [
  {
    name: 'FULL BODY I',
    description: "No equipment, calisthenics staples",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'CRUNCHES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'JUMPING_JACKS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ATG_SQUATS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'FULL BODY II',
    description: "It'll get your blood flowing",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'TRUNK_TWISTS')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'MOUNTAIN_CLIMBERS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ATG_SPLIT_SQUATS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'FULL BODY III',
    description: "No equipment, calisthenics staples",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'CRUNCHES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'JUMPING_JACKS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ATG_SQUATS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'FULL BODY IV',
    description: "No equipment, calisthenics staples",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'CRUNCHES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'JUMPING_JACKS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ATG_SQUATS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'FULL BODY V',
    description: "No equipment, calisthenics staples",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'CRUNCHES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'JUMPING_JACKS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ATG_SQUATS')[0],
        completedReps: 0
      },
    ]
  },
]
