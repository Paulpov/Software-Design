## Factory Method
<hr/>

  O Factory Method é um padrão de design criativo, que fornece uma interface para criar objetos na superclasse, mas permite que as subclasses alterem o tipo de objetos a serem criados.
  Ele separa o código de construção do produto do código que realmente usa o produto. Portanto, é mais fácil construir código independentemente do resto do código para estender o produto, por exemplo, para adicionar um novo tipo de produto ao aplicativo, você só precisa criar uma nova subclasse de criador e substituir o método de fábrica nela.
  Este padrao recomenda que você substitua chamadas diretas de construção de objeto (usando o operador NEW) por chamadas a métodos de fábrica especiais. Não se preocupe: o objeto ainda é criado usando o operador new, mas é chamado a partir do método de fábrica. O objeto retornado pelo método de fábrica é geralmente chamado de produto.

