const math = require('../math')

describe("test", () => {
    it("test add", () => {
        expect(math.add(2, 3)).toBe(5)
    })
    it("test subtract", () => {
        expect(math.subtract(2, 3)).toBe(-1)
    })
    it("test multiply", () => {
        expect(math.multiply(2, 3)).toBe(6)
    })
})