let dictionary = [["asian","banana","based","beastly","beehive","believe","bobcat","brewer","brush","burger","business",
"butter","cancer","candy","champion","cherry","chest","children","circus","climber","clown","combine","crafty","crazy",
"cringe","crushed","dancer","dangle","definitely","development","difference","dingo","discipline","discuss","drain","dying"
,"across","equipment","experience","fiddle","fiery","finally","flamingo","flask","flower","forge","forked","friend",
"fruitful","genius","grateful","height","ignorance","immediate","independent","intelligence","leisure","lemon","library",
"lounge","lovely","manky","mansion","maple","merry","mink","misfit","mission","munch","oak","official","passion","pastime",
"patches","pelt","picture","piece","piston","plank","playful","plonk","poorly","prance","puny","quick","sandal","saucer",
"sensible","shield","skittle","sprinkle","squat","super","table","teacup","telephone","terror","tinkle","toaster","toxic",
"traffic","trendy","until","village","waffle","waistcoat","wooden","perfect","radio","daisy","grasshopper","conker",
"slice","gorge","hungry","frighten","blinded","brotherly","relationship","stable","tough","bronze","cradle","greenhouse",
"petal","penalty","knee","dumb","trouble","frost","swot","gather","lazy","heron","joyful","crabby","plenty","swinging",
"jaw","boast","wild","garden","simple","catch","stupid","brawn","spine","thigh","travelling","frankly","honest","toady",
"fantasy","brought","classic","laser","spotty","judge","ponder","offering","roast","paddle","toddler","chainsaw","cunning",
"cabbage"],
["acceptable","accidentally","accommodate","acquire","acquit","apparent","argument","calendar","category","column",
"committed","conscience","conscious","consensus","drunkenness","dumbbell","exceed","existence","foreign","gauge",
"guarantee","harass","hierarchy","indispensable","maintenance","medieval","millennium","miniature","misspell","neighbour",
"occasionally","occurrence","perseverance","possession","publicly","receipt","recommend","referred","reference","relevant",
"rhyme","schedule","separate","vacuum","weather","weird","absence","accelerate","accomplish","apology","axle","accordion",
"barbecue","beginning","candidate","congratulations","coolly","criticise","deceive","defendant","defiant","desperate",
"deterrence","disappear","disappoint","ecstasy","especially","excellent","exercise","explanation","generally","government",
"gross","horrific","imitate","incidentally","incredible","knowledge","magically","marshmallow","mischief","missile",
"octopus","omitted","particular","physical","pigeon","pleasant","preferable","pursue","raspberry","refrigerator",
"religious","remembrance","ridiculous","salary","sandwich","savvy","scissors","seize","sheriff","siege","similar",
"special","success","surprise","tomorrow","tongue","tragedy","truly","usage","vicious","withhold","truncate","feisty",
"humourous","disinterested","humid","pathetic","charcoal","trilby","parachute","panama","regal","chirrup","thicket",
"mildew","cancellation","heterosexual","malignant","fragrant","dweeb","monkfish","collate","foxglove","feckless",
"reckless","mincemeat","flighty","flagon","furtive","merely","fulsome","miraculous","calculate","corrosive","tactful",
"leopard","hedgehog","pelican","clique","clownfish","pedantic","pendant","forestry","flashlight","morbid","fabulous",
"prefect","cherub","furniture","pliable","calorie","mercury","zinc","heckle","potentcy","territorial","forte","lampoon",
"corset","senator","trickster","merchant","defender","unthinking","tribal","rancid","fishnets","powdered","tulip",
"prankster","maternal","inferno","chemical","tripe","escalate","slavery","crackpot","terminal","possibility","lioness",
"carefully","attorney","parents","guardian","culpable","average","collapse","potential"],
["amateur","atheist","bellwether","cemetery","changeable","collectible","conscientious","daiquiri","embarrassment",
"exhilirate","hierarchy","inoculate","liaison","memento","minuscule","mischievous","noticeable","personnel","playwright",
"privilege","pronunciation","questionnaire","rhythm","sergeant","supersede","threshold","twelfth","tyranny","avaricious",
"belligerent","carbine","extricate","platitude","settee","heraldic","corpulent","nonplussed","accumulate","acknowledge",
"acquaintance","aficionado","anoint","broccoli","camouflage","cantaloupe","carburettor","cartilage","chauvinism",
"commemorate","desiccate","diorama","dissipate","flabbergast","flotation","fulfill","grammar","guttural","handkerchief",
"hypocrisy","inadvertant","ingenious","irascible","irresistible","lieutenant","lightning","liquefy","misogyny","nauseous",
"necessary","parallel","parliament","peninsula","pistachio","presumptuous","propagate","puerile","prurient","putrefy",
"renowned","simile","tableau","tariff","tattoo","ukelele","pillory","changeling","bolshevism","cafetiere","cylinder",
"palliative","portend","ribald","creosote","chancery","tranche","existential","normative","forsooth","manuscript",
"chaffinch","maudlin","mackerel","beluga","cryptologist","tensor","perambulator","bisque","colloquial","idiom","arboreal",
"plaintiff","codswallop","collagen","applaud","torpid","vapid","municipal","placate","calypso","fetid","oxymoron","homonym",
"antonym","pendulous","cantankerous","favourable","festivities","pleasurable","lactate","comparable","putrid","terrapin",
"frigate","cranial","femur","pectoral","maxillary","supercilious","conceited","lamentable","risible","calamitous",
"riotous","gazebo","pergola","marionette","melancholy","precarious","fraught","pestilential","apprehend","comprehend",
"musculature","turpitude","palatial","fragmentation","attritional","aspiration","perplexing","mandible","garishly",
"flippant","apoplectic","purveyor","cabal","munificent","comestibles","pompously","penchant","couriered","zenith",
"quark","crampons","correlational","spatchcock","garrulous","plaintive","solicitation","fluctuate","potentiality",
"frugal","contemporary","machete","devious","pensive","thoroughbred","pantaloons","trellis","praiseworthy","funereal",
"ethereal","iteration","pontificate","unpretentious"],
["pusillanimous","tendentious","lugubrious","quixotic","sententious","chihuahua","cerise","albumen","semaphore",
"insouciant","milieu","antediluvian","minichaeism","paleontologist","xenophobe","metriculate","meretricious",
"penicillin","cogitation","apotheosis","apogee","hyperbole","anthropomorphic","onomatopoeia","pharoah","sacrilegious",
"septuagenarian","subpoena","rimy","mendacious","ennui","potage","deciduous","seraphim","claque","periodontal",
"effete","concubine","micturate","nomenclature","impropriety","punctilious","febrile","machiavellian"]
]

let button = document.getElementById("button");
button.addEventListener("click", speak);

let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);

let inputTwo = document.getElementById("input-two");

let output = ""

function speak() {
  let randomWordIndex = Math.floor(Math.random()*200)
  console.log(randomWordIndex);
  output = dictionary[0][randomWordIndex];
  responsiveVoice.speak(output);
}

function spellcheck () {
  if (output === inputTwo.value) {
    inputTwo.value = "correct!";
  } else {
    inputTwo.value = "incorrect!"
  }
}




