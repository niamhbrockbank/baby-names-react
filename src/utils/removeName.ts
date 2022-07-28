import { BabyName } from "../components/NameSection";

export default function removeName(
  babyList: BabyName[],
  toRemove: BabyName
): BabyName[] {
  const after = babyList.slice(babyList.indexOf(toRemove) + 1);
  const before = babyList.slice(0, babyList.indexOf(toRemove));
  return [...before, ...after];
}
