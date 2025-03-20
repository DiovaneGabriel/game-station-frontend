import { useEffect, useState } from "react";


let games = [];
const addGame = (id, name, file, oldCores = true, console = 'NES') => {
    games.push({ id, name, file, oldCores, console });
    // games.push({ id, name, file: `/emulatorJs/roms/NES/${file}`, oldCores });
};

addGame(1, 'Castle Vania', 'Castlevania(USA).nes');
addGame(2, 'Gun Smoke', 'Gun.Smoke (USA).nes');
addGame(3, 'Basketball', 'Ultimate Basketball (USA).nes');
addGame(4, 'Contra', 'Contra (USA).nes');
addGame(5, 'Alpha Mission', 'Alpha Mission (USA).nes');
addGame(6, "Bump 'n' Jump", "Bump'n'Jump (USA).nes");
addGame(7, "Bookyman", 'Booky Man (Spain) (Gluk Video) (Unl).nes');
addGame(8, "Soccer", 'Soccer (World).nes');
addGame(9, "Mach Rider", 'Mach Rider (Japan, USA).nes');
addGame(10, "F1 Race", 'F-1 Race (Japan).nes');

addGame(11, "Balloon Fight", 'Balloon Fight (USA).nes');
addGame(12, "Galaga", 'Galaga (Europe).nes');
addGame(13, "Excite Bike", 'Excitebike (Japan, USA).nes');
addGame(14, "Pinball", 'Pinball (World).nes');
addGame(15, "Circus Charlie", 'Circus Charlie (Japan).nes');
addGame(16, "Macross", 'Choujikuu Yousai - Macross (Japan).nes');
addGame(17, "Baseball", 'Baseball (USA, Europe).nes');
addGame(18, "Pac Man", 'Pac-Man (USA) (Namco).nes');
addGame(19, "Lode Runner", 'Lode Runner (USA).nes');
addGame(20, "Kung Fu", 'Yie Ar Kung-Fu (Japan) (Rev 1.4).nes');

addGame(21, "Road Fighter", 'Road Fighter (Europe).nes');
addGame(22, "Exerion", 'Exerion (Japan) (En).nes');
addGame(23, "B Wings", 'B-Wings (Japan).nes');
addGame(24, "Twin Bee", 'TwinBee (Japan).nes');
addGame(25, "1942", '1942 (Japan, USA).nes');
addGame(26, 'Bomberman', 'Bomberman.nes');
addGame(27, "Star Force", 'Star Force (USA).nes');
addGame(28, "Dig Dug", 'Dig Dug (Japan).nes');
addGame(29, "Galaxian", 'Galaxian (J) [p1].nes');
addGame(30, "Ice Climber", 'Ice Climber (USA, Europe).nes');

addGame(31, "Battle City", 'BattleCity (Japan).nes');
addGame(32, "Elevator Action", 'Elevator Action (USA).nes');
addGame(33, "Spartan", 'Spartan X (Japan).nes');
addGame(34, "Front Line", 'Front Line (Japan).nes');
addGame(35, "Xevious", 'Xevious - The Avenger (USA).nes');
addGame(36, "Arkanoid", 'Arkanoid (USA).nes');
addGame(37, "Gyrodine", 'Gyrodine (Japan).nes');
addGame(38, "Mag Max", 'Magmax (USA).nes');
addGame(39, "Chack'n Pop", "Chack'n Pop (Japan).nes");
addGame(40, "Mappy", 'Mappy (Japan).nes');

addGame(41, "Clu Clu Land", 'Clu Clu Land (World).nes');
addGame(42, "Urban Champion", 'Urban Champion (World).nes');
addGame(43, "Pooyan", 'Pooyan (Japan).nes');
addGame(44, "Formation Z", 'Formation Z (Japan) (Rev A).nes');
addGame(45, "Zippy Race", 'Zippy Race (Japan).nes');
addGame(46, "Antartic Adventure", 'Antarctic_Adventure_(Tr).nes');
addGame(47, "Karateka", 'Karateka (Japan).nes');
addGame(48, "Combat", 'Field Combat (Japan).nes');
addGame(49, "Nuts & Milk", 'nuts-milk.nes');
addGame(50, "Warpman", 'Warpman (Japan).nes');

addGame(51, "Duck Hunt", 'Duck Hunt (World).nes');
addGame(52, "Hogans Alley", "Hogan's Alley (World).nes");
addGame(53, "Wild Gunman", 'Wild Gunman (Japan, USA).nes');
addGame(54, "Tennis", 'Tennis (Japan, USA).nes');
addGame(55, "Sky Destroyer", 'Sky Destroyer (Japan).nes');
addGame(56, "Golf", 'Golf (USA).nes');
addGame(57, "Small Mary", 'Xiao Ma Li (As).nes');
addGame(58, "Hyper Olimpyc", 'Hyper Olympic (Japan).nes', false);
addGame(59, "Hyper Sports", 'Hyper Sports (Japan).nes', false);
addGame(60, "Lunar Ball", 'Lunar Ball (Japan).nes');

