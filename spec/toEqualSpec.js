describe("Teste do toEqual", () => {

    it('Deve validar o uso do toEqual', () => {
        var obj1 = { valor: true };
        var obj2 = { valor: true };

        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });
});