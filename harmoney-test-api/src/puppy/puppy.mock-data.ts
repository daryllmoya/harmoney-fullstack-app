import { faker } from '@faker-js/faker';
import { Puppy } from './puppy.interface';

const generateMockPuppies = (count: number) => {
  const mockPuppies: Puppy[] = [];

  for (let i = 0; i < count; i++) {
    const puppy: Puppy = {
      id: i + 1,
      name: faker.person.firstName(),
      age: faker.number.int({ min: 1, max: 3 }),
      breed: faker.animal.dog(),
      description: faker.lorem.sentence(),
      image: `https://picsum.photos/1200?random=${i}`,
      gender: faker.person.sexType(),
      personalityTraits: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
      ],
      vaccinationRecords: [
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      ],
      isSpayedOrNeutered: faker.datatype.boolean(),
      specialNeeds: faker.datatype.boolean() ? faker.lorem.sentence() : 'None',
    };
    mockPuppies.push(puppy);
  }

  return mockPuppies;
};

export default generateMockPuppies;
