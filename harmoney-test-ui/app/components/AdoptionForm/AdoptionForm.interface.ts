export interface AdoptionFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export class InitializedAdoptionForm implements AdoptionFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
  }
}
