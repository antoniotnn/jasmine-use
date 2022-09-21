describe('Testes (specs)', () => {
    it("Deve garantir que 'true' é 'true'", () => {
        expect(true).toBe(true);
    });

    it("Deve garantir que 'true' não é 'false'", () => {
        expect(true).not.toBe(false);
    });
});