addGame(61, "Bird Week", 'Bird Week (Japan).nes');
addGame(62, "Devil World", 'Devil World (Europe).nes');
addGame(63, "Arabian", 'Super Arabian (Japan).nes');
addGame(64, "Ninja", 'Ninja-kun - Majou no Bouken (Japan) (Rev 1).nes');

const games64 = games;
games = [];

addGame(1, 'Contra', 'Contra (USA).nes');
addGame(2, "Infant School", "Urusei Yatsura - Lum no Wedding Bell (Japan).nes");
addGame(3, "Bump 'n' Jump", "Bump'n'Jump (USA).nes");
addGame(4, "Flipull", "Flipull - An Exciting Cube Game (Japan) (En).nes");
addGame(5, "Tiger Heli", "Tiger-Heli (USA).nes");
addGame(6, "Argus", "Argus (Japan).nes");
addGame(7, "Seicross", "Seicross (USA).nes");
addGame(8, "Space Fight of Gun", "");//n achei
addGame(9, "Fantasy of Gun", "");//n achei
addGame(10, "Abyss of Gloom", "");//n achei

addGame(11, "Aldha Mission", 'Alpha Mission (USA).nes');
addGame(12, "Castle Excellent", "Castle Excellent (Japan).nes");
addGame(13, "Tetris II", "TengenTetris(Rev1)(Unl).nes");
addGame(14, "Arkanoid", 'Arkanoid (USA).nes');
addGame(15, "B Wang", 'B-Wings (Japan).nes');
addGame(16, "1942", '1942 (Japan, USA).nes');
addGame(17, "Mag Max", 'Magmax (USA).nes');
addGame(18, "Spartan", 'Spartan X (Japan).nes');
addGame(19, "Elevator Action", 'Elevator Action (USA).nes');
addGame(20, "Duck", 'Duck.nes');//bugado

addGame(21, "Twin Bee", 'TwinBee (Japan).nes');
addGame(22, "Dig Dug II", 'Dig Dug II - Trouble in Paradise (USA).nes');
addGame(23, "Son Son", 'Son Son (Japan).nes');
addGame(24, "Wars", 'Penguin-kun Wars (Japan).nes');
addGame(25, "Bomb Jack", 'Mighty Bomb Jack (USA).nes');
addGame(26, "Sqoon", 'Sqoon (USA).nes');
addGame(27, "Ninja 3", 'Ninja Hattori-kun - Ninja wa Syugyou de Gozaru (Japan).nes');
addGame(28, "Volguard II", 'Volguard II (Japan).nes');
addGame(29, "Chexder", 'Thexder (Japan).nes');
addGame(30, "Galg", 'Zunou Senkan Galg (Japan).nes');

addGame(31, "Gyrodine", 'Gyrodine (Japan).nes');
addGame(32, "Spelunker", 'Spelunker (USA).nes', false);
addGame(33, "The Tower Druaga", 'Tower of Druaga, The (J) [p1].nes');
addGame(34, "Geimos", 'Geimos (Japan).nes');
addGame(35, "Chall Enger", 'Challenger (Japan).nes');
addGame(36, "Start Juster", 'Star Luster (Japan).nes');
addGame(37, "Baltron", 'Baltron (Japan).nes');
addGame(38, "Xevious", 'Xevious - The Avenger (USA).nes');
addGame(39, "Route 16", 'Route-16 Turbo (Japan).nes');
addGame(40, "Exed Exes", 'Chou Fuyuu Yousai Exed Exes (Japan).nes');

addGame(41, "Dough Boy", 'Dough Boy (Japan).nes');
addGame(42, "Lot Lot", 'Lot Lot (Japan).nes');
addGame(43, "Sasa", 'Astro Robo Sasa (Japan).nes');
addGame(44, "Pony Cat", 'Onyanko Town (Japan).nes');
addGame(45, "King of Ghost", 'Obake no Q Tarou - Wanwan Panic (Japan).nes');
addGame(46, "Othello", 'Othello (USA).nes');
addGame(47, "Super Dynamix", "Super Dyna'mix Badminton (Japan).nes");
addGame(48, "Battle City", 'BattleCity (Japan).nes');
addGame(49, "Pooyan", 'Pooyan (Japan).nes');
addGame(50, "Formation Z", 'Formation Z (Japan) (Rev A).nes');

