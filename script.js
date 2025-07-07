// Cursor personalizado
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Estatísticas de amor
function updateLoveStats() {
    // Data de início local (Brasil) - 09 de setembro de 2018
    const startDate = new Date(2018, 8, 9, 0, 0, 0); // mês 8 = setembro (0-indexed), dia 9
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        // Pega o último dia do mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const element = document.getElementById('yearsMonthsDays');
    if (element) {
        element.innerHTML = `${years} anos, ${months} meses, ${days} dias`;
    }
}

function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Player de Música Real
let isPlaying = false;
const playBtn = document.getElementById('playBtn');
const progressFill = document.querySelector('.progress-fill');
const audioPlayer = document.getElementById('audioPlayer');
const currentTimeSpan = document.getElementById('currentTime');
const totalTimeSpan = document.getElementById('totalTime');

// Função para tocar a música Chariot
function playChariot() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    }
}

// Frases do dia
const loveQuotes = [
    "Todo dia é especial quando acordo sabendo que você existe na minha vida.",
    "Seu sorriso é o raio de sol que ilumina meus dias mais nublados.",
    "Nosso amor é como uma história sem fim, cada dia um novo capítulo para escrevermos juntos.",
    "Em você encontrei não só o amor, mas minha melhor amiga e companheira.",
    "Cada momento ao seu lado é uma nova chance de me apaixonar ainda mais.",
    "Seu amor me faz querer ser uma pessoa melhor a cada dia.",
    "Você é a resposta de todas as minhas orações, o sonho que eu não sabia que tinha.",
    "Nosso amor é como uma música perfeita, cada nota tocada no momento exato.",
    "Com você, até os dias mais comuns se tornam extraordinários.",
    "Seu amor me dá forças para enfrentar qualquer desafio.",
    "Você é o presente que a vida me deu e que eu quero cuidar para sempre.",
    "Cada batida do meu coração tem seu nome.",
    "Nosso amor é como um jardim que floresce mais a cada dia.",
    "Em seus olhos encontro o reflexo do nosso futuro juntos.",
    "Você me faz acreditar em amor verdadeiro todos os dias.",
    "Seu amor é o porto seguro onde meu coração encontra paz.",
    "Com você, aprendi que o amor é muito mais do que eu imaginava.",
    "Cada dia ao seu lado é uma nova aventura que quero viver.",
    "Você é a peça que faltava para completar o quebra-cabeça da minha vida.",
    "Nosso amor é como vinho, fica melhor com o tempo.",
    "Em você encontrei o significado do amor verdadeiro.",
    "Seu amor me inspira a ser melhor a cada amanhecer.",
    "Com você, todos os dias são dias de amor.",
    "Você é o sonho que se tornou realidade na minha vida.",
    "Nosso amor é a prova de que almas gêmeas existem.",
    "Cada momento juntos é um tesouro que guardo no coração.",
    "Seu amor me faz sentir que posso conquistar o mundo.",
    "Em você encontrei o amor que eu sempre sonhei.",
    "Nosso amor é como uma estrela que brilha eternamente.",
    "Com você, aprendi que o amor é a maior aventura da vida."
];

// Função para obter a frase do dia
function getDailyQuote() {
    // Usar a data atual como semente para selecionar a frase
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % loveQuotes.length;
    return loveQuotes[quoteIndex];
}

// Função para atualizar a frase do dia
function updateDailyQuote() {
    const quoteElement = document.getElementById('dailyQuote');
    if (quoteElement) {
        const quote = getDailyQuote();
        typeWriter(quoteElement, quote);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar estatísticas de amor
    updateLoveStats();
    setInterval(updateLoveStats, 1000);
    
    // Atualizar a frase do dia
    updateDailyQuote();
    
    // Verificar se veio da página de entrada
    const urlParams = new URLSearchParams(window.location.search);
    const shouldStart = urlParams.get('start') === 'true';
    
    if (shouldStart && audioPlayer) {
        // Configurar volume
        audioPlayer.volume = 0.7;
        
        // Aguardar 1 segundo e tocar
        setTimeout(() => {
            // Tentar tocar a música
            audioPlayer.play().then(() => {
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
                console.log('Música tocando!');
            }).catch((error) => {
                console.log('Erro ao tocar:', error);
                // Adicionar mensagem para clicar em qualquer lugar
                const musicInfo = document.querySelector('.music-info');
                if (musicInfo) {
                    const message = document.createElement('div');
                    message.innerHTML = '<p style="color: #e63946; font-weight: bold; margin-top: 10px;">Clique em qualquer lugar para começar a música ❤️</p>';
                    musicInfo.appendChild(message);
                }
                
                // Adicionar evento de clique para tocar
                document.addEventListener('click', function() {
                    if (audioPlayer.paused) {
                        audioPlayer.play().then(() => {
                            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                            isPlaying = true;
                            // Música iniciada com sucesso
                        });
                    }
                }, { once: true });
            });
        }, 1000); // 1 segundo de delay
    }
    
    loadGallery();
});

