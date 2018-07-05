// Warmup exercise!

// Since we will be working with objects a lot today let's refresh our memory!

// x1.) Make a js file
// x2.) Declare a variable animal and assign it an object
// x3.) Think of an animal
// x4.) Make a model of this animal by assigning the object some keys and values
// x5.) console.log your animal
// x6.) Modify your animal by *reassigning* a key on your animal 
// x7.) console.log your animal again
// 8.) Make some behaviour for your animal by making one of the properties a function. 
// 9.) Now that your animal has a *method*, *call* this method. (edited)

let animal= {
    type: "dog",
    legs : 4,
    paws : 4,
    tail  : 1,
    coat  : "black",
    milkTeeth : true ,
    fur: true,
    age: ' 1 year ',
    name : "oscar",
    sound : "barks"

}
console.log(animal)
animal.age = '5 years';
console.log (animal)
animal.mood = function(person) {
    console.log (`Oscar shows he is happy when he ${this.sound} at ${person}`);
}
animal.mood()