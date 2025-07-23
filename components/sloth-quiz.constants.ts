interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      'How many toes do three-toed sloths actually have on their front feet?',
    options: ['2 toes', '3 toes', '4 toes', '5 toes'],
    correctAnswer: 1, // 3 toes
  },
  {
    id: 2,
    question: 'How long can sloths hold their breath underwater?',
    options: ['5 minutes', '10 minutes', '20 minutes', '40 minutes'],
    correctAnswer: 3, // 40 minutes
  },
  {
    id: 3,
    question: 'How often do sloths come down from trees to defecate?',
    options: ['Every day', 'Once a week', 'Once a month', 'Never'],
    correctAnswer: 1, // Once a week
  },
  {
    id: 4,
    question: 'What do sloths primarily eat?',
    options: ['Insects', 'Fruits', 'Leaves', 'Fish'],
    correctAnswer: 2, // Leaves
  },
  {
    id: 5,
    question: 'What is the maximum speed of a sloth on the ground?',
    options: ['0.1 mph', '0.24 mph', '1 mph', '2 mph'],
    correctAnswer: 1, // 0.24 mph
  },
];

export const scoreMessages = [
  'Perfect! You\'re a sloth expert! 🦥',
  'Excellent! You know your sloths well!',
  'Good job! You\'re learning about sloths!',
  'Not bad! Keep learning about these amazing creatures!',
  'Keep trying! Sloths are fascinating animals worth learning about!',
];
