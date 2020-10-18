// ------------------ async function tp get API Data ------------------
async function getAPIData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// ------------------ senator arrays and filters ------------------
let allSenators = []
let simpleSenators = []
let republicans = []
let democrats = []
let utah = []
let utahMapped = []
let ageSort = []

// ------------------ get API data from json files we have ------------------
const theData = getAPIData("senators.json").then(data => {
  allSenators = data.results[0].members
  simpleSenators = senatorMap(allSenators)
  republicans = filterSenators(simpleSenators, "R")
  democrats = filterSenators(simpleSenators, "D")
  utah = findUtah(simpleSenators, "UT")
  utahMapped = senatorMap(utah)
})

// ------------------ filter senators in our json ------------------
function filterSenators(simpleList, partyAffiliation) {
  return simpleList.filter(senator => senator.party === partyAffiliation)
}

// ------------------ filter by state ------------------
function findUtah(allSenators, state) {
  return allSenators.filter(senator => senator.state === state)
}

// ------------------ senators mapping ------------------
function senatorMap(allOfThem) {
  let results = allOfThem.map(senator => {
    return {
      id: senator.id,
      name: `${senator.first_name} ${senator.last_name}`,
      party: senator.party,
      age: `${calculate_age(new Date(senator.date_of_birth))}`,
      state: senator.state,
      office: senator.office,
      phone: senator.phone,
      gender: senator.gender,
      total_votes: senator.total_votes,
      twitter: senator.twitter_account,
      missed_votes_pct: senator.missed_votes_pct
    }
  })
  return results
}

// ------------------ reduce method ------------------
const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const testReduce = testArray.reduce((accumlator, currentValue) => {
  return accumlator + currentValue
}, 0)

// ------------------ total votes ------------------
function totalVotes(senatorList) {
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.total_votes
  }, 0)
  return results
}

// ------------------ total missed votes ------------------
function totalVotesMissed(senatorList) {
  let len = senatorList.length
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.missed_votes_pct
  }, 0)
  return (results / len).toFixed(2)
}

// ------------------ oldest senator ------------------
function oldestSenator(senatorList) {
  return senatorList.reduce((oldest, senator) => {
    return (oldest.age || 0) > senator.age ? oldest : senator
  }, {})
}

