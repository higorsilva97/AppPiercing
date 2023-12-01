# AppPiercing


### Diagrama de classe de uso

####  "Visualizar agendamentos". O profissional abre o aplicativo, seleciona a opção "Visualizar agendamentos" e o aplicativo exibe uma lista de seus agendamentos. Se o profissional não tiver agendamentos, o aplicativo exibirá uma mensagem de alerta.

```mermaid

sequenceDiagram
  participant Profissional
  participant App

  Profissional->>App: Abre o aplicativo
  App->>Profissional: Exibe a tela inicial
  Profissional->>App: Seleciona a opção "Visualizar agendamentos"
  App->>Profissional: Exibe uma lista de seus agendamentos, incluindo a data, a hora, o cliente e o tipo de serviço

  alt Profissional não tem agendamentos
    App->>Profissional: Exibe uma mensagem de alerta
  end

  Profissional-->App: Fecha a tela
```

####   "Gerenciar piercings". O estúdio abre o aplicativo, seleciona a opção "Gerenciar piercings" e o aplicativo exibe uma lista de piercings. O estúdio então seleciona uma ação (adicionar, editar ou excluir) e fornece as informações necessárias ao aplicativo. O aplicativo processa as informações e, dependendo da ação, adiciona, edita ou exclui o piercing da lista.

```mermaid

sequenceDiagram
  participant Estúdio
  participant App

  Estúdio->>App: Abre o aplicativo
  App->>Estúdio: Exibe a tela inicial
  Estúdio->>App: Seleciona a opção "Gerenciar piercings"
  App->>Estúdio: Exibe uma lista de piercings, incluindo o nome, a descrição, o preço e o estoque

  Estúdio->>App: Seleciona uma ação (adicionar, editar ou excluir)
  App->>Estúdio: Solicita as informações necessárias
  Estúdio->>App: Fornece as informações necessárias
  App->>Estúdio: Processa as informações

  alt Ação = adicionar
    App->>Estúdio: Adiciona o piercing à lista
  end

  alt Ação = editar
    App->>Estúdio: Edita o piercing na lista
  end

  alt Ação = excluir
    App->>Estúdio: Exclui o piercing da lista
  end

  Estúdio-->App: Fecha a tela
```


#### Agendar piercing". O cliente abre o aplicativo, seleciona a opção "Agendar piercing" e o aplicativo exibe uma lista de estúdios de bodypiercing próximos. O cliente seleciona o estúdio desejado, o piercing desejado, a data e a hora do piercing e confirma os detalhes do agendamento. O aplicativo envia um e-mail de confirmação para o cliente e para o estúdio. Se o cliente não encontrar nenhum estúdio de bodypiercing próximo, o aplicativo exibirá uma mensagem de alerta. Se o cliente selecionar um piercing que não está disponível, o aplicativo exibirá uma mensagem de alerta. Se o cliente não confirmar os detalhes do agendamento, o aplicativo exibirá uma mensagem de alerta.

```mermaid

sequenceDiagram
  participant Cliente
  participant App

  Cliente->>App: Abre o aplicativo
  App->>Cliente: Exibe a tela inicial
  Cliente->>App: Seleciona a opção "Agendar piercing"
  App->>Cliente: Exibe uma lista de estúdios de bodypiercing próximos
  Cliente->>App: Seleciona o estúdio desejado
  App->>Cliente: Exibe uma lista de piercings disponíveis
  Cliente->>App: Seleciona o piercing desejado
  Cliente->>App: Escolhe a data e a hora do piercing
  Cliente->>App: Confirma os detalhes do agendamento e paga pelo piercing
  App->>Cliente: Exibe uma mensagem de confirmação
  App->>Cliente: Envia um e-mail de confirmação para o cliente e para o estúdio

  alt Cliente não encontra nenhum estúdio de bodypiercing próximo
    App->>Cliente: Exibe uma mensagem de alerta
  end

  alt Cliente seleciona um piercing que não está disponível
    App->>Cliente: Exibe uma mensagem de alerta
  end

  alt Cliente não confirma os detalhes do agendamento
    App->>Cliente: Exibe uma mensagem de alerta
  end

  Cliente-->App: Fecha a tela

```
