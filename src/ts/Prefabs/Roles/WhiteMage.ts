import Battlefield from "../../Scenes/Battlefied";
import { EffectRange, RoleNames } from "../Enums";
import AllyQueue from "../Queues/AllyQueue";
import Role from "../Role";
import Skill from "../Skill";
import Attack from "../Skills/Attack";
import Blessing from "../Skills/Blessing";
import Cure from "../Skills/Cure";
import Heal from "../Skills/Heal";
import Ragnarok from "../Skills/Ragnarok";
import Resurrection from "../Skills/Resurrection";
import Sanctuary from "../Skills/Sanctuary";

export default class WhiteMage extends Role {
    level: number = 0;
    static readonly roleName = RoleNames.WHITE_MAGE;
    static readonly positionInSpreadsheet = 6;
    static readonly healthMultiplier = 3;
    static readonly physicalAttackMultiplier = 4;
    static readonly magicalAttackMultiplier = 2;
    static readonly physicalDefenseMultiplier = 1;
    static readonly magicalDefenseMultiplier = 1;
    static readonly effectRange = EffectRange.One;

    static readonly skills: [number, typeof Skill][] = [
        [1, Attack],
        [2, Heal],
        [5, Cure],
        [10, Blessing],
        [15, Resurrection],
        [20, Sanctuary],
        [30, Ragnarok]
    ];

    getAvailableSkills() {
        return WhiteMage.skills.filter((skill) => skill[0] <= this.level);
    }

    render(scene: Phaser.Scene): void {
        const sprite = scene.add.sprite(
            scene.cameras.main.centerX + 150,
            scene.cameras.main.centerY,
            WhiteMage.spriteFileName,
            WhiteMage.positionInSpreadsheet
        ).setInteractive();

        Battlefield.turnElements.add(sprite);

        sprite.on('pointerdown', function(pointer) {
            const currentAlly = AllyQueue.getQueue().getFirst();
            currentAlly.setRole(WhiteMage);
            currentAlly.renderRole(scene);
            AllyQueue.getQueue().nextTurn();
        });
    }
}
