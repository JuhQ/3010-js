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
      if(candidates[j].name === name) {
        candidates[j].votes++
      }
    }
  }
}

console.log("candidates", candidates)