// Event listeners para o player principal
playBtn.addEventListener('click', playChariot);

// Atualizar progresso da música
audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = progress + '%';
    currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
});

// Quando a música carrega, mostrar duração total
audioPlayer.addEventListener('loadedmetadata', function() {
    totalTimeSpan.textContent = formatTime(audioPlayer.duration);
});

// Quando a música termina
audioPlayer.addEventListener('ended', function() {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
    progressFill.style.width = '0%';
    currentTimeSpan.textContent = '0:00';
});

// Permitir clicar na barra de progresso para pular
document.querySelector('.progress-bar').addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = clickX / width;
    audioPlayer.currentTime = clickPercent * audioPlayer.duration;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .gallery-placeholder, .message-card, .place-card, .promise-card, .interactive-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Aplicar estilos iniciais para animação
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.timeline-item, .gallery-placeholder, .message-card, .place-card, .promise-card, .interactive-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação inicial
    setTimeout(animateOnScroll, 500);
});

// Adicionar evento de scroll para animações
window.addEventListener('scroll', animateOnScroll);

// Efeito de confete quando o contador chegar a zero
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Verificar se chegou a data do aniversário para mostrar confete
function checkAnniversary() {
    const anniversaryDate = new Date('2025-07-09T00:00:00').getTime();
    const now = new Date().getTime();
    
    if (now >= anniversaryDate && now < anniversaryDate + (24 * 60 * 60 * 1000)) {
        // Se for o dia do aniversário, criar confete a cada 5 segundos
        setInterval(createConfetti, 5000);
        createConfetti(); // Criar confete imediatamente
    }
}

// Executar verificação do aniversário
checkAnniversary();

// Aplicar efeito de digitação SEQUENCIAL nos parágrafos da mensagem especial
const messageTexts = document.querySelectorAll('.message-text');
if (messageTexts.length >= 2) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Só executa para o primeiro parágrafo
                if (entry.target === messageTexts[0]) {
                    const text1 = messageTexts[0].textContent;
                    const text2 = messageTexts[1].textContent;
                    // Limpa ambos
                    messageTexts[0].textContent = '';
                    messageTexts[1].textContent = '';
                    // Digita o primeiro, depois o segundo
                    typeWriter(messageTexts[0], text1, 60, () => {
                        typeWriter(messageTexts[1], text2, 60);
                    });
                    observer.unobserve(messageTexts[0]);
                    observer.unobserve(messageTexts[1]);
                }
            }
        });
    }, { threshold: 0.5 });
    messageTexts.forEach(text => observer.observe(text));
} else {
    // fallback para o caso de só haver um parágrafo
    messageTexts.forEach(text => {
        const txt = text.textContent;
        text.textContent = '';
        typeWriter(text, txt, 60);
    });
}

