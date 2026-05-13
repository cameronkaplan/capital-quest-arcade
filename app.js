const STORAGE_KEY = "capitalQuestArcade.v1";
const REGION_OVERRIDE_KEY = "capitalQuestArcade.regions.v1";
const LEGACY_REGION_SIGNATURE_OK_NORTHEAST = "west:WA,WY,CA,HI,MT,NV,UT,AK,ID,OR,NM,AZ,CO|midwest:OH,IN,IL,MI,WI,MO,IA,MN,KS,NE,SD,ND|southeast:GA,FL,SC,LA,TN,WV,NC,MS,VA,KY,AR,AL,TX|northeast:CT,DE,ME,MD,MA,NH,NJ,NY,OK,PA,RI,VT";

const STATE_DATA = [
  { abbr: "AL", name: "Alabama", capital: "Montgomery", aliases: [], capitalAliases: [], mnemonic: { text: "A source-backed memory image uses Al on a mountain of gum to remember Montgomery.", source: "How to Memorize state capitals", type: "source" } },
  { abbr: "AK", name: "Alaska", capital: "Juneau", aliases: [], capitalAliases: [], mnemonic: { text: "Juneau the capital of Alaska? Think: do you know Juneau?", source: "Parent prompt plus common Juneau wordplay", type: "source" } },
  { abbr: "AZ", name: "Arizona", capital: "Phoenix", aliases: [], capitalAliases: [], mnemonic: { text: "A phoenix rises from the hot Arizona desert.", source: "Custom fallback", type: "custom" } },
  { abbr: "AR", name: "Arkansas", capital: "Little Rock", aliases: [], capitalAliases: [], mnemonic: { text: "Arkansas keeps a Little Rock in its pocket.", source: "Custom fallback", type: "custom" } },
  { abbr: "CA", name: "California", capital: "Sacramento", aliases: [], capitalAliases: [], mnemonic: { text: "California's capital mission lands in Sacramento, not the famous coastal cities.", source: "Custom fallback", type: "custom" } },
  { abbr: "CO", name: "Colorado", capital: "Denver", aliases: [], capitalAliases: [], mnemonic: { text: "Denver is the mountain-base capital for Colorado.", source: "Custom fallback", type: "custom" } },
  { abbr: "CT", name: "Connecticut", capital: "Hartford", aliases: ["Conn"], capitalAliases: [], mnemonic: { text: "Connecticut has a heart for Hartford.", source: "Custom fallback", type: "custom" } },
  { abbr: "DE", name: "Delaware", capital: "Dover", aliases: [], capitalAliases: [], mnemonic: { text: "Delaware drives over to Dover.", source: "Custom fallback", type: "custom" } },
  { abbr: "FL", name: "Florida", capital: "Tallahassee", aliases: [], capitalAliases: [], mnemonic: { text: "Florida is tall and sunny; Tallahassee starts tall too.", source: "Custom fallback", type: "custom" } },
  { abbr: "GA", name: "Georgia", capital: "Atlanta", aliases: [], capitalAliases: [], mnemonic: { text: "Georgia's big city Atlanta is also the capital.", source: "Custom fallback", type: "custom" } },
  { abbr: "HI", name: "Hawaii", capital: "Honolulu", aliases: [], capitalAliases: [], mnemonic: { text: "Hawaii says hello with Honolulu.", source: "Custom fallback", type: "custom" } },
  { abbr: "ID", name: "Idaho", capital: "Boise", aliases: [], capitalAliases: [], mnemonic: { text: "Idaho boys say Boise.", source: "Custom fallback", type: "custom" } },
  { abbr: "IL", name: "Illinois", capital: "Springfield", aliases: [], capitalAliases: ["Spring Field"], mnemonic: { text: "Illinois springs into Springfield.", source: "Custom fallback", type: "custom" } },
  { abbr: "IN", name: "Indiana", capital: "Indianapolis", aliases: [], capitalAliases: ["Indy"], mnemonic: { text: "Indiana hides inside Indianapolis.", source: "Custom fallback", type: "custom" } },
  { abbr: "IA", name: "Iowa", capital: "Des Moines", aliases: [], capitalAliases: ["Desmoines"], mnemonic: { text: "Iowa makes its capital sound fancy: Des Moines.", source: "Custom fallback", type: "custom" } },
  { abbr: "KS", name: "Kansas", capital: "Topeka", aliases: [], capitalAliases: [], mnemonic: { text: "Kansas takes a peek-a at Topeka.", source: "Custom fallback", type: "custom" } },
  { abbr: "KY", name: "Kentucky", capital: "Frankfort", aliases: [], capitalAliases: [], mnemonic: { text: "Kentucky's capital is Frankfort, not Louisville.", source: "Custom fallback", type: "custom" } },
  { abbr: "LA", name: "Louisiana", capital: "Baton Rouge", aliases: [], capitalAliases: [], mnemonic: { text: "Louisiana passes a baton in Baton Rouge.", source: "Custom fallback", type: "custom" } },
  { abbr: "ME", name: "Maine", capital: "Augusta", aliases: [], capitalAliases: [], mnemonic: { text: "Maine is way up north; Augusta sounds like an August vacation there.", source: "Custom fallback", type: "custom" } },
  { abbr: "MD", name: "Maryland", capital: "Annapolis", aliases: [], capitalAliases: [], mnemonic: { text: "Maryland's capital Annapolis sounds like a naval map stop.", source: "Custom fallback", type: "custom" } },
  { abbr: "MA", name: "Massachusetts", capital: "Boston", aliases: ["Mass"], capitalAliases: [], mnemonic: { text: "Boston is the big Massachusetts clue.", source: "Custom fallback", type: "custom" } },
  { abbr: "MI", name: "Michigan", capital: "Lansing", aliases: [], capitalAliases: [], mnemonic: { text: "Michigan lands in Lansing.", source: "Custom fallback", type: "custom" } },
  { abbr: "MN", name: "Minnesota", capital: "Saint Paul", aliases: [], capitalAliases: ["St Paul", "St. Paul", "Saint paul"], mnemonic: { text: "Minnesota has twin city energy; the capital is Saint Paul.", source: "Custom fallback", type: "custom" } },
  { abbr: "MS", name: "Mississippi", capital: "Jackson", aliases: [], capitalAliases: [], mnemonic: { text: "Mississippi moonwalks with Jackson.", source: "Custom fallback", type: "custom" } },
  { abbr: "MO", name: "Missouri", capital: "Jefferson City", aliases: [], capitalAliases: ["Jefferson"], mnemonic: { text: "Missouri keeps Jefferson City as the capital, not St. Louis.", source: "Custom fallback", type: "custom" } },
  { abbr: "MT", name: "Montana", capital: "Helena", aliases: [], capitalAliases: [], mnemonic: { text: "Montana has mountains; Helena is tucked among them.", source: "Custom fallback", type: "custom" } },
  { abbr: "NE", name: "Nebraska", capital: "Lincoln", aliases: [], capitalAliases: [], mnemonic: { text: "Nebraska remembers President Lincoln.", source: "Custom fallback", type: "custom" } },
  { abbr: "NV", name: "Nevada", capital: "Carson City", aliases: [], capitalAliases: ["Carson"], mnemonic: { text: "Nevada takes the car-son to Carson City.", source: "Custom fallback", type: "custom" } },
  { abbr: "NH", name: "New Hampshire", capital: "Concord", aliases: ["N Hampshire"], capitalAliases: [], mnemonic: { text: "New Hampshire agrees in Concord.", source: "Custom fallback", type: "custom" } },
  { abbr: "NJ", name: "New Jersey", capital: "Trenton", aliases: ["N Jersey"], capitalAliases: [], mnemonic: { text: "New Jersey sends a train-ton to Trenton.", source: "Custom fallback", type: "custom" } },
  { abbr: "NM", name: "New Mexico", capital: "Santa Fe", aliases: ["N Mexico"], capitalAliases: [], mnemonic: { text: "New Mexico's capital has a southwest sound: Santa Fe.", source: "Custom fallback", type: "custom" } },
  { abbr: "NY", name: "New York", capital: "Albany", aliases: ["N York"], capitalAliases: [], mnemonic: { text: "New York City is famous, but Albany is the capital.", source: "Custom fallback", type: "custom" } },
  { abbr: "NC", name: "North Carolina", capital: "Raleigh", aliases: ["N Carolina"], capitalAliases: [], mnemonic: { text: "North Carolina rallies at Raleigh.", source: "Custom fallback", type: "custom" } },
  { abbr: "ND", name: "North Dakota", capital: "Bismarck", aliases: ["N Dakota"], capitalAliases: [], mnemonic: { text: "North Dakota parks at Bismarck.", source: "Custom fallback", type: "custom" } },
  { abbr: "OH", name: "Ohio", capital: "Columbus", aliases: [], capitalAliases: [], mnemonic: { text: "Ohio discovers Columbus.", source: "Custom fallback", type: "custom" } },
  { abbr: "OK", name: "Oklahoma", capital: "Oklahoma City", aliases: [], capitalAliases: ["OKC", "Oklahoma"], mnemonic: { text: "Oklahoma keeps it straightforward: Oklahoma City.", source: "Custom fallback", type: "custom" } },
  { abbr: "OR", name: "Oregon", capital: "Salem", aliases: [], capitalAliases: [], mnemonic: { text: "Oregon sails into Salem.", source: "Custom fallback", type: "custom" } },
  { abbr: "PA", name: "Pennsylvania", capital: "Harrisburg", aliases: ["Penn"], capitalAliases: [], mnemonic: { text: "Pennsylvania has Philly and Pittsburgh, but Harrisburg is the capital.", source: "Custom fallback", type: "custom" } },
  { abbr: "RI", name: "Rhode Island", capital: "Providence", aliases: [], capitalAliases: [], mnemonic: { text: "Rhode Island finds Providence.", source: "Custom fallback", type: "custom" } },
  { abbr: "SC", name: "South Carolina", capital: "Columbia", aliases: ["S Carolina"], capitalAliases: [], mnemonic: { text: "South Carolina studies at Columbia.", source: "Custom fallback", type: "custom" } },
  { abbr: "SD", name: "South Dakota", capital: "Pierre", aliases: ["S Dakota"], capitalAliases: [], mnemonic: { text: "South Dakota has a stone-faced Pierre.", source: "Custom fallback", type: "custom" } },
  { abbr: "TN", name: "Tennessee", capital: "Nashville", aliases: [], capitalAliases: [], mnemonic: { text: "Tennessee has music-city energy: Nashville is the capital.", source: "Custom fallback", type: "custom" } },
  { abbr: "TX", name: "Texas", capital: "Austin", aliases: [], capitalAliases: [], mnemonic: { text: "Texas tunes a guitar in Austin.", source: "Custom fallback", type: "custom" } },
  { abbr: "UT", name: "Utah", capital: "Salt Lake City", aliases: [], capitalAliases: ["Salt Lake", "SLC"], mnemonic: { text: "Utah's capital is by the Salt Lake.", source: "Custom fallback", type: "custom" } },
  { abbr: "VT", name: "Vermont", capital: "Montpelier", aliases: [], capitalAliases: ["Montpelier"], mnemonic: { text: "Vermont has the tiny capital Montpelier.", source: "Custom fallback", type: "custom" } },
  { abbr: "VA", name: "Virginia", capital: "Richmond", aliases: [], capitalAliases: [], mnemonic: { text: "Virginia is rich with history; Richmond is the capital.", source: "Custom fallback", type: "custom" } },
  { abbr: "WA", name: "Washington", capital: "Olympia", aliases: [], capitalAliases: [], mnemonic: { text: "Washington wins Olympic points in Olympia.", source: "Custom fallback", type: "custom" } },
  { abbr: "WV", name: "West Virginia", capital: "Charleston", aliases: ["W Virginia"], capitalAliases: [], mnemonic: { text: "West Virginia has a charming Charleston.", source: "Custom fallback", type: "custom" } },
  { abbr: "WI", name: "Wisconsin", capital: "Madison", aliases: [], capitalAliases: [], mnemonic: { text: "Wisconsin is mad about Madison.", source: "Custom fallback", type: "custom" } },
  { abbr: "WY", name: "Wyoming", capital: "Cheyenne", aliases: [], capitalAliases: [], mnemonic: { text: "Wyoming says hi to Cheyenne.", source: "Custom fallback", type: "custom" } }
];

const CAPITAL_HELP = {
  AL: { mnemonic: "Bam! Al pops Monty's gum to remember Montgomery.", fact: "Montgomery is a major Civil Rights Trail city; Rosa Parks' arrest there helped spark the bus boycott." },
  AK: { mnemonic: "Juneau sounds like 'd'you know': d'you know Alaska's capital?", fact: "Juneau is the largest state capital by land area, bigger than Rhode Island." },
  AZ: { mnemonic: "A phoenix rises from Arizona's blazing sun.", fact: "Phoenix is the most populous state capital and is famous for nonstop sunshine." },
  AR: { mnemonic: "The ark saw a Little Rock before it bumped the shore.", fact: "Little Rock became central to school desegregation during the Little Rock Nine crisis." },
  CA: { mnemonic: "California surfers keep sacred mementos: Sac-ra-men-to.", fact: "Sacramento raised parts of the city after severe 1800s flooding, leaving old underground spaces below." },
  CO: { mnemonic: "Cold Colorado needs dense fur: Denver.", fact: "Denver is the Mile High City at exactly 5,280 feet above sea level." },
  CT: { mnemonic: "Connecticut cuts out four hearts: Hartford.", fact: "Hartford is home to very old U.S. institutions, including a long-running newspaper and public art museum." },
  DE: { mnemonic: "Della wears a doe-fur coat in Delaware: Dover.", fact: "Dover is home to the Monster Mile speedway and hosts major racing events." },
  FL: { mnemonic: "Florida has a tall house by the sea: Tallahassee.", fact: "Tallahassee sits high for Florida, and once got a rare multi-inch snowfall." },
  GA: { mnemonic: "Georgia sails the Atlantic at sunset: Atlanta.", fact: "Atlanta hosted the 1996 Summer Olympics." },
  HI: { mnemonic: "Hawaii honors Lulu: Honolulu.", fact: "Honolulu has Iolani Palace, the only royal palace in the United States." },
  ID: { mnemonic: "Idaho sounds like 'I'd a hoe'; boys see Boise.", fact: "Boise uses geothermal heat from deep underground to warm buildings and melt snow." },
  IL: { mnemonic: "Illinois has a field of squeaky springs: Springfield.", fact: "Springfield is strongly tied to Abraham Lincoln, who lived there before becoming president." },
  IN: { mnemonic: "Need help in Indiana? Ask an Indiana police officer: Indianapolis.", fact: "Elvis Presley gave his last concert in Indianapolis in 1977." },
  IA: { mnemonic: "I owe her coins: Des Moines, Iowa.", fact: "The Des Moines area has evidence of human activity going back thousands of years." },
  KS: { mnemonic: "Kansas goes to peek-a at Dorothy's house: Topeka.", fact: "Topeka briefly renamed itself Google in 2010, and Google answered with an April Fools logo joke." },
  KY: { mnemonic: "Kentucky Fried Chicken does not serve frankfurters: Frankfort.", fact: "Frankfort has a Daniel Boone burial story with two places claiming the final resting spot." },
  LA: { mnemonic: "Louise and Ana put rouge on a bat: Baton Rouge.", fact: "Baton Rouge saw a Revolutionary War battle outside the original 13 colonies." },
  ME: { mnemonic: "A gust of wind hits the lion's mane: Augusta, Maine.", fact: "Augusta is the easternmost U.S. capital." },
  MD: { mnemonic: "Mary gives Ann a police hat: Annapolis.", fact: "Annapolis briefly served as the U.S. capital when the Treaty of Paris ended the Revolutionary War." },
  MA: { mnemonic: "Massachusetts has a boss with a ton of treats: Boston.", fact: "Boston had the strange 1919 Great Molasses Flood after a huge tank burst." },
  MI: { mnemonic: "A knight's lance sings about Michigan: Lansing.", fact: "Lansing was home to famous figures including Burt Reynolds and Magic Johnson." },
  MN: { mnemonic: "Saint Paul brings mini sodas for Minnesota.", fact: "St. Paul was the birthplace of Peanuts creator Charles M. Schulz." },
  MS: { mnemonic: "Jack's on a raft down the Mississippi: Jackson.", fact: "Jackson's university medical center performed the first human lung transplant." },
  MO: { mnemonic: "Miss Ouri and Mr. Jefferson went to the city: Jefferson City.", fact: "Jefferson City was built specifically to be Missouri's capital." },
  MT: { mnemonic: "Helen wants lemon tea, Anna: Helena, Montana.", fact: "Helena began as a Montana Gold Rush mining camp called Last Chance Gulch." },
  NE: { mnemonic: "Lincoln has knees of brass: Nebraska.", fact: "The first American Arbor Day began in Nebraska, when about a million trees were planted." },
  NV: { mnemonic: "Never did I see so many cars on city streets: Carson City.", fact: "Carson City saw one of the country's largest temperature increases over recent decades." },
  NH: { mnemonic: "Cut the cord on the new ham, sir: Concord.", fact: "Teacher Christa McAuliffe taught in Concord before being selected for the Challenger mission." },
  NJ: { mnemonic: "Trent has on a new jersey: Trenton.", fact: "The Battle of Trenton helped lift American morale during the Revolutionary War." },
  NM: { mnemonic: "Santa fainted in hot New Mexico: Santa Fe.", fact: "Santa Fe is the oldest and highest U.S. state capital." },
  NY: { mnemonic: "All bunnies enjoy springtime in New York: Albany.", fact: "Albany is one of the oldest continuously occupied settlements in the original 13 colonies." },
  NC: { mnemonic: "North Caroline and Anna missed the pep rally: Raleigh.", fact: "Raleigh is nicknamed the Smithsonian of the South for its many museums and historic sites." },
  ND: { mnemonic: "A mark on the North Dakota coat: Bismarck.", fact: "Bismarck was named for German chancellor Otto von Bismarck." },
  OH: { mnemonic: "Oh, hi, Mr. Columbus: Ohio.", fact: "Wendy's started in Columbus in 1969." },
  OK: { mnemonic: "Oak trees in many city yards: Oklahoma City.", fact: "Oklahoma City is remembered for the 1995 bombing and the memorial that honors the victims." },
  OR: { mnemonic: "Sail 'em fast in Oregon: Salem.", fact: "One Flew Over the Cuckoo's Nest was filmed at the Oregon State Hospital in Salem." },
  PA: { mnemonic: "Pennsylvania draws a hairy burger: Harrisburg.", fact: "Harrisburg was an important Underground Railroad stop before the Civil War." },
  RI: { mnemonic: "I rode the island bike but cannot prove I dented it: Providence.", fact: "Providence has an unusually high number of donut shops per person." },
  SC: { mnemonic: "Caroline's column of bees flies south: Columbia.", fact: "Near Columbia, Congaree National Park has synchronous fireflies." },
  SD: { mnemonic: "Take a coat if you go to Dakota, Pierre.", fact: "Pierre is named from French roots but pronounced like 'peer'." },
  TN: { mnemonic: "Tennessee sees a nasty villain: Nashville.", fact: "Nashville's Grand Ole Opry radio show has been running since 1925." },
  TX: { mnemonic: "Texas is so big you can get lost in Austin it.", fact: "Austin has a huge urban bat colony under the Congress Avenue Bridge." },
  UT: { mnemonic: "You talk about salt like city chefs do: Salt Lake City.", fact: "Salt Lake City is famous for Jell-O love and is where KFC was founded." },
  VT: { mnemonic: "Vermont's fur mound might peel your skin: Montpelier.", fact: "Montpelier is the smallest state capital and has no McDonald's inside city limits." },
  VA: { mnemonic: "Virginia's dad was a rich man: Richmond.", fact: "Richmond served as the capital of the Confederacy during the Civil War." },
  WA: { mnemonic: "Washington washes tons at the Olympics: Olympia.", fact: "Olympia was hit by a major Puget Sound earthquake in 1949." },
  WV: { mnemonic: "Virginia headed west dancing the Charleston.", fact: "Charleston had what is often cited as the world's first brick street." },
  WI: { mnemonic: "Wisconsin wants concert tickets: do not be mad, son: Madison.", fact: "Madison made the pink plastic flamingo its official city bird after a university prank." },
  WY: { mnemonic: "Shy Anne is Cheyenne in Wyoming.", fact: "Wyoming gave women voting rights in 1869, before any state did." }
};

