// Soal 1 ==========================================================

const newFunction = (firstName,lastName) => {   // arrow function
    return{
      firstName,                                // enhanced
      lastName,
      fullName: ()=>{                           // arrow function
        console.log(`${firstName} ${lastName}`) // literal
        return
      }
    }
  }

//Driver Code 
newFunction("William", "Imoh").fullName()


// Soal 2 ==========================================================

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName,lastName,destination,occupation,spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation,spell)


// Soal 3 ==========================================================

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [...west, ...east]

//Driver Code
console.log(combined)

