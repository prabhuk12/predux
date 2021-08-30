import { plainToClass } from 'class-transformer';

export class ChildUser {
  firstName: string = "";
  lastName: string = "";

  public getChildName() {
    return this.firstName +  ' ' + this.lastName;
  }
}