// typeWriter agora aceita callback opcional
function typeWriter(element, text, speed = 50, callback) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Adicionar efeito de hover nos itens da timeline
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Modal para lugares especiais
const modal = document.getElementById('placeModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

function showPlaceDetails(placeType) {
    const placeData = {
        'primeiro-encontro': {
            title: 'Nosso Primeiro Encontro',
            description: 'Foi aqui que tudo começou... O lugar onde nossos olhares se cruzaram pela primeira vez e nossos corações bateram mais forte.',
            details: 'Data: 09/07/2018\nLocal: [Adicione o local]\nMomentos especiais: [Descreva os momentos]'
        },
        'primeira-viagem': {
            title: 'Nossa Primeira Viagem',
            description: 'Uma aventura incrível que nos aproximou ainda mais. Momentos inesquecíveis que guardamos para sempre.',
            details: 'Data: [Adicione a data]\nDestino: [Adicione o destino]\nMomentos especiais: [Descreva os momentos]'
        },
        'restaurante': {
            title: 'Nosso Restaurante Favorito',
            description: 'O lugar onde sempre comemos juntos, onde compartilhamos risadas e criamos memórias deliciosas.',
            details: 'Nome: [Adicione o nome]\nPrato favorito: [Adicione o prato]\nMomentos especiais: [Descreva os momentos]'
        },
        'cinema': {
            title: 'Nossos Momentos no Cinema',
            description: 'Assistindo filmes juntos, compartilhando pipoca e criando nossa própria história de amor.',
            details: 'Filme favorito: [Adicione o filme]\nData: [Adicione a data]\nMomentos especiais: [Descreva os momentos]'
        }
    };
    
    const place = placeData[placeType];
    if (place) {
        modalBody.innerHTML = `
            <h2>${place.title}</h2>
            <p>${place.description}</p>
            <div class="place-details">
                <pre>${place.details}</pre>
            </div>
        `;
        modal.style.display = 'block';
    }
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Filtros da galeria
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover classe ativa de todos os botões
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Adicionar classe ativa ao botão clicado
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        // Aqui você pode implementar a lógica de filtro das fotos
        console.log('Filtrar por:', filter);
    });
});

// Seção interativa - Contador de beijos
let kissCount = 0;

function addKiss() {
    kissCount++;
    document.getElementById('kissCount').textContent = kissCount;
    
    // Criar efeito de coração
    createHeartEffect();
    
    // Atualizar estatísticas
    document.getElementById('kissesCount').textContent = kissCount;
}

function createHeartEffect() {
    const heart = document.createElement('div');
    heart.innerHTML = '💋';
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.transition = 'all 2s ease';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-50px';
        heart.style.transform = 'rotate(360deg)';
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Gerador de mensagens de amor
const loveMessages = [
    "Você é o amor da minha vida ❤️",
    "Cada dia ao seu lado é um presente 🎁",
    "Você me faz sorrir todos os dias 😊",
    "Nosso amor é infinito 💕",
    "Você é minha inspiração diária ✨",
    "Juntos somos mais fortes 💪",
    "Você é meu sonho realizado 🌟",
    "Amo cada momento com você 💖",
    "Você é minha felicidade 😍",
    "Para sempre juntos 💑"
];

function generateLoveMessage() {
    const messageDiv = document.getElementById('generatedMessage');
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    messageDiv.style.opacity = '0';
    setTimeout(() => {
        messageDiv.textContent = randomMessage;
        messageDiv.style.opacity = '1';
    }, 300);
}

// Teste de compatibilidade
function runCompatibilityTest() {
    const resultDiv = document.getElementById('testResult');
    const compatibility = Math.floor(Math.random() * 20) + 80; // 80-100%
    
    resultDiv.innerHTML = `
        <div class="compatibility-result">
            <h4>Resultado do Teste</h4>
            <div class="compatibility-bar">
                <div class="compatibility-fill" style="width: ${compatibility}%"></div>
            </div>
            <p>${compatibility}% de compatibilidade!</p>
            <p>Vocês são perfeitos juntos! 💕</p>
        </div>
    `;
}

// Função para adicionar fotos dinamicamente (exemplo)
function addPhotoToGallery(imageSrc, caption, category = 'all') {
    const gallery = document.getElementById('gallery');
    const photoDiv = document.createElement('div');
    photoDiv.className = 'gallery-item';
    photoDiv.setAttribute('data-category', category);
    photoDiv.innerHTML = `
        <img src="${imageSrc}" alt="${caption}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px;">
        <div class="photo-caption" style="text-align: center; margin-top: 10px; color: #764ba2; font-weight: bold;">
            ${caption}
        </div>
    `;
    
    // Substituir o placeholder pela foto
    const placeholder = gallery.querySelector('.gallery-placeholder');
    if (placeholder) {
        placeholder.remove();
    }
    
    gallery.appendChild(photoDiv);
}

// Efeito de parallax suave no header
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const rate = scrolled * -0.5;
    header.style.transform = `translateY(${rate}px)`;
});

