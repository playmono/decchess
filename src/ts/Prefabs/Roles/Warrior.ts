import { EffectRange, RoleNames } from "../Enums";
import Role from "../Role";
import Skill from "../Skill";
import Attack from "../Skills/Attack";
import Bash from "../Skills/Bash";
import Berserk from "../Skills/Berserk";
import MagnumBreak from "../Skills/MagnumBreak";
import Protection from "../Skills/Protection";
import Provoke from "../Skills/Provoke";
import Ragnarok from "../Skills/Ragnarok";

export default class Warrior extends Role {
    level: number = 0;
    static readonly roleName = RoleNames.WARRIOR;
    static readonly positionInSpreadsheet = 0;
    static readonly healthMultiplier = 3;
    static readonly physicalAttackMultiplier = 4;
    static readonly magicalAttackMultiplier = 2;
    static readonly physicalDefenseMultiplier = 1;
    static readonly magicalDefenseMultiplier = 1;
    static readonly effectRange = EffectRange.One;

    static readonly skills: [number, typeof Skill][] = [
        [1, Attack],
        [2, Bash],
        /*[5, Provoke],
        [10, Protection],
        [15, Berserk],
        [20, MagnumBreak],
        [30, Ragnarok]*/
    ];

    getAvailableSkills() {
        return Warrior.skills.filter((skill) => skill[0] <= this.level);
    }
}
