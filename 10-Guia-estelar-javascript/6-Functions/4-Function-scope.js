// Function scope

let subject = "create video"

function createThink() {
  subject = "study"
  return subject
}

console.log(subject)
console.log(createThink(subject))