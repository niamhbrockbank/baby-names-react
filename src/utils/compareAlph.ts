import { BabyName } from "../components/NameSection";

export default function compareAlph(a: BabyName, b: BabyName) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
