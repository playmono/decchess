import { AreaOfEffect, DamageType, EffectRange } from "../Enums";
import Skill from "../Skill";

export default class Cure implements Skill {
    static readonly spriteName = "sword";
    static readonly effectRange = EffectRange.One;
    static readonly damageType = DamageType.None;
    static readonly areaOfEffect = AreaOfEffect.Single;
}
