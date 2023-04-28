import { EffectRange, RoleNames } from "../Enums";
import Role from "../Role";
import Skill from "../Skill";
import Attack from "../Skills/Attack";
import FireBolt from "../Skills/Firebolt";
import LordOfVermillion from "../Skills/LordOfVermillion";
import MedusaGlance from "../Skills/MedusaGlance";
import Ragnarok from "../Skills/Ragnarok";
import SpiritualMind from "../Skills/SpiritualMind";
import StoneCurse from "../Skills/StoneCurse";

export default class BlackMage extends Role  {
    static readonly roleName = RoleNames.BLACKMAGE;
    static readonly positionInSpreadsheet = 8;
    static readonly healthMultiplier = 2;
    static readonly physicalAttackMultiplier = 1;
    static readonly magicalAttackMultiplier = 5;
    static readonly physicalDefenseMultiplier = 2;
    static readonly magicalDefenseMultiplier = 5;
    static readonly effectRange = EffectRange.One;

    static readonly skills: [number, typeof Skill][] = [
        [1, Attack],
        [2, FireBolt],
        /*[5, StoneCurse],
        [10, SpiritualMind],
        [15, LordOfVermillion],
        [20, MedusaGlance],
        [30, Ragnarok]*/
    ];

    getAvailableSkills() {
        return BlackMage.skills.filter((skill) => skill[0] <= this.level);
    }
}
