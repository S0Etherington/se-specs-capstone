const story = {
    frontyardStart: {
        background: null,
        text: 'You step out into your yard',
        subText: 'There are several rocks strewn around, the main path leading away, and your garden',
        options: {
            frontyardRock: 'Look under the rock',
            frontyardPath: 'Continue along the path',
            frontyardBush: 'Look through your flower bed'
        }
    },

    frontyardPath: {
        background: null,
        text: 'You continue along the path, the dirt crunching under your feet',
        subText: 'After a while you reach a point where the path splits into three',
        options: {
            pathRight: 'Choose the right path',
            pathCenter: 'Chose the center path',
            pathLeft: 'Chose the left path'
        }
    },

    frontyardRock: {
        background: null,
        text: 'You pick up a stone from the ground',
        subText:  'Nothing is under it',
        options: {
            rockLookHarder: 'Look harder at where the rock was',
            rockPutBack: 'Put the rock back',
            null: null
        }
    },

    frontyardBush: {
        background: null,
        text: 'You search through your flowers and find the dagger you had misplaced before.',
        subText: 'You place it in your pack.',
        options: {
            frontyardPack: 'Look in your pack',
            gardenSearch: 'Look through your garden for ingredients',
            null: null
        }
    },

    pathRight: {
        background: null,
        text: 'You follow the path to the right and are brought to a lake',
        subText: 'You approach the pier and see a small rowboat. There is a mountain on the other side of the lake',
        options: {
            lakeBoat: 'Use the boat to cross the lake',
            lakePier: 'Sit on the pier and fish',
            frontyardPath: 'Go back the way you came'
        }
    },

    pathCenter: {
        background: null,
        text: 'You follow the center path and are brought to the edge of a forest',
        subText: `There is a woodcutter's axe stuck in one of the trees`,
        options: {
            forestAxe: 'Take the axe and cut some wood',
            forestIn: 'Go into the forest',
            frontyardPath: 'Go back the way you came'
        }
    },

    pathLeft: {
        background: null,
        text: 'You follow path to the left and are brought to the enterance of a cave',
        subText: 'There are noises coming from inside',
        options: {
            caveIn: 'Enter the cave',
            caveAround: 'Scavenge around the cave',
            frontyardPath: 'Go back the way you came'
        }
    },

    rockLookHarder: {
        background: null,
        text: 'You bend down and inspect the blank space where the rock was',
        subText: 'Nothing is there. Seriously.',
        options: {
            rockLookHarderAgain: 'Look even harder',
            rockPutBackAgain: 'Put the rock back where it was',
            null: null
        }
    },

    rockPutBack: {
        background: null,
        text: 'You return the rock to its place',
        subText: null,
        options: {
            anotherRock: 'Pick up another rock',
            rockMoveOn: 'Move on like a reasonable person',
            null: null
        }
    },

    frontyardPack: {
        background: null,
        text: 'You look into your pack',
        subText: 'Inside is your trusty weapon collection, fishing pole, climbing gear, lantern, and haunted urn. (Note: Open the codex to see a list of your weapons.)',
        options: {
            gardenSearch: 'Look through your garden for ingredients',
            packSoup: `Make a soup out of the pack's contents`,
            null: null
        },
    },

    gardenSearch: {
        background: null,
        text: 'Of course! Why else would you have a garden?',
        subText: 'As you forage through the plants a wild cabbage slime leaps out!',
        options: {
            slimeFight: 'Try to fight the slime',
            slimeHug: 'Try to hug the slime',
            null: null
        }
    },

    packSoup:{
        background: null,
        text: 'Congratulations?',
        subText: 'You pat yourself on the back for your brilliance and make your way back to your house. Your guests seem confused at the several metal instruments in a pot. You realize it may have been a mistake as a fight brakes out, your guests arming themselves with the several weapons in your soup.',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    lakeBoat: {
        background: null,
        text: 'You take the boat and beging rowing',
        subText: 'when you reach the center of the lake you feel the boat shake',
        options: {
            boatStop: 'Stop the boat and fish',
            boatGo: 'Continue rowing',
            null: null
        }
    },

    lakePier: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: 'You sit at the edge of the peir and pull out your fishing pole. It is a lovely day for fishing and you catch several fish that you make into a delicious chowder. Your guests are very pleased.',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    forestAxe: {
        background: null,
        text: 'You pick up the axe and begin to chop into the nearest tree',
        subText: 'As you are chopping and angry looking imp springs from the tree',
        options: {
            impFight: 'Try to fight the imp',
            impTalk: 'Try to talk to the imp',
            null: null
        }
    },

    forestIn: {
        background: null,
        text: 'You enter the forest',
        subText: 'It is very dark',
        options: {
            forestLight: 'Search for a light',
            forestDark: `Keep going. You're sure you know the way`,
            null: null
        }
    },

    caveIn: {
        background: null,
        text: 'You enter the dark cave',
        subText: 'As you follow the noise you come upon a large glacial wolf eating her lunch',
        options: {
            wolfFight: 'Try to fight the wolf',
            wolfEat: `Try to share the wolf's lunch`,
            null: null
        }
    },

    caveAround: {
        background: null,
        text: 'You search around the cave',
        subText: 'You find two bushes, one with red berries, and one with green berries that smoke and drip some kind of liquid',
        options: {
            redBerries: 'Pick the red berries',
            greenBerries: 'Pick the green berries',
            null: null
        }
    },

    rockLookHarderAgain: {
        background: null,
        text: 'You look even harder and...oh wait...what is that?',
        subText: 'There is a small glowing crack where the rock was laying',
        options: {
            rockDig: 'Investigate the crack',
            rockIgnore: 'Put the rock back',
            null: null
        }
    },

    rockPutBackAgain: {
        background: null,
        text: 'You place the rock back where it was and give it a gentle pat',
        subText: 'You walk around the back of your house',
        options: {
            backyardChicken: 'Take a look at your chicken coop',
            backyardDig: 'Begin digging in the dirt'
        }
    },

    impFight: {
        background: null,
        text: 'You try to fight the imp',
        subText: 'Which weapon will you use?',
        options: {
            impbow: 'Flaming bow and arrow',
            impAxe: 'Glowing battle axe',
            impDart: 'Poisonous blow darts'
        }
    },

    impTalk: {
        background: null,
        text: 'YOU DIED',
        subText: 'The imp does not speak English',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    impbow: {
        background: null,
        text: 'YOU DIED',
        subText: 'The imp caught the arrows and easily shot them back at you',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    impAxe: {
        background: null,
        text: 'YOU DIED',
        subText: 'The axe was too large and the imp dodged it before knocking you out cold',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    impDart: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: `After killing the imp with the darts, you were able to gather the ingredients for your famous 'imp stew'. Your guest loved it and the party was a sucess.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    anotherRock: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: `You pick up another rock 'Of course!' You exclaim. Your famous rock soup will be perfect for this occasion. You gather as many rocks as you can and prepare your rock soup. You do not think your guests will be asking you to host again.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    rockMoveOn: {
        background: null,
        text: 'The thrilling rock adventure makes you think of the caves to the east of your house',
        subText: 'You make your way to the cave, hoping maybe to find some mushrooms. There are sounds coming from inside the cave',
        options: {
            caveIn: 'Enter the cave',
            caveAround: 'Scavenge around the cave',
            null: null
        }

    },

    slimeFight: {
        background: null,
        text: 'You try to fight the slime',
        subText: 'Which weapon do you use?',
        options: {
            slimeAxe: 'Glowing battle axe',
            slimeDagger: 'Cold dagger',
            slimeMorningStar: 'Electric Morning Star'
        }
    },

    slimeHug: {
        background: null,
        text: 'YOU DIED',
        subText: 'You attempted to hug the slime, but forgot to ask for consent. The slime stabs you in self-defense and leaves you to bleed out in the garden',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    boatStop: {
        background: null,
        text: 'You stop the boat',
        subText: 'Before you can get your fishing pole, you are violently shaken as a water sprite erupts from the lake',
        options: {
            spriteFight: 'Try to fight the sprite',
            spriteDrink: 'Offer the sprite a drink',
            null: null
        }
    },

    boatGo: {
        background: null,
        text: 'You ignore the interuption and continue rowing',
        subText: 'You pull your boat shore and look up at the mountain',
        options: {
            mountainGear: 'Use climcing gear to reach the top',
            mountainDeath: 'Use your parkour skills to reach the top',
            null: null
        }
    },

    forestLight: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: `You pull a light from you bag and are greeted with the sight of a feast laid out in front of you. You aren't sure which kind forest-dweller prepared this for you, but you'll be sure to invite them to the next party you throw. Your guests are delighted and seem much more giddy than usual. You try not to mind the small face glaring through the window.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    forestDark: {
        background: null,
        text: 'YOU DIED',
        subText: 'You immediately trip on a branch and crack your neck',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    wolfFight: {
        background: null,
        text: 'You try to fight the wolf',
        subText: 'Which weapon will you use?',
        options: {
            wolfAxe: 'Glowing axe',
            wolfBow: 'Flaming bow and arrow',
            wolfMorningStar: 'Electric morning star'
        }
    },

    wolfEat: {
        background: null,
        text: 'YOU DIED',
        subText: 'The wolf happily shares her meal with you, but you forgot that you are allergic to wolf food',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    redBerries: {
        background: null,
        text: 'YOU DIED',
        subText: `You really shouldn't eat random berries you find`,
        options: {
            null: null,
            null: null,
            null: null,
        }
    },

    greenBerries: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: 'surprisingly the berries gave the soup a delightful earthy flavor. You were the only one willing to eat it though.',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    rockDig: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: 'Once your shovel hits the ground a fountain bursts forth! Foods of all kinds come raining down! Your guests were slightly preturbed that you supplied all the food, but the feast was great!',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    rockIgnore: {
        background: null,
        text: 'You put the rock down',
        subText: 'Seriously? After all that? You know what? No. A rock falls from the sky and crushes you.',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    backyardChicken: {

    },

    backyardDig: {

    },

    spriteFight: {
        background: null,
        text: 'You attempt to fight the sprite',
        subText: 'Which weapon will you use?',
        options: {
            spriteDarts: 'Poisonous blow darts',
            spriteMorningStar: 'Electric morning star',
            spriteAxe: 'Glowing axe'
        }
    },

    spriteDrink: {
        background: null,
        text: 'YOU DIED',
        subText: 'You offered the sprite a non-branded carbonated beverage, but they did not seem to apreciate the joke.',
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    mountainGear: {

    },

    mountainDeath: {
        background: null,
        text: 'YOU DIED',
        subText: `I mean... that one's on you`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    wolfAxe: {
        background: null,
        text: 'YOU DIED',
        subText: `The dakness of the cave weakens the power of the axe and you become part of the wolf's lunch`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    wolfBow: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: `You shot the wolf with the bow and were able to gather the raw meat that the dog was feasting on. Your guests were not too pleased at the raw meat stew you made, but hey at least you made the soup.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    wolfMorningStar: {
        background: null,
        text: 'YOU DIED',
        subText: `You were able to kill the wolf with the morning star, but unfortunately you underestimated your own strength and the weapon recoil took your head off.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    spriteDarts: {
        background: null,
        text: 'YOU DIED',
        subText: `The darts pass cleanly through the sprite, and the sprite pushes you out of the boat.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    spriteMorningStar: {
        background: null,
        text: 'CONGRATULATIONS!',
        subText: `Technically water is a soup, so you count it as a success. Your guest will probably not be coming back.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    },

    spriteAxe: {
        background: null,
        text: 'YOU DIED',
        subText: `You swing the axe over your head, but didn't think about the lack of stability on open water in a row boat. You tip backwards and drown in the lake.`,
        options: {
            null: null,
            null: null,
            null: null
        }
    }
}

export default story