addGame(51, "Star Force", 'Star Force (USA).nes');
addGame(52, "Galaga", 'Galaga (Europe).nes');
addGame(53, "Binary & Land", 'Binary Land (Japan).nes');
addGame(54, "Macross", 'Choujikuu Yousai - Macross (Japan).nes');
addGame(55, "Star Gate", 'Star Gate (Japan).nes');
addGame(56, "Milk & Nuts", 'nuts-milk.nes');
addGame(57, "Arabian", 'Super Arabian (Japan).nes');
addGame(58, "Millipede", 'Millipede (USA).nes');
addGame(59, "Space Et", 'Space Invaders (Japan).nes');
addGame(60, "Sky Destroyer", 'Sky Destroyer (Japan).nes');

addGame(61, "Exerion", 'Exerion (Japan) (En).nes');
addGame(62, "Antartic Adventure", 'Antarctic_Adventure_(Tr).nes');
addGame(63, "Circus Charlie", 'Circus Charlie (Japan).nes');
addGame(64, "Mappy", 'Mappy (Japan).nes');
addGame(65, "Dig Dug", 'Dig Dug (Japan).nes');
addGame(66, "Ninja", 'Ninja-kun - Majou no Bouken (Japan) (Rev 1).nes');
addGame(67, "Magic Jewelry", 'Magic Jewelry (Asia) (Unl).nes');
addGame(68, "Small Mary", 'Xiao Ma Li (As).nes');
addGame(69, "Warpman", 'Warpman (Japan).nes');
addGame(70, "Joust", 'Joust (USA).nes');

addGame(71, "Chack'n Pop", "Chack'n Pop (Japan).nes");
addGame(72, "Door Door", 'Door Door (Japan).nes');
addGame(73, "Ninja II", 'Ikki (Japan).nes');
addGame(74, "Burger Time", 'BurgerTime (USA).nes');
addGame(75, "Kung Fu", 'Yie Ar Kung-Fu (Japan) (Rev 1.4).nes');
addGame(76, "Combat", 'Field Combat (Japan).nes');
addGame(77, "Karateka", 'Karateka (Japan).nes');
addGame(78, "Lode Runner", 'Lode Runner (USA).nes');
addGame(79, "Helicopter", '');//n achei
addGame(80, 'Bomberman', 'Bomberman.nes');

addGame(81, "Bookyman", 'Booky Man (Spain) (Gluk Video) (Unl).nes');
addGame(82, "Galaxian", 'Galaxian (J) [p1].nes');
addGame(83, "Devil World", 'Devil World (Europe).nes');
addGame(84, "Hyper Olimpyc", 'Hyper Olympic (Japan).nes', false);
addGame(85, "Hyper Sports", 'Hyper Sports (Japan).nes', false);
addGame(86, "Lunar Ball", 'Lunar Ball (Japan).nes');
addGame(87, '10 Yard Fight', '10-Yard Fight (USA, Europe).nes');
addGame(88, "Pac Man", 'Pac-Man (USA) (Namco).nes');
addGame(89, "Front Line", 'Front Line (Japan).nes');
addGame(90, "Bird Week", 'Bird Week (Japan).nes', false);

addGame(91, "Road Fighter", 'Road Fighter (Europe).nes');
addGame(92, "Zippy Race", 'Zippy Race (Japan).nes');
addGame(93, "F1 Race", 'F-1 Race (Japan).nes');
addGame(94, "City Connection", 'City Connection (USA).nes');

const games94 = [...games];

addGame(95, "Spelunker II", 'Spelunker II - Yuusha e no Chousen (Japan).nes');
addGame(96, "Hector", 'Starship Hector (USA).nes');
addGame(97, "Higemaru", 'Higemaru - Makai-jima - Nanatsu no Shima Daibouken (Japan).nes');
addGame(98, "Ikari", 'Ikari Warriors (USA).nes');
addGame(99, "A Close All", 'Magnum Kikiippatsu - Empire City - 1931 (Japan).nes');
addGame(100, "Fire Fighter", 'Flying Hero (Japan).nes');

addGame(101, "Quad Challenge", 'Gekitotsu Yonku Battle (Japan).nes');

// https://saturnogame.blogspot.com/2017/01/cartucho-do-dynavision-xtreme-com-106.html

const games101 = games;

const mario = { id: 1, name: "Super Mario Bros.", file: `/emulatorJs/roms/NES/Super Mario Bros. (World).nes`, oldCores: true };


games = [];
addGame(1, "Super Mario World", 'Super Mario World (U) [!].smc', true, 'SNES');

const snes = games;

export { games64, games94, games101, mario, snes };