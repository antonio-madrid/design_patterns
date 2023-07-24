import {TerrestrialEnemyFactory} from "../creators/TerrestrialEnemyFactory";
import {EnemyFactory} from "../creators/EnemyFactory";
import {AerialEnemyFactory} from "../creators/AerialEnemyFactory";
import {Enemy} from "../products/Enemy";

// Factories are changeable
let enemy_factory: EnemyFactory = new TerrestrialEnemyFactory();
// Enemies are also changeable
let enemy: Enemy = enemy_factory.createEnemy();
enemy.attack();

enemy_factory = new AerialEnemyFactory();
enemy = enemy_factory.createEnemy();
enemy.attack();