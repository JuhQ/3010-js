// prompt always returns string
const promptResult = prompt("How many candidates?")
// type cast string to number by using javascript parseInt function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
const amountOfCandidates = parseInt(promptResult)

const candidates = []

for (let i = 1; i <= amountOfCandidates; i++) {
  const name = prompt(`Name for candidate ${i}`)

  candidates.push({
    name,
    votes: 0
  })
}

const voterCountString = prompt("How many voters?")
// type cast string to number by using javascript Number function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const voterCount = Number(voterCountString)

for (let i = 1; i <= voterCount; i++) {
  const name = prompt("Enter candidate name")

  // if name is defined, look for the candidates
  if (name) {
    // loop as many times as candidates exist
    for (let j = 0; j < candidates.length; j++) {
      // standardise data: "Juha" becomes "juha"
      // Remember that "Juha" !== "juha", but "juha" === "juha"
      if (candidates[j].name.toLowerCase() === name.toLowerCase()) {
        // if found, increase votes value by one in the j-index
        candidates[j].votes++
      }
    }
  }
}

// in-place mutation, changes the original array
// sort array by the votes
candidates.sort((a, b) =>
    b.votes - a.votes
)

const winner = candidates[0]
console.log(`The winner is ${winner.name} with ${winner.votes}`)
console.log("Results:")

for (const candidate of candidates) {
  console.log(` - ${candidate.name}: ${candidate.votes} votes`)
}

/*
The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes
 */

console.log("candidates", candidates)