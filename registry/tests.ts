interface IDataInput {
  name: string;
}

interface IDataResponse {
  name: string;
  email: string;
  password: string;
}

class myclass {
  someFucntion(data: IDataInput): IDataResponse {
    let someotherdata = {
      name: data.name,
      email: "myemail@gmail.com",
      password: "password",
      extra: "extra"
    };

    return someotherdata;
  }
}

let myobj = new myclass();

console.log(myobj.someFucntion({ name: "lowra" }));
