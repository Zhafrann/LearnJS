const user = {   //object terdiri dari value dan property (name, age, address)
    nama: "Kevin",
    age: 17,
    address: {
        city: 'Sleman',
        regency: 'Sleman'
    },
    friend: ['Sasa', 'Sisi', 'Sese']
}
console.log(user.age);
console.log(user.address.city);


delete user.age