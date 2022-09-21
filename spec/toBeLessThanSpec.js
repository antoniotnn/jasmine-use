describe("Teste do toBeLessThan", () => {

    it('Deve demonstrar o uso do toBeLessThan', () => { // o contrário : toBeGreaterThan
        //compara se um valor numérico é menor que outro.
        // converte pra number antes da comparação (aceitando strings como entrada)

        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);

    });
});