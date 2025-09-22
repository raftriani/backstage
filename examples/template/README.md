# Shell Command Example Template

Este é um template de exemplo que demonstra como usar a action `run:shell` no Backstage.

## Funcionalidades

- ✅ Execução de comandos shell personalizados
- ✅ Passagem de argumentos dinâmicos
- ✅ Configuração de diretório de trabalho
- ✅ Criação de arquivos baseados nos parâmetros
- ✅ Logging de execução

## Como usar

1. Acesse o Scaffolder no Backstage
2. Escolha "Shell Command Example"
3. Preencha os parâmetros:
   - **Nome do Projeto**: Nome único para seu projeto
   - **Comando Shell**: Comando que será executado (ex: `echo`, `ls`, `mkdir`)
   - **Argumentos**: Lista de argumentos para o comando
   - **Diretório de Trabalho**: (Opcional) Onde executar o comando

## Exemplo de uso

- **Comando**: `echo`
- **Argumentos**: `["Hello", "World", "from", "Backstage!"]`
- **Resultado**: Executa `echo Hello World from Backstage!`

## Arquivos gerados

O template cria:
- `README.md` - Documentação do projeto
- `package.json` - Configuração com script demo

## Tecnologias

- **Backstage**: Platform de desenvolvedor
- **Shell Actions**: Execução de comandos bash/shell
- **Scaffolder**: Sistema de templates do Backstage
