# 💰 Refund Project

Um sistema web para solicitação de reembolso de despesas com interface moderna e intuitiva. Permite aos usuários adicionar, visualizar e gerenciar suas despesas de forma organizada por categorias.

## 🚀 Funcionalidades

- ✅ **Adicionar despesas** com nome, categoria e valor
- 💱 **Formatação automática de moeda** em Real brasileiro (R$)
- 📊 **Cálculo automático** do total das despesas
- 🗂️ **Categorização** por tipo de despesa (Alimentação, Hospedagem, Serviços, Transporte, Outros)
- 🗑️ **Remoção de itens** da lista
- 📱 **Design responsivo** para desktop e mobile
- 🎨 **Interface moderna** com tema verde

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica da aplicação
- **Fonts Google** - Tipografia Open Sans

## 📁 Estrutura do Projeto

```
refund-project/
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── script.js           # Lógica JavaScript
├── img/                # Imagens e ícones
│   ├── logo.svg        # Logo da aplicação
│   ├── food.svg        # Ícone alimentação
│   ├── accommodation.svg # Ícone hospedagem
│   ├── services.svg    # Ícone serviços
│   ├── transport.svg   # Ícone transporte
│   ├── others.svg      # Ícone outros
│   ├── remove.svg      # Ícone remover
│   └── chevron-down.svg # Ícone dropdown
└── README.md           # Documentação
```

## 🎯 Como Usar

### 1. **Adicionar uma Despesa**

1. **Nome da despesa**: Digite o nome da despesa no campo obrigatório
2. **Categoria**: Selecione uma das categorias disponíveis:
   - 🍽️ Alimentação
   - 🏨 Hospedagem
   - 🔧 Serviços
   - 🚗 Transporte
   - 📦 Outros
3. **Valor**: Digite o valor da despesa (formatação automática em R$)
4. **Adicionar**: Clique no botão "Adicionar despesa"

### 2. **Visualizar Despesas**

- As despesas aparecem na lista lateral com:
  - Ícone da categoria
  - Nome da despesa
  - Categoria
  - Valor formatado
  - Botão de remoção

### 3. **Gerenciar Despesas**

- **Remover**: Clique no ícone de lixeira (🗑️) ao lado da despesa
- **Total**: O valor total é calculado automaticamente
- **Contador**: A quantidade de despesas é atualizada em tempo real

## 💻 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Execução Local

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd refund-project
   ```

2. **Abra o arquivo**:
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local:
     ```bash
     # Com Python
     python -m http.server 8000
     
     # Com Node.js (npx)
     npx serve .
     
     # Com Live Server (VS Code)
     # Instale a extensão Live Server e clique com botão direito no index.html
     ```

3. **Acesse**: `http://localhost:8000` (se usando servidor local)

## 🎨 Design e Interface

### Paleta de Cores
- **Verde principal**: `#1f8459`
- **Verde hover**: `#2cb178`
- **Fundo**: `#e4ece9`
- **Cards**: `#f9fbfa`
- **Texto principal**: `#1f2523`
- **Texto secundário**: `#4d5c57`

### Responsividade
- **Desktop**: Layout em duas colunas (formulário + lista)
- **Tablet**: Layout adaptativo
- **Mobile**: Layout em coluna única

## 🔧 Funcionalidades Técnicas

### Formatação de Moeda
- Formatação automática em tempo real
- Suporte ao padrão brasileiro (R$ 1.234,56)
- Validação de entrada numérica

### Gerenciamento de Estado
- Cálculo automático de totais
- Atualização em tempo real da interface
- Persistência durante a sessão

### Validação
- Campos obrigatórios
- Validação de valores numéricos
- Tratamento de erros

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Valores não formatam corretamente**:
   - Verifique se está digitando apenas números
   - A formatação acontece automaticamente

2. **Despesas não aparecem**:
   - Verifique se todos os campos estão preenchidos
   - Verifique o console do navegador para erros

3. **Total não atualiza**:
   - Recarregue a página
   - Verifique se há erros no console

### Debug
- Abra o **Console do Navegador** (F12) para ver erros
- Verifique se todos os arquivos estão carregando corretamente

## 🚀 Melhorias Futuras

- [ ] Persistência de dados (localStorage)
- [ ] Exportação de relatórios
- [ ] Filtros por categoria
- [ ] Busca de despesas
- [ ] Edição de despesas existentes
- [ ] Validação de valores mínimos/máximos
- [ ] Histórico de alterações

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a seção de [Solução de Problemas](#-solução-de-problemas)
2. Abra uma [Issue](../../issues) no GitHub
3. Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido com ❤️ para facilitar o gerenciamento de despesas e solicitações de reembolso.**
