# 💕 Site de Amor - Luana & Eu

Um site romântico e especial criado para celebrar 6 anos e 10 meses de namoro com a Luana!

## 🎯 Características do Site

- **Contador Regressivo**: Conta os dias até o aniversário de namoro
- **Timeline Romântica**: História do relacionamento em ordem cronológica
- **Galeria de Fotos**: Seção para mostrar momentos especiais
- **Player de Música**: Para tocar suas músicas especiais
- **Mensagem Personalizada**: Declaração de amor especial
- **Design Responsivo**: Funciona perfeitamente em celular e computador
- **Animações**: Efeitos visuais românticos e interativos

## 🚀 Como Personalizar

### 1. Adicionar Suas Fotos

Para adicionar fotos na galeria, você tem duas opções:

#### Opção A: Editar o HTML diretamente
Substitua a seção da galeria no arquivo `index.html`:

```html
<div class="gallery" id="gallery">
    <div class="gallery-item">
        <img src="fotos/foto1.jpg" alt="Nosso primeiro encontro" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px;">
        <div class="photo-caption" style="text-align: center; margin-top: 10px; color: #764ba2; font-weight: bold;">
            Nosso primeiro encontro
        </div>
    </div>
    <div class="gallery-item">
        <img src="fotos/foto2.jpg" alt="Viagem especial" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px;">
        <div class="photo-caption" style="text-align: center; margin-top: 10px; color: #764ba2; font-weight: bold;">
            Viagem especial
        </div>
    </div>
    <!-- Adicione mais fotos aqui -->
</div>
```

#### Opção B: Usar JavaScript
No arquivo `script.js`, descomente e edite estas linhas:

```javascript
addPhotoToGallery('fotos/foto1.jpg', 'Nosso primeiro encontro');
addPhotoToGallery('fotos/foto2.jpg', 'Viagem especial');
addPhotoToGallery('fotos/foto3.jpg', 'Momentos especiais');
```

### 2. Adicionar Suas Músicas

Edite a seção de playlist no arquivo `index.html`:

```html
<ul class="song-list">
    <li class="song-item">
        <i class="fas fa-music"></i>
        <span>Nome da Música - Artista</span>
    </li>
    <li class="song-item">
        <i class="fas fa-music"></i>
        <span>Outra Música - Outro Artista</span>
    </li>
    <!-- Adicione mais músicas aqui -->
</ul>
```

Ou use JavaScript no arquivo `script.js`:

```javascript
addSongToPlaylist('Nome da Música', 'Artista');
addSongToPlaylist('Outra Música', 'Outro Artista');
```

### 3. Personalizar a Mensagem

Edite a seção de mensagem no arquivo `index.html`:

```html
<div class="message-card">
    <h2>Para Minha Luana ❤️</h2>
    <p class="message-text">
        Sua mensagem personalizada aqui...
    </p>
    <p class="message-text">
        Mais do que você quiser escrever...
    </p>
    <p class="message-signature">
        Com todo o meu amor,<br>
        Para sempre seu ❤️
    </p>
</div>
```

### 4. Personalizar a Timeline

Edite a seção de timeline no arquivo `index.html` para incluir momentos especiais do seu relacionamento:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Data Especial</h3>
        <p>Descrição do momento especial...</p>
    </div>
</div>
```

### 5. Alterar Cores (Opcional)

Se quiser mudar as cores do site, edite o arquivo `styles.css`. As principais cores são:

- **Roxo principal**: `#764ba2`
- **Azul**: `#667eea`
- **Rosa**: `#ff6b6b`

## 📁 Estrutura de Arquivos

```
loveday/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Funcionalidades interativas
├── README.md           # Este arquivo
└── fotos/              # Pasta para suas fotos (crie esta pasta)
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🌐 Como Hospedar no GitHub

1. **Crie um repositório no GitHub**:
   - Vá para github.com
   - Clique em "New repository"
   - Nome: `loveday` ou qualquer nome que preferir
   - Deixe público

2. **Faça upload dos arquivos**:
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos do projeto
   - Adicione suas fotos na pasta `fotos/`
   - Clique em "Commit changes"

3. **Ative o GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione "Deploy from a branch"
   - Selecione "main" branch
   - Clique em "Save"

4. **Seu site estará disponível em**:
   `https://seu-usuario.github.io/loveday`

## 🎨 Personalizações Extras

### Adicionar Música Real
Para tocar música real, você pode:
1. Hospedar os arquivos de música no GitHub
2. Usar links do YouTube ou Spotify
3. Usar serviços como SoundCloud

### Adicionar Mais Animações
O site já tem várias animações, mas você pode adicionar mais editando o arquivo `script.js`.

### Mudar Fontes
Para mudar as fontes, edite o link no `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```

## 💝 Dicas para Tornar Mais Especial

1. **Adicione fotos de momentos especiais**:
   - Primeiro encontro
   - Viagens juntos
   - Datas especiais
   - Momentos do dia a dia

2. **Inclua músicas que têm significado**:
   - Música do primeiro encontro
   - Música que vocês cantam juntos
   - Músicas românticas favoritas

3. **Personalize a mensagem**:
   - Escreva do coração
   - Mencione momentos especiais
   - Fale sobre o futuro de vocês

4. **Adicione detalhes na timeline**:
   - Datas importantes
   - Momentos marcantes
   - Conquistas juntos

## 🎉 Funcionalidades Especiais

- **Contador regressivo**: Conta automaticamente até 09/07/2025
- **Confete automático**: No dia do aniversário, confete cai na tela
- **Animações suaves**: Elementos aparecem conforme você rola a página
- **Efeito de digitação**: A mensagem aparece como se estivesse sendo digitada
- **Design responsivo**: Funciona perfeitamente em qualquer dispositivo

## 📱 Compatibilidade

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile (iOS e Android)

## 🆘 Precisa de Ajuda?

Se tiver dúvidas sobre como personalizar algo específico, você pode:

1. Editar os arquivos diretamente
2. Usar as funções JavaScript já preparadas
3. Modificar as cores no CSS
4. Adicionar mais seções no HTML

O site foi feito para ser fácil de personalizar! 💕

---

**Feito com muito amor para celebrar o amor de vocês! ❤️** 