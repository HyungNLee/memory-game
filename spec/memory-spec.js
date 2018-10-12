import { MemoryCard } from "../src/memory.js";

describe("card", function() {
    it("will properly construct a card with url property", function() {
        let newCard = new MemoryCard("../src/img/cardOne.jpg");
        expect(newCard.url).toEqual("../src/img/cardOne.jpg");
    });
});