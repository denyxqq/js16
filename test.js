
class Account {
    constructor({login, email}){ 
    this.login = login;
    this.email = email;
}
getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
}
}

console.log(Account.prototype.getInfo); 

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); 

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); 

// #2
class User {
    constructor({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        console.log(` User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
   });
   
   mango2.getInfo(); 
   
   const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
   });
   
   poly2.getInfo(); 

//    #3
class Storage {
    constructor(items){
        this.items = items;
    }
   
    getItems() {
            return(this.items);
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
         const place = this.items.indexOf(item);
         this.items.splice(place, 1)
    }
}
const storage = new Storage([
    "монітор",
    "мишка",
    "клавіатура",
    "геймпад",
]);
   
   const items = storage.getItems();
   console.log(items);
   storage.addItem("коврик");
   console.log(storage.items);
   storage.removeItem("геймпад");
   console.log(storage.items); 
//    #4