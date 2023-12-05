import {TerrestrialEnemyFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/creators/TerrestrialEnemyFactory";
import {EnemyFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/creators/EnemyFactory";
import {AerialEnemyFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/creators/AerialEnemyFactory";
import {Enemy} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/enemy_factory/code/products/Enemy";

// Factories are changeable
let enemy_factory: EnemyFactory = new TerrestrialEnemyFactory();
// Enemies are also changeable
let enemy: Enemy = enemy_factory.createEnemy();
enemy.attack();

enemy_factory = new AerialEnemyFactory();
enemy = enemy_factory.createEnemy();
enemy.attack();