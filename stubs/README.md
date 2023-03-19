## Testes stubs

### Descrição do projeto

Este é um código em JavaScript que cria uma classe chamada "Service" e define dois métodos assíncronos nela: "makeRequest" e "getPlanets". O método "makeRequest" utiliza o módulo "https" para fazer uma requisição a uma URL e retorna uma promessa que resolve com o conteúdo JSON da resposta. O método "getPlanets" chama o método "makeRequest" com uma URL específica e retorna um objeto contendo o nome e a quantidade de água na superfície do planeta em questão.

O código também importa algumas bibliotecas, como o "assert" do Node.js, o "sinon" para a criação de stubs e alguns arquivos JSON que servirão como mocks. Em seguida, é criada uma instância da classe "Service" e um stub é criado para o método "makeRequest" dessa instância. Esse stub é configurado para retornar os mocks criados anteriormente dependendo da URL passada como argumento.

Finalmente, são criados dois objetos "expected" contendo os valores esperados para as respostas da chamada ao método "getPlanets" com cada uma das URLs usadas nos mocks, e esses valores são comparados com as respostas reais usando o método "deepStrictEqual" do módulo "assert".
