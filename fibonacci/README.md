## Teste de Fibonacci

### Descrição do projeto

implementação da sequência de Fibonacci utilizando um gerador (generator) em JavaScript. A classe Fibonacci contém um método execute que recebe como parâmetro um número input, que representa o número de elementos da sequência a serem gerados, e dois valores opcionais current e next, que representam os dois primeiros elementos da sequência.

A função execute utiliza a sintaxe yield, que permite pausar e continuar a execução do gerador a cada iteração, para gerar a sequência de Fibonacci de forma recursiva. Ela retorna um iterator que pode ser lido por meio de um loop for await, que é uma forma assíncrona de ler os valores de um iterator.

O código também utiliza a biblioteca sinon para criar um spy que monitora o número de vezes que o método execute é chamado. Além disso, a biblioteca assert é utilizada para verificar se os resultados gerados pela sequência de Fibonacci estão de acordo com os valores esperados. O bloco async envolvendo todo o código permite que sejam usadas funções assíncronas como o for await.
