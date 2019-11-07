// literal notation
// var dog1 = {
//   name: "Falcor",
//   colors: ["black"],
//   age: 4,
// };
//
// var dog2 = {
//   name: "Nola",
//   colors: ["black", "white"],
//   age: 6,
// };
//
// var dog3 = {
//   name: "Patsy",
//   colors: ["brown"],
//   age: 7,
// };
// function Dog (name, colors, age) {
//   this.name = name;
//   this.colors = colors;
//   this.age = age;
// }
// // constructors
// $(document).ready(function(){
//   $(".dogNameClass").submit(function(event){
//     event.preventDefault;
//     var name = $("input#dogNameId").val();
//     console.log(name);
//   })
// });
// instance of constructors
// myPup = new Dog ("Bruce", ["black"], 4)
// console.log(myPup);
//
// hisPup = new Dog ("Gil",["grey"], 5)
// console.log(hisPup);
// console.log(Dog);

//  ^REFERENCE JS

// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber, birthday, phoneNumber, email, street, unitNumber, city, state, ) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.phoneNumber = phoneNumber;
  this.email = email;
// Address
  this.street = street;
  this.unitNumber = unitNumber;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
  // Car
  this.carYear = carYear;
  this.carMake = carMake;
  this.carModel = carModel;
  this.carPacakge = carPackage;

}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.fullNameYo = function () {
  return this.firstName + " YO " + this.lastName;
}

Contact.prototype.askForMoney = function () {
  return  "Hey, my name is " + this.firstName + " " + this.lastName + " and I need some money for this thing I got to get! / If you got it then hit me up at " + this.phoneNumber + "!";
};

Contact.prototype.fullAddress = function () {
  return this.street + this.unitNumber + " <br> " + this.city + ", " + " " + this.state + " <br> " + this.zipCode;
};