// Adicionar efeito de brilho nos corações
function addHeartGlow() {
    const hearts = document.querySelectorAll('.fa-heart');
    hearts.forEach(heart => {
        heart.style.filter = 'drop-shadow(0 0 10px #ff6b6b)';
        setInterval(() => {
            heart.style.filter = heart.style.filter === 'drop-shadow(0 0 10px #ff6b6b)' 
                ? 'drop-shadow(0 0 20px #ff6b6b)' 
                : 'drop-shadow(0 0 10px #ff6b6b)';
        }, 1000);
    });
}

// Executar efeito de brilho nos corações
addHeartGlow();

// Efeito de partículas flutuantes
function createFloatingParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(particle);
    }
}

// Executar partículas flutuantes
createFloatingParticles();

// Efeito de digitação no título principal
function typeTitle() {
    const title = document.querySelector('.main-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        }
    }
    
    setTimeout(typeChar, 1000);
}

// Executar efeito de digitação no título
typeTitle();

// Exemplo de como adicionar fotos (você pode personalizar)
// addPhotoToGallery('fotos/foto1.jpg', 'Nosso primeiro encontro', 'encontros');
// addPhotoToGallery('fotos/foto2.jpg', 'Viagem especial', 'viagens');
// addPhotoToGallery('fotos/foto3.jpg', 'Momentos especiais', 'especiais');

// Exemplo de como adicionar músicas (você pode personalizar)
// addSongToPlaylist('Nome da Música', 'Artista');
// addSongToPlaylist('Outra Música', 'Outro Artista');

// Galeria de Fotos
const media = [
    { src: 'fotos/Viagem Gramado/3.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/4.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/7.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/9.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/11.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/13.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/15.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/17.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/21.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/22.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/23.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/24.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/26.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/27.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/29.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/31.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/33.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/34.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/37.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/38.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/40.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/41.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/42.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/43.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/45.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/46.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/47.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/48.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/49.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/50.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/51.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/52.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/53.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/54.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/55.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/56.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/57.png', type: 'image' },
    { src: 'fotos/Viagem Gramado/58.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/59.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/60.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/61.jpg', type: 'image' },
    { src: 'fotos/Viagem Gramado/62.jpg', type: 'image' }
];

let currentMediaIndex = 0;

function loadGallery() {
    const currentImage = document.getElementById('currentImage');
    const prevButton = document.getElementById('prevPhoto');
    const nextButton = document.getElementById('nextPhoto');
    const frameInner = document.querySelector('.frame-inner');
    const frame = document.querySelector('.frame');

    if (!currentImage || !prevButton || !nextButton || !frameInner || !frame) {
        console.log('Elementos necessários não encontrados');
        return;
    }

    async function updateMedia() {
        const mediaItem = media[currentMediaIndex];
        
        // Fade out atual
        if (currentImage) {
            currentImage.style.opacity = '0';
            currentImage.classList.remove('loaded');
        }
        
        setTimeout(async () => {
            if (!currentImage || !frameInner) return;

            try {
                // Pré-carregar a imagem
                const img = new Image();
                
                const loadImage = new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                    img.onerror = (error) => {
                        console.error('Erro ao carregar imagem:', mediaItem.src);
                        reject(error);
                    };
                });

                img.src = mediaItem.src;
                
                const loadedImg = await loadImage;
                
                const aspectRatio = loadedImg.width / loadedImg.height;
                const isMobile = window.innerWidth < 768;
                
                let containerWidth, containerHeight;
                
                if (isMobile) {
                    containerWidth = Math.min(280, window.innerWidth - 90);
                    containerHeight = containerWidth / aspectRatio;
                    
                    if (containerHeight > window.innerHeight * 0.6) {
                        containerHeight = Math.min(350, window.innerHeight * 0.6);
                        containerWidth = containerHeight * aspectRatio;
                    }
                } else {
                    if (aspectRatio > 1) {
                        containerWidth = Math.min(450, window.innerWidth - 100);
                        containerHeight = containerWidth / aspectRatio;
                    } else {
                        containerHeight = Math.min(350, window.innerHeight * 0.7);
                        containerWidth = containerHeight * aspectRatio;
                    }
                }
                
                // Ajustar dimensões mínimas
                containerWidth = Math.max(containerWidth, isMobile ? 220 : 350);
                containerHeight = Math.max(containerHeight, isMobile ? 220 : 250);
                
                frameInner.style.width = `${containerWidth}px`;
                frameInner.style.height = `${containerHeight}px`;
                
                currentImage.src = mediaItem.src;
                currentImage.style.opacity = '1';
                currentImage.classList.add('loaded');
                
            } catch (error) {
                console.error('Erro ao carregar imagem:', {
                    src: mediaItem.src,
                    error: error.message || error
                });
                
                currentImage.src = mediaItem.src;
                currentImage.style.opacity = '1';
                currentImage.classList.add('loaded');
            }
        }, 300);
    }

    // Navegação com debounce
    let isNavigating = false;
    
    function navigate(direction) {
        if (isNavigating) return;
        isNavigating = true;
        
        currentMediaIndex = (currentMediaIndex + direction + media.length) % media.length;
        updateMedia().finally(() => {
            setTimeout(() => {
                isNavigating = false;
            }, 500);
        });
    }

    // Event listeners para navegação
    prevButton.onclick = () => navigate(-1);
    nextButton.onclick = () => navigate(1);

    // Navegação com teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });

    // Carregar primeira imagem
    updateMedia();
}

