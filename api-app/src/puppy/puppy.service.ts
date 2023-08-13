import { Injectable, NotFoundException } from '@nestjs/common';
import { Puppy } from './puppy.interface';

@Injectable()
export class PuppyService {
  public puppies: Puppy[] = [];

  getAllPuppies(search: string): Puppy[] {
    let filteredPuppies = this.puppies;

    if (search) {
      const searchKeyword = search.toLowerCase();
      filteredPuppies = this.puppies.filter(
        (puppy) =>
          puppy.name.toLowerCase().includes(searchKeyword) ||
          puppy.breed.toLowerCase().includes(searchKeyword) ||
          puppy.description.toLowerCase().includes(searchKeyword),
      );
    }

    return filteredPuppies;
  }

  getPuppyById(id: number): Puppy {
    const puppy = this.puppies.find((puppy) => Number(puppy.id) === Number(id));
    if (!puppy) {
      throw new NotFoundException('Puppy not found');
    }
    return puppy;
  }
}
