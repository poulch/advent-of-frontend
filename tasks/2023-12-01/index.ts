export class GiftRegistry {
  registry: Map<number, string[]>;

  constructor() {
    this.registry = new Map();
  }

  addGift(childId: number, gift: string) {
    if (!this.registry.has(childId)) {
      this.registry.set(childId, [gift]);
    } else {
      const gifts = this.registry.get(childId);
      gifts!.push(gift);
      this.registry.set(childId, gifts!);
    }
  }
  removeGift(childId: number, gift: string) {
    if (this.registry.has(childId)) {
      const gifts = this.registry.get(childId);
      const hasGift = gifts?.includes(gift);
      if (!hasGift) {
        throw new Error("Gift not found");
      } else {
        const newGifts = gifts?.filter((g) => g !== gift);
        this.registry.set(childId, newGifts!);
      }
    }
  }
  getGiftsForChild(childId: number) {
    return this.registry.get(childId);
  }
}