const PRAISE_LINES = ["Good job!", "Great!", "Amazing!", "Nice!", "You got it!", "Capital master!", "Boom!"];

const DEFAULT_REGION_PACKS = [
  { id: "west", label: "West", fullLabel: "West Recovery", status: "Class set", states: ["WA", "WY", "CA", "HI", "MT", "NV", "UT", "AK", "ID", "OR", "NM", "AZ", "CO"] },
  { id: "midwest", label: "Midwest", fullLabel: "Midwest Prep", status: "Class set", states: ["OH", "IN", "IL", "MI", "WI", "MO", "IA", "MN", "KS", "NE", "SD", "ND"] },
  { id: "southeast", label: "Southeast", fullLabel: "Southeast Prep", status: "Class set", states: ["GA", "FL", "SC", "LA", "TN", "WV", "NC", "MS", "VA", "KY", "AR", "AL", "TX", "OK"] },
  { id: "northeast", label: "Northeast", fullLabel: "Northeast Preview", status: "Preview", states: ["CT", "DE", "ME", "MD", "MA", "NH", "NJ", "NY", "PA", "RI", "VT"] }
];

const MODES = [
  { id: "boss-round", label: "Play", title: "Boss Round", group: "default", description: "A mixed arcade round with map questions, capitals, typing, Road Trips, and bonus cases.", total: 20 },
  { id: "find-state", label: "Find the State", description: "The whole map appears. Click the state named in the prompt.", total: 20 },
  { id: "capital-beacon", label: "Capital Beacon", description: "A capital appears. Click the state that owns it.", total: 20 },
  { id: "capital-choice", label: "Capital Choice", description: "Pick the capital from four choices.", total: 20 },
  { id: "type-dash", label: "Type Dash", description: "Type states or capitals with forgiving spelling help.", total: 20 },
  { id: "weak-spots", label: "Weak Spots", description: "Practice the states that have been missed or answered slowly.", total: 20 }
];

