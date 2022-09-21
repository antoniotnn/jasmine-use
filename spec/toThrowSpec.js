describe("Teste do toThrow", () => {

    it('Deve demonstrar o uso do toThrow', () => {
        // verifica se uma exceção é lançada por um método.
        // Não realiza a validação em detalhe o tipo da exceção lançada, apenas certifica que um erro ocorreu na execução da função
        // deve ser utilizada quando deseja apenas certificar que um erro ocorreu, sem se preocupar com detalhes como tipo ou mensagem de erro

        multiplicar = () => numero * 10;
        somar = (n1, n2) => n1 + n2;

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();

    });
});