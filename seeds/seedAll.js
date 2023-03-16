const { Genres, Platform, Game, Developer } = require("../models");

async function seedDataBase() {
  try {
    await Genres.bulkCreate([
      { name: "Action" },
      { name: "Indie" },
      { name: "Adventure" },
      { name: "RPG" },
      { name: "Strategy" },
      { name: "Shooter" },
      { name: "Casual" },
      { name: "Puzzle" },
      { name: "Arcade" },
      { name: "Platformer" },
      { name: "Racing" },
      { name: "Massively Multiplayer" },
      { name: "Sports" },
      { name: "Fighting" },
    ]);

    await Platform.bulkCreate([
      { name: "PC" },
      { name: "PlayStation 5" },
      { name: "Xbox One" },
      { name: "PlayStation 4" },
      { name: "Xbox Series S/X" },
      { name: "Nintendo Switch" },
      { name: "iOS" },
      { name: "Android" },
      { name: "Nintendo 3DS" },
      { name: "Nintendo DS" },
      { name: "Nintendo DSi" },
      { name: "macOS" },
      { name: "Linux" },
      { name: "Xbox 360" },
      { name: "Xbox" },
      { name: "PlayStation 3" },
      { name: "PlayStation 2" },
      { name: "PlayStation" },
      { name: "PS Vita" },
      { name: "PSP" },
    ]);

    await Developer.bulkCreate([
      { name: "Rockstar North" },
      { name: "Rockstar Games" },
      { name: "Valve Software" },
      { name: "Crystal Dynamics" },
      { name: "Certain Affinity" },
      { name: "Hidden Path Entertainment" },
      { name: "NVIDIA Lightspeed Studios" },
      { name: "Turtle Rock Studios" },
      { name: "Aspyr Media" },
      { name: "2K Australia" },
      { name: "2K Marin" },
      { name: "2K China" },
      { name: "2K" },
      { name: "Irrational Games" },
      { name: "Gearbox Software" },
      { name: "DONTNOD Entertainment" },
      { name: "Digital Extremes" },
      { name: "Digital Domain" },
      { name: "Double Eleven" },
      { name: "Playdead" },
      { name: "Bethesda Softworks" },
      { name: "id Software" },
      { name: "Panic Button" },
      { name: "Tango Gameworks" },
      { name: "Escalation Studios" },
      { name: "Santa Monica Studio" },
      { name: "SCE Santa Monica Studio" },
      { name: "Bethesda Game Studios" },
      { name: "BattleCry Studios" },
      { name: "Bungie" },
      { name: "Vicarious Visions" },
    ]);

    await Game.bulkCreate(
      [
        {
          name: "Grand Theft Auto V",
          released: "2013-09-17",
          poster:
            "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          rating: 4.47,
          playtime: 73,
          tags: [
            "third-person",
            "singleplayer",
            "multiplayer",
            "atmospheric",
            "co-op",
            "funny",
            "open-world",
            "rpg",
            "comedy",
          ],
          description:
            "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.",
        },
        {
          name: "The Witcher 3: Wild Hunt",
          released: "2015-05-18",
          poster:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          rating: 4.66,
          playtime: 46,
          tags: [
            "third-person",
            "singleplayer",
            "atmospheric",
            "fantasy",
            "dark-fantasy",
            "nudity",
            "open-world",
            "magic",
          ],
          description:
            "The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.",
        },
        {
          name: "Portal 2",
          released: "2011-04-18",
          poster:
            "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
          rating: 4.62,
          playtime: 11,
          tags: [
            "sci-fi",
            "singleplayer",
            "multiplayer",
            "atmospheric",
            "co-op",
            "funny",
          ],
          description:
            "Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. \n\nIts plot directly follows the first game's, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...\n\nPortal 2's core mechanics are very similar to the first game's ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.\n\nThe game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.\n\nPortal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor.",
        },
        {
          name: "Tomb Raider (2013)",
          released: "2013-03-05",
          poster:
            "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
          rating: 4.06,
          playtime: 10,
          tags: ["third-person", "singleplayer", "multiplayer", "atmospheric"],
          description:
            "A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.\r\nYoung Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.\r\nThe game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience.\r\nThe game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while using weapons and environments from the single-player campaign.",
        },
        {
          name: "Counter-Strike: Global Offensive",
          released: "2012-08-21",
          poster:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          rating: 3.57,
          playtime: 65,
          tags: [
            "fps",
            "multiplayer",
            "co-op",
            "online",
            "war",
            "cooperative",
            "tactical",
          ],
          description:
            "Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. \r\nObjectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isn’t you and just perform the best with.\r\nCS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.",
        },
        {
          name: "Portal",
          released: "2007-10-09",
          poster:
            "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          rating: 4.51,
          playtime: 4,
          tags: [
            "co-op",
            "singleplayer",
            "steam-achievements",
            "atmospheric",
            "first-person",
            "sci-fi",
            "fps",
            "funny",
          ],
          description:
            "Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. \r\nSilent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS.\r\nPlayers will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see.\r\nWhite environments will guide the player’s portal placement, forcing them to pay attention to the surroundings.  Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.",
        },
        {
          name: "Left 4 Dead 2",
          released: "2009-11-17",
          poster:
            "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          rating: 4.09,
          playtime: 9,
          tags: [
            "horror",
            "singleplayer",
            "co-op",
            "multiplayer",
            "first-person",
            "zombies",
            "tactical",
          ],
          description:
            "Cooperative survival continues with a different set of characters. New survivors are making their way through 5 campaigns with an added ability to play through the story of the first game as well, using not only expanded arsenal of 20 ranged and 10 melee weapons but improved AI Director. Your surroundings and weather will change; enemy and item placement will differ from map to map, from difficulty to difficulty. New unique special zombies, placed in the unlucky for the player spot, can end your run.\r\nHigh compatibility with community mods will allow you not only to add user-created maps but player models, enemy models, and even in-game music, which will help any player to create the unique experience on top of solid game mechanics.\r\nCompetitive multiplayer mods from arena survival to a head-on competition with another team of survivors are addictive and, in addition to the campaign, will provide you with hundreds of hours of game content.",
        },
        {
          name: "The Elder Scrolls V: Skyrim",
          released: "2011-11-11",
          poster:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
          rating: 4.42,
          playtime: 46,
          tags: [
            "third-person",
            "atmospheric",
            "singleplayer",
            "open-world",
            "first-person",
            "fantasy",
            "rpg",
          ],
          description:
            "The fifth game in the series, Skyrim takes us on a journey through the coldest region of Cyrodiil. Once again player can traverse the open world RPG armed with various medieval weapons and magic, to become a hero of Nordic legends –Dovahkiin, the Dragonborn. After mandatory character creation players will have to escape not only imprisonment but a fire-breathing dragon. Something Skyrim hasn’t seen in centuries.\r\nAfter Oblivion, the magic system was reworked, in order to show players more aggressive and direct combat. As a Dragonborn, your character will be able to use the powerful magic of dragon shouts, powered, upgraded and researched with the souls of the dragons that will be randomly encountered by players, while traveling. Hundreds of sidequests will invite players to discover every part of the newly introduced land. Aside from already filled with guilds, Daedra and steampunk Dwemer ruins, Skyrim has additional DLC content that not only brings Solstheim island and vampire conclave but gives players the ability to build their own homes, instead of buying pre-made ones.",
        },
        {
          name: "BioShock Infinite",
          released: "2013-03-26",
          poster:
            "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          rating: 4.39,
          playtime: 12,
          tags: [
            "horror",
            "singleplayer",
            "atmospheric",
            "first-person",
            "sci-fi",
            "gore",
            "fantasy",
          ],
          description:
            "The third game in the series, Bioshock takes the story of the underwater confinement within the lost city of Rapture and takes it in the sky-city of Columbia. Players will follow Booker DeWitt, a private eye with a military past; as he will attempt to wipe his debts with the only skill he’s good at – finding people. Aside from obvious story and style differences, this time Bioshock protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.\r\nOpen and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. But Bioshock is not famous for its visuals, but for its story.  Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbia’s leader - Zachary Comstock and save Elizabeth, the girl, that’s been locked up in the flying city since her birth.\r\nUnique weapons and mechanics of Vigor will make encounters different, helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.",
        },
        {
          name: "Red Dead Redemption 2",
          released: "2018-10-26",
          poster:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          rating: 4.59,
          playtime: 18,
          tags: [
            "multiplayer",
            "singleplayer",
            "atmospheric",
            "co-op",
            "open-world",
            "first-person",
            "third-person",
            "gore",
            "exploration",
            "violent",
          ],
          description:
            "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. \r\n\r\nAfter a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.\r\n\r\nFrom the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.",
        },
        {
          name: "Borderlands 2",
          released: "2012-09-18",
          poster:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          rating: 4.02,
          playtime: 10,
          tags: [
            "sci-fi",
            "singleplayer",
            "multiplayer",
            "co-op",
            "rpg",
            "cooperative",
            "open-world",
            "loot",
            "dark-humor",
          ],
          description:
            "Sequel to the 4-player cooperative FPS RPG Borderlands, where the new team of Vault Hunters arrives on the infamous planet Pandora in order to get the riches, hidden inside the Vault, and help to free the planet from the Handsome Jack, President of Hyperion. Clear out the endless waves and groups and marauders with various weapon types and character abilities.\r\nUnlike the first game, Borderlands 2 provided DLC not only expanding the world of Pandora with stand-alone story campaigns but adding 2 more characters. Now the main cast consists of Gunzerker Salvador(dual-wields guns at command), Siren Maya (holds and paralyzes the enemy), Commando Axton (summons turrets) and Zer0 the Assasin (invisible sniper ninja). But with the DLC players can try out summoning giant flying robots with Gaige the Mechromancer and Krieg the Psycho. \r\nMost of the game charm and popularity of Borderlands 2 comes from the supporting cast and the personalities of the NPC, making this fast-paced shooter with optional cover stand out.",
        },
        {
          name: "Life is Strange",
          released: "2015-01-29",
          poster:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          rating: 4.11,
          playtime: 7,
          tags: ["third-person", "singleplayer", "atmospheric", "mystery"],
          description:
            "Interactive storytelling and plot-heavy games gained popularity, and “Life is Strange” arrived as teen mystery adventure. The plot will go through the life of Maxine, a teenager in possession of curious power, allowing her to stop and rewind time, in order to manipulate her surroundings. Max, after the reunion with her friend Chloe, is on the path to uncovering the secrets of Arcadia Bay. Players will have to deal with puzzle solving through the fetch quests, in order to change the world around them. \nThe game puts players in situations, where they’re forced to make a moral choice, going through the decision which may have short-term or long-term consequences. Every choice made by the player will trigger the butterfly effect, surrounding the first playthrough of the game with a lot of emotional struggle, thoughtfully crafted by the developers at Dontnod Entertainment. Life is Strange is third person adventure game, where players might seem just as an observer of the stories, unfolding in front of them.",
        },
        {
          name: "Half-Life 2",
          released: "2004-11-16",
          poster:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
          rating: 4.5,
          playtime: 7,
          tags: [
            "sci-fi",
            "singleplayer",
            "multiplayer",
            "first-person",
            "sci-fi",
            "horror",
            "atmospheric",
            "aliens",
          ],
          description:
            "Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. \r\nWhat is different, aside from the overall design quality, is the use of Valve’s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving.",
        },
        {
          name: "BioShock",
          released: "2007-08-21",
          poster:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
          rating: 4.37,
          playtime: 3,
          tags: [
            "horror",
            "singleplayer",
            "atmospheric",
            "first-person",
            "sci-fi",
            "gore",
            "fantasy",
          ],
          description:
            "FPS with RPG elements, Bioshock invites players to experience horrors of underwater isolation in the city of Rapture, the failed project of the better future. After surviving the plane crash, the protagonist has only one way to go – to the giant lighthouse that opens a way to the underwater utopia. Players will have to unravel the complicated history of Rapture, relying only on themselves, their guns and Plasmids, a mystical substance, that allows it’s user to obtain near magical abilities.\r\nThe atmosphere of isolation and threat is conveyed through the environmental sounds, subtle electrical buzzing and audio logs, telling the story of societal decay and despair. Players will shape the story, making moral choices along their way, saving Little Sisters or extracting ADAM, the mystical fuel for your abilities. While exploring the underwater city, players will complete missions for the last sane inhabitants of Rapture, while fending off the less fortunate ones.",
        },
        {
          name: "Limbo",
          released: "2010-07-21",
          poster:
            "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          rating: 4.15,
          playtime: 3,
          tags: [
            "2d",
            "horror",
            "singleplayer",
            "physics",
            "difficult",
            "dark",
            "cinematic",
          ],
          description:
            "This popular 2D puzzle-platformer creates the atmosphere of isolation, where the player alone can guide the nameless protagonist to his destination. Hostile environments and one-hit deaths may seem difficult, but the game implements a fair amount of checkpoints. The monochrome color palette showcases cartoony proportions of every living thing while making lack of details threatening. Limbo shows you exactly what you encounter, but never how it looks.\n\nLimbo uses the atmosphere and sound design of the horror genre while avoiding tropes of the modern horror games. The overarching theme and unique style compensated for the rather short game with an abrupt ending, making Limbo one of the most impactful games for the genre.\n\nThe simple controls and easy-to-pick-up mechanics help to make a clear distinction, which part of the stage players can interact with, and which part can lead to the quick death. Even though the game is in black and white, this separation is intuitive and natural, so the player would know exactly where to go or what to do.",
        },
        {
          name: "DOOM (2016)",
          released: "2016-05-13",
          poster:
            "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
          rating: 4.38,
          playtime: 10,
          tags: [
            "singleplayer",
            "multiplayer",
            "atmospheric",
            "co-op",
            "horror",
            "fps",
            "gore",
            "classic",
            "zombies",
            "remake",
            "cooperative",
            "sci-fi",
          ],
          description:
            "Return of the classic FPS, Doom (2016) acts as a reboot of the series and brings back the Doomslayer, protagonist of the original Doom games. In order to solve the energy crisis, humanity learned to harvest the energy from Hell, and when something went wrong and a demon invasion has started, it’s up to the player to control the Doomslayer and destroy the evil.\n\nDoom is a fast-paced game that restores the concept of instant health packs and leaves the player against armies of Hell with no cover, no health regeneration, or help from anyone. After damaging monsters enough, they will start glowing, which will allow players to perform glory kills to restore some health. While exploring the levels, players will come across secrets, collectible items, or upgrade points for the weapons and armor. The single-player campaign silent protagonist has a noticeable personality. He gets visibly annoyed and angry in his actions during expository cutscenes and forces his way through the game. Multiplayer maps gather players in Deathmatch/”king-of-the-hill” type game modes, with all the weapons from the single-player campaign.",
        },
        {
          name: "God of War (2018)",
          released: "2018-04-20",
          poster:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
          rating: 4.59,
          playtime: 10,
          tags: [
            "singleplayer",
            "fantasy",
            "gore",
            "third-person",
            "exploration",
            "violent",
            "combat",
            "blood",
          ],
          description:
            "It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfill a deeply personal quest. \r\n\r\nHis vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… And teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew. \r\n\r\nKratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. \r\n\r\nFrom the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters, and gods. With an added emphasis on discovery and exploration, the world will draw players in to explore every inch of God of War’s breathtakingly threatening landscape—by far the largest in the franchise. \r\n\r\nWith an over the shoulder free camera that brings the player closer to the action than ever before, fights in God of War mirror the pantheon of Norse creatures Kratos will face: grand, gritty, and grueling. A new main weapon and new abilities retain the defining spirit of God of War while presenting a vision of violent conflict that forges new ground in the genre",
        },
        {
          name: "Destiny 2",
          released: "2017-09-06",
          poster:
            "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          rating: 3.56,
          playtime: 5,
          tags: [
            "singleplayer",
            "multiplayer",
            "atmospheric",
            "co-op",
            "open-world",
            "exploration",
            "aliens",
            "futuristic",
            "combat",
          ],
          description:
            "Destiny 2 is an online multiplayer first-person shooter. You take on the role of a Guardian that needs to protect the last city on Earth from alien invaders. The game follows its predecessor, Destiny. The goal of the game is to return the Light that was stolen from the Guardians by the aliens.\nDestiny 2 features two main activity types: player versus environment and player versus player. PvE is focused on exploration, story missions interaction with NPCs and side quests. PvP features 4v4 team matches in different modes. The game also allows taking part in group missions, such as three-player strikes and six-player raids.\nDestiny 2 has a strong RPG aspect that includes character customization and development. There are three classes in the game - Warlock, Hunter, and Titan; they provide different playstyles depending on their specialization and unique abilities. To develop the character you can gain experience points completing the story and side missions.",
        },
        {
          name: "Fallout 4",
          released: "2015-11-09",
          poster:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          rating: 3.8,
          playtime: 41,
          tags: [
            "singleplayer",
            "rpg",
            "atmospheric",
            "open-world",
            "exploration",
            "loot",
            "fps",
            "sci-fi",
            "third-person",
            "survival",
            "post-apocalyptic",
          ],
          description:
            "The fourth game in the post-apocalyptic action RPG series from Bethesda studious brings players back to the retro-future. After customizing the facial features of the character, players will be admitted to the Vault 111 with their family, and tricked into entering the cryogenic capsule. After the rude awakening after the unknown amount of time has passed, the child is separated from the parents and the loving partner is killed in front of them – the main quest is settled. Now there’s only the giant open world to explore. Fallout 4 introduces the mechanics of settlement building, where players can build their own little town. Gathering material for crafting and building brings more “survival” elements into the old formula. Within their own settlements, players will be able to build all needed utilities, from storage spaces to power armor stations. Visual upgrade from the previous game brings life to what used to be brown wastelands, now filled with details and color.",
        },
        {
          name: "Team Fortress 2",
          released: "2007-10-10",
          poster:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          rating: 3.67,
          playtime: 9,
          tags: [
            "multiplayer",
            "co-op",
            "online",
            "first-person",
            "cooperative",
            "funny",
            "comedy",
            "tactical",
            "competitive",
          ],
          description:
            "TF2 is an objective based arena shooter with unique characters, representing different classes, acting as a staple of casual and competitive gaming for Steam. Dozens of different maps and game modes are trying to keep this game alive, after all the years it was available. Each character has a vast arsenal that can be accessed through completing in-game achievements, randomly receiving them from loot-boxes within the game, crafting them or just buying and trading items on the Steam Market. \r\nFor players, that's not into the direct clash with players from the enemy team, Team Fortress 2 introduced a PvE mode, which is wave defense from the mirrored robotic opponents that have qualities of some of the playable classes. \r\nEvery update and introduction, made over years, provided a lot of entertainment In the form of comic books an short animated videos, creating and explaining a story behind endless clashes for resources, briefcases or pure domination.",
        },
      ],
      {
        validate: true,
        individualHooks: true,
        include: [Genres, Platform, Developer],
      }
    );
  } catch (error) {
    return console.log(error);
  }
  return console.log("Devs, Genres, Platforms, Games Created");
}

seedDataBase();