// Inicializar galeria quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const mediaFiles = [
        'fotos/Viagem Gramado/3.jpg',
        'fotos/Viagem Gramado/4.jpg',
        'fotos/Viagem Gramado/7.jpg',
        'fotos/Viagem Gramado/9.jpg',
        'fotos/Viagem Gramado/11.jpg',
        'fotos/Viagem Gramado/13.jpg',
        'fotos/Viagem Gramado/15.jpg',
        'fotos/Viagem Gramado/17.jpg',
        'fotos/Viagem Gramado/21.jpg',
        'fotos/Viagem Gramado/22.jpg',
        'fotos/Viagem Gramado/23.jpg',
        'fotos/Viagem Gramado/24.jpg',
        'fotos/Viagem Gramado/26.jpg',
        'fotos/Viagem Gramado/27.jpg',
        'fotos/Viagem Gramado/29.jpg',
        'fotos/Viagem Gramado/31.jpg',
        'fotos/Viagem Gramado/33.jpg',
        'fotos/Viagem Gramado/34.jpg',
        'fotos/Viagem Gramado/37.jpg',
        'fotos/Viagem Gramado/38.jpg',
        'fotos/Viagem Gramado/40.jpg',
        'fotos/Viagem Gramado/41.jpg',
        'fotos/Viagem Gramado/42.jpg',
        'fotos/Viagem Gramado/43.jpg',
        'fotos/Viagem Gramado/45.png',
        'fotos/Viagem Gramado/46.png',
        'fotos/Viagem Gramado/47.png',
        'fotos/Viagem Gramado/48.png',
        'fotos/Viagem Gramado/49.png',
        'fotos/Viagem Gramado/50.png',
        'fotos/Viagem Gramado/51.png',
        'fotos/Viagem Gramado/52.png',
        'fotos/Viagem Gramado/53.png',
        'fotos/Viagem Gramado/54.png',
        'fotos/Viagem Gramado/55.png',
        'fotos/Viagem Gramado/56.png',
        'fotos/Viagem Gramado/57.png',
        'fotos/Viagem Gramado/58.jpg',
        'fotos/Viagem Gramado/59.jpg',
        'fotos/Viagem Gramado/60.jpg',
        'fotos/Viagem Gramado/61.jpg',
        'fotos/Viagem Gramado/62.jpg'
    ];

    let currentIndex = 0;
    const SLIDE_DURATION = 3000; // 3 segundos por slide

    const img = document.querySelector('.frame-inner img');
    
    // Criar dots de progresso
    const progressDots = document.createElement('div');
    progressDots.className = 'progress-dots';
    document.querySelector('.frame').appendChild(progressDots);
    
    // Adicionar dots para cada imagem
    mediaFiles.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        progressDots.appendChild(dot);
    });

    function updateImage() {
        img.classList.add('changing');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % mediaFiles.length;
            img.src = mediaFiles[currentIndex];
            
            // Atualizar dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Remover classe após a imagem carregar
            img.onload = () => {
                img.classList.remove('changing');
            };
        }, 300);
    }

    // Preload das imagens
    mediaFiles.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Iniciar slideshow
    setInterval(updateImage, SLIDE_DURATION);
}); 