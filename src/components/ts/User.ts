import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { ChildUser } from './ChildUser';

class User {
  firstName: string = "";
  lastName: string = "";
  child: ChildUser = new ChildUser();
  childAges:Array<number> = [];
  middleName: string = "";

    constructor(midName:string)
    {
        this.middleName = "";
        if(midName)
        this.middleName = midName;
    }

  getFullName() {
      console.log(this.child.firstName);
      console.log("child age.. " + this.childAges[2]);
    return this.firstName +  ' ' + this.lastName + " ," + this.middleName;
  }
}

const user = {
  firstName: 'John',
  lastName: 'Doe',
  childAges: [2,3,4,2],
  child:{
      firstName: "John jr",
      lastName :"Doe Jr"
  }

}
const user2 = plainToClass(User, user);
const _user = new User('Monkey Boy');
const user3 = plainToClassFromExist(_user, user);
// user2 is an instance of User
console.log(user2.getFullName());
// John Doe
console.log(user3.getFullName());

export {user2, user3};