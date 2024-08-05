# Bem-vindo ao CRUD React Native com API

Este projeto é um CRUD (Create, Read, Update, Delete) desenvolvido em React Native, que se comunica com uma API para gerenciar dados. Siga as instruções abaixo para configurar e executar o projeto corretamente.

## Configuração do Projeto

Para garantir que o projeto funcione corretamente, você precisa configurar a URL da API. Siga os passos abaixo:

1. **Instale as dependências do projeto:**

    Execute o seguinte comando para instalar todas as dependências necessárias:

    ```
    npm install
    ````
Localize o arquivo de configuração:

Navegue até o arquivo de configuração api.js, que está localizado em:

bash
Copiar código
/constants/API/api.js
Atualize a constante API_DOMAIN:

No arquivo api.js, encontre a constante API_DOMAIN e substitua pelo IP e porta onde a API do outro projeto está sendo executada. O código deve ficar assim:

    ````
        export const API_DOMAIN = 'http://<IP>:<PORT>/';
    ````
Certifique-se de substituir <IP> e <PORT> pelos valores corretos da sua API.

Inicie o projeto:

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

    ``` 
    npx expo start
    ```
Isso abrirá o Expo Developer Tools no seu navegador e permitirá que você inicie o aplicativo em um simulador ou dispositivo físico.


## Observações Finais

Este projeto pode conter alguns erros ou problemas, pois ainda estou em processo de aprendizado sobre várias tecnologias e práticas envolvidas. Agradeço a compreensão e estou aberto a sugestões e contribuições para melhorar o código.

Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Obrigado por sua compreensão e apoio!