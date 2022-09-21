describe("Teste do toBeGreaterThan", () => {

    it('Deve demonstrar o uso do toBeGreaterThan', () => { // o contrário : toBeLessThan
        //compara se um valor numérico é maior que outro.
        // converte pra number antes da comparação (aceitando strings como entrada)

        var PI = 3.1415;

        expect(4).toBeGreaterThan(PI);
        expect("5").toBeGreaterThan(PI);

        expect(3).not.toBeGreaterThan(PI);

    });
});