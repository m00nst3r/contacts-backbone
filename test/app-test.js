describe("matches", function () {
    it('should return false on regular expression with text "box" ', function () {
        expect(matches('box')).toBe(false);
    });
    it('should return false on regular expression with text "pobox" ', function () {
        expect(matches('pobox')).toBe(false);
    });
    it('should return false on regular expression with text "p.o.box" ', function () {
        expect(matches('p.o.box')).toBe(false);
    });
    it('should return false on regular expression with text "p.o.fooboxbar" ', function () {
        expect(matches('p.o.fooboxbar')).toBe(false);
    });
    it('should return true on regular expression with text "1box" ', function () {
        expect(matches('1box')).toBe(true);
    });
});