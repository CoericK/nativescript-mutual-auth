import { Observable } from 'tns-core-modules/data/observable';
import { MutualAuth } from 'nativescript-mutual-auth';

export class HelloWorldModel extends Observable {
  public message: string;
  private mutualAuth: MutualAuth;

  constructor() {
    super();

    this.mutualAuth = new MutualAuth();
    this.message = this.mutualAuth.message;
  }
}
