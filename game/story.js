

let karmaCounter = 0;
let karmaNext = '';


export const story = [
    {
        id: 'intro', scenes: [
            {
                img: "",//to be made
                speaker: 'Narrator',
                place: 'cutscene1',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech:"For centuries the luck goddess, Fortuna has looked upon this world. However in recent times, it seems that she has not been looking over you. Your mother has fallen sick and now you have to take care of her."
                },
                objective: false,
                choices: [{ type: 'next', text: 'Begin...' }]
            },
            // player leaves to get medecine for mom
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'sad',
                place: "home",
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Mann.... I need to get my mom some medecine from the town. Better grab my coin",
                },
                objective: 'Get mom medecine from the town',
                choices: [{ type: 'next', text: 'Get coin and leave' }] //this choice only serves as a 'next'
            },
            //player about to get caught by guards
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'confused',
                place: "town",
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Hmmmm.. where do I find this medecine?",
                },
                choices: [{ type: 'next', text: 'Search for pharmacy' }] //this choice only serves as a 'next'
            },
            //player caught by guards
            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "town",
                shake: true,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Hey there! You! You look 18, you need to come with us for the mandatory enlistment.", //technically 3 sentences
                },
                objective: 'Escape the guards',
                choices: [{ type: 'next', text: 'Next' }]
            },
            //player attempts escape
            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "town",
                dialog: {
                    action: '',
                    speech: "Oh no.. I gotta dash and make it go fast!",
                },
                objective: 'Escape the guards',
                choices: [{ type: 'next', text: 'Escape!' }]
            },
            //player bumps into guard and takes player away
            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "town",
                shake: true,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Nice try pal. Better go even faster 'next' time. I am him.",
                },
                objective: 'Escape the guards, FAILED',
                choices: [{ type: 'next', text: 'Ur lowk cooked bud 😭💔' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Royal Guard',
                place: "castleCell",
                shake: false,
                engage: false,
                dialog: {
                    action: "*Locks you in the cell but leaves key in the door*",
                    speech: "Good luck getting out of this one bud."
                },
                objective: 'Escape the cell',
                choices: [{ type: 'next', text: 'Look for any opportunities to escape' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "castleCell",
                shake: false,
                engage: false,
                dialog: {
                    action: "",
                    speech: "Bro he literally left his keys in the cell door"
                },
                objective: 'Escape the cell',
                choices: [{ type: 'next', text: 'Unlock the door' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Player',
                status: 'happy',
                place: "castleExit",
                shake: false,
                engage: false,
                dialog: {
                    action: "*Runs towards exit*",
                    speech: "Yes! I'm finally out of this damn place! Good riddance."
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: 'Next' }]
            },

            {
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "castleExit",
                shake: true,
                engage: false,
                dialog: {
                    action: "*You bump into a random guy*",
                    speech: "Oof! Oh hello there! Have you been to a restaurant called Karma? There's no menu, you just get what you deserve. Anyways have you heard the tale of Dai, Koku and Ten? They're basically a really cool dragon that can"
                },
                objective: 'Leave the building',
                choices: [{ type: 'negative', text: `GET OUT OF MY WAY`, karma: karmaCounter -= 5 },
                { type: 'positive', text: `Sounds interesting.`, karma: karmaCounter += 5 },
                { type: 'neutral', text: `No thank you`, karma: karmaCounter += 0 }]
            },

            {
                route: 'negative',
                img: "", //to be inserted
                speaker: 'Player',
                place: "castleExit",
                shake: true,
                engage: false,
                dialog: {
                    action: "",
                    speech: "GET OUT OF MY WAY YOU PATHETIC SWINE!"
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `'Next'`}]
            },

            {
                route: 'positive',
                img: "", //to be inserted
                speaker: 'Player',
                place: "castleExit",
                shake: false,
                engage: false,
                dialog: {
                    action: "",
                    speech: "Sounds interesting, sure how does it go?"
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `'Next'`}]
            },

            {
                route: 'neutral',
                img: "", //to be inserted
                speaker: 'Player',
                place: "castleExit",
                shake: false,
                engage: false,
                dialog: {
                    action: "",
                    speech: "Sorry I don't have the time!"
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `'Next'`}]
            },
            

            {
                route: 'positive',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "castleExit",
                shake: true,
                engage: false,
                dialog: {
                    action: "*Ohio Impressed* *Blabbering*",
                    speech: "And that's all! Thanks for listening. Well anyway I'll let you go on your way now"
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `Leave` }]
            },

            {
                route: 'negative',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "castleExit",
                shake: true,
                engage: false,
                dialog: {
                    action: "*Ohio Unimpressed*",
                    speech: "Oh :(, okay see you later"
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `Leave` }]
            },

            {
                route: 'neutral',
                img: "", //to be inserted
                speaker: 'Yapper',
                place: "castleExit",
                shake: true,
                engage: false,
                dialog: {
                    action: "",
                    speech: "Oh alright."
                },
                objective: 'Leave the building',
                choices: [{ type: 'next', text: `Leave` }]
            }
        ]
    },

    {
        id: '1-1pos', scenes: [
            {
                img: "", //to be inserted
                speaker: 'Prophet',
                place: "town",
                shake: false,
                engage: false,
                dialog: {
                    action: "",
                    speech: "Hey young warrior, follow me."
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{ type: 'next', text: 'What is it?'}]
            },

            {
                img: '', //to be inserted
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'I have a quest for you. You wish to save your mother, do you not? I have what you seek.'
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{type: 'next', text: 'So how do I start?'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'First and foremost my echo, go up to that lady over there, she needs assistance.'
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{type: 'next', text: 'Um Okay'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: true,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'What are looking at twerp!'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text: 'Nothing!'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Nothing maam! I was told that you need my help? How can I be of assistance?'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Go find my cat! My poor baby is lost and needs to come back to mommy.'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text:'Okay mommy.'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Searching*',
                    speech: 'Here kitty kitty kitty kitty kitty!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Found you! Youre coming with me!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Cat',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Scratches you*',
                    speech: ''
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'OUCH! Why you!!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Save him.', karma: karmaCounter += 5} ,
                    {type: 'next', text: 'Kill him.', karma: karmaCounter -= 5},
                    {type: 'next', text: 'Run away.', karma: karmaCounter += 0}
                ]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You found my baby! Im sorry for yelling at you earlier... My son just died and I was scared I would lose Minnie too!'
                },
                objective: 'Report back to the old lady',
                choices: [{type:'next', text: 'No Problem!'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You killed my baby!! I lose my son now I lose my cat too?!!?! Damn you!'
                },
                objective: 'Report back to the old lady',
                choices: [{type:'next', text: 'Uh okay.'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You couldn't find him? Hmph, useless twat. Get out of my face."
                },
                objective: 'Report back to the old lady',
                choices: [{type:'next', text: 'Sorry.'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally back. But theres no time to waste. Go help the duke of Whitoria. Whitoria is the kingdom 'next' door so the travel won't take long."
                },
                objective: 'Head to Whitoria',
                choices: [{type:'next', text: 'Sir Yes Sir!'}]
            },
        ],

        id: '1-1neu', scenes: [
            {
                img: "",
                speaker: 'Prophet',
                alignment: 'Neu',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Hey dude, come this way.'
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{ type: 'next', text: 'Yes?'}]
            },

            {
                img: '', //to be inserted
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'I have a quest for you. You wish to save your mother, do you not? I have what you seek.'
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{type: 'next', text: 'So how do I start?'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'First and foremost my echo, go up to that woman over there, she needs assistance.'
                },
                choices: [{type: 'next', text: 'Uhh Okay'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: true,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'What are looking at twerp!'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text: 'Nothing!'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Nothing maam! I was told that you need my help? How can I be of assistance?'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Go find my cat! My poor baby is lost and needs to come back to mommy.'
                },
                objective: 'Save her cat.',
                choices: [{type: 'next', text:'Okay mommy.'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Searching*',
                    speech: 'Here kitty kitty kitty kitty kitty!'
                },
                objective: 'Save her cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Found you! Youre coming with me!'
                },
                objective: 'Save her cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Cat',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Scratches you*',
                    speech: ''
                },
                objective: 'Save her cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'OUCH! Why you!!'
                },
                objective: 'Save her cat.',
                choices: [{type:'next', text: 'Save him.', karma: karmaCounter += 5} ,
                    {type: 'next', text: 'Kill him.', karma: karmaCounter -= 5},
                    {type: 'next', text: 'Run away.', karma: karmaCounter += 0}
                ]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You found my baby! Im sorry for yelling at you earlier... My son just died and I was scared I would lose Minnie too!'
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'No Problem!'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You killed my baby!! I lose my son now I lose my cat too?!!?! Damn you!'
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'Uh okay.'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You couldn't find him? Hmph, useless twat. Get out of my face."
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'Sorry.'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally back. But theres no time to waste. Go help the duke of Whitoria. Whitoria is the kingdom 'next' door so the travel won't take long."
                },
                objective: 'Head to Whitoria',
                choices: [{type:'next', text: 'Okie Dokie.'}]
            },
        ],

        id: '1-1neg', scenes: [
            {
                img: "",
                speaker: 'Prophet',
                alignment: 'Neg',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Hey loser, follow me if you want to live.'
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{ type: 'next', text: 'What?'}]
            },

            {
                img: '', //to be inserted
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "I have a quest for you. You want to save your mother, right? I know how. However, what's in it for me?"
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{type: 'next', text: "I'll do anything."}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "That's what I like to hear, my echo, now go up to that foid over there, she needs assistance."
                },
                objective: 'Talk to the suspicious prophet',
                choices: [{type: 'next', text: 'Ok'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: true,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'What are you looking at twerp!'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text: "You're ugly face"}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'How rude! Anyways, go find my cat! My poor baby is lost and needs to come back to mommy.'
                },
                objective: 'Help the old lady.',
                choices: [{type: 'next', text:'Whatever'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Searching*',
                    speech: 'Where are you, you dumb feline!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'Found you! Youre coming with me!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Cat',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Scratches you*',
                    speech: ''
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'OUCH! Why you!!'
                },
                objective: 'Save the cat.',
                choices: [{type:'next', text: 'Save him.', karma: karmaCounter += 5} ,
                    {type: 'next', text: 'Kill him.', karma: karmaCounter -= 5},
                    {type: 'next', text: 'Run away.', karma: karmaCounter += 0}
                ]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You found my baby! Im sorry for yelling at you earlier... My son just died and I was scared I would lose Minnie too!'
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'Yeah yeah, whatever.'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'You killed my baby!! I lose my son now I lose my cat too?!!?! Damn you!'
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'Whatever'}]
            },

            {
                img: '',
                speaker: 'Mean Granny',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You couldn't find him? Hmph, useless twat. Get out of my face."
                },
                objective: 'Report back to the old lady.',
                choices: [{type:'next', text: 'Mb all'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally back. But theres no time to waste. Go help the duke of Whitoria. Whitoria is the kingdom 'next' door so the travel won't take long."
                },
                objective: 'Head to Whitoria',
                choices: [{type:'next', text: 'Fine.'}]
            },
        ]
    }, 

    {
        id: '1-2pos', scenes: [
            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally here! I've heard good news about you. So what do you say about working for me?"
                },
                objective: 'Speak to the duke.',
                choices: [{type: 'next', text:"I'll do it"}]
            },

            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "That's the spirit! You start once the clock strikes 12pm."
                },
                choices: [{type: 'next', text: "Affirmative."}]
            },

            {
                img: '',
                speaker: 'Narrator',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Clock strikes 12. Midnight Arrives. The duke asks you to protect his family's heirloom overnight. Be careful of "
                },
                objective: false,
                choices: [{type: 'next', text:'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "It's go time."
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'next', text:'Head to treasury'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'treasury',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'The heirloom is just right there. I could really take it if I wanted to.'
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'positive', text: 'Leave it.', karma: karmaCounter += 5},
                    {type: 'negative', text: 'Take it.', karma: karmaCounter -= 5},
                    {type: 'neutral', text: 'Disregard it.', karma: karmaCounter += 0}
                ]
            },
            
            {
                img: '',
                speaker: 'Player',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let go from the thought, consciously stopping yourself before going too far*',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let the evil thoughts get in and you steal the heirloom.',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Run.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You completely disregard the thought, allowing it to leave your conscious.*',
                    speech: ""
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Hope you had a good night last night, because you're being sent another mission! Would you like to fight Icarus or Spyro?"
                },
                objective: 'Fight your boss.'
            }
        ],

        id: '1-2neu', scenes: [
            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally here! I've been notified to look out for someone of your description. Can you help me with a task?"
                },
                choices: [{type: 'next', text:"I'll do it"}]
            },

            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "That's the spirit! You start once the clock strikes 12pm."
                },
                choices: [{type: 'next', text: "Affirmative."}]
            },

            {
                img: '',
                speaker: 'Narrator',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Clock strikes 12. Midnight Arrives. The duke asks you to protect his family's heirloom overnight. Be careful of "
                },
                objective: false,
                choices: [{type: 'next', text:'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "It's go time."
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'next', text:'Head to treasury'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'treasury',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'The heirloom is just right there. I could really take it if I wanted to.'
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'positive', text: 'Leave it.', karma: karmaCounter += 5},
                    {type: 'negative', text: 'Take it.', karma: karmaCounter -= 5},
                    {type: 'neutral', text: 'Disregard it.', karma: karmaCounter += 0}
                ]
            },
            
            {
                img: '',
                speaker: 'Player',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let go from the thought, consciously stopping yourself before going too far*',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let the evil thoughts get in and you steal the heirloom.',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Run.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You completely disregard the thought, allowing it to leave your conscious.*',
                    speech: ""
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "I could care less about the events of last night, because you're being sent another mission! Would you like to fight Icarus or Spyro?"
                },
                objective: 'Fight your boss.'
            }
        ],

        id: '1-2neg', scenes: [
            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You're finally here! Safe to say I'm not glad you're chosen for this task-especially since all the rumors going about you killing that cat...-but not matter! I need your help with something."
                },
                choices: [{type: 'next', text:"I'll do it"}]
            },

            {
                img: '',
                speaker: 'Duke',
                place: 'whitoria',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "That's the spirit! You start once the clock strikes 12pm."
                },
                choices: [{type: 'next', text: "Affirmative."}]
            },

            {
                img: '',
                speaker: 'Narrator',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Clock strikes 12. Midnight Arrives. The duke asks you to protect his family's heirloom overnight. Be careful of "
                },
                objective: false,
                choices: [{type: 'next', text:'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'whitoriaNight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "It's go time."
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'next', text:'Head to treasury'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'treasury',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: 'The heirloom is just right there. I could really take it if I wanted to.'
                },
                objective: "Protect the duke's Heirloom",
                choices: [{type: 'positive', text: 'Leave it.', karma: karmaCounter += 5},
                    {type: 'negative', text: 'Take it.', karma: karmaCounter -= 5},
                    {type: 'neutral', text: 'Disregard it.', karma: karmaCounter += 0}
                ]
            },
            
            {
                img: '',
                speaker: 'Player',
                alignment: 'positive',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let go from the thought, consciously stopping yourself before going too far*',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'negative',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You let the evil thoughts get in and you steal the heirloom.',
                    speech: ''
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Run.'}]
            },

            {
                img: '',
                speaker: 'Player',
                alignment: 'neutral',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You completely disregard the thought, allowing it to leave your conscious.*',
                    speech: ""
                },
                objective: 'Report back to the prophet',
                choices: [{type:'next', text: 'Finish your job.'}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Spare me the small talk of last night, because you're being sent another mission! Go fight Icarus or Astro."
                },
                objective: 'Fight your boss of choosing.',
                choices: [{type: 'next', text: "'Next'"}]
            },

            {
                img: '',
                speaker: 'Quest Board',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "EMBODIMENT OF EGOTISM ICARUS + KARMA, ASTRO - KARMA"
                },
                objective: 'Fight your boss of choosing.',
                choices: [{type: 'next', text: 'Icarus'},
                    {type: 'next', text: 'Astro'}
                ]
            }
        ],
    },

    {
        id: '1-3pos', scenes: [
            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "So you have chosen Astro? Exit through the north path of town."
                },
                objective: 'Fight Astro',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'road',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You walk surprisingly fast.*',
                    speech: "",
                },
                objective: 'Fight Astro',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Astro',
                place: 'astroFight',
                shake: true,
                engage: false,
                dialog: {
                    action: '*Growls*',
                    speech: "WHO DARES APPROACH ME, ASTRO OF THE SKY"
                },
                objective: 'Fight Astro',
                choices: [{type: 'next', text:'I am.'}]
            },

            { 
                img: '',
                speaker: 'Astro',
                place: 'astroFight',
                shake: true,
                engage: true,
                dialog: {
                    action: '*laughs*',
                    speech: "and who might YOU be! You are a nobody for all I care!"
                },
                objective: 'Fight Astro',
                choices: [{type: 'next', text: "Lets let our weapons do the talking."}]
            },

            {
                img: '',
                speaker: 'Astro',
                place: 'astroFight',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Wheezing*',
                    speech: "You fool, the dragon will have your head..."
                },
                objective: 'Report back to the Prophet',
                choices: [{type: 'next', text: 'Heh'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'astroFight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You were all bark and no bite. Heh, you were easy."
                },
                objective: 'Report back to the Prophet',
                choices: [{type: 'next', text: 'Next', karma: karmaCounter += 10}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You are finally back! You know what I'm gonna tell you huh. Yup ANOTHER QUEST! Go over to that village chief over there, he needs help."
                },
                objective: "Help the Village Chief",
                choices: [{type: 'next', text:'Fine'}]
            }
        ],

        id: '1-3neg', scenes: [
            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "So you have chosen Icarus? Exit through the south path of town."
                },
                objective: 'Fight Icarus',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'road',
                shake: false,
                engage: false,
                dialog: {
                    action: '*You walk surprisingly fast.*',
                    speech: ''
                },
                objective: 'Fight Icarus',
                choices: [{type: 'next', text: 'Next'}]
            },

            {
                img: '',
                speaker: 'Icarus',
                place: 'icarusFight',
                shake: true,
                engage: false,
                dialog: {
                    action: '*Roars*',
                    speech: "Who dares to walk in the presence of the most revered Icarus!"
                },
                objective: 'Fight Icarus',
                choices: [{type: 'next', text: 'I am.'}]
            },

            {
                img: '',
                speaker: 'Icarus',
                place: 'icarusFight',
                shake: true,
                engage: true,
                dialog: {
                    action: '*Laughs*',
                    speech: "You are really funny! But are you as strong?"
                },
                objective: 'Fight Astro',
                choices: [{type: 'next', text: 'Come find out.'}]
            },

            {
                img: '',
                speaker: 'Icarus',
                place: 'icarusFight',
                shake: false,
                engage: false,
                dialog: {
                    action: '*Wheezing*',
                    speech: "Damn you. Don't you realize what you're doing?"
                },
                objective: 'Report back to the Prophet',
                choices: [{type: 'next', text: 'Heh'}]
            },

            {
                img: '',
                speaker: 'Player',
                place: 'icarusFight',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You were all bark and no bite. Heh, you were easy."
                },
                objective: 'Report back to the Prophet',
                choices: [{type: 'next', text: 'Next', karma: karmaCounter -= 10}]
            },

            {
                img: '',
                speaker: 'Prophet',
                place: 'town',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "You are finally back! You know what I'm gonna tell you huh. Yup ANOTHER QUEST! Go over to that village chief over there, he needs help."
                },
                objective: "Help the Village Chief",
                choices: [{type: 'next', text:'Fine'}]
            }
        ]
    },

    {
        id: '1-4pos', scenes: [
            {
                img: '',
                speaker: 'Chief',
                place: 'village',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Thank God you are here warrior! I need you to save my daughter!"
                },
                objective: 'Help the Village Chief',
                choices: [{type: 'next', text: "I'm on it."}]
            }, 

            {
                img: '',
                speaker: 'Chief',
                place: 'village',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Thank you so much kind sir!",
                },
                objective: "Save the chief's daughter.",

            }
        ],

        id: '1-4neu', scenes: [
            {
                img: '',
                speaker: '',
                place: '',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Thank God you are here warrior! I need you to save my daughter!"
                },
                objective: 'Help the Village Chief',
                choices: [{type: 'next', text: "I'm on it."}]
            }
        ],

        id: '1-4neg', scenes: [
            {
                img: '',
                speaker: '',
                place: '',
                shake: false,
                engage: false,
                dialog: {
                    action: '',
                    speech: "Thank God you are here warrior! I need you to save my daughter!"
                },
                objective: 'Help the Village Chief',
                choices: [{type: 'next', text: "I'm on it."}]
            }
        ]
    }

    
]

