export interface Puppy {
  id: number;
  name: string;
  age: number;
  breed: string;
  description: string;
  image: string;
  gender: 'male' | 'female';
  personalityTraits: string[];
  vaccinationRecords: string[];
  isSpayedOrNeutered: boolean;
  specialNeeds: string;
}
