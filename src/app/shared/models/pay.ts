

export class IPay {
     $key?: string;
     datePlaced: number;
    bank: string;
    idc: string;
    idu: string;
    ndr: string;
    price: number;
    items: any[];

    user: {
      username: string,
      userId: string,
    };




    constructor(userId, userName,
       public datos: any,
      ) {
 
      this.datePlaced = new Date().getTime();

      this.user = {
        userId: userId,
        username: userName,
      };

  }

}