const BONUS_GAMES = [
  {
    id: "road-trip",
    label: "Road Trip",
    reward: 1,
    stinger: "assets/audio/Interstate Roadtrip.mp3",
    routes: [
      { originAbbr: "CA", destinationAbbr: "WA", avoidAbbrs: ["OR"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from California to Washington without touching Oregon." },
      { originAbbr: "WA", destinationAbbr: "CA", avoidAbbrs: [], checkpointAbbrs: ["OR"], allowedAbbrs: [], prompt: "Drive from Washington to Oregon, then California." },
      { originAbbr: "AZ", destinationAbbr: "CO", avoidAbbrs: [], checkpointAbbrs: ["UT"], allowedAbbrs: [], prompt: "Drive from Arizona to Utah, then Colorado." },
      { originAbbr: "CO", destinationAbbr: "MT", avoidAbbrs: ["WY"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Colorado to Montana without touching Wyoming." },
      { originAbbr: "NV", destinationAbbr: "NM", avoidAbbrs: ["AZ"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Nevada to New Mexico. Avoid Arizona." },
      { originAbbr: "ID", destinationAbbr: "OR", avoidAbbrs: ["MT"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Idaho to Oregon. Montana is road closed." },
      { originAbbr: "AK", destinationAbbr: "HI", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Island-hop from Alaska to Hawaii." },
      { originAbbr: "WY", destinationAbbr: "CO", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Wyoming to Colorado." },
      { originAbbr: "MT", destinationAbbr: "ID", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Montana to Idaho." },
      { originAbbr: "NM", destinationAbbr: "AZ", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from New Mexico to Arizona." },
      { originAbbr: "ND", destinationAbbr: "SD", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from North Dakota to South Dakota." },
      { originAbbr: "MN", destinationAbbr: "MO", avoidAbbrs: [], checkpointAbbrs: ["IA"], allowedAbbrs: [], prompt: "Drive from Minnesota to Iowa, then Missouri." },
      { originAbbr: "OH", destinationAbbr: "IL", avoidAbbrs: [], checkpointAbbrs: ["IN"], allowedAbbrs: [], prompt: "Drive from Ohio to Indiana, then Illinois." },
      { originAbbr: "KS", destinationAbbr: "ND", avoidAbbrs: ["MO"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Kansas to North Dakota. Avoid Missouri." },
      { originAbbr: "WI", destinationAbbr: "NE", avoidAbbrs: ["IL"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Wisconsin to Nebraska. Illinois is road closed." },
      { originAbbr: "MI", destinationAbbr: "KS", avoidAbbrs: ["OH"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Michigan to Kansas. Avoid Ohio." },
      { originAbbr: "MO", destinationAbbr: "WI", avoidAbbrs: ["IL"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Missouri to Wisconsin. Illinois is closed." },
      { originAbbr: "NE", destinationAbbr: "OH", avoidAbbrs: ["MO"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Nebraska to Ohio. Skip Missouri." },
      { originAbbr: "IN", destinationAbbr: "MN", avoidAbbrs: ["MI"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Indiana to Minnesota. No Michigan detour." },
      { originAbbr: "SD", destinationAbbr: "IL", avoidAbbrs: [], checkpointAbbrs: ["IA"], allowedAbbrs: [], prompt: "Drive from South Dakota to Iowa, then Illinois." },
      { originAbbr: "AL", destinationAbbr: "GA", avoidAbbrs: [], checkpointAbbrs: ["MS"], allowedAbbrs: [], prompt: "Drive from Alabama to Mississippi, then Georgia." },
      { originAbbr: "TX", destinationAbbr: "AZ", avoidAbbrs: ["NM"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Texas to Arizona without touching New Mexico." },
      { originAbbr: "FL", destinationAbbr: "VA", avoidAbbrs: ["AL"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Florida to Virginia. Avoid Alabama." },
      { originAbbr: "LA", destinationAbbr: "TN", avoidAbbrs: [], checkpointAbbrs: ["MS"], allowedAbbrs: [], prompt: "Drive from Louisiana to Mississippi, then Tennessee." },
      { originAbbr: "WV", destinationAbbr: "FL", avoidAbbrs: ["TN"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from West Virginia to Florida. Avoid Tennessee." },
      { originAbbr: "OK", destinationAbbr: "AL", avoidAbbrs: ["TX"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Oklahoma to Alabama. Do not dip into Texas." },
      { originAbbr: "KY", destinationAbbr: "SC", avoidAbbrs: ["WV"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Kentucky to South Carolina. West Virginia is a decoy." },
      { originAbbr: "NC", destinationAbbr: "LA", avoidAbbrs: ["FL"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from North Carolina to Louisiana. Florida is closed." },
      { originAbbr: "AR", destinationAbbr: "VA", avoidAbbrs: ["TX"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Arkansas to Virginia. Texas is not on the docket." },
      { originAbbr: "SC", destinationAbbr: "TX", avoidAbbrs: ["FL"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from South Carolina to Texas. Skip Florida." },
      { originAbbr: "NH", destinationAbbr: "VT", avoidAbbrs: [], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from New Hampshire to Vermont." },
      { originAbbr: "ME", destinationAbbr: "RI", avoidAbbrs: [], checkpointAbbrs: ["NH"], allowedAbbrs: [], prompt: "Drive from Maine to New Hampshire, then Rhode Island." },
      { originAbbr: "NY", destinationAbbr: "DE", avoidAbbrs: [], checkpointAbbrs: ["NJ"], allowedAbbrs: [], prompt: "Drive from New York to New Jersey, then Delaware." },
      { originAbbr: "VT", destinationAbbr: "MD", avoidAbbrs: [], checkpointAbbrs: ["NY"], allowedAbbrs: [], prompt: "Drive from Vermont to New York, then Maryland." },
      { originAbbr: "CT", destinationAbbr: "PA", avoidAbbrs: [], checkpointAbbrs: ["NY"], allowedAbbrs: [], prompt: "Drive from Connecticut to New York, then Pennsylvania." },
      { originAbbr: "DE", destinationAbbr: "MA", avoidAbbrs: ["PA"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Delaware to Massachusetts. Pennsylvania is off-limits." },
      { originAbbr: "RI", destinationAbbr: "ME", avoidAbbrs: [], checkpointAbbrs: ["MA"], allowedAbbrs: [], prompt: "Drive from Rhode Island to Massachusetts, then Maine." },
      { originAbbr: "NJ", destinationAbbr: "VT", avoidAbbrs: [], checkpointAbbrs: ["NY"], allowedAbbrs: [], prompt: "Drive from New Jersey to New York, then Vermont." },
      { originAbbr: "PA", destinationAbbr: "CT", avoidAbbrs: [], checkpointAbbrs: ["NY"], allowedAbbrs: [], prompt: "Drive from Pennsylvania to New York, then Connecticut." },
      { originAbbr: "MA", destinationAbbr: "DE", avoidAbbrs: ["RI"], checkpointAbbrs: [], allowedAbbrs: [], prompt: "Drive from Massachusetts to Delaware. Rhode Island is a tiny wrong turn." }
    ]
  },
  {
    id: "weird-neighbor-court",
    label: "Weird Neighbor Court",
    reward: 1,
    stinger: "assets/audio/weird-neighbor-court-stinger.mp3",
    cases: [
      {
        title: "The Coastal Roadblock",
        plaintiffAbbr: "CA",
        defendantAbbr: "OR",
        contextAbbrs: ["CA", "OR", "WA"],
        testimony: "California wants to road-trip north to Washington, but one state keeps blocking the coastline.",
        prompt: "Which neighbor is in the way?"
      },
      {
        title: "The Mixed-Up Sidekick",
        plaintiffAbbr: "AL",
        defendantAbbr: "MS",
        contextAbbrs: ["AL", "MS", "GA"],
        testimony: "Alabama says, \"Everyone mixes us up. I am east of the river-shaped neighbor.\"",
        prompt: "Which neighbor is Alabama complaining about?"
      },
      {
        title: "The Look-Alike Neighbor",
        plaintiffAbbr: "NH",
        defendantAbbr: "VT",
        contextAbbrs: ["NH", "VT", "ME"],
        testimony: "New Hampshire says, \"I touch Maine. My look-alike neighbor sits just to my west.\"",
        prompt: "Which state is New Hampshire's look-alike neighbor?"
      },
      {
        title: "The Lower Twin",
        plaintiffAbbr: "ND",
        defendantAbbr: "SD",
        contextAbbrs: ["ND", "SD"],
        testimony: "North Dakota says, \"I am the top twin. The other twin is directly below me.\"",
        prompt: "Which Dakota is on trial?"
      },
      {
        title: "The Desert Blocker",
        plaintiffAbbr: "TX",
        defendantAbbr: "NM",
        contextAbbrs: ["TX", "NM", "AZ"],
        testimony: "Texas says, \"Your Honor, I am trying to reach Arizona, and this neighbor is standing in the way.\"",
        prompt: "Which state is blocking the trip?"
      },
      {
        title: "The Lower Box Complaint",
        plaintiffAbbr: "WY",
        defendantAbbr: "CO",
        contextAbbrs: ["WY", "CO", "UT"],
        testimony: "Wyoming says, \"The box right below me keeps copying my rectangle routine.\"",
        prompt: "Which state is the lower box?"
      },
      {
        title: "The Four Corners Traffic Jam",
        plaintiffAbbr: "AZ",
        defendantAbbr: "UT",
        contextAbbrs: ["AZ", "UT", "CO", "NM"],
        testimony: "Arizona says, \"At the corner meeting, I need the neighbor directly above me before I can head toward the Rockies.\"",
        prompt: "Which Four Corners neighbor sits above Arizona?"
      },
      {
        title: "The Potato Witness",
        plaintiffAbbr: "MT",
        defendantAbbr: "ID",
        contextAbbrs: ["MT", "ID", "WY"],
        testimony: "Montana says, \"A tall, skinny neighbor is tucked along my western face.\"",
        prompt: "Which state is tucked west of Montana?"
      },
      {
        title: "The Salt Stop",
        plaintiffAbbr: "NV",
        defendantAbbr: "UT",
        contextAbbrs: ["NV", "UT", "CO"],
        testimony: "Nevada says, \"Before I can get to Colorado, I hit one salty neighbor.\"",
        prompt: "Which salty state is between Nevada and Colorado?"
      },
      {
        title: "The Island Flight Mix-Up",
        plaintiffAbbr: "AK",
        defendantAbbr: "HI",
        contextAbbrs: ["AK", "HI", "WA"],
        testimony: "Alaska says, \"The other off-map state is warm, islandy, and definitely not a road trip.\"",
        prompt: "Which off-map island state is the witness?"
      },
      {
        title: "The Upper Twin",
        plaintiffAbbr: "SD",
        defendantAbbr: "ND",
        contextAbbrs: ["ND", "SD"],
        testimony: "South Dakota says, \"I am the bottom twin. The other twin sits directly above me.\"",
        prompt: "Which Dakota is the upper twin?"
      },
      {
        title: "The I-State Pileup",
        plaintiffAbbr: "IL",
        defendantAbbr: "IN",
        contextAbbrs: ["IL", "IN", "IA", "OH"],
        testimony: "Illinois says, \"One I-state neighbor sits between me and Ohio.\"",
        prompt: "Which I-state sits between Illinois and Ohio?"
      },
      {
        title: "The Rectangle Ladder",
        plaintiffAbbr: "NE",
        defendantAbbr: "KS",
        contextAbbrs: ["NE", "KS", "SD"],
        testimony: "Nebraska says, \"The rectangle directly below me keeps blocking the bottom rung.\"",
        prompt: "Which rectangle is directly south of Nebraska?"
      },
      {
        title: "The Mitten Witness",
        plaintiffAbbr: "MI",
        defendantAbbr: "WI",
        contextAbbrs: ["MI", "WI", "IL"],
        testimony: "Michigan says, \"Across the lake, a neighbor gets mixed up in Great Lakes arguments with me.\"",
        prompt: "Which Great Lakes neighbor is across from Michigan?"
      },
      {
        title: "The River Crossing",
        plaintiffAbbr: "MO",
        defendantAbbr: "IA",
        contextAbbrs: ["MO", "IA", "MN"],
        testimony: "Missouri says, \"To head north toward Minnesota, I first cross into my neighbor above me.\"",
        prompt: "Which state is north of Missouri?"
      },
      {
        title: "The Not-St-Louis Objection",
        plaintiffAbbr: "MO",
        defendantAbbr: "OH",
        contextAbbrs: ["MO", "OH", "IL", "IN"],
        testimony: "Missouri says, \"I am tired of being mixed into another state's oh-hi memory trick.\"",
        prompt: "Which state owns the oh-hi Columbus clue?"
      },
      {
        title: "The Corn Belt Shortcut",
        plaintiffAbbr: "KS",
        defendantAbbr: "NE",
        contextAbbrs: ["KS", "NE", "SD"],
        testimony: "Kansas says, \"My route to the Dakota stack climbs through the corn rectangle above me.\"",
        prompt: "Which state is the corn rectangle above Kansas?"
      },
      {
        title: "The Great Lakes Lost Case",
        plaintiffAbbr: "MI",
        defendantAbbr: "WI",
        contextAbbrs: ["MI", "WI", "MN", "IL"],
        testimony: "Michigan says, \"One Great Lakes neighbor sits west of Lake Michigan and keeps waving from the other side.\"",
        prompt: "Which state sits west of Lake Michigan?"
      },
      {
        title: "The MAG Line",
        plaintiffAbbr: "AL",
        defendantAbbr: "GA",
        contextAbbrs: ["MS", "AL", "GA"],
        testimony: "Alabama says, \"In the M-A-G line, one neighbor comes after me going west to east.\"",
        prompt: "Which state comes after Alabama in M-A-G?"
      },
      {
        title: "The Panhandle Problem",
        plaintiffAbbr: "FL",
        defendantAbbr: "GA",
        contextAbbrs: ["FL", "GA", "AL"],
        testimony: "Florida says, \"My northern neighbor sits above me before the peninsula gets skinny.\"",
        prompt: "Which state is north of Florida?"
      },
      {
        title: "The Chef MIMAL Complaint",
        plaintiffAbbr: "AR",
        defendantAbbr: "LA",
        contextAbbrs: ["AR", "LA", "MS"],
        testimony: "Arkansas says, \"The boot at the bottom of the Chef MIMAL stack keeps kicking my map.\"",
        prompt: "Which state is the boot under Arkansas?"
      },
      {
        title: "The New Transfer",
        plaintiffAbbr: "OK",
        defendantAbbr: "AR",
        contextAbbrs: ["OK", "AR", "TX"],
        testimony: "Oklahoma says, \"I just moved into Southeast practice, and the neighbor to my east is acting surprised.\"",
        prompt: "Which state is east of Oklahoma?"
      },
      {
        title: "The Carolina Mirror",
        plaintiffAbbr: "NC",
        defendantAbbr: "SC",
        contextAbbrs: ["NC", "SC", "VA"],
        testimony: "North Carolina says, \"My mirror-name neighbor sits directly below me.\"",
        prompt: "Which Carolina is below?"
      },
      {
        title: "The Mountain Corner",
        plaintiffAbbr: "WV",
        defendantAbbr: "KY",
        contextAbbrs: ["WV", "KY", "VA"],
        testimony: "West Virginia says, \"One southern neighbor crowds my western edge before Virginia shows up.\"",
        prompt: "Which state crowds West Virginia from the west?"
      },
      {
        title: "The Tennessee Top Rail",
        plaintiffAbbr: "MS",
        defendantAbbr: "TN",
        contextAbbrs: ["MS", "AL", "TN"],
        testimony: "Mississippi says, \"A long state stretches across the top of me and my eastern neighbor.\"",
        prompt: "Which long state is above Mississippi and Alabama?"
      },
      {
        title: "The Tiny State Stack",
        plaintiffAbbr: "RI",
        defendantAbbr: "MA",
        contextAbbrs: ["RI", "MA", "CT"],
        testimony: "Rhode Island says, \"I am tiny, but one larger neighbor wraps around my north and east side.\"",
        prompt: "Which state wraps around Rhode Island?"
      },
      {
        title: "The Maine Touch Rule",
        plaintiffAbbr: "VT",
        defendantAbbr: "NH",
        contextAbbrs: ["VT", "NH", "ME"],
        testimony: "Vermont says, \"My look-alike neighbor is the one that touches Maine.\"",
        prompt: "Which look-alike touches Maine?"
      },
      {
        title: "The Jersey Bridge",
        plaintiffAbbr: "NY",
        defendantAbbr: "NJ",
        contextAbbrs: ["NY", "NJ", "DE"],
        testimony: "New York says, \"To head toward Delaware, I pass through the neighbor with the jersey clue.\"",
        prompt: "Which state bridges New York toward Delaware?"
      },
      {
        title: "The Pennsylvania Detour",
        plaintiffAbbr: "NJ",
        defendantAbbr: "PA",
        contextAbbrs: ["NJ", "PA", "NY"],
        testimony: "New Jersey says, \"If I go west, I immediately run into a big neighbor.\"",
        prompt: "Which state is west of New Jersey?"
      },
      {
        title: "The Chesapeake Shortcut",
        plaintiffAbbr: "MD",
        defendantAbbr: "DE",
        contextAbbrs: ["MD", "DE", "PA"],
        testimony: "Maryland says, \"A small coastal neighbor sits right on my eastern edge.\"",
        prompt: "Which small state is east of Maryland?"
      },
      {
        title: "The New England Ladder",
        plaintiffAbbr: "CT",
        defendantAbbr: "MA",
        contextAbbrs: ["CT", "MA", "NH"],
        testimony: "Connecticut says, \"Before the ladder reaches New Hampshire, it climbs through the state above me.\"",
        prompt: "Which state is above Connecticut?"
      },
      {
        title: "The West Look-Alike",
        plaintiffAbbr: "NH",
        defendantAbbr: "VT",
        contextAbbrs: ["NH", "VT", "NY"],
        testimony: "New Hampshire says, \"My look-alike neighbor sits to my west, which means left on the map.\"",
        prompt: "Which look-alike is west?"
      }
    ]
  },
  {
    id: "square-off",
    label: "Square-Off",
    reward: 1,
    cases: [
      { targetAbbr: "CO", contextAbbrs: ["CO", "WY", "UT", "KS"], prompt: "Look at the real shapes. Which state is directly south of Wyoming?", clue: "Use the map: it is the lower box in the Wyoming/Colorado stack.", choices: ["CO", "WY", "KS", "UT"], correction: "Colorado is directly south of Wyoming." },
      { targetAbbr: "WY", contextAbbrs: ["WY", "CO", "MT", "NE"], prompt: "Look at the real shapes. Which state is directly north of Colorado?", clue: "Use the map: it is the upper box in the Colorado/Wyoming stack.", choices: ["WY", "CO", "MT", "NE"], correction: "Wyoming is directly north of Colorado." },
      { targetAbbr: "KS", contextAbbrs: ["KS", "OK", "NE", "MO"], prompt: "Oklahoma is the pan. Which flat state sits directly above it as the can?", clue: "Use the map first: find Oklahoma's pan shape, then choose the state touching its top edge.", choices: ["KS", "NE", "OK", "MO"], correction: "Kansas is the can because it sits directly above Oklahoma's pan shape." },
      { targetAbbr: "ND", contextAbbrs: ["ND", "SD", "MN", "MT"], prompt: "The Dakota twins are stacked. Which one is on top?", clue: "Use the map: north means the upper twin.", choices: ["ND", "SD", "MN", "MT"], correction: "North Dakota is the top Dakota twin." },
      { targetAbbr: "MS", contextAbbrs: ["MS", "AL", "LA", "TN"], prompt: "Alabama and Mississippi stand side-by-side. Which one is farther west?", clue: "Use the map: west is left, and Mississippi is left of Alabama.", choices: ["MS", "AL", "LA", "TN"], correction: "Mississippi is west of Alabama." },
      { targetAbbr: "VT", contextAbbrs: ["VT", "NH", "ME", "NY"], prompt: "Vermont and New Hampshire are look-alike neighbors. Which one is west?", clue: "Use the map: west is left, and Vermont is left of New Hampshire.", choices: ["VT", "NH", "ME", "NY"], correction: "Vermont is west of New Hampshire." }
    ]
  },
  {
    id: "borderline-hotline",
    label: "Borderline Hotline",
    reward: 1,
    calls: [
      { targetAbbr: "VT", contextAbbrs: ["VT", "NH", "ME"], caller: "Caller 101", line: "I'm New Hampshire. I touch Maine, but my look-alike neighbor is immediately west of me.", prompt: "Who is on the line next door?", choices: ["VT", "NH", "ME", "NY"], audio: "assets/audio/hotline_nh-vt.mp3" },
      { targetAbbr: "MS", contextAbbrs: ["MS", "AL", "GA"], caller: "Caller 202", line: "I'm Alabama. Georgia is on one side, but the state on my other side gets mixed up with me all the time.", prompt: "Which neighbor is calling from the west?", choices: ["MS", "AL", "GA", "LA"], audio: "assets/audio/hotline-al-ms.mp3" },
      { targetAbbr: "NM", contextAbbrs: ["TX", "NM", "AZ"], caller: "Caller 404", line: "Texas says it can almost reach Arizona, except I am politely blocking the way.", prompt: "Which state is between Texas and Arizona?", choices: ["NM", "TX", "AZ", "OK"], audio: "assets/audio/hotline-tx-nm-az.mp3" }
    ]
  },
  {
    id: "capital-call-in",
    label: "Capital Call-In",
    reward: 1,
    calls: [
      { targetAbbr: "ID", contextAbbrs: ["ID", "MT", "WY"], caller: "Cranky Gramps", line: "Listen here, if I'd a hoe, I'd make those boys see the right way to weed a garden. Pull from the roots, boys. The roots.", prompt: "Boise is calling from which state?", choices: ["ID", "MT", "WY", "UT"], audio: "assets/audio/capital-boise-idaho.mp3" },
      { targetAbbr: "AK", contextAbbrs: ["AK", "HI", "WA"], caller: "Juneau on line two", line: "Ch-ch-chilly out here. I'll ask ya real quick. Juneau where I'm callin' from? I'm way up here, freezin' my eyebrows off.", prompt: "Juneau is the capital of which state?", choices: ["AK", "HI", "WA", "OR"], audio: "assets/audio/capital-juneau-alaska.mp3" },
      { targetAbbr: "CA", contextAbbrs: ["CA", "OR", "NV"], caller: "Sacramento on line three", line: "Yoooo. We're out here catchin' waves, wearin' sacred mementos around our necks. Totally spiritual, bro.", prompt: "Sacramento belongs to which state?", choices: ["CA", "OR", "NV", "AZ"], audio: "assets/audio/capital-sacramento-california.mp3" },
      { targetAbbr: "TN", contextAbbrs: ["TN", "KY", "MS"], caller: "Nashville on line four", line: "Music City calling. I have guitars, a state capital job, and zero patience for Memphis guesses.", prompt: "Nashville is the capital of which state?", choices: ["TN", "KY", "MS", "AR"] },
      { targetAbbr: "CO", answerKind: "capital", contextAbbrs: ["CO", "WY", "UT"], caller: "Mile-high caller", line: "Colorado cold? Buy dense fur. Dense fur! The coat has a coat.", prompt: "Which capital belongs to Colorado?", choices: ["CO", "WY", "UT", "NM"], audio: "assets/audio/capital-denver-colorado.mp3" },
      { targetAbbr: "MA", contextAbbrs: ["MA", "RI", "CT"], caller: "Boston on line six", line: "This is Boston. Please pahk me in the right New England state.", prompt: "Boston is the capital of which state?", choices: ["MA", "RI", "CT", "NH"] },
      { targetAbbr: "IL", contextAbbrs: ["IL", "IN", "IA"], caller: "Bart Simpson", line: "Eat my shorts! I'm Bart Simpson, the coolest kid in Springfield. The capital of what state?", prompt: "Springfield is the capital of which state?", choices: ["IL", "IN", "IA", "MO"], audio: "assets/audio/capital-springfield-illinois.mp3" },
      { targetAbbr: "IN", contextAbbrs: ["IN", "IL", "OH"], caller: "I-State emergency", line: "Ladies and gentlemen, we've got a car absolutely flyin' here at the Indy 500. Somebody better call the Indiana police. Wait, the Indianapolis?", prompt: "Indianapolis is the capital of which state?", choices: ["IN", "IL", "OH", "IA"], audio: "assets/audio/capital-indianapolis-indiana.mp3" },
      { targetAbbr: "IA", contextAbbrs: ["IA", "MO", "MN"], caller: "Corny accountant", line: "Des Moines here. Listen, I did the math. I got coins, I got Moines, and somehow I still owe ya. Real corny accounting.", prompt: "Des Moines is the capital of which state?", choices: ["IA", "IL", "IN", "MN"], audio: "assets/audio/capital-des-moines-iowa.mp3" },
      { targetAbbr: "ND", contextAbbrs: ["ND", "SD", "MN"], caller: "Coat culprit", line: "Ope, what made this mark on yer North Face coat, eh? That's a real Bismarck ya got there.", prompt: "Bismarck is the capital of which state?", choices: ["ND", "SD", "NE", "KS"], audio: "assets/audio/capital-bismarck-north-dakota.mp3" },
      { targetAbbr: "SD", contextAbbrs: ["SD", "ND", "NE"], caller: "It's not French", line: "Actually, we pronounce it peer. Put your coat on when you head south to the Pierre.", prompt: "Pierre is the capital of which Dakota?", choices: ["SD", "ND", "NE", "KS"], audio: "assets/audio/capital-piere-south-dakota.mp3" },
      { targetAbbr: "MI", contextAbbrs: ["MI", "WI", "MN"], caller: "Sir Lance wants to sing", line: "Yeah, what up doe. This Sir Lance. I came to sing, right here, real close. But I ain't gon' lie, I miss my friends.", prompt: "Lansing is the capital of which Great Lakes state?", choices: ["MI", "WI", "MN", "IL"], audio: "assets/audio/capital-lansing-michigan.mp3" },
      { targetAbbr: "WI", contextAbbrs: ["WI", "MI", "MN"], caller: "Madison hotline", line: "Oh hey there. You betcha. I'm callin' from Madison. We've got lakes, a big university, and plastic pink flamingos are our official city bird. Wishin' ya knew what state I'm in? Don't be mad, son.", prompt: "Madison is the capital of which state?", choices: ["WI", "MI", "MN", "IA"], audio: "assets/audio/capital-madison-wisconsin.mp3" },
      { targetAbbr: "MN", contextAbbrs: ["MN", "WI", "IA"], caller: "Great Lakes Refreshments", line: "Oh yah, my buddy Paul walks in with teeny-tiny little Cokes. Paul brought mini sodas. Well, ya know, he's a Saint.", prompt: "Saint Paul is the capital of which state?", choices: ["MN", "WI", "IA", "MI"], audio: "assets/audio/capital-st-paul-minnesota.mp3" },
      { targetAbbr: "KS", contextAbbrs: ["KS", "NE", "OK"], caller: "Todo, I don't think we're in...", line: "Hello there, it's Dorothy. Did you come all this way just to peek at my house? My goodness, you must've come to Topeka.", prompt: "Topeka is the capital of which state?", choices: ["KS", "NE", "OK", "MO"], audio: "assets/audio/capital-topeka-kansas.mp3" },
      { targetAbbr: "NE", contextAbbrs: ["NE", "KS", "SD"], caller: "Statue of the President", line: "President Lincoln? Yes sir. I built him a statue with knees of brass.", prompt: "Lincoln is the capital of which state?", choices: ["NE", "KS", "SD", "ND"], audio: "assets/audio/capital-lincoln-nebraska.mp3" },
      { targetAbbr: "OH", contextAbbrs: ["OH", "IN", "MI"], caller: "Columbus desk", line: "Front desk, Columbus speaking. Oh, hi! Oh, hi again!", prompt: "Columbus is the capital of which state?", choices: ["OH", "MO", "IN", "MI"], audio: "assets/audio/capital-columbus-ohio.mp3" },
      { targetAbbr: "MO", contextAbbrs: ["MO", "IA", "IL"], caller: "Not St. Louis desk", line: "Hi there, this is Miss Ouri callin'. Me and Mr. Jefferson went down to the city. Jefferson City, that's where we landed. But what state?", prompt: "Jefferson City is the capital of which state?", choices: ["MO", "OH", "IL", "IA"], audio: "assets/audio/capital-jefferson-city-missouri.mp3" },
      { targetAbbr: "WY", contextAbbrs: ["WY", "CO", "MT"], caller: "Cheyenne range line", line: "Shy Anne is calling from Cheyenne. Why oh why? And what state is she in?", prompt: "Cheyenne is the capital of which state?", choices: ["WY", "CO", "MT", "NE"], audio: "assets/audio/capital-cheyanne-wyoming.mp3" },
      { targetAbbr: "AL", answerKind: "capital", contextAbbrs: ["AL", "MS", "GA"], caller: "Mountain-gum dispatch", line: "Alabama is on the line with Al on a mountain of gum. The capital sounds like Monty's gum mountain.", prompt: "Which capital belongs to Alabama?", choices: ["AL", "MS", "GA", "TN"] },
      { targetAbbr: "AZ", answerKind: "capital", contextAbbrs: ["AZ", "NM", "UT"], caller: "Desert bird desk", line: "Arizona calling. The air in the zone I'm in is so hot, even the birds burst into flames and start over.", prompt: "Which capital belongs to Arizona?", choices: ["AZ", "NM", "UT", "CO"], audio: "assets/audio/capital-phoenix-arizona.mp3" },
      { targetAbbr: "AR", answerKind: "capital", contextAbbrs: ["AR", "LA", "MS"], caller: "Tiny boulder bureau", line: "Arkansas found a very small boulder in its pocket. The pocket rock is the capital clue.", prompt: "Which capital belongs to Arkansas?", choices: ["AR", "LA", "MS", "OK"] },
      { targetAbbr: "CT", answerKind: "capital", contextAbbrs: ["CT", "RI", "MA"], caller: "Heart monitor line", line: "Connecticut is sending a heart-shaped message. Follow the heart to the capital.", prompt: "Which capital belongs to Connecticut?", choices: ["CT", "RI", "MA", "NJ"] },
      { targetAbbr: "DE", answerKind: "capital", contextAbbrs: ["DE", "MD", "NJ"], caller: "Driving-over desk", line: "Delaware says it is driving over to the capital. Over, dover, close enough for the map.", prompt: "Which capital belongs to Delaware?", choices: ["DE", "MD", "NJ", "PA"] },
      { targetAbbr: "FL", answerKind: "capital", contextAbbrs: ["FL", "GA", "AL"], caller: "Sunshine State Real Estate", line: "Hi there, Florida real estate agent here. You're gonna love this: a beautiful tall house by the sea. Great views, charm, and the name practically sells itself. Tall house, see?", prompt: "Which capital belongs to Florida?", choices: ["FL", "GA", "AL", "SC"], audio: "assets/audio/capital-tallahassee-florida.mp3" },
      { targetAbbr: "GA", answerKind: "capital", contextAbbrs: ["GA", "AL", "SC"], caller: "Peach airport desk", line: "Georgia is calling from the big airport city. The capital clue is traffic, peaches, and a very busy skyline.", prompt: "Which capital belongs to Georgia?", choices: ["GA", "AL", "SC", "NC"] },
      { targetAbbr: "HI", answerKind: "capital", contextAbbrs: ["HI", "AK", "CA"], caller: "Island hello line", line: "Lou one: Aloha, this is Lou calling from Hawaii! Lou two: This is also Lou! Host: Hello Lou and Lou!", prompt: "Which capital belongs to Hawaii?", choices: ["HI", "AK", "CA", "WA"], audio: "assets/audio/capital-honolulu-hawaii.mp3" },
      { targetAbbr: "KY", answerKind: "capital", contextAbbrs: ["KY", "TN", "WV"], caller: "No dogs allowed", line: "KFC: can I take your order? Frank: Yeah, lemme get two frankfurters, extra mustard. KFC: Sir, this is Kentucky Fried Chicken. We don't serve hot dogs.", prompt: "Which capital belongs to Kentucky?", choices: ["KY", "TN", "WV", "VA"], audio: "assets/audio/capital-frankfort-kentucky.mp3" },
      { targetAbbr: "LA", answerKind: "capital", contextAbbrs: ["LA", "MS", "AR"], caller: "Red baton relay", line: "Louisiana is passing a red baton down the river. The baton is the capital clue.", prompt: "Which capital belongs to Louisiana?", choices: ["LA", "MS", "AR", "TX"] },
      { targetAbbr: "ME", answerKind: "capital", contextAbbrs: ["ME", "NH", "VT"], caller: "Windy vacation desk", line: "Maine says an August gust just hit the coast. August plus a gust points to the capital.", prompt: "Which capital belongs to Maine?", choices: ["ME", "NH", "VT", "MA"] },
      { targetAbbr: "MD", answerKind: "capital", contextAbbrs: ["MD", "DE", "VA"], caller: "Naval map desk", line: "Maryland says Ann borrowed a police hat near the water. Ann-a-police is the clue.", prompt: "Which capital belongs to Maryland?", choices: ["MD", "DE", "VA", "PA"] },
      { targetAbbr: "MS", answerKind: "capital", contextAbbrs: ["MS", "AL", "LA"], caller: "Moonwalk river line", line: "Mississippi is moonwalking down the river with a famous Jackson. That name is the capital clue.", prompt: "Which capital belongs to Mississippi?", choices: ["MS", "AL", "LA", "TN"] },
      { targetAbbr: "MT", contextAbbrs: ["MT", "ID", "WY"], caller: "Helen on the Mountain", line: "Hi there, sugar. It's Helen, and I'm stuck up here in the Elkhorn mountains. Won't you give old Helen a hand to help me off this mountain?", prompt: "Helena is the capital of which state?", choices: ["MT", "ID", "WY", "CO"], audio: "assets/audio/capital-helena-montana.mp3" },
      { targetAbbr: "NV", answerKind: "capital", contextAbbrs: ["NV", "CA", "UT"], caller: "Car-less Cowboy", line: "Well I've never had a car, son. Not in the city, anyway. A horse won't parallel park.", prompt: "Which capital belongs to Nevada?", choices: ["NV", "CA", "UT", "AZ"], audio: "assets/audio/capital-carson-city-nevada.m4a" },
      { targetAbbr: "NH", answerKind: "capital", contextAbbrs: ["NH", "VT", "ME"], caller: "Victorious rodent", line: "I'm the new hamster. I feel so clean, and I just conquered my new home.", prompt: "Which capital belongs to New Hampshire?", choices: ["NH", "VT", "ME", "MA"], audio: "assets/audio/capital-concord-new-hampshire.m4a" },
      { targetAbbr: "NJ", answerKind: "capital", contextAbbrs: ["NJ", "NY", "DE"], caller: "Jersey train line", line: "New Jersey says Trent has on a new jersey. Trent-on is the capital clue.", prompt: "Which capital belongs to New Jersey?", choices: ["NJ", "NY", "DE", "PA"] },
      { targetAbbr: "NM", answerKind: "capital", contextAbbrs: ["NM", "AZ", "CO"], caller: "Santa desert desk", line: "We interrupt with urgent New Mexico weather news. Santa has fainted in the heat wave. That's right, Santa fainted. Back to you in the studio.", prompt: "Which capital belongs to New Mexico?", choices: ["NM", "AZ", "CO", "TX"], audio: "assets/audio/capital-santa-fe-new-mexico.mp3" },
      { targetAbbr: "NY", answerKind: "capital", contextAbbrs: ["NY", "NJ", "PA"], caller: "Not the big city desk", line: "New York says the famous city is not the capital. All bunnies go upstate for the clue.", prompt: "Which capital belongs to New York?", choices: ["NY", "NJ", "PA", "CT"] },
      { targetAbbr: "NC", answerKind: "capital", contextAbbrs: ["NC", "SC", "VA"], caller: "Pep rally line", line: "Heyyy, North Side, it's Caroline! We're at the pep rally, and I need everybody loud. Gooooooo, North!", prompt: "Which capital belongs to North Carolina?", choices: ["NC", "SC", "VA", "TN"], audio: "assets/audio/capital-raleigh-north-carolina.mp3" },
      { targetAbbr: "OK", answerKind: "capital", contextAbbrs: ["OK", "AR", "TX"], caller: "Oak tree city desk", line: "Oklahoma keeps it extremely straightforward. The state name comes right back with city at the end.", prompt: "Which capital belongs to Oklahoma?", choices: ["OK", "AR", "TX", "KS"] },
      { targetAbbr: "OR", answerKind: "capital", contextAbbrs: ["OR", "WA", "CA"], caller: "Sailing west desk", line: "Hello, you've reached the Oregon yacht club. Terribly exclusive, naturally. Whether you've got a schooner, OR a yacht, you ought to sail 'em. Sail 'em right up the coast, my friend.", prompt: "Which capital belongs to Oregon?", choices: ["OR", "WA", "CA", "ID"], audio: "assets/audio/capital-salem-oregon.mp3" },
      { targetAbbr: "PA", answerKind: "capital", contextAbbrs: ["PA", "NY", "MD"], caller: "Hairy burger line", line: "Pennsylvania says the capital is not Philly or Pittsburgh. Think hairy burger.", prompt: "Which capital belongs to Pennsylvania?", choices: ["PA", "NY", "MD", "DE"] },
      { targetAbbr: "RI", answerKind: "capital", contextAbbrs: ["RI", "CT", "MA"], caller: "Tiny island desk", line: "Rhode Island says the answer is proven-dense. Providence is hiding in that sound.", prompt: "Which capital belongs to Rhode Island?", choices: ["RI", "CT", "MA", "VT"] },
      { targetAbbr: "SC", answerKind: "capital", contextAbbrs: ["SC", "NC", "GA"], caller: "Column of bees line", line: "South Carolina says Caroline's column of bees flew south. Column-bee-a is the clue.", prompt: "Which capital belongs to South Carolina?", choices: ["SC", "NC", "GA", "VA"] },
      { targetAbbr: "TX", contextAbbrs: ["TX", "OK", "LA"], caller: "Is your GPS working?", line: "Howdy, this state is soooo big, you might get lost in it. Lost in... Austin. Well shoot, there's your capital clue.", prompt: "Austin is the capital of which state?", choices: ["TX", "OK", "LA", "AR"], audio: "assets/audio/capital-austin-texas.mp3" },
      { targetAbbr: "UT", answerKind: "capital", contextAbbrs: ["UT", "CO", "AZ"], caller: "Salty chef line", line: "Okay, so you talk about salt like city chefs do. But is it local? Is it flaky? Does it have a story?", prompt: "Which capital belongs to Utah?", choices: ["UT", "CO", "AZ", "NV"], audio: "assets/audio/capital-Salt-lake-city-utah.mp3" },
      { targetAbbr: "VT", answerKind: "capital", contextAbbrs: ["VT", "NH", "NY"], caller: "Tiny mountain desk", line: "Vermont says a mountain might peel your skin. Mont-peel-ier is the clue.", prompt: "Which capital belongs to Vermont?", choices: ["VT", "NH", "NY", "ME"] },
      { targetAbbr: "VA", answerKind: "capital", contextAbbrs: ["VA", "NC", "WV"], caller: "History money line", line: "Virginia says its capital sounds like a rich man with history homework.", prompt: "Which capital belongs to Virginia?", choices: ["VA", "NC", "WV", "MD"] },
      { targetAbbr: "WA", contextAbbrs: ["WA", "OR", "ID"], caller: "Our Nation's Founder", line: "George Washington here- reporting from the Olympia games. I came for liberty, stayed for the medals.", prompt: "Olympia is the capital of which state?", choices: ["WA", "OR", "ID", "CA"], audio: "assets/audio/capital-olympia-washigton.mp3" },
      { targetAbbr: "WV", answerKind: "capital", contextAbbrs: ["WV", "VA", "KY"], caller: "Mountain dance line", line: "West Virginia says it is dancing the Charleston through the mountains.", prompt: "Which capital belongs to West Virginia?", choices: ["WV", "VA", "KY", "TN"] }
    ]
  }
];

const FUNNY_STATE_TIPS = [
  {
    id: "idaho-montana",
    label: "Old Mon Montana",
    title: "I dunno? Idaho.",
    targetAbbr: "ID",
    stateAbbrs: ["MT", "ID"],
    visual: "old-mon",
    line: "Look at Montana's western edge like a face looking at Idaho. The joke is: old Mon Montana keeps forgetting his neighbor and says, \"I don't know Idaho.\"",
    source: "FastTrack map memory trick",
    audio: "assets/audio/montana-idaho.mp3"
  },
  {
    id: "chef-mimal",
    label: "Chef MIMAL",
    title: "Chef MIMAL Orders Kentucky Fried Chicken",
    targetAbbr: "KY",
    stateAbbrs: ["MN", "IA", "MO", "AR", "LA", "KY", "TN"],
    visual: "mimal",
    line: "Chef MIMAL is the stack just west of the Mississippi: Minnesota, Iowa, Missouri, Arkansas, Louisiana. Then add Kentucky and Tennessee for the fried-chicken bonus.",
    source: "FastTrack map memory trick"
  },
  {
    id: "mag-line",
    label: "M-A-G Line",
    title: "The Magazine Row",
    targetAbbr: "AL",
    stateAbbrs: ["MS", "AL", "GA"],
    visual: "mag",
    line: "Mississippi, Alabama, Georgia run west to east as M-A-G. Picture three ridiculous magazines on a rack.",
    source: "FastTrack map memory trick"
  },
  {
    id: "west-coast-cow",
    label: "C-O-W Coast",
    title: "The West Coast Spells COW",
    targetAbbr: "OR",
    stateAbbrs: ["CA", "OR", "WA"],
    visual: "cow",
    line: "California, Oregon, Washington go south to north as C-O-W. That gives the whole West Coast a quick order check.",
    source: "FastTrack map memory trick"
  },
  {
    id: "can-pan",
    label: "Can Into Pan",
    title: "Kansas Can, Oklahoma Pan",
    targetAbbr: "KS",
    stateAbbrs: ["KS", "OK"],
    visual: "can-pan",
    line: "Kansas is the can. Oklahoma is the pan with a handle. The can pours right into the pan.",
    source: "FastTrack map memory trick"
  },
  {
    id: "dakota-twins",
    label: "Twin Stack",
    title: "The Dakota Twins",
    targetAbbr: "ND",
    stateAbbrs: ["ND", "SD"],
    visual: "twins",
    line: "North Dakota and South Dakota are the stacked twins. North is the top twin; South is the bottom twin.",
    source: "FastTrack map memory trick"
  },
  {
    id: "new-england-lookalikes",
    label: "Tiny Border Drama",
    title: "Vermont Is the West One",
    targetAbbr: "VT",
    stateAbbrs: ["VT", "NH", "ME"],
    visual: "new-england",
    line: "Vermont and New Hampshire are the look-alike neighbors. Vermont is west; New Hampshire touches Maine.",
    source: "Custom classroom helper"
  }
];

const stateByAbbr = new Map(STATE_DATA.map((state) => [state.abbr, state]));
const allAbbrs = STATE_DATA.map((state) => state.abbr);
let regionPacks = loadRegionPacks();
let progress = loadProgress();
let geoData = null;
let audioContext = null;
const CORRECT_COACH_DELAY_MS = 7000;
const MINI_INTRO_DEFAULT_MS = 1450;
const MINI_INTRO_AUDIO_FALLBACK_MS = 4200;

const appState = {
  currentScreen: "home",
  selectedRegionId: null,
  selectedModeId: null,
  session: null,
  currentQuestion: null,
  driveData: null,
  courtIntroKey: null,
  introLocked: false,
  introUnlockTimer: null,
  activeIntroAudio: null,
  activeReplayAudio: null,
  activeStudyAudio: null,
  studyAudioLocked: false,
  studyAudioUnlockTimer: null,
  lastClickedAbbr: null,
  advanceTimer: null
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  bindEvents();
  validateRegions();
  updateSummaryStats();
  renderHome();
  loadMapData();
}

function cacheElements() {
  Object.assign(els, {
    homeScreen: document.getElementById("homeScreen"),
    modeScreen: document.getElementById("modeScreen"),
    gameScreen: document.getElementById("gameScreen"),
    regionGrid: document.getElementById("regionGrid"),
    modeGrid: document.getElementById("modeGrid"),
    modeTitle: document.getElementById("modeTitle"),
    regionStatus: document.getElementById("regionStatus"),
    backHome: document.getElementById("backHome"),
    backModes: document.getElementById("backModes"),
    gameRegion: document.getElementById("gameRegion"),
    gameTitle: document.getElementById("gameTitle"),
    sessionMeter: document.getElementById("sessionMeter"),
    streakPill: document.getElementById("streakPill"),
    scorePill: document.getElementById("scorePill"),
    mapStage: document.getElementById("mapStage"),
    modeBadge: document.getElementById("modeBadge"),
    questionPrompt: document.getElementById("questionPrompt"),
    answerArea: document.getElementById("answerArea"),
    feedbackPanel: document.getElementById("feedbackPanel"),
    feedbackTitle: document.getElementById("feedbackTitle"),
    feedbackText: document.getElementById("feedbackText"),
    mnemonicCard: document.getElementById("mnemonicCard"),
    mnemonicText: document.getElementById("mnemonicText"),
    mnemonicSource: document.getElementById("mnemonicSource"),
    nextQuestion: document.getElementById("nextQuestion"),
    bestStreak: document.getElementById("bestStreak"),
    weakCount: document.getElementById("weakCount"),
    soundToggle: document.getElementById("soundToggle"),
    resetProgress: document.getElementById("resetProgress")
  });
}

function bindEvents() {
  els.backHome.addEventListener("click", () => showScreen("home"));
  els.backModes.addEventListener("click", () => {
    if (isStudyGuideActive()) {
      showScreen("home");
      return;
    }
    showModes(appState.selectedRegionId);
  });
  els.nextQuestion.addEventListener("click", nextQuestion);
  els.soundToggle.addEventListener("click", toggleSound);
  els.resetProgress.addEventListener("click", resetProgress);
}

async function loadMapData() {
  try {
    const response = await fetch("data/states.geojson");
    if (!response.ok) throw new Error("Map file did not load.");
    geoData = await response.json();
    renderMap();
  } catch (error) {
    els.mapStage.innerHTML = '<div class="map-error">Map file could not load. Use the local server URL, not file open.</div>';
  }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return {
        regionStats: saved.regionStats || {},
        weak: saved.weak || {},
        sound: saved.sound !== false,
        bestStreak: saved.bestStreak || 0
      };
    }
  } catch (error) {
    // Fall through to a clean save object.
  }
  return { regionStats: {}, weak: {}, sound: true, bestStreak: 0 };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateSummaryStats();
}

function loadRegionPacks() {
  try {
    const saved = JSON.parse(localStorage.getItem(REGION_OVERRIDE_KEY));
    if (Array.isArray(saved) && saved.length === DEFAULT_REGION_PACKS.length) {
      if (regionSignature(saved) === LEGACY_REGION_SIGNATURE_OK_NORTHEAST) {
        localStorage.removeItem(REGION_OVERRIDE_KEY);
        return DEFAULT_REGION_PACKS.map((pack) => ({ ...pack, states: [...pack.states] }));
      }
      return DEFAULT_REGION_PACKS.map((pack) => {
        const override = saved.find((candidate) => candidate.id === pack.id);
        return override ? { ...pack, states: [...override.states] } : { ...pack, states: [...pack.states] };
      });
    }
  } catch (error) {
    // Ignore malformed saved regions.
  }
  return DEFAULT_REGION_PACKS.map((pack) => ({ ...pack, states: [...pack.states] }));
}

function regionSignature(packs) {
  return packs.map((pack) => `${pack.id}:${(pack.states || []).join(",")}`).join("|");
}

function validateRegions() {
  const seen = new Set();
  regionPacks.forEach((pack) => {
    pack.states = pack.states.filter((abbr) => stateByAbbr.has(abbr));
    pack.states.forEach((abbr) => seen.add(abbr));
  });
  return seen.size === 50;
}

function showScreen(screenName) {
  stopStudyAudio();
  clearIntroLock();
  appState.currentScreen = screenName;
  [els.homeScreen, els.modeScreen, els.gameScreen].forEach((screen) => {
    const isActive = screen.id === `${screenName}Screen`;
    screen.hidden = !isActive;
    screen.classList.toggle("active", isActive);
  });
  if (screenName === "home") renderHome();
}

function getRegionCards() {
  const allPack = {
    id: "all",
    label: "All",
    fullLabel: "All States",
    status: "Full map",
    states: [...allAbbrs]
  };
  return [...regionPacks, allPack];
}

function renderHome() {
  els.regionGrid.innerHTML = "";
  getRegionCards().forEach((pack) => {
    const stats = progress.regionStats[pack.id] || {};
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-card";
    button.dataset.region = pack.id;
    button.innerHTML = `
      <p class="section-label">${pack.fullLabel}</p>
      <h3>${pack.label}</h3>
      <p class="count">${pack.states.length} states</p>
      <span class="status">${pack.status}</span>
      <p class="stars">Stars: ${formatStars(stats.stars || 0)}</p>
      <p class="play-label">Choose mode</p>
    `;
    button.addEventListener("click", () => {
      appState.selectedRegionId = pack.id;
      showModes(pack.id);
    });
    els.regionGrid.appendChild(button);
  });
  renderStudyGuideTile();
}

function renderStudyGuideTile() {
  const audioCount = getCapitalCallAudioMap().size;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "region-card study-guide-card";
  button.dataset.region = "study-guide";
  button.innerHTML = `
    <p class="section-label">Study mode</p>
    <h3>Mnemonic Study Guide</h3>
    <p class="count">${audioCount} audio states</p>
    <span class="status">Map study</span>
    <p class="stars">No score, no timer</p>
    <p class="play-label">Open guide</p>
  `;
  button.addEventListener("click", startMnemonicStudyGuide);
  els.regionGrid.appendChild(button);
}

function startMnemonicStudyGuide() {
  stopStudyAudio();
  clearAdvanceTimer();
  appState.selectedRegionId = "all";
  appState.selectedModeId = "mnemonic-study-guide";
  appState.session = null;
  appState.currentQuestion = null;
  appState.driveData = null;
  appState.lastClickedAbbr = null;
  els.backModes.textContent = "Regions";
  els.gameScreen.classList.remove("court-mode", "drive-mode", "tip-mode", "square-mode", "hotline-mode", "callin-mode", "interruption-mode");
  els.gameScreen.classList.add("study-mode");
  els.gameRegion.textContent = "All States / Audio study";
  els.gameTitle.textContent = "Mnemonic Study Guide";
  els.sessionMeter.textContent = `${getCapitalCallAudioMap().size} audio states`;
  els.streakPill.textContent = "Study mode";
  els.scorePill.textContent = "No score";
  els.modeBadge.textContent = "Tap a yellow state to hear its Capital Call-In.";
  els.questionPrompt.textContent = "Capital Call-In audio map";
  els.answerArea.innerHTML = `
    <div class="study-guide-panel">
      <p class="arcade-status">Yellow states have audio. Muted states are coming soon. Click any state for the memory hook and capital fact.</p>
    </div>
  `;
  clearFeedback();
  showScreen("game");
  els.gameScreen.classList.add("study-mode");
  renderMap();
}

function showModes(regionId) {
  appState.selectedRegionId = regionId;
  const region = getRegion(regionId);
  els.modeTitle.textContent = `${region.label}: pick a game mode`;
  els.regionStatus.textContent = `${region.status} / ${region.states.length} states / training modes`;
  els.modeGrid.innerHTML = "";
  MODES.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-card ${mode.group === "default" ? "default-mode" : "training-mode"}`;
    button.innerHTML = `
      <p class="section-label">${mode.group === "default" ? "Default game" : `Training mode / ${mode.total} questions`}</p>
      <h3>${mode.label}</h3>
      ${mode.title ? `<p class="mode-title">${mode.title}</p>` : ""}
      <p>${mode.description}</p>
    `;
    button.addEventListener("click", () => startMode(mode.id));
    els.modeGrid.appendChild(button);
  });
  showScreen("mode");
}

function startMode(modeId) {
  stopStudyAudio();
  els.gameScreen.classList.remove("study-mode");
  els.backModes.textContent = "Modes";
  appState.selectedModeId = modeId;
  const region = getRegion(appState.selectedRegionId);
  const mode = getMode(modeId);
  const pool = buildPool(region.states, modeId);
  appState.session = {
    modeId,
    regionId: region.id,
    pool,
    total: mode.total,
    index: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    used: [],
    specialSlots: buildSpecialSlots(mode.total, modeId),
    usedSpecialTypes: [],
    usedBonusCaseKeys: [],
    answered: false,
    attempts: 0
  };
  els.gameRegion.textContent = `${region.fullLabel} / ${region.status}`;
  els.gameTitle.textContent = mode.title || mode.label;
  els.modeBadge.textContent = mode.description;
  showScreen("game");
  nextQuestion();
}

function buildPool(regionStates, modeId) {
  if (modeId !== "weak-spots") return [...regionStates];
  const weakInRegion = regionStates.filter((abbr) => (progress.weak[abbr] || 0) > 0);
  return weakInRegion.length > 0 ? weakInRegion : [...regionStates];
}

function nextQuestion() {
  const session = appState.session;
  if (!session) return;
  if (session.index >= session.total) {
    finishSession();
    return;
  }
  session.index += 1;
  session.answered = false;
  session.attempts = 0;
  appState.driveData = null;
  appState.courtIntroKey = null;
  appState.lastClickedAbbr = null;
  appState.currentQuestion = generateQuestion(session);
  renderQuestion();
}

function generateQuestion(session) {
  const { modeId, pool, used } = session;
  if (session.specialSlots[session.index]) {
    const specialType = session.specialSlots[session.index];
    const specialQuestion = specialType === "tip"
      ? buildEligibleTipQuestion(session)
      : pickBonusQuestion(session, specialType);
    if (specialQuestion) return specialQuestion;
  }

  const actualMode = modeId === "boss-round" || modeId === "weak-spots"
    ? randomItem(["find-state", "capital-beacon", "capital-choice", "type-dash"])
    : modeId;
  const abbr = pickState(pool, used);
  used.push(abbr);
  if (used.length > Math.min(pool.length, 8)) used.shift();
  const state = stateByAbbr.get(abbr);

  if (actualMode === "find-state") {
    return {
      kind: "map",
      modeLabel: "Find the State",
      targetAbbr: abbr,
      prompt: `Click ${state.name}.`,
      expectedLabel: state.name,
      correction: `${state.name} is ${abbr}.`
    };
  }
  if (actualMode === "capital-beacon") {
    return {
      kind: "map",
      modeLabel: "Capital Beacon",
      targetAbbr: abbr,
      prompt: `Which state has the capital ${state.capital}?`,
      expectedLabel: state.name,
      correction: `${state.capital} is the capital of ${state.name}.`
    };
  }
  if (actualMode === "capital-choice") {
    return {
      kind: "choice",
      modeLabel: "Capital Choice",
      targetAbbr: abbr,
      prompt: `What is the capital of ${state.name}?`,
      expectedLabel: state.capital,
      choices: buildChoices(state.capital, "capital"),
      correction: `${state.name}'s capital is ${state.capital}.`
    };
  }

  const askCapital = Math.random() > 0.42;
  return {
    kind: "type",
    modeLabel: "Type Dash",
    targetAbbr: abbr,
    answerKind: askCapital ? "capital" : "state",
    prompt: askCapital ? `Type the capital of ${state.name}.` : `${state.capital} is the capital of which state?`,
    expectedLabel: askCapital ? state.capital : state.name,
    correction: askCapital ? `${state.name}'s capital is ${state.capital}.` : `${state.capital} belongs to ${state.name}.`
  };
}

function buildSpecialSlots(total, modeId) {
  const slots = {};
  const planned = modeId === "boss-round"
    ? ["capital-call-in", "road-trip", "weird-neighbor-court", "capital-call-in", "mini"]
    : ["mini", "capital-call-in", "road-trip", "weird-neighbor-court", "tip"];
  Array.from({ length: Math.floor(total / 4) }, (_, index) => (index + 1) * 4).forEach((slot, index) => {
    slots[slot] = planned[index] || "mini";
  });
  return slots;
}

function pickBonusQuestion(session, requestedType = "mini") {
  const builders = {
    "weird-neighbor-court": () => buildEligibleCourtQuestion(session),
    "road-trip": () => buildEligibleRoadTripQuestion(session),
    "square-off": () => buildEligibleSquareQuestion(session),
    "borderline-hotline": () => buildEligibleHotlineQuestion(session),
    "capital-call-in": () => buildEligibleCapitalCallQuestion(session)
  };
  if (requestedType === "capital-call-in") {
    const requested = buildEligibleCallBreakQuestion(session);
    if (requested) {
      session.usedSpecialTypes.push(requested.bonusId);
      return requested;
    }
  }
  if (requestedType !== "mini" && builders[requestedType]) {
    const requested = builders[requestedType]();
    if (requested) {
      session.usedSpecialTypes.push(requested.bonusId);
      return requested;
    }
  }
  const candidates = Object.values(builders).map((build) => build()).filter(Boolean);
  if (!candidates.length) return null;
  const fresh = candidates.filter((question) => !session.usedSpecialTypes.includes(question.bonusId));
  const picked = randomItem(fresh.length ? fresh : candidates);
  session.usedSpecialTypes.push(picked.bonusId);
  return picked;
}

function buildEligibleRoadTripQuestion(session) {
  const route = pickRoadTripRoute(session);
  return route ? buildRoadTripQuestion(route) : null;
}

function pickRoadTripRoute(session) {
  const roadTrip = BONUS_GAMES.find((game) => game.id === "road-trip");
  if (!roadTrip) return null;
  const poolSet = new Set(session.pool);
  const eligibleRoutes = roadTrip.routes.filter((route) => {
    if (session.regionId === "all") return true;
    return routeStates(route).every((abbr) => poolSet.has(abbr));
  });
  return pickUnusedBonusCase("road-trip", eligibleRoutes, session);
}

function buildRoadTripQuestion(route) {
  const destination = stateByAbbr.get(route.destinationAbbr);
  return {
    kind: "drive",
    bonusId: "road-trip",
    modeLabel: "Road Trip",
    targetAbbr: route.destinationAbbr,
    originAbbr: route.originAbbr,
    destinationAbbr: route.destinationAbbr,
    avoidAbbrs: [...route.avoidAbbrs],
    checkpointAbbrs: [...route.checkpointAbbrs],
    allowedAbbrs: [...route.allowedAbbrs],
    prompt: route.prompt,
    expectedLabel: destination.name,
    correction: `Road trip complete: ${stateByAbbr.get(route.originAbbr).name} to ${destination.name}.`
  };
}

function buildEligibleCourtQuestion(session) {
  const caseItem = pickNeighborCourtCase(session);
  return caseItem ? buildCourtQuestion(caseItem, session.pool) : null;
}

function pickNeighborCourtCase(session) {
  const court = BONUS_GAMES.find((game) => game.id === "weird-neighbor-court");
  if (!court) return null;
  const poolSet = new Set(session.pool);
  const eligibleCases = court.cases.filter((caseItem) => {
    if (session.regionId === "all") return true;
    return caseStates(caseItem).every((abbr) => poolSet.has(abbr));
  });
  return pickUnusedBonusCase("weird-neighbor-court", eligibleCases, session);
}

function buildCourtQuestion(caseItem, pool) {
  const defendant = stateByAbbr.get(caseItem.defendantAbbr);
  return {
    kind: "court",
    bonusId: "weird-neighbor-court",
    modeLabel: "Weird Neighbor Court",
    targetAbbr: caseItem.defendantAbbr,
    plaintiffAbbr: caseItem.plaintiffAbbr,
    defendantAbbr: caseItem.defendantAbbr,
    contextAbbrs: [...caseItem.contextAbbrs],
    caseTitle: caseItem.title,
    testimony: caseItem.testimony,
    audio: caseItem.audio || null,
    prompt: caseItem.prompt,
    expectedLabel: defendant.name,
    choices: buildCourtChoices(caseItem, pool),
    correction: `${defendant.name} is the neighbor in ${caseItem.title}.`
  };
}

function buildEligibleSquareQuestion(session) {
  const caseItem = pickBonusCase("square-off", "cases", session);
  if (!caseItem) return null;
  const target = stateByAbbr.get(caseItem.targetAbbr);
  return {
    kind: "square",
    bonusId: "square-off",
    modeLabel: "Square-Off",
    targetAbbr: caseItem.targetAbbr,
    contextAbbrs: [...caseItem.contextAbbrs],
    prompt: caseItem.prompt,
    screenTitle: "Square-Off",
    caller: "Map shape lab",
    clue: caseItem.clue,
    instruction: "Use the mini-map, then choose one state.",
    expectedLabel: target.name,
    choices: buildAbbrChoices(caseItem.choices, session.pool, caseItem.targetAbbr),
    correction: caseItem.correction || `${target.name} is the state that matches the map clue.`
  };
}

function buildEligibleHotlineQuestion(session) {
  const call = pickBonusCase("borderline-hotline", "calls", session);
  if (!call) return null;
  return buildHotlineQuestionFromCall(call, session);
}

function buildHotlineQuestionFromCall(call, session) {
  const target = stateByAbbr.get(call.targetAbbr);
  return {
    kind: "hotline",
    bonusId: "borderline-hotline",
    modeLabel: "Borderline Hotline",
    targetAbbr: call.targetAbbr,
    prompt: call.prompt,
    screenTitle: "Borderline Hotline",
    caller: call.caller,
    line: call.line,
    audio: call.audio || null,
    expectedLabel: target.name,
    choices: buildAbbrChoices(call.choices, session.pool, call.targetAbbr),
    correction: `${target.name} is the border neighbor on that call.`
  };
}

function buildEligibleCallBreakQuestion(session) {
  const capitalCalls = getEligibleBonusCases("capital-call-in", "calls", session, { preferAudio: true }).map((call) => ({
    gameId: "capital-call-in",
    caseItem: call,
    build: () => buildCapitalCallQuestionFromCall(call, session)
  }));
  const hotlineCalls = getEligibleBonusCases("borderline-hotline", "calls", session).map((call) => ({
    gameId: "borderline-hotline",
    caseItem: call,
    build: () => buildHotlineQuestionFromCall(call, session)
  }));
  const candidates = [...capitalCalls, ...hotlineCalls];
  if (!candidates.length) return null;
  const freshCandidates = candidates.filter((candidate) => !session.usedBonusCaseKeys.includes(bonusCaseKey(candidate.gameId, candidate.caseItem)));
  const picked = randomItem(freshCandidates.length ? freshCandidates : candidates);
  session.usedBonusCaseKeys.push(bonusCaseKey(picked.gameId, picked.caseItem));
  return picked.build();
}

function buildEligibleCapitalCallQuestion(session) {
  const call = pickBonusCase("capital-call-in", "calls", session, { preferAudio: true });
  if (!call) return null;
  return buildCapitalCallQuestionFromCall(call, session);
}

function buildCapitalCallQuestionFromCall(call, session) {
  const target = stateByAbbr.get(call.targetAbbr);
  const answerKind = call.answerKind === "capital" ? "capital" : "state";
  return {
    kind: "call-in",
    bonusId: "capital-call-in",
    modeLabel: "Capital Call-In",
    answerKind,
    targetAbbr: call.targetAbbr,
    prompt: call.prompt,
    screenTitle: "Capital Call-In",
    caller: call.caller,
    line: call.line,
    audio: call.audio || null,
    expectedLabel: answerKind === "capital" ? target.capital : target.name,
    choices: answerKind === "capital"
      ? buildCapitalChoices(call.choices, session.pool, call.targetAbbr)
      : buildAbbrChoices(call.choices, session.pool, call.targetAbbr),
    correction: answerKind === "capital" ? `${target.name}'s capital is ${target.capital}.` : `${target.capital} belongs to ${target.name}.`
  };
}

function buildEligibleTipQuestion(session) {
  const poolSet = new Set(session.pool);
  const eligibleTips = FUNNY_STATE_TIPS.filter((tip) => {
    if (session.regionId === "all") return true;
    return tip.stateAbbrs.some((abbr) => poolSet.has(abbr));
  });
  const tip = randomItem(eligibleTips.length ? eligibleTips : FUNNY_STATE_TIPS);
  return {
    kind: "tip",
    bonusId: "funny-tip",
    modeLabel: "Memory Break",
    targetAbbr: tip.targetAbbr,
    prompt: tip.title,
    title: tip.title,
    label: tip.label,
    visual: tip.visual,
    line: tip.line,
    source: tip.source,
    audio: tip.audio || null,
    correction: tip.line
  };
}

function pickBonusCase(gameId, property, session, options = {}) {
  const eligibleCases = getEligibleBonusCases(gameId, property, session, options);
  if (!eligibleCases.length) return null;
  if (options.preferAudio) {
    const freshAudioCases = eligibleCases.filter((caseItem) => caseItem.audio && !session.usedBonusCaseKeys.includes(bonusCaseKey(gameId, caseItem)));
    if (freshAudioCases.length) return pickUnusedBonusCase(gameId, freshAudioCases, session);
  }
  return pickUnusedBonusCase(gameId, eligibleCases, session);
}

function hasEligibleBonusCase(gameId, property, session, options = {}) {
  return getEligibleBonusCases(gameId, property, session, options).length > 0;
}

function getEligibleBonusCases(gameId, property, session, options = {}) {
  const game = BONUS_GAMES.find((candidate) => candidate.id === gameId);
  if (!game) return [];
  const poolSet = new Set(session.pool);
  let eligibleCases = game[property].filter((caseItem) => {
    if (session.regionId === "all") return true;
    return caseStates(caseItem).some((abbr) => poolSet.has(abbr));
  });
  if (options.preferAudio && eligibleCases.some((caseItem) => caseItem.audio)) {
    eligibleCases = eligibleCases.filter((caseItem) => caseItem.audio);
  }
  return eligibleCases;
}

function pickUnusedBonusCase(gameId, cases, session) {
  if (!cases.length) return null;
  const freshCases = cases.filter((caseItem) => !session.usedBonusCaseKeys.includes(bonusCaseKey(gameId, caseItem)));
  const picked = randomItem(freshCases.length ? freshCases : cases);
  session.usedBonusCaseKeys.push(bonusCaseKey(gameId, picked));
  return picked;
}

function bonusCaseKey(gameId, caseItem) {
  return `${gameId}:${caseItem.targetAbbr || caseItem.destinationAbbr}:${caseItem.prompt || caseItem.title}`;
}

function buildAbbrChoices(abbrs, pool, correctAbbr) {
  const choices = [...new Set([correctAbbr, ...abbrs])];
  const decoys = shuffle(pool.filter((abbr) => !choices.includes(abbr)));
  decoys.forEach((abbr) => {
    if (choices.length < 4) choices.push(abbr);
  });
  while (choices.length < 4) {
    const abbr = randomItem(allAbbrs);
    if (!choices.includes(abbr)) choices.push(abbr);
  }
  return shuffle(choices.slice(0, 4)).map((abbr) => ({
    abbr,
    label: stateByAbbr.get(abbr).name
  }));
}

function buildCapitalChoices(abbrs, pool, correctAbbr) {
  const choices = [...new Set([correctAbbr, ...abbrs])];
  const decoys = shuffle(pool.filter((abbr) => !choices.includes(abbr)));
  decoys.forEach((abbr) => {
    if (choices.length < 4) choices.push(abbr);
  });
  while (choices.length < 4) {
    const abbr = randomItem(allAbbrs);
    if (!choices.includes(abbr)) choices.push(abbr);
  }
  return shuffle(choices.slice(0, 4)).map((abbr) => ({
    abbr,
    label: stateByAbbr.get(abbr).capital
  }));
}

function buildCourtChoices(caseItem, pool) {
  const included = new Set([caseItem.defendantAbbr, caseItem.plaintiffAbbr, ...caseItem.contextAbbrs]);
  const sessionPool = pool && pool.length ? pool : allAbbrs;
  const choices = [...included];
  const decoys = shuffle(sessionPool.filter((abbr) => !included.has(abbr)));
  decoys.forEach((abbr) => {
    if (choices.length < 4) choices.push(abbr);
  });
  while (choices.length < 4) {
    const abbr = randomItem(allAbbrs);
    if (!choices.includes(abbr)) choices.push(abbr);
  }
  return shuffle(choices.slice(0, 4)).map((abbr) => ({
    abbr,
    label: stateByAbbr.get(abbr).name
  }));
}

function caseStates(caseItem) {
  return [
    caseItem.targetAbbr,
    caseItem.plaintiffAbbr,
    caseItem.defendantAbbr,
    ...(caseItem.contextAbbrs || [])
  ].filter(Boolean);
}

function routeStates(route) {
  return [
    route.originAbbr,
    route.destinationAbbr,
    ...route.avoidAbbrs,
    ...route.checkpointAbbrs,
    ...route.allowedAbbrs
  ];
}

function renderQuestion() {
  const question = appState.currentQuestion;
  const session = appState.session;
  clearIntroLock();
  stopStudyAudio();
  els.gameScreen.classList.remove("study-mode");
  els.gameScreen.classList.toggle("court-mode", question.kind === "court");
  els.gameScreen.classList.toggle("drive-mode", question.kind === "drive");
  els.gameScreen.classList.toggle("tip-mode", question.kind === "tip");
  els.gameScreen.classList.toggle("square-mode", question.kind === "square");
  els.gameScreen.classList.toggle("hotline-mode", question.kind === "hotline");
  els.gameScreen.classList.toggle("callin-mode", question.kind === "call-in");
  els.gameScreen.classList.toggle("interruption-mode", isInterruptionQuestion(question));
  els.sessionMeter.textContent = `Question ${session.index} of ${session.total}`;
  els.streakPill.textContent = `Streak ${session.streak}`;
  els.scorePill.textContent = `Score ${session.correct}`;
  els.modeBadge.textContent = question.modeLabel;
  els.questionPrompt.textContent = question.prompt;
  clearFeedback();
  if (question.kind === "drive") prepareDriveState(question);
  renderAnswerArea(question);
  renderMap();
  playQuestionIntro(question);
}

function renderAnswerArea(question) {
  els.answerArea.innerHTML = "";
  if (question.kind === "tip") {
    renderTipBreak(question);
    return;
  }
  if (question.kind === "court") {
    renderCourtControls(question);
    return;
  }
  if (isChoiceMiniQuestion(question)) {
    renderArcadeMiniControls(question);
    return;
  }
  if (question.kind === "drive") {
    renderDriveControls(question);
    return;
  }
  if (question.kind === "map") {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "Use the whole-country map. Click the state shape.";
    els.answerArea.appendChild(note);
    return;
  }
  if (question.kind === "choice") {
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice;
      button.addEventListener("click", () => handleChoice(choice, button));
      els.answerArea.appendChild(button);
    });
    return;
  }
  const form = document.createElement("form");
  form.className = "typed-form";
  form.innerHTML = `
    <input id="typedAnswer" type="text" autocomplete="off" placeholder="Type answer here" aria-label="Typed answer">
    <button class="primary-button" type="submit">Check</button>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    handleTyped(input.value, input);
  });
  els.answerArea.appendChild(form);
  form.querySelector("input").focus();
}

function isChoiceMiniQuestion(question) {
  return question && ["square", "hotline", "call-in"].includes(question.kind);
}

function isInterruptionQuestion(question) {
  return question && ["court", "square", "hotline", "call-in", "tip"].includes(question.kind);
}

function renderDriveControls(question) {
  const origin = stateByAbbr.get(question.originAbbr);
  const destination = stateByAbbr.get(question.destinationAbbr);
  const avoid = question.avoidAbbrs.map((abbr) => stateByAbbr.get(abbr).name).join(", ") || "None";
  const checkpoints = question.checkpointAbbrs.map((abbr) => stateByAbbr.get(abbr).name).join(", ") || "None";
  const panel = document.createElement("div");
  panel.className = "drive-panel";
  panel.innerHTML = `
    <p class="drive-label">Start</p>
    <p><strong>${origin.name}</strong> to <strong>${destination.name}</strong></p>
    <p class="drive-rule">Avoid: ${avoid}</p>
    <p class="drive-rule">Checkpoint: ${checkpoints}</p>
    <p id="driveStatus" class="drive-status">Listen first. The route unlocks after the intro.</p>
    <div id="driveClickChoices" class="drive-click-choices" hidden></div>
    <div class="drive-actions">
      <button id="driveRetry" class="utility-button" type="button" disabled data-intro-locked="true">Start over</button>
      <button id="driveFallback" class="utility-button" type="button" disabled data-intro-locked="true">Use click route</button>
    </div>
  `;
  els.answerArea.appendChild(panel);
  document.getElementById("driveRetry").addEventListener("click", () => resetDriveQuestion("Back at the starting line."));
  document.getElementById("driveFallback").addEventListener("click", () => showClickRouteFallback(question));
}

function renderCourtControls(question) {
  const panel = document.createElement("div");
  panel.className = "court-panel";
  panel.innerHTML = `
    <div class="court-logo" aria-label="Weird Neighbor Court">
      <span class="court-logo-small">Weird</span>
      <strong>Neighbor Court</strong>
      <span class="court-logo-bang" aria-hidden="true">!</span>
    </div>
    <div class="court-gavel" aria-hidden="true">
      <span class="gavel-head"></span>
      <span class="gavel-handle"></span>
      <span class="gavel-block"></span>
    </div>
    <p class="court-case">Case file: ${question.caseTitle}</p>
    <p class="court-testimony">${question.testimony}</p>
    <p id="courtStatus" class="court-status">Listen first, then choose the state on trial.</p>
    <div class="court-choices"></div>
  `;
  const choicesContainer = panel.querySelector(".court-choices");
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button court-choice";
    button.textContent = choice.label;
    button.disabled = true;
    button.dataset.introLocked = "true";
    button.addEventListener("click", () => handleCourtChoice(choice.abbr, button));
    choicesContainer.appendChild(button);
  });
  els.answerArea.appendChild(panel);
}

function renderArcadeMiniControls(question) {
  const panel = document.createElement("div");
  panel.className = `arcade-panel ${question.kind}-panel`;
  panel.innerHTML = `
    <div class="arcade-marquee">
      <span>${question.screenTitle}</span>
      <span aria-hidden="true">${question.screenTitle}</span>
    </div>
    ${renderMiniVisual(question)}
    <p class="arcade-caller">${question.caller || "Arcade desk"}</p>
    <p class="arcade-line">${question.line || question.clue}</p>
    ${renderReplayAudioButton(question)}
    <p id="miniStatus" class="arcade-status">Listen first. Choices unlock after the intro.</p>
    <div class="arcade-choices"></div>
  `;
  const choicesContainer = panel.querySelector(".arcade-choices");
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button arcade-choice";
    button.textContent = choice.label;
    button.disabled = true;
    button.dataset.introLocked = "true";
    button.addEventListener("click", () => handleMiniChoice(choice.abbr, button));
    choicesContainer.appendChild(button);
  });
  const replayButton = panel.querySelector("[data-replay-audio]");
  if (replayButton) {
    replayButton.addEventListener("click", () => replayMiniAudio(replayButton.dataset.replayAudio));
  }
  els.answerArea.appendChild(panel);
}

function renderReplayAudioButton(question) {
  if (question.kind !== "call-in" || !question.audio) return "";
  return `<button class="utility-button replay-audio-button" type="button" disabled data-intro-locked="true" data-replay-audio="${escapeHtml(question.audio)}">Replay audio</button>`;
}

function renderMiniVisual(question) {
  if (question.kind === "square") {
    return `
      <div class="square-visual map-tip-visual">
        ${renderSquareMapVisual(question)}
      </div>
    `;
  }
  if (question.kind === "hotline") {
    return `
      <div class="hotline-visual" aria-hidden="true">
        <span class="phone-body"></span>
        <span class="phone-cord"></span>
        <span class="phone-light"></span>
      </div>
    `;
  }
  return `
    <div class="callin-visual" aria-hidden="true">
      <span class="radio-tower"></span>
      <span class="radio-wave one"></span>
      <span class="radio-wave two"></span>
      <span class="radio-desk"></span>
    </div>
  `;
}

function renderTipBreak(question) {
  const panel = document.createElement("div");
  panel.className = `tip-panel tip-${question.visual}`;
  panel.innerHTML = `
    <div class="tip-bumper">
      <span>Memory Break</span>
      <strong>${question.label}</strong>
    </div>
    ${renderTipVisual(question)}
    <p class="tip-title">${question.title}</p>
    <p class="tip-line">${question.line}</p>
    <p class="tip-source">${question.source}</p>
    <p id="tipStatus" class="arcade-status">Listen first. Continue unlocks after the intro.</p>
    <button id="continueTip" class="primary-button" type="button" disabled data-intro-locked="true">Back to Boss Round</button>
  `;
  els.answerArea.appendChild(panel);
  const revealMimal = document.getElementById("revealMimal");
  if (revealMimal) revealMimal.addEventListener("click", showMimalBonusStage);
  document.getElementById("continueTip").addEventListener("click", continueTip);
}

function renderTipVisual(question) {
  const visual = question.visual;
  if (visual === "old-mon") {
    return `
      <div class="tip-visual map-tip-visual old-mon-visual">
        ${renderOldMonMapSvg()}
      </div>
    `;
  }
  if (visual === "mimal") {
    return `
      <div class="tip-visual map-tip-visual mimal-map-tip" id="mimalMapTip">
        ${renderMimalMapSvg(false)}
      </div>
      <p id="mimalStageText" class="tip-stage-text">First find Chef MIMAL: Minnesota is the hat, Iowa is the face, Missouri is the belly, Arkansas is the pants, and Louisiana is the boot.</p>
      <button id="revealMimal" class="utility-button tip-reveal" type="button">Add Kentucky and Tennessee</button>
    `;
  }
  if (visual === "mag") {
    return `
      <div class="tip-visual map-tip-visual mag-visual">
        ${renderMagMapSvg()}
      </div>
    `;
  }
  if (visual === "cow") {
    return `
      <div class="tip-visual map-tip-visual cow-visual">
        ${renderCowMapSvg()}
      </div>
    `;
  }
  if (visual === "can-pan") {
    return `
      <div class="tip-visual map-tip-visual can-pan-visual">
        ${renderCanPanMapSvg()}
      </div>
    `;
  }
  if (visual === "twins") {
    return `
      <div class="tip-visual map-tip-visual twins-visual">
        ${renderDakotaTwinsMapSvg()}
      </div>
    `;
  }
  return `
    <div class="tip-visual map-tip-visual new-england-visual">
      ${renderNewEnglandMapSvg()}
    </div>
  `;
}

function showMimalBonusStage() {
  const map = document.getElementById("mimalMapTip");
  const text = document.getElementById("mimalStageText");
  const button = document.getElementById("revealMimal");
  if (!map || !text || !button) return;
  map.innerHTML = renderMimalMapSvg(true);
  text.textContent = "Now add Kentucky and Tennessee: Kentucky is the fried-chicken piece, and Tennessee is the long frying pan underneath it.";
  button.hidden = true;
  playTipStinger();
}

function renderMimalMapSvg(showBonus) {
  const abbrs = showBonus ? ["MN", "IA", "MO", "AR", "LA", "KY", "TN"] : ["MN", "IA", "MO", "AR", "LA"];
  const labels = [
    { abbr: "MN", text: "Minnesota = hat", dx: -118, dy: -34 },
    { abbr: "IA", text: "Iowa = face", dx: -88, dy: 0 },
    { abbr: "MO", text: "Missouri = belly", dx: 48, dy: -2 },
    { abbr: "AR", text: "Arkansas = pants", dx: 52, dy: 34 },
    { abbr: "LA", text: "Louisiana = boot", dx: -18, dy: 54 }
  ];
  if (showBonus) {
    labels.push(
      { abbr: "KY", text: "Kentucky = fried chicken", dx: 72, dy: -48 },
      { abbr: "TN", text: "Tennessee = frying pan", dx: 88, dy: 38 }
    );
  }
  return renderStateTipSvg(abbrs, labels, {
    className: showBonus ? "mimal-svg mimal-svg-bonus" : "mimal-svg",
    describedBy: showBonus ? "Chef MIMAL plus Kentucky and Tennessee" : "Chef MIMAL state stack",
    mimal: true,
    bonus: showBonus
  });
}

function renderOldMonMapSvg() {
  return renderStateTipSvg(["ID", "MT"], [
    { abbr: "ID", text: "Idaho = neighbor", dx: -96, dy: 32 },
    { abbr: "MT", text: "Montana = face", dx: 62, dy: -36 }
  ], {
    className: "old-mon-svg",
    describedBy: "Idaho west of Montana with Old Mon Montana face",
    groupClass: "old-mon",
    overlay: renderOldMonSpeechBubble()
  });
}

function renderSquareMapVisual(question) {
  const labels = question.contextAbbrs.map((abbr) => {
    const offsets = squareLabelOffset(abbr, question.contextAbbrs);
    return { abbr, text: abbr, dx: offsets.dx, dy: offsets.dy };
  });
  return renderStateTipSvg(question.contextAbbrs, labels, {
    className: "square-map-svg",
    describedBy: `${question.screenTitle} map clue`,
    groupClass: "square"
  });
}

function squareLabelOffset(abbr, abbrs) {
  const index = abbrs.indexOf(abbr);
  const pattern = [
    { dx: -42, dy: -18 },
    { dx: 28, dy: -16 },
    { dx: -40, dy: 34 },
    { dx: 34, dy: 34 }
  ];
  return pattern[index % pattern.length];
}

function renderCanPanMapSvg() {
  return renderStateTipSvg([
    "KS",
    "OK"
  ], [
    { abbr: "KS", text: "Kansas = can", dx: -74, dy: -28 },
    { abbr: "OK", text: "Oklahoma = pan", dx: 54, dy: 36 }
  ], {
    className: "can-pan-svg",
    describedBy: "Kansas can pouring into Oklahoma pan",
    canPan: true
  });
}

function renderMagMapSvg() {
  return renderStateTipSvg(["MS", "AL", "GA"], [
    { abbr: "MS", text: "M = Mississippi", dx: -100, dy: -36 },
    { abbr: "AL", text: "A = Alabama", dx: -16, dy: 54 },
    { abbr: "GA", text: "G = Georgia", dx: 54, dy: -32 }
  ], {
    className: "mag-svg",
    describedBy: "Mississippi Alabama Georgia in west to east order",
    groupClass: "mag"
  });
}

function renderCowMapSvg() {
  return renderStateTipSvg(["CA", "OR", "WA"], [
    { abbr: "WA", text: "W = Washington", dx: 56, dy: -20 },
    { abbr: "OR", text: "O = Oregon", dx: 68, dy: 8 },
    { abbr: "CA", text: "C = California", dx: 58, dy: 54 }
  ], {
    className: "cow-svg",
    describedBy: "California Oregon Washington spelling COW south to north",
    groupClass: "cow"
  });
}

function renderDakotaTwinsMapSvg() {
  return renderStateTipSvg(["ND", "SD"], [
    { abbr: "ND", text: "North = top twin", dx: 52, dy: -28 },
    { abbr: "SD", text: "South = bottom twin", dx: 56, dy: 34 }
  ], {
    className: "twins-svg",
    describedBy: "North Dakota stacked above South Dakota",
    groupClass: "twins"
  });
}

function renderNewEnglandMapSvg() {
  return renderStateTipSvg(["VT", "NH", "ME"], [
    { abbr: "VT", text: "Vermont = west", dx: -118, dy: 8 },
    { abbr: "NH", text: "New Hampshire = middle", dx: 36, dy: 44 },
    { abbr: "ME", text: "Maine = east", dx: 58, dy: -34 }
  ], {
    className: "new-england-svg",
    describedBy: "Vermont west of New Hampshire and Maine east",
    groupClass: "new-england"
  });
}

function renderStateTipSvg(abbrs, labels, options = {}) {
  if (!geoData) return '<p class="map-error">Map memory trick loading...</p>';
  const bounds = stateTipBounds(abbrs);
  if (!bounds) return '<p class="map-error">Map memory trick could not load.</p>';
  const expandedBounds = { ...bounds };
  labels.forEach((label) => {
    const point = getStateCenter(label.abbr);
    const x = point[0] + label.dx;
    const y = point[1] + label.dy;
    const textWidth = Math.max(76, label.text.length * 6.2);
    expandedBounds.minX = Math.min(expandedBounds.minX, x - 8);
    expandedBounds.maxX = Math.max(expandedBounds.maxX, x + textWidth + 8);
    expandedBounds.minY = Math.min(expandedBounds.minY, y - 22);
    expandedBounds.maxY = Math.max(expandedBounds.maxY, y + 12);
  });
  const padX = Math.max(18, (expandedBounds.maxX - expandedBounds.minX) * 0.08);
  const padY = Math.max(18, (expandedBounds.maxY - expandedBounds.minY) * 0.12);
  const viewBox = [
    (expandedBounds.minX - padX).toFixed(1),
    (expandedBounds.minY - padY).toFixed(1),
    (expandedBounds.maxX - expandedBounds.minX + padX * 2).toFixed(1),
    (expandedBounds.maxY - expandedBounds.minY + padY * 2).toFixed(1)
  ].join(" ");
  const paths = abbrs.map((abbr) => {
    const feature = getStateFeature(abbr);
    if (!feature) return "";
    const state = stateByAbbr.get(abbr);
    const classes = ["tip-state-shape", `tip-state-${abbr.toLowerCase()}`];
    if (options.groupClass) classes.push(`tip-state-${options.groupClass}`);
    if (options.bonus && (abbr === "KY" || abbr === "TN")) classes.push("tip-state-bonus");
    if (options.mimal && ["MN", "IA", "MO", "AR", "LA"].includes(abbr)) classes.push("tip-state-mimal");
    if (options.canPan) classes.push("tip-state-canpan");
    return `<path class="${classes.join(" ")}" d="${featureToPath(feature)}" aria-label="${state.name}"></path>`;
  }).join("");
  const labelMarkup = labels.map((label) => renderTipAnnotation(label)).join("");
  const canPanPour = options.canPan ? renderCanPanPourLine() : "";
  const overlay = options.overlay || "";
  return `
    <svg class="tip-map-svg ${options.className || ""}" viewBox="${viewBox}" role="img" aria-label="${escapeHtml(options.describedBy || "Map memory trick")}">
      <rect class="tip-map-bg" x="${(expandedBounds.minX - padX).toFixed(1)}" y="${(expandedBounds.minY - padY).toFixed(1)}" width="${(expandedBounds.maxX - expandedBounds.minX + padX * 2).toFixed(1)}" height="${(expandedBounds.maxY - expandedBounds.minY + padY * 2).toFixed(1)}"></rect>
      ${paths}
      ${canPanPour}
      ${overlay}
      ${labelMarkup}
    </svg>
  `;
}

function renderTipAnnotation(label) {
  const point = getStateCenter(label.abbr);
  const x = point[0] + label.dx;
  const y = point[1] + label.dy;
  const anchorX = point[0];
  const anchorY = point[1];
  const textWidth = Math.max(76, label.text.length * 6.2);
  return `
    <g class="tip-annotation">
      <line x1="${anchorX.toFixed(1)}" y1="${anchorY.toFixed(1)}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"></line>
      <rect x="${(x - 4).toFixed(1)}" y="${(y - 15).toFixed(1)}" width="${textWidth.toFixed(1)}" height="21" rx="3"></rect>
      <text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${escapeHtml(label.text)}</text>
    </g>
  `;
}

function renderOldMonSpeechBubble() {
  const montana = getStateCenter("MT");
  const idaho = getStateCenter("ID");
  const x = idaho[0] + (montana[0] - idaho[0]) * 0.46;
  const y = Math.min(idaho[1], montana[1]) - 48;
  return `
    <g class="old-mon-speech" aria-hidden="true">
      <path d="M${(x - 78).toFixed(1)},${(y - 26).toFixed(1)} h132 q12 0 12 12 v32 q0 12 -12 12 h-64 l-24 24 l8 -24 h-44 q-12 0 -12 -12 v-32 q0 -12 12 -12 Z"></path>
      <text x="${(x - 62).toFixed(1)}" y="${(y - 1).toFixed(1)}">I dunno?</text>
    </g>
  `;
}

function renderCanPanPourLine() {
  const kansas = getStateCenter("KS");
  const oklahoma = getStateCenter("OK");
  const startX = kansas[0] + 34;
  const startY = kansas[1] + 6;
  const endX = oklahoma[0] - 42;
  const endY = oklahoma[1] + 4;
  return `
    <g class="can-pan-pour" aria-hidden="true">
      <path d="M${startX.toFixed(1)},${startY.toFixed(1)} C${(startX + 46).toFixed(1)},${(startY + 28).toFixed(1)} ${(endX - 48).toFixed(1)},${(endY - 12).toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}"></path>
      <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="5"></circle>
    </g>
  `;
}

function renderMap() {
  if (!geoData) return;
  const region = getRegion(appState.selectedRegionId || "all");
  const question = appState.currentQuestion;
  const studyAudioMap = isStudyGuideActive() ? getCapitalCallAudioMap() : null;
  const activeSet = studyAudioMap || new Set(region.states);
  const targetAbbr = question ? question.targetAbbr : null;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 960 600");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Clickable map of the United States");
  if (question && question.kind === "drive") svg.classList.add("driving-map");

  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  background.setAttribute("x", "0");
  background.setAttribute("y", "0");
  background.setAttribute("width", "960");
  background.setAttribute("height", "600");
  background.setAttribute("fill", "#d7ebcf");
  svg.appendChild(background);

  addInsetBox(svg, 58, 392, 232, 152);
  addInsetBox(svg, 310, 454, 158, 88);

  geoData.features.forEach((feature) => {
    const abbr = feature.properties.STUSPS;
    const state = stateByAbbr.get(abbr);
    if (!state) return;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", featureToPath(feature));
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", state.name);
    path.dataset.abbr = abbr;
    path.classList.add("state-shape", "clickable");
    path.classList.toggle("in-region", activeSet.has(abbr));
    path.classList.toggle("out-region", !activeSet.has(abbr));
    path.classList.toggle("study-audio-ready", Boolean(studyAudioMap && studyAudioMap.has(abbr)));
    if (shouldPreviewTarget(question) && abbr === targetAbbr) path.classList.add("target-preview");
    if (appState.lastClickedAbbr === abbr && abbr !== targetAbbr) path.classList.add("missed");
    if (appState.session && appState.session.answered && abbr === targetAbbr) path.classList.add("correct");
    path.addEventListener("click", () => handleMapClick(abbr));
    path.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleMapClick(abbr);
      }
    });
    svg.appendChild(path);
  });

  if (question && question.kind === "drive") {
    addDriveCar(svg);
    bindDriveEvents(svg);
  }

  els.mapStage.innerHTML = "";
  els.mapStage.appendChild(svg);
}

function showMapCoach(kind, title, text, state, showNext, options = {}) {
  removeMapCoach();
  const panel = document.createElement("div");
  panel.className = `map-coach ${kind}`;
  panel.classList.add(mapCoachPlacement(state));
  panel.dataset.advanceOnDismiss = options.advanceOnDismiss ? "true" : "false";
  const help = state ? getCapitalHelp(state.abbr) : null;
  const hasMnemonic = Object.prototype.hasOwnProperty.call(options, "mnemonic");
  const hasFact = Object.prototype.hasOwnProperty.call(options, "fact");
  const mnemonic = hasMnemonic ? options.mnemonic : (help ? help.mnemonic : "");
  const fact = hasFact ? options.fact : (help ? help.fact : "");
  panel.innerHTML = `
    <button class="map-coach-close" type="button" aria-label="Hide hint">X</button>
    <p class="map-coach-title">${escapeHtml(title)}</p>
    <p class="map-coach-text">${escapeHtml(text)}</p>
    ${mnemonic ? `<div class="map-coach-memory"><strong>Memory hook</strong><span>${escapeHtml(mnemonic)}</span></div>` : ""}
    ${fact ? `<div class="map-coach-fact"><strong>Capital fact</strong><span>${escapeHtml(fact)}</span></div>` : ""}
    ${showNext ? '<button class="primary-button map-coach-next" type="button">Next</button>' : ""}
  `;
  els.mapStage.appendChild(panel);
  const closeButton = panel.querySelector(".map-coach-close");
  if (closeButton) closeButton.addEventListener("click", dismissMapCoach);
  const nextButton = panel.querySelector(".map-coach-next");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      clearAdvanceTimer();
      nextQuestion();
    });
  }
}

function removeMapCoach() {
  const coach = els.mapStage.querySelector(".map-coach");
  if (coach) coach.remove();
}

function dismissMapCoach() {
  const coach = els.mapStage.querySelector(".map-coach");
  const shouldAdvance = coach && coach.dataset.advanceOnDismiss === "true";
  if (isStudyGuideActive()) stopStudyAudio();
  removeMapCoach();
  if (shouldAdvance) {
    clearAdvanceTimer();
    nextQuestion();
  }
}

function clearAdvanceTimer() {
  if (!appState.advanceTimer) return;
  window.clearTimeout(appState.advanceTimer);
  appState.advanceTimer = null;
}

function mapCoachPlacement(state) {
  if (!state) return "coach-top-right";
  const [x, y] = getStateCenter(state.abbr);
  const vertical = y < 300 ? "bottom" : "top";
  const horizontal = x < 480 ? "right" : "left";
  return `coach-${vertical}-${horizontal}`;
}

function addDriveCar(svg) {
  const driveData = appState.driveData;
  if (!driveData || !driveData.hasStarted) return;
  const car = document.createElementNS("http://www.w3.org/2000/svg", "g");
  car.setAttribute("class", "drive-car");
  car.setAttribute("transform", `translate(${driveData.carX.toFixed(2)} ${driveData.carY.toFixed(2)})`);
  car.innerHTML = `
    <rect x="-15" y="-8" width="30" height="16" rx="4"></rect>
    <rect x="-7" y="-14" width="14" height="9" rx="3"></rect>
    <circle cx="-9" cy="10" r="4"></circle>
    <circle cx="9" cy="10" r="4"></circle>
  `;
  svg.appendChild(car);
}

function ensureDriveCar(svg) {
  if (els.mapStage.querySelector(".drive-car")) return;
  addDriveCar(svg);
}

function bindDriveEvents(svg) {
  svg.addEventListener("pointerdown", handleDrivePointerDown);
  svg.addEventListener("pointermove", handleDrivePointerMove);
  svg.addEventListener("pointerup", handleDrivePointerUp);
  svg.addEventListener("pointercancel", handleDrivePointerUp);
  svg.addEventListener("pointerleave", handleDrivePointerUp);
}

function prepareDriveState(question) {
  const start = getStateCenter(question.originAbbr);
  appState.driveData = {
    carX: start[0],
    carY: start[1],
    hasStarted: false,
    dragging: false,
    pausedUntilPointerUp: false,
    lastAbbr: question.originAbbr,
    visited: new Set([question.originAbbr]),
    checkpointsVisited: new Set()
  };
}

function handleDrivePointerDown(event) {
  const question = appState.currentQuestion;
  if (!question || question.kind !== "drive" || appState.session.answered || appState.introLocked) return;
  event.preventDefault();
  ensureAudio();
  appState.driveData.hasStarted = true;
  appState.driveData.dragging = true;
  appState.driveData.pausedUntilPointerUp = false;
  ensureDriveCar(event.currentTarget);
  if (event.currentTarget.setPointerCapture) event.currentTarget.setPointerCapture(event.pointerId);
  updateDriveFromPointer(event, event.currentTarget);
}

function handleDrivePointerMove(event) {
  const question = appState.currentQuestion;
  const driveData = appState.driveData;
  if (!question || question.kind !== "drive" || appState.session.answered || !driveData || !driveData.dragging) return;
  event.preventDefault();
  updateDriveFromPointer(event, event.currentTarget);
}

function handleDrivePointerUp(event) {
  if (!appState.driveData) return;
  appState.driveData.dragging = false;
  appState.driveData.pausedUntilPointerUp = false;
  if (event.currentTarget.releasePointerCapture) {
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Pointer capture may already be gone; no user-facing action needed.
    }
  }
}

function updateDriveFromPointer(event, svg) {
  const driveData = appState.driveData;
  if (!driveData || driveData.pausedUntilPointerUp) return;
  const point = svgPointFromEvent(svg, event);
  driveData.carX = clamp(point.x, 0, 960);
  driveData.carY = clamp(point.y, 0, 600);
  ensureDriveCar(svg);
  moveCarMarker();
  const abbr = stateAbbrFromPointer(event);
  if (abbr) processDriveState(abbr);
}

function processDriveState(abbr, snapToState = false) {
  const question = appState.currentQuestion;
  const driveData = appState.driveData;
  if (!question || question.kind !== "drive" || !driveData || appState.session.answered || appState.introLocked || !stateByAbbr.has(abbr)) return;
  if (snapToState) {
    const center = getStateCenter(abbr);
    driveData.carX = center[0];
    driveData.carY = center[1];
    driveData.hasStarted = true;
    renderMap();
    moveCarMarker();
  }
  if (abbr === driveData.lastAbbr && abbr !== question.destinationAbbr) return;
  driveData.lastAbbr = abbr;
  driveData.visited.add(abbr);

  if (question.avoidAbbrs.includes(abbr)) {
    const avoidName = stateByAbbr.get(abbr).name;
    failDrive(`Road closed: you touched ${avoidName}. Try again from ${stateByAbbr.get(question.originAbbr).name}.`);
    return;
  }

  if (question.allowedAbbrs.length && !question.allowedAbbrs.includes(abbr)) {
    failDrive(`${stateByAbbr.get(abbr).name} is outside this route. Back to the start.`);
    return;
  }

  if (question.checkpointAbbrs.includes(abbr)) {
    driveData.checkpointsVisited.add(abbr);
    updateDriveStatus(`Checkpoint reached: ${stateByAbbr.get(abbr).name}. Now head for ${stateByAbbr.get(question.destinationAbbr).name}.`);
    playTone(420, 80, "triangle");
    return;
  }

  if (abbr === question.destinationAbbr) {
    const missing = question.checkpointAbbrs.filter((checkpoint) => !driveData.checkpointsVisited.has(checkpoint));
    if (missing.length) {
      updateDriveStatus(`Almost. Stop in ${missing.map((code) => stateByAbbr.get(code).name).join(", ")} before the finish.`);
      playTone(230, 90, "square");
      return;
    }
    completeCorrect("Road trip complete", `${question.correction} Bonus point unlocked.`);
    return;
  }

  updateDriveStatus(`Cruising through ${stateByAbbr.get(abbr).name}. Keep going.`);
}

function failDrive(message) {
  const question = appState.currentQuestion;
  const driveData = appState.driveData;
  if (!question || !driveData) return;
  const start = getStateCenter(question.originAbbr);
  driveData.carX = start[0];
  driveData.carY = start[1];
  driveData.hasStarted = false;
  driveData.dragging = false;
  driveData.pausedUntilPointerUp = true;
  driveData.lastAbbr = question.originAbbr;
  driveData.visited = new Set([question.originAbbr]);
  driveData.checkpointsVisited = new Set();
  moveCarMarker();
  updateDriveStatus(message);
  playTone(130, 160, "sawtooth");
}

function resetDriveQuestion(message) {
  const question = appState.currentQuestion;
  if (!question || question.kind !== "drive") return;
  prepareDriveState(question);
  renderMap();
  updateDriveStatus(message);
}

function updateDriveStatus(message) {
  const status = document.getElementById("driveStatus");
  if (status) status.textContent = message;
}

function showClickRouteFallback(question) {
  const choicesContainer = document.getElementById("driveClickChoices");
  if (!choicesContainer || appState.introLocked) return;
  const routeCodes = [...new Set([question.originAbbr, ...question.checkpointAbbrs, question.destinationAbbr, ...question.avoidAbbrs])];
  const sessionPool = appState.session ? appState.session.pool : allAbbrs;
  const decoys = sessionPool.filter((abbr) => !routeCodes.includes(abbr));
  const choices = shuffle([...routeCodes, ...shuffle(decoys).slice(0, 3)]);
  choicesContainer.innerHTML = "";
  choices.forEach((abbr) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button compact-choice";
    button.textContent = stateByAbbr.get(abbr).name;
    button.addEventListener("click", () => processDriveState(abbr, true));
    choicesContainer.appendChild(button);
  });
  choicesContainer.hidden = false;
  updateDriveStatus("Click the states in route order. Avoid road-closed states.");
}

function moveCarMarker() {
  const driveData = appState.driveData;
  const car = els.mapStage.querySelector(".drive-car");
  if (!driveData || !car) return;
  car.setAttribute("transform", `translate(${driveData.carX.toFixed(2)} ${driveData.carY.toFixed(2)})`);
}

function svgPointFromEvent(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function stateAbbrFromPointer(event) {
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const stateShape = element && element.closest ? element.closest(".state-shape") : null;
  return stateShape ? stateShape.dataset.abbr : null;
}

function getStateCenter(abbr) {
  const feature = getStateFeature(abbr);
  if (!feature) return [480, 300];
  return featureLabelPoint(feature) || [480, 300];
}

function getStateFeature(abbr) {
  if (!geoData) return null;
  return geoData.features.find((feature) => feature.properties.STUSPS === abbr) || null;
}

function stateTipBounds(abbrs) {
  if (!geoData) return null;
  const bounds = {
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY
  };
  abbrs.forEach((abbr) => {
    const feature = getStateFeature(abbr);
    if (!feature) return;
    forEachProjectedPoint(feature, (x, y) => {
      bounds.minX = Math.min(bounds.minX, x);
      bounds.minY = Math.min(bounds.minY, y);
      bounds.maxX = Math.max(bounds.maxX, x);
      bounds.maxY = Math.max(bounds.maxY, y);
    });
  });
  if (!Number.isFinite(bounds.minX)) return null;
  return bounds;
}

function forEachProjectedPoint(feature, callback) {
  const abbr = feature.properties.STUSPS;
  const geometry = feature.geometry;
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  polygons.forEach((polygon) => {
    polygon.forEach((ring) => {
      ring.forEach((point) => {
        const [x, y] = projectPoint(point[0], point[1], abbr);
        callback(x, y);
      });
    });
  });
}

function addInsetBox(svg, x, y, width, height) {
  const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("x", x);
  box.setAttribute("y", y);
  box.setAttribute("width", width);
  box.setAttribute("height", height);
  box.setAttribute("class", "inset-box");
  svg.appendChild(box);
}

function shouldPreviewTarget(question) {
  return question && (question.kind === "choice" || question.kind === "type") && question.answerKind !== "state";
}

function featureToPath(feature) {
  const abbr = feature.properties.STUSPS;
  const geometry = feature.geometry;
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.map((polygon) => polygon.map((ring) => {
    return ring.map((point, index) => {
      const [x, y] = projectPoint(point[0], point[1], abbr);
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ") + " Z";
  }).join(" ")).join(" ");
}

function featureLabelPoint(feature) {
  const abbr = feature.properties.STUSPS;
  const geometry = feature.geometry;
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  let xTotal = 0;
  let yTotal = 0;
  let count = 0;
  polygons.forEach((polygon) => {
    polygon[0].forEach((point, index) => {
      if (index % 8 !== 0) return;
      const [x, y] = projectPoint(point[0], point[1], abbr);
      xTotal += x;
      yTotal += y;
      count += 1;
    });
  });
  if (!count) return null;
  return [xTotal / count, yTotal / count];
}

function projectPoint(lonInput, lat, abbr) {
  let lon = lonInput;
  if (abbr === "AK") {
    if (lon > 0) lon -= 360;
    return [70 + (lon + 179) * 3.9, 530 - (lat - 51) * 6.3];
  }
  if (abbr === "HI") {
    return [318 + (lon + 161) * 20, 532 - (lat - 18) * 15.5];
  }
  return [106 + ((lon + 125) / 59) * 790, 58 + ((50 - lat) / 26) * 388];
}

function handleMapClick(abbr) {
  if (isStudyGuideActive()) {
    handleStudyMapClick(abbr);
    return;
  }
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!question || question.kind !== "map" || session.answered) return;
  ensureAudio();
  if (abbr === question.targetAbbr) {
    completeCorrect(randomPraise(), question.correction);
    return;
  }
  appState.lastClickedAbbr = abbr;
  renderMap();
  session.attempts += 1;
  playTone(150, 120, "square");
  if (isCapitalQuestion(question)) {
    showFeedback("try", "Guess again", `${stateByAbbr.get(abbr).name} is not the one. Use the capital clue and try again.`, question.targetAbbr, false, { capitalOnly: true });
    return;
  }
  if (session.attempts < 2) {
    showFeedback("try", "Try again", `That was ${stateByAbbr.get(abbr).name}. Use this map trick, then try again.`, question.targetAbbr, false, { stateOnly: true });
    return;
  }
  completeWrong(`That was ${stateByAbbr.get(abbr).name}. ${question.correction}`);
}

function handleChoice(choice, button) {
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!question || question.kind !== "choice" || session.answered) return;
  ensureAudio();
  const buttons = [...els.answerArea.querySelectorAll(".choice-button")];
  if (choice === question.expectedLabel) {
    buttons.forEach((candidate) => {
      candidate.disabled = true;
      if (candidate.textContent === question.expectedLabel) candidate.classList.add("correct-choice");
    });
    button.classList.add("correct-choice");
    completeCorrect(randomPraise(), question.correction);
  } else {
    button.disabled = true;
    button.classList.add("wrong-choice");
    session.attempts += 1;
    playTone(180, 120, "square");
    showFeedback("try", "Guess again", `${choice} is not it. Use the memory hook, then try another answer.`, question.targetAbbr, false, { capitalOnly: true });
  }
}

function handleCourtChoice(abbr, button) {
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!question || question.kind !== "court" || session.answered || appState.introLocked) return;
  ensureAudio();
  if (abbr === question.defendantAbbr) {
    const buttons = [...els.answerArea.querySelectorAll(".court-choice")];
    buttons.forEach((candidate) => {
      candidate.disabled = true;
      if (candidate.textContent === question.expectedLabel) candidate.classList.add("correct-choice");
    });
    playCourtWin();
    completeCorrect("Case closed", `${question.correction} Bonus point unlocked.`);
    return;
  }
  button.disabled = true;
  button.classList.add("wrong-choice");
  updateCourtStatus(`${stateByAbbr.get(abbr).name} is just a witness. Try another neighbor.`);
  playNiceTry();
}

function handleMiniChoice(abbr, button) {
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!isChoiceMiniQuestion(question) || session.answered || appState.introLocked) return;
  stopReplayAudio();
  ensureAudio();
  if (abbr === question.targetAbbr) {
    const buttons = [...els.answerArea.querySelectorAll(".arcade-choice")];
    buttons.forEach((candidate) => {
      candidate.disabled = true;
      if (candidate.textContent === question.expectedLabel) candidate.classList.add("correct-choice");
    });
    playBonusWin();
    completeCorrect("Bonus solved", `${question.correction} Bonus point unlocked.`);
    return;
  }
  button.disabled = true;
  button.classList.add("wrong-choice");
  updateMiniStatus(`${stateByAbbr.get(abbr).name} has been transferred to the complaint department. Try again.`);
  playNiceTry();
}

function continueTip() {
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!question || question.kind !== "tip" || session.answered || appState.introLocked) return;
  session.answered = true;
  session.correct += 1;
  session.streak += 1;
  session.maxStreak = Math.max(session.maxStreak, session.streak);
  progress.bestStreak = Math.max(progress.bestStreak || 0, session.streak);
  reduceWeak(question.targetAbbr);
  playBonusWin();
  updateSessionHeader();
  saveProgress();
  nextQuestion();
}

function handleTyped(value, input) {
  const question = appState.currentQuestion;
  const session = appState.session;
  if (!question || question.kind !== "type" || session.answered) return;
  ensureAudio();
  const result = evaluateTypedAnswer(value, question);
  if (result.status === "correct") {
    completeCorrect(randomPraise(), question.correction);
    return;
  }
  if (result.status === "close") {
    completeCorrect("Close enough", `You meant ${question.expectedLabel}. ${question.correction}`, true);
    return;
  }
  session.attempts += 1;
  playTone(180, 120, "square");
  if (isCapitalQuestion(question)) {
    showFeedback("try", "Guess again", `${result.message} Use the memory hook and try again.`, question.targetAbbr, false, { capitalOnly: true });
    input.focus();
    return;
  }
  if (session.attempts < 2) {
    showFeedback("try", "Try again", `${result.message} Use this map trick, then try again.`, question.targetAbbr, false, { stateOnly: true });
    input.focus();
    return;
  }
  completeWrong(`${result.message} ${question.correction}`);
}

function evaluateTypedAnswer(value, question) {
  const typed = normalize(value);
  if (!typed) return { status: "retry", message: "No answer yet." };
  const expected = answerCandidates(question).map((candidate) => normalize(candidate));
  if (expected.includes(typed)) return { status: "correct" };

  const bestDistance = Math.min(...expected.map((candidate) => levenshtein(typed, candidate)));
  const expectedBest = expected.reduce((best, candidate) => {
    const distance = levenshtein(typed, candidate);
    return distance < best.distance ? { candidate, distance } : best;
  }, { candidate: expected[0], distance: Number.POSITIVE_INFINITY });
  const maxLen = Math.max(typed.length, expectedBest.candidate.length);
  if (typed.length <= 2 || expectedBest.candidate.length <= 2) {
    return { status: "retry", message: "Use the full name, or the exact two-letter state code." };
  }
  const typoAllowance = maxLen <= 4 ? 1 : maxLen <= 8 ? 2 : 3;
  const closeByDistance = bestDistance <= typoAllowance;
  const closeBySkeleton = consonantSkeleton(typed) === consonantSkeleton(expectedBest.candidate) && maxLen > 5;
  if (closeByDistance || closeBySkeleton) return { status: "close" };
  if (bestDistance <= typoAllowance + 2) return { status: "retry", message: "That looks close, but not quite." };
  return { status: "wrong", message: "That answer points somewhere else." };
}

function answerCandidates(question) {
  const state = stateByAbbr.get(question.targetAbbr);
  if (question.answerKind === "state") {
    return [state.name, state.abbr, ...state.aliases];
  }
  return [state.capital, ...state.capitalAliases];
}

function completeCorrect(title, text, closeEnough = false) {
  const session = appState.session;
  const question = appState.currentQuestion;
  session.answered = true;
  session.correct += 1;
  session.streak += 1;
  session.maxStreak = Math.max(session.maxStreak, session.streak);
  progress.bestStreak = Math.max(progress.bestStreak || 0, session.streak);
  reduceWeak(question.targetAbbr);
  playTone(closeEnough ? 420 : 620, 120, "triangle");
  updateSessionHeader();
  renderMap();
  showFeedback(closeEnough ? "close" : "good", title, text, question.targetAbbr, closeEnough);
  if (!closeEnough) {
    clearAdvanceTimer();
    appState.advanceTimer = window.setTimeout(() => {
      appState.advanceTimer = null;
      if (appState.session === session) nextQuestion();
    }, CORRECT_COACH_DELAY_MS);
  }
  saveProgress();
}

function completeWrong(text) {
  const session = appState.session;
  const question = appState.currentQuestion;
  session.answered = true;
  session.streak = 0;
  addWeak(question.targetAbbr);
  playTone(130, 180, "sawtooth");
  updateSessionHeader();
  renderMap();
  showFeedback("miss", "Mnemonic rescue", text, question.targetAbbr, true);
  saveProgress();
}

function showFeedback(kind, title, text, abbr, showNext, options = {}) {
  const state = stateByAbbr.get(abbr);
  const useMapCoach = appState.currentQuestion && !isInterruptionQuestion(appState.currentQuestion);
  if (useMapCoach) {
    els.feedbackPanel.hidden = true;
    const coachOptions = buildCoachOptions(appState.currentQuestion, state, {
      ...options,
      advanceOnDismiss: (kind === "good" && !showNext) || (showNext && appState.session && appState.session.answered),
      feedbackKind: kind
    });
    showMapCoach(kind, title, text, state, showNext, coachOptions);
  } else {
    els.feedbackPanel.hidden = false;
    els.feedbackPanel.className = `feedback-panel ${kind}`;
    els.feedbackTitle.textContent = title;
    els.feedbackText.textContent = text;
    if (state && (kind === "miss" || kind === "try" || kind === "close")) {
      els.mnemonicCard.hidden = false;
      els.mnemonicText.textContent = state.mnemonic.text;
      els.mnemonicSource.textContent = state.mnemonic.type === "source" ? `Source-backed: ${state.mnemonic.source}` : "Custom fallback memory trick";
    } else {
      els.mnemonicCard.hidden = true;
    }
    els.nextQuestion.hidden = !showNext;
  }
}

function buildCoachOptions(question, state, options) {
  if (!state) return options;
  if (options.stateOnly) {
    return {
      ...options,
      mnemonic: getStateReminder(state.abbr),
      fact: ""
    };
  }
  if (options.capitalOnly || isCapitalQuestion(question)) {
    const help = getCapitalHelp(state.abbr);
    return {
      ...options,
      mnemonic: help.mnemonic,
      fact: options.capitalOnly && kindIsTryOnly(options) ? "" : help.fact
    };
  }
  if (options.feedbackKind === "try" || options.feedbackKind === "miss") {
    return {
      ...options,
      mnemonic: getStateReminder(state.abbr),
      fact: ""
    };
  }
  return options;
}

function kindIsTryOnly(options) {
  return options.capitalOnly === true;
}

function getCapitalHelp(abbr) {
  const state = stateByAbbr.get(abbr);
  const help = CAPITAL_HELP[abbr];
  return {
    mnemonic: help ? help.mnemonic : state.mnemonic.text,
    fact: help ? help.fact : `${state.capital} is the capital of ${state.name}.`
  };
}

function isStudyGuideActive() {
  return appState.currentScreen === "game" && appState.selectedModeId === "mnemonic-study-guide";
}

function getCapitalCallAudioMap() {
  const game = BONUS_GAMES.find((candidate) => candidate.id === "capital-call-in");
  const map = new Map();
  if (!game) return map;
  game.calls.forEach((call) => {
    if (call.audio) map.set(call.targetAbbr, call);
  });
  return map;
}

function handleStudyMapClick(abbr) {
  if (appState.studyAudioLocked) return;
  const state = stateByAbbr.get(abbr);
  if (!state) return;
  const call = getCapitalCallAudioMap().get(abbr);
  if (!call) {
    showMapCoach("try", "Audio coming soon", `${state.name}'s Capital Call-In audio is not ready yet.`, state, false);
    return;
  }
  showMapCoach("good", `${state.capital}, ${state.name}`, call.line, state, false);
  playStudyAudio(call.audio);
}

function playStudyAudio(src) {
  stopStudyAudio();
  if (!progress.sound) return;
  ensureAudio();
  const audio = playAudioAsset(src, 0.78);
  if (!audio) return;
  appState.activeStudyAudio = audio;
  appState.studyAudioLocked = true;
  const unlock = () => unlockStudyAudio(audio);
  audio.addEventListener("ended", unlock, { once: true });
  audio.addEventListener("error", unlock, { once: true });
  audio.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      if (appState.studyAudioUnlockTimer) window.clearTimeout(appState.studyAudioUnlockTimer);
      appState.studyAudioUnlockTimer = window.setTimeout(() => unlockStudyAudio(audio), (audio.duration * 1000) + 300);
    }
  }, { once: true });
}

function unlockStudyAudio(audio) {
  if (audio && appState.activeStudyAudio && appState.activeStudyAudio !== audio) return;
  if (appState.studyAudioUnlockTimer) {
    window.clearTimeout(appState.studyAudioUnlockTimer);
    appState.studyAudioUnlockTimer = null;
  }
  appState.activeStudyAudio = null;
  appState.studyAudioLocked = false;
}

function stopStudyAudio() {
  if (appState.studyAudioUnlockTimer) {
    window.clearTimeout(appState.studyAudioUnlockTimer);
    appState.studyAudioUnlockTimer = null;
  }
  if (appState.activeStudyAudio) {
    appState.activeStudyAudio.pause();
    appState.activeStudyAudio = null;
  }
  appState.studyAudioLocked = false;
}

function isCapitalQuestion(question) {
  if (!question) return false;
  if (question.kind === "choice") return true;
  if (question.kind === "map" && question.modeLabel === "Capital Beacon") return true;
  if (question.kind === "type" && question.answerKind === "capital") return true;
  return false;
}

function randomPraise() {
  return randomItem(PRAISE_LINES);
}

function getStateReminder(abbr, fallback) {
  const tip = FUNNY_STATE_TIPS.find((candidate) => candidate.stateAbbrs.includes(abbr));
  if (tip) return `${tip.label}: ${tip.line}`;
  return fallback || "Use the state's shape and neighbors on the map, then try again.";
}

function clearFeedback() {
  clearAdvanceTimer();
  removeMapCoach();
  els.feedbackPanel.hidden = true;
  els.feedbackPanel.className = "feedback-panel";
  els.feedbackTitle.textContent = "";
  els.feedbackText.textContent = "";
  els.mnemonicCard.hidden = true;
  els.nextQuestion.hidden = true;
}

function updateSessionHeader() {
  const session = appState.session;
  if (!session) return;
  els.sessionMeter.textContent = `Question ${session.index} of ${session.total}`;
  els.streakPill.textContent = `Streak ${session.streak}`;
  els.scorePill.textContent = `Score ${session.correct}`;
}

function finishSession() {
  const session = appState.session;
  const region = getRegion(session.regionId);
  const mode = getMode(session.modeId);
  els.gameScreen.classList.remove("court-mode", "drive-mode", "tip-mode", "square-mode", "hotline-mode", "callin-mode", "interruption-mode");
  const accuracy = session.correct / session.total;
  const stars = accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : accuracy >= 0.45 ? 1 : 0;
  const existing = progress.regionStats[region.id] || {};
  progress.regionStats[region.id] = {
    played: (existing.played || 0) + 1,
    stars: Math.max(existing.stars || 0, stars),
    bestScore: Math.max(existing.bestScore || 0, session.correct),
    bestStreak: Math.max(existing.bestStreak || 0, session.maxStreak)
  };
  saveProgress();
  appState.currentQuestion = null;
  els.sessionMeter.textContent = "Level complete";
  els.streakPill.textContent = `Best streak ${session.maxStreak}`;
  els.scorePill.textContent = `Score ${session.correct}/${session.total}`;
  els.modeBadge.textContent = mode.title || mode.label;
  els.questionPrompt.textContent = `${region.label} level complete`;
  els.answerArea.innerHTML = `
    <div class="feedback-panel good">
      <p class="feedback-title">Stars: ${formatStars(stars)}</p>
      <p>You answered ${session.correct} of ${session.total}. Weak Spots will remember what needs another pass.</p>
      <button id="playAgain" class="primary-button" type="button">Play this mode again</button>
    </div>
  `;
  clearFeedback();
  document.getElementById("playAgain").addEventListener("click", () => startMode(session.modeId));
  renderMap();
}

function addWeak(abbr) {
  progress.weak[abbr] = Math.min(9, (progress.weak[abbr] || 0) + 1);
}

function reduceWeak(abbr) {
  if (!progress.weak[abbr]) return;
  progress.weak[abbr] -= 1;
  if (progress.weak[abbr] <= 0) delete progress.weak[abbr];
}

function updateSummaryStats() {
  els.bestStreak.textContent = progress.bestStreak || 0;
  els.weakCount.textContent = Object.keys(progress.weak || {}).length;
  els.soundToggle.textContent = `Sound: ${progress.sound ? "On" : "Off"}`;
}

function toggleSound() {
  progress.sound = !progress.sound;
  if (progress.sound) {
    ensureAudio();
    playTone(520, 80, "triangle");
  }
  saveProgress();
}

function resetProgress() {
  if (!window.confirm("Reset scores, stars, weak spots, and streaks? Region edits will stay.")) return;
  progress = { regionStats: {}, weak: {}, sound: progress.sound, bestStreak: 0 };
  saveProgress();
  renderHome();
  if (appState.selectedModeId) startMode(appState.selectedModeId);
}

function getRegion(regionId) {
  if (regionId === "all") {
    return { id: "all", label: "All", fullLabel: "All States", status: "Full map", states: [...allAbbrs] };
  }
  return regionPacks.find((pack) => pack.id === regionId) || regionPacks[0];
}

function getMode(modeId) {
  return MODES.find((mode) => mode.id === modeId) || MODES[0];
}

function pickState(pool, used) {
  const candidates = pool.filter((abbr) => !used.includes(abbr));
  return randomItem(candidates.length ? candidates : pool);
}

function buildChoices(correct, type) {
  const values = type === "capital" ? STATE_DATA.map((state) => state.capital) : STATE_DATA.map((state) => state.name);
  const choices = new Set([correct]);
  while (choices.size < 4) {
    choices.add(randomItem(values));
  }
  return shuffle([...choices]);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function formatStars(count) {
  return `${"*".repeat(count)}${".".repeat(3 - count)}`;
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

function consonantSkeleton(value) {
  return value.replace(/[aeiouy]/g, "");
}

function levenshtein(a, b) {
  const rows = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) rows[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) rows[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(
        rows[i - 1][j] + 1,
        rows[i][j - 1] + 1,
        rows[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1);
      }
    }
  }
  return rows[a.length][b.length];
}

function ensureAudio() {
  if (!progress.sound || audioContext) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext = new AudioContextClass();
}

function playTone(frequency, duration, type) {
  if (!progress.sound || !audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration / 1000);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000 + 0.02);
}

function playQuestionIntro(question) {
  if (!question || !isMiniIntroQuestion(question)) return;
  startIntroLock(question);
  showMiniBumper(question);
  if (question.kind === "court") {
    playCourtIntro(question);
    return;
  }
  if (question.kind === "tip") {
    playTipIntro(question);
    return;
  }
  if (question.kind === "drive") {
    playDriveIntro(question);
    return;
  }
  if (isChoiceMiniQuestion(question)) {
    playArcadeIntro(question);
  }
}

function isMiniIntroQuestion(question) {
  return question && ["court", "drive", "square", "hotline", "call-in", "tip"].includes(question.kind);
}

function startIntroLock(question) {
  appState.introLocked = true;
  if (appState.introUnlockTimer) window.clearTimeout(appState.introUnlockTimer);
  const hasRecordedIntro = question.audio || question.kind === "court" || question.kind === "drive";
  appState.introUnlockTimer = window.setTimeout(() => unlockIntro(question), hasRecordedIntro ? MINI_INTRO_AUDIO_FALLBACK_MS : MINI_INTRO_DEFAULT_MS);
}

function extendIntroLockWithAudio(audio) {
  if (!audio) return;
  appState.activeIntroAudio = audio;
  audio.addEventListener("ended", () => unlockIntro(appState.currentQuestion), { once: true });
  audio.addEventListener("error", () => unlockIntro(appState.currentQuestion), { once: true });
}

function clearIntroLock() {
  if (appState.introUnlockTimer) {
    window.clearTimeout(appState.introUnlockTimer);
    appState.introUnlockTimer = null;
  }
  if (appState.activeIntroAudio) {
    appState.activeIntroAudio.pause();
    appState.activeIntroAudio = null;
  }
  stopReplayAudio();
  appState.introLocked = false;
  removeMiniBumper();
}

function unlockIntro(question) {
  if (!appState.introLocked) return;
  if (appState.introUnlockTimer) {
    window.clearTimeout(appState.introUnlockTimer);
    appState.introUnlockTimer = null;
  }
  appState.introLocked = false;
  appState.activeIntroAudio = null;
  els.answerArea.querySelectorAll("[data-intro-locked='true']").forEach((button) => {
    button.disabled = false;
    delete button.dataset.introLocked;
  });
  if (!question) return;
  if (question.kind === "court") updateCourtStatus("Choose the state on trial.");
  if (question.kind === "drive") updateDriveStatus(`Hold and drag on the map to reveal the car and start driving from ${stateByAbbr.get(question.originAbbr).name}.`);
  if (isChoiceMiniQuestion(question)) updateMiniStatus(question.instruction || "Pick the answer that solves it.");
  if (question.kind === "tip") {
    const status = document.getElementById("tipStatus");
    if (status) status.textContent = "Ready when you are.";
  }
}

function showMiniBumper(question) {
  removeMiniBumper();
  const bumper = document.createElement("div");
  bumper.className = `mini-bumper bumper-${question.kind}`;
  bumper.setAttribute("aria-live", "polite");
  bumper.innerHTML = `
    <div class="mini-bumper-card">
      <span class="mini-bumper-kicker">${bumperKicker(question)}</span>
      <strong>${escapeHtml(question.modeLabel || question.screenTitle || "Bonus Round")}</strong>
      <span class="mini-bumper-flash" aria-hidden="true"></span>
    </div>
  `;
  els.gameScreen.appendChild(bumper);
  window.setTimeout(() => {
    if (bumper.parentNode) bumper.remove();
  }, 1250);
}

function removeMiniBumper() {
  els.gameScreen.querySelectorAll(".mini-bumper").forEach((bumper) => bumper.remove());
}

function bumperKicker(question) {
  if (question.kind === "court") return "Order in the arcade";
  if (question.kind === "drive") return "Start your engine";
  if (question.kind === "hotline") return "Incoming border call";
  if (question.kind === "call-in") return "Capital on the line";
  if (question.kind === "square") return "Map shape lab";
  if (question.kind === "tip") return "Memory break";
  return "Bonus round";
}

function playCourtIntro(question) {
  const session = appState.session;
  if (!session || appState.courtIntroKey === session.index) return;
  appState.courtIntroKey = session.index;
  ensureAudio();
  const court = BONUS_GAMES.find((game) => game.id === "weird-neighbor-court");
  if (court && court.stinger) {
    extendIntroLockWithAudio(playAudioAsset(court.stinger, 0.76));
  } else {
    playCourtStinger();
  }
  if (question.audio) {
    window.setTimeout(() => extendIntroLockWithAudio(playAudioAsset(question.audio, 0.78)), 420);
  }
}

function playTipIntro(question) {
  ensureAudio();
  playTipStinger();
  if (question.audio) {
    window.setTimeout(() => extendIntroLockWithAudio(playAudioAsset(question.audio, 0.78)), 300);
  }
}

function playDriveIntro() {
  ensureAudio();
  const roadTrip = BONUS_GAMES.find((game) => game.id === "road-trip");
  if (roadTrip && roadTrip.stinger) {
    extendIntroLockWithAudio(playAudioAsset(roadTrip.stinger, 0.76));
    return;
  }
  playTone(150, 70, "square");
  window.setTimeout(() => playTone(210, 80, "sawtooth"), 100);
  window.setTimeout(() => playTone(320, 110, "triangle"), 230);
}

function playArcadeIntro(question) {
  ensureAudio();
  if (question.kind === "hotline") {
    playPhoneStinger();
    if (question.audio) window.setTimeout(() => extendIntroLockWithAudio(playAudioAsset(question.audio, 0.78)), 420);
    return;
  }
  if (question.kind === "call-in") {
    playRadioStinger();
    if (question.audio) window.setTimeout(() => extendIntroLockWithAudio(playAudioAsset(question.audio, 0.78)), 420);
    return;
  }
  playSquareStinger();
  if (question.audio) window.setTimeout(() => extendIntroLockWithAudio(playAudioAsset(question.audio, 0.78)), 420);
}

function playCourtStinger() {
  playTone(96, 85, "square");
  window.setTimeout(() => playTone(96, 85, "square"), 140);
  window.setTimeout(() => playTone(330, 90, "triangle"), 250);
  window.setTimeout(() => playTone(520, 130, "triangle"), 345);
}

function playCourtWin() {
  playBonusWin();
}

function playNiceTry() {
  playAudioAsset("assets/audio/nice-try.mp3", 0.72);
  playTone(180, 80, "square");
}

function playBonusWin() {
  playAudioAsset("assets/audio/bonus-unlokced.mp3", 0.72);
  window.setTimeout(() => playTone(620, 70, "triangle"), 60);
  window.setTimeout(() => playTone(740, 90, "triangle"), 160);
}

function playTipStinger() {
  playTone(260, 70, "triangle");
  window.setTimeout(() => playTone(390, 70, "triangle"), 90);
  window.setTimeout(() => playTone(520, 90, "triangle"), 180);
}

function playPhoneStinger() {
  playTone(440, 90, "sine");
  window.setTimeout(() => playTone(440, 90, "sine"), 180);
  window.setTimeout(() => playTone(220, 120, "square"), 360);
}

function playRadioStinger() {
  playTone(180, 60, "sawtooth");
  window.setTimeout(() => playTone(540, 80, "triangle"), 110);
  window.setTimeout(() => playTone(720, 100, "triangle"), 210);
}

function playSquareStinger() {
  playTone(160, 80, "square");
  window.setTimeout(() => playTone(210, 80, "square"), 100);
  window.setTimeout(() => playTone(260, 110, "square"), 200);
}

function playAudioAsset(src, volume = 0.7) {
  if (!progress.sound) return null;
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {
    // Browser autoplay rules may block clips until after a gesture; tones still cover that case.
  });
  return audio;
}

function replayMiniAudio(src) {
  if (!src || appState.introLocked) return;
  ensureAudio();
  stopReplayAudio();
  updateMiniStatus("Replaying the call...");
  const audio = playAudioAsset(src, 0.78);
  if (!audio) {
    updateMiniStatus("Sound is off. Turn sound on to replay the call.");
    return;
  }
  appState.activeReplayAudio = audio;
  audio.addEventListener("ended", () => {
    if (appState.activeReplayAudio === audio) appState.activeReplayAudio = null;
    updateMiniStatus("Pick the answer that solves it.");
  }, { once: true });
  audio.addEventListener("error", () => {
    if (appState.activeReplayAudio === audio) appState.activeReplayAudio = null;
    updateMiniStatus("Audio did not play. Pick the answer that solves it.");
  }, { once: true });
}

function stopReplayAudio() {
  if (!appState.activeReplayAudio) return;
  appState.activeReplayAudio.pause();
  appState.activeReplayAudio = null;
}

function updateCourtStatus(message) {
  const status = document.getElementById("courtStatus");
  if (status) status.textContent = message;
}

function updateMiniStatus(message) {
  const status = document.getElementById("miniStatus");
  if (status) status.textContent = message;
}
