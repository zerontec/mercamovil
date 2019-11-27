
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PayService {

  constructor( private db: AngularFireDatabase) { }


create(pay) {

  return this.db.list('/pay').push(pay);


}

getAll() {

  return this.db.list('/pay', {
    query: {
      orderByChild: 'id'
    }
  });
}

getPayByUser(userId: string) {
  return this.db.list('/pay', {
    query: {
      orderByChild: 'user/userId',
      equalTo: userId
    }
  });
}


getById(id:string){

  return this.db.object('/pay/' + id);
}


updateById(id, pay) {

  return this.db.object('/pay/' + id).update(pay);
}

deleteById(id) {

  return this.db.object('/pay/' + id).remove();
}




}
