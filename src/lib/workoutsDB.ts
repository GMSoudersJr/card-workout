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
    name: 'THE GARRETT',
    description: "Dynamic legs, core, and arms",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'LEG_RAISES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'LUNGES')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'PUSH_UPS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'SQUATS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'THE INSKIP',
    description: "Rotation, stability, and strength",
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
        exercise: exercises.filter(e => e.name === 'LUNGES')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'CIRCLES I',
    description: "Roll out!",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'WRIST_CIRCLES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'NECK_CIRCLES')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'ANKLE_CIRCLES')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'FORWARD_ARM_CIRCLES')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'TAKE A SEAT',
    description: "Seated exercises",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'KNEE_RAISES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'ARM_EXTENSIONS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'SEATED_CALF_RAISES')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'TOE_RAISES')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'TAKE A SEAT II',
    description: "More seated exercises",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'SEATED_CALF_RAISES')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'ANKLE_DORSIFLEXIONS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'ANKLE_EVERSIONS')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'ANKLE_INVERSIONS')[0],
        completedReps: 0
      },
    ]
  },
  {
    name: 'FEATS of FEET',
    description: "Strengthen your feet",
    suitExercises: [
      {
        suit: 'CLUBS',
        exercise: exercises.filter(e => e.name === 'ARCH_LIFTS')[0],
        completedReps: 0
      },
      {
        suit: 'DIAMONDS',
        exercise: exercises.filter(e => e.name === 'TOE_CURLS')[0],
        completedReps: 0
      },
      {
        suit: 'HEARTS',
        exercise: exercises.filter(e => e.name === 'TOE_RAISES')[0],
        completedReps: 0
      },
      {
        suit: 'SPADES',
        exercise: exercises.filter(e => e.name === 'TOE_SPLAYS')[0],
        completedReps: 0
      },
    ]
  },
]
