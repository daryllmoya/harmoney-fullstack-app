import { faker } from '@faker-js/faker';
import { Puppy } from './puppy.interface';

const generateMockPuppies = async (count: number) => {
  const mockPuppies: Puppy[] = [];

  for (let i = 0; i < count; i++) {
    const puppy: Puppy = {
      id: i + 1,
      name: faker.person.firstName(),
      age: faker.number.int({ min: 1, max: 3 }),
      breed: faker.animal.dog(),
      description: faker.word.words({ count: { min: 3, max: 10 } }),
      image: await fetch('https://loremflickr.com/1200/1200/dog').then(
        (res) => res.url,
      ),
      gender: faker.person.sexType(),
      personalityTraits: [
        faker.word.adjective(),
        faker.word.adjective(),
        faker.word.adjective(),
      ],
      vaccinationRecords: [
        faker.word.words({ count: { min: 5, max: 10 } }),
        faker.word.words({ count: { min: 5, max: 10 } }),
        faker.word.words({ count: { min: 5, max: 10 } }),
      ],
      isSpayedOrNeutered: faker.datatype.boolean(),
      specialNeeds: faker.datatype.boolean()
        ? faker.word.words({ count: { min: 3, max: 10 } })
        : 'None',
    };
    mockPuppies.push(puppy);
  }

  return mockPuppies;
};

export default generateMockPuppies;
