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
        subText: 'You approach the pier and see a small rowboat',
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
        text: 'You sit at the edge of the peir and pull out your fishing pole',
        subText: 'Which of bait will you use?',
        options: {
            baitWorm: 'A worm',
            baitSandwich: 'A blt sandwich',
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
            
        }
    }
}

export default story