/**
 *
 */
export class User {
  private userName: string;

  private userEmail: string;

  private userAddress: string;

  private salary: number;

  gender: string = '';

  constructor(
    userName: string,
    userEmail: string,
    userAddress: string,
    salary = 0
  ) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userAddress = userAddress;
    this.salary = salary;
  }

  setSalary(sal: number) {
    this.salary = sal;
  }
}
