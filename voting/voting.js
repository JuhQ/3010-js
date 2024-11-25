const promptResult = prompt("How many candidates?")
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
const voterCount = Number(voterCountString)

for (let i = 1; i <= voterCount; i++) {
  const name = prompt("Enter candidate name")

  if (name) {
    for (let j = 0; j < candidates.length; j++) {
      if(candidates[j].name.toLowerCase() === name.toLowerCase()) {
        candidates[j].votes++
      }
    }
  }
}

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