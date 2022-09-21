describe("Teste do fail", () => {

    it('Deve demonstrar o uso do fail', () => { // falha manual
        // Falha manual permite interrromper um teste lançando um erro
        // função fail serve para falhar manualmente um teste
        // utilizamos a falha manual para certificar que ujma operação desejada não deve ser executada

        var operacao = (executar, callback) => {
            if(executar) {
                callback();
            }
        }

        operacao(false, () => {
           fail("não deve executar função de callback");
        });


    });
});