// ------------------ calc age ------------------
function calculate_age(dob) {
  let diff_ms = Date.now() - dob.getTime()
  let age_dt = new Date(diff_ms)
  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

// ------------------ sort by age ------------------
function sortSenatorsByAge(senatorList) {
  return senatorList.sort(function(a, b) {
    return a.age - b.age
  })
}

// ------------------ select element ------------------
const selectElement = document.querySelector(".senator")
function deleteNodes() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

// ------------------ populate dom ------------------

// populating the dom into our main containter
const container = document.querySelector(".card-section-container")

// populate dom function
function populateDom(senator_array) {
  senator_array.forEach(senator => {
      
    // create the elements
    const card = document.createElement("div")
    const cardImage = document.createElement("div")
    const figure = document.createElement("figure")
    const figureImage = document.createElement("img")
    
    // set attributes
    card.setAttribute("class", "card")
    cardImage.setAttribute("class", "card-image")
    figure.setAttribute("class", "image ")
      
    // fill with picture
    figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
    // alt if there is no picture for them
    figureImage.alt = "Placeholder image"
      
    // resolves missing image
    figureImage.addEventListener("error", event => {
      let noImage = event.target
      // replacement for alt placeholder image
      noImage.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Senator_Doug_Jones_official_photo.jpg/784px-Senator_Doug_Jones_official_photo.jpg"
    })

    // append to add to the html page
    figure.appendChild(figureImage)
    cardImage.appendChild(figure)
    card.appendChild(cardImage)
    card.appendChild(cardContent(senator))
    container.appendChild(card)
  })
}

// ------------------ fill the card with content ------------------
function cardContent(senator) {
    // create the elements
    const cardContent = document.createElement("div")
    const media = document.createElement("div")
    const housePicDiv = document.createElement("div")
    const twitterPicDiv = document.createElement("div")
    const nameDiv = document.createElement("div")
    const divPart1 = document.createElement("div")
    const divPartName = document.createElement("div")
    const divPart2 = document.createElement("div")
    const figure = document.createElement("figure")
    const img = document.createElement("img")

    // set attributes
    cardContent.setAttribute("class", "cardContent")
    housePicDiv.setAttribute("class", "housePicDiv")
    twitterPicDiv.setAttribute("class", "twitterPicDiv")
    nameDiv.setAttribute("class", "nameDiv")
    divPart1.setAttribute("class", "divPart1")
    divPartName.setAttribute("class", "divPartName")
    divPart2.setAttribute("class", "divPart2")
    
    // pics from files inserted into proper place
    img.src = `./images/independent.png`
    img.alt = "Placeholder image"
    
    // pics from files inserted into proper place for republicans & democrats
    if (senator.party === "R") {
    img.src = `./images/republicans.png`
    } else if (senator.party === "D") {
    img.src = `./images/democrats.png`
    }
    
    // create the elements
    const mediaContent = document.createElement("div")
    const titleP = document.createElement("p")
    const subTitleP = document.createElement("p")
    const tweet = document.createElement("img")
    
    // set attributes
    titleP.textContent = `${senator.name}`
    subTitleP.textContent = `STATE: ${senator.state}`
    
    const senatorNameDiv = document.createElement("div")
    const senatorStateDiv = document.createElement("div")
    
    tweet.src = `./images/twitter.png`
    const link = document.createTextNode("View Twitter")
    
    // twitter on click go to the person's twitter page
    tweet.onclick = function() {
    window.location.href = `http://twitter.com/${senator.twitter}`
    }
    
    // create the elements
    const contentDiv = document.createElement("div")
    const officeDiv = document.createElement("div")
    const phoneDiv = document.createElement("div")
    const ageDiv = document.createElement("div")
    const contentBreak = document.createElement("br")
    const ageP = document.createElement("p")
    
    // set attributes
    contentDiv.setAttribute("class", "content")
    officeDiv.setAttribute("class", "officeDiv")
    phoneDiv.setAttribute("class", "phoneDiv")
    ageDiv.setAttribute("class", "ageDiv")
    officeDiv.textContent = `OFFICE: ${senator.office}`
    phoneDiv.textContent = `PHONE: ${senator.phone}`
    ageP.textContent = `AGE: ${senator.age}`
    
    senatorStateDiv.setAttribute("class", "senatorStateDiv")

    // append to add to the html page
    senatorNameDiv.appendChild(titleP)
    senatorStateDiv.appendChild(subTitleP)
    mediaContent.appendChild(tweet)
    tweet.appendChild(link)

    // on click the destination to the senator's twitter
    tweet.href = `http://twitter.com/${senator.twitter}`
    
    // append to add to the html page
    housePicDiv.appendChild(img)
    media.appendChild(housePicDiv)
    media.appendChild(mediaContent)
    
    ageDiv.appendChild(ageP)
    twitterPicDiv.appendChild(tweet)
    nameDiv.appendChild(titleP)
    
    divPart1.appendChild(housePicDiv)
    divPart1.appendChild(twitterPicDiv)
    
    divPartName.appendChild(nameDiv)
    
    divPart2.appendChild(senatorStateDiv)
    divPart2.appendChild(officeDiv)
    divPart2.appendChild(phoneDiv)
    divPart2.appendChild(ageDiv)
    
    cardContent.appendChild(divPart1)
    cardContent.appendChild(divPartName)
    cardContent.appendChild(divPart2)

    return cardContent
}

// ------------------ fill results field under drop down ------------------
selectElement.addEventListener("change", event => {
  const filterDisplay = document.querySelector(".filter-display")
  const votesDisplay = document.querySelector(".votes-display")

  deleteNodes()
  if (`${event.target.value}` === "") {
    location.reload()
  }
  if (`${event.target.value}` === "Utah Senators") {
    populateDom(utah)
    votesDisplay.textContent = `Total Senate Votes: ${totalVotes(utah)}`
  }
  if (`${event.target.value}` === "Democrats") {
    populateDom(democrats)
    votesDisplay.textContent = `Total Senate Votes: ${totalVotes(democrats)}`
  }
  if (`${event.target.value}` === "Republicans") {
    populateDom(republicans)
    votesDisplay.textContent = `Total Senate Votes: ${totalVotes(republicans)}`
  }
  if (`${event.target.value}` === "All Senators") {
    populateDom(simpleSenators)
    votesDisplay.textContent = `Total Senate Votes: ${totalVotes(simpleSenators)}`
  }
  if (`${event.target.value}` === "All Senators By Age") {
    populateDom(sortSenatorsByAge(simpleSenators))
    votesDisplay.textContent = `TOTAL VOTES: ${totalVotes(simpleSenators)}`
  }
  filterDisplay.textContent = `FILTER: ${event.target.value}`
  filterDisplay.addEventListener("click", () => {
    location.reload()
  })
})
