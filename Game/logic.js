let karmaCounter = 0;
let karmaNext = '';



const status = {
    Hp: 100,
    MaxHp: 100,
    Inv: {

    }
};

const story = [
    {
        id: 'intro', scenes: [
            {
                img: "",//to be made
                speaker: 'Narrator',
                place: cutscene1,
                shake: false,
                dialog: "For centuries the luck goddess, Fortuna has looked upon this world. However in recent times, it seems that she has not been looking over you. Your mother has fallen sick and now you have to take care of her.",
                objective: false,
                choices: [{ type: next, text: 'Begin...' }]
            },
            // player leaves to get medecine for mom
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'sad',
                place: "home",
                shake: false,
                dialog: "Mann.... I need to get my mom some medecine from the town. Better grab my coin",
                objective: 'Get mom medecine from the town',
                choices: [{ type: next, text: 'Get coin and leave' }] //this choice only serves as a next
            },
            //player about to get caught by guards
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'confused',
                place: "town",
                shake: false,
                dialog: "Hmmmm.. where do I find this medecine?",
                choices: [{ type: next, text: 'Search for pharmacy' }] //this choice only serves as a next
            },
            //player caught by guards
            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "town",
                shake: true,
                dialog: "Hey there! You! You look 18, you need to come with us for the mandatory enlistment.", //technically 3 sentences
                objective: 'Escape the guards',
                choices: [{ type: next, text: 'Next' }]
            },
            //player attempts escape
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "town",
                dialog: "Oh no.. I gotta dash and make it go fast!", //technically 3 sentences
                objective: 'Escape the guards',
                choices: [{ type: next, text: 'Escape!' }]
            },
            //player bumps into guard and takes player away
            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "town",
                shake: true,
                dialog: "Nice try pal. Better go even faster next time. I am him.",
                objective: 'Escape the guards, FAILED',
                choices: [{ type: next, text: 'Ur lowk cooked bud 😭💔' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "Castle Cell",
                shake: false,
                dialog: {
                    action: "*Locks you in the cell but leaves key in the door*",
                    speech: "Good luck getting out of this one bud."
                },
                objective: 'Escape the cell',
                choices: [{ type: next, text: 'Look for any opportunities to escape' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "Castle Cell",
                shake: false,
                dialog: {
                    action: "",
                    speech: "Bro he literally left his keys in the cell door"
                },
                objective: 'Escape the cell',
                choices: [{ type: next, text: 'Unlock the door' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "Castle Exit",
                shake: false,
                dialog: {
                    action: "*Runs towards exit*",
                    speech: "Yes! I'm finally out of this damn place! Good riddance."
                },
                objective: 'Leave the building',
                choices: [{ type: next, text: 'Next' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "Castle Exit",
                shake: true,
                dialog: {
                    action: "*You bump into a random guy*",
                    speech: "Oof! Oh hello there! Have you been to a restaurant called Karma? There's no menu, you just get what you deserve. Anyways have you heard the tale of Dai, Koku and Ten? They're basically a really cool dragon that can"
                },
                objective: 'Leave the building',
                choices: [{ type: 'negative', text: `GET OUT OF MY WAY YOU IDIOTIC SWINE`, karma: karmaCounter -= 5 },
                { type: 'positive', text: `Sounds like an interesting story!`, karma: karmaCounter += 5 },
                { type: 'neutral', text: `Cool but can you move please`, karma: karmaCounter += 0 }]
            },

            {
                route: 'positive',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "Castle Exit",
                shake: true,
                dialog: {
                    action: "*Ohio Impressed*",
                    speech: "Yep! Thanks for listening. Well anyway ill let you go on your way"
                },
                objective: 'Leave the building',
                choices: [{ type: next, text: `Leave` }]
            },

            {
                route: 'negative',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "Castle Exit",
                shake: true,
                dialog: {
                    action: "*Ohio Unimpressed*",
                    speech: "Oh :(, okay see you later"
                },
                objective: 'Leave the building',
                choices: [{ type: next, text: `Leave` }]
            },

            {
                route: 'neutral',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "Castle Exit",
                shake: true,
                dialog: {
                    action: "",
                    speech: "Alright"
                },
                objective: 'Leave the building',
                choices: [{ type: next, text: `Leave` }]
            }
        ]
    },

    {
        id: '1-1', scenes: [
            {},
        ]

    }

]