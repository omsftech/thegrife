// ---------- CONFIGURAÇÃO (edite aqui) ----------
const PHONE = '5513997059091'; // WhatsApp da loja (DDI + DDD + número)
const STORAGE_KEY = 'thegrife_cart_v1';

// Tamanhos por categoria (as categorias vêm do data-category do HTML)
const SIZES = {
    camisetas: ['P', 'M', 'G', 'GG'],
    bermudas: ['38', '40', '42', '44', '46'],
    conjuntos: ['P', 'M', 'G', 'GG'],
    bones: ['Único']
};

// Cada categoria "interna" (cat) pertence a uma categoria do menu (grupo).
// É o grupo que vai no data-category do card e define os tamanhos em SIZES.
const GRUPO_DE = {
    camisetas: 'camisetas',
    camisetasoversized: 'camisetas',
    camisetaspremium: 'camisetas',
    bermudas: 'bermudas',
    bermudasjeans: 'bermudas',
    bones: 'bones'
};

// ---------- PRODUTOS (edite aqui) ----------
// cat:      categoria interna (veja GRUPO_DE)
// imgs:     arquivos dentro de /img (a 1ª é a imagem principal do card)
// cores:    nomes das cores, na mesma ordem das imgs (o que faltar vira "Modelo N")
// tamanhos: (opcional) sobrescreve os tamanhos da categoria em SIZES
const PRODUTOS = [
    {
        cat: 'camisetas', busca: 'camiseta algodão premium',
        nome: 'CAMISETA ALGODÃO 30.1 PREMIUM', de: 69.90, por: 47.99,
        imgs: ['camisajor.webp','camisaqui.webp', 'camisahur.webp', 'camisanw.webp', 'camisanew.webp',
               'camisane.webp', 'camisa-ad.webp', 'camisa-hur.webp', 'camisank.webp', 'camisanki.webp'],
        cores: ['Preta']
    },
    {
        cat: 'bermudas', busca: 'shorts elastano boardshort',
        nome: 'SHORTS ELASTANO BOARDSHORT', de: 59.90, por: 44.90,
        imgs: ['shortbroo.JPG', 'shortbrooksf.JPG', 'shortbrooks.JPG', 'shortbrooksfi.JPG', 'shortbrookss.JPG',
               'shorthsbro.JPG', 'shortsbro.JPG', 'shortsbrook.JPG', 'shortsbrooks.JPG']
    },
    {
        cat: 'camisetasoversized', busca: 'camisetas oversized',
        nome: 'CAMISETAS OVERSIZED', de: 89.90, por: 74.99,
        imgs: ['camisaoverjordd.webp','camisetajorover.webp', 'camisetajordamove.webp', 'camisetajordanover.webp', 
            'camisetajordover.webp', 'camisetajor.webp', 'camisetajordanover9.webp','camisetajordamover.webp', 'camisetaoverbran.webp',
            'camisapaloverrr.webp', 'camisetapallang.webp', 'camisetapalangel.webp', 'camisetapalover.webp', 'camisetaovercb.webp',
               'camisetacasablaover.webp', 'camisaovvercb.webp', 'casablancaover.webp','camisapalangelsover.webp', 'camisetapalang.webp', 'camisetapallover.webp',
                ,'camisapalangelover.webp', 'camisetavansover.webp', 'camisetavanzovr.webp','camisetavanzover(3).webp','camisetavanzover(2).webp','camisetavanzover.webp','camisetavansoversi.webp','camisetavansa.webp']
    },
    {
        cat: 'camisetaspremium', busca: 'camisetas premium',
        nome: 'CAMISETAS PREMIUM', de: 79.90, por: 64.99,
        imgs: ['camisetachampions.webp', 'camisachampionns.webp', 'camisetachampionsci.webp', 'camisetachampionspre.webp',
               , 'camisetabasilacoste.webp', 'camisetabasicabrook.jpg', 'camisetabasicalala.jpg', 'camisetabasicatommy.jpg',
             'camisetabasicaaero.webp', 'camisetabasica-aero.webp', 'camisetabasicaaero(2).webp',
            'camisetaaeroover.webp', 'camisetaaerobasicaa.webp', 'camisetaaerop.webp', 'camisetaaeroovers.webp', 'camisetaaeroo.webp',
             'camisetaaerobasica.webp', 'camisetaaerobasic.webp', 'camisetabasicajor.webp', 'camisetabasicajord.webp','camisetabasicajorda.webp',
            'camisetabasicajorda(2).webp']
    },
    {
        cat: 'bones', busca: 'boné premium',
        nome: 'BONÉ PREMIUM', de: 64.90, por: 49.99,
        imgs: ['ny-ve.webp', 'nyb.webp', 'nyba.webp', 'nybb.webp', 'nybe.webp', 'lacinza.webp', 'labla.webp', 'lab.webp', 'laaz.webp', 'nywh.webp', 'nyredd.webp', 'nyprm.webp', 'nycinza.webp', 'nybt.webp', 'nybp.webp','nyblu.webp','nybla.webp', 'bone-oak.webp', 'bonebigcrok.webp', 'bonelacoste.webp', 'bonenik.webp',
               'bonenike%20(2).webp', 'bonepolo.webp','boneoackl.webp'],
        cores: ['Azul']
    },
    {
        // ATENÇÃO: estas fotos são as mesmas da camiseta; troque pelas fotos das bermudas
        cat: 'bermudasjeans', busca: 'bermudas jeans',
        nome: 'BERMUDAS JEANS', de: 109.90, por: 94.99,
        imgs: ['bermudajeans.JPG', 'beermudajeans.JPG', 'bermudaajeans.JPG', 'bermudaajenss.JPG', 'bermudajeanns.JPG',
               'bermudajeans.JPG', 'bermudajeanss.JPG', 'bermudajecapa.JPG', 'bermudajeeans.JPG', 'calcajeans.JPG', 'calcajeaans.JPG']
    }
];

// ---------- ESTADO ----------
let cart = loadCart();
let panelOpen = false;
let modalSel = { p: null, cor: 0, tam: null };

// ---------- ATALHOS DO DOM ----------
const $ = (id) => document.getElementById(id);
const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

// Helpers dos produtos
const imgSrc = (f) => 'img/' + f;
const corNome = (p, i) => (p.cores && p.cores[i]) || ('Modelo ' + (i + 1));
const grupoDe = (p) => GRUPO_DE[p.cat] || p.cat;
const tamanhosDe = (p) => p.tamanhos || SIZES[grupoDe(p)] || [];

// ---------- PERSISTÊNCIA ----------
function loadCart() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(data) ? data : [];
    } catch (e) {
        return [];
    }
}
function saveCart() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) { /* ignora */ }
}

// ---------- TROCA DE IMAGEM / COR (mantida para cards antigos) ----------
function mudarImagem(imgId, thumb) {
    const main = $(imgId);
    if (!main || !thumb) return;

    main.src = thumb.src;
    main.alt = thumb.alt;

    thumb.parentElement.querySelectorAll('img').forEach((t) => {
        t.classList.remove('is-selected', 'border-2', 'border-slate-900');
        t.classList.add('border', 'border-gray-300');
    });
    thumb.classList.remove('border', 'border-gray-300');
    thumb.classList.add('is-selected', 'border-2', 'border-slate-900');
}

// ---------- GRADE DE PRODUTOS ----------
function renderProdutos() {
    const grid = $('product-grid');
    if (!grid) {
        console.error('[The Grife] Elemento não encontrado no HTML: #product-grid');
        return;
    }
    grid.innerHTML = PRODUTOS.map((p, i) => {
        const tams = tamanhosDe(p);
        const tamTxt = tams.length > 1 ? 'Tam. ' + tams.join(' ') : 'Tamanho único';
        return `
        <div class="product-item product-card bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-md cursor-pointer"
             data-category="${esc(grupoDe(p))}" data-sub="${esc(p.cat)}" data-name="${esc(p.busca)}" onclick="abrirProduto(${i})">
            <div>
                <div class="bg-gray-100 h-44 flex items-center justify-center overflow-hidden">
                    <img src="${imgSrc(p.imgs[0])}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-cover transition-all duration-300">
                </div>
                <div class="p-3">
                    <h3 class="text-sm font-medium text-slate-800 line-clamp-2">${esc(p.nome)}</h3>
                    <div class="mt-2">
                        <span class="text-xs text-gray-400 line-through">${brl(p.de)}</span>
                        <p class="text-base font-bold text-slate-900">${brl(p.por)}</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-500">${p.imgs.length} cores/modelos &middot; ${tamTxt}</p>
                </div>
            </div>
            <div class="p-3 pt-0">
                <button type="button" onclick="event.stopPropagation(); abrirProduto(${i})"
                    class="w-full bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-lg text-sm font-semibold transition cursor-pointer">
                    Escolher opções
                </button>
            </div>
        </div>`;
    }).join('');
}

// ---------- JANELA DO PRODUTO (imagem grande + cor + tamanho) ----------
function criarModal() {
    if ($('produto-modal')) return;
    document.body.insertAdjacentHTML('beforeend', `
    <div id="produto-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="pm-nome">
        <div class="absolute inset-0 bg-black/60" onclick="fecharProduto()"></div>
        <div class="absolute inset-x-0 bottom-0 md:inset-0 md:m-auto md:h-fit md:max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-t-2xl md:rounded-2xl shadow-xl">
            <button type="button" onclick="fecharProduto()" aria-label="Fechar"
                class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 border border-gray-200 text-slate-800 text-xl leading-none hover:bg-white cursor-pointer">&times;</button>
            <div class="grid md:grid-cols-2">
                <div class="bg-gray-100 flex items-center justify-center md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none overflow-hidden">
                    <img id="pm-img" src="" alt="" class="w-full h-80 sm:h-[26rem] md:h-[34rem] object-contain">
                </div>
                <div class="p-5 flex flex-col gap-5">
                    <div>
                        <h3 id="pm-nome" class="text-lg font-semibold text-slate-900 pr-8"></h3>
                        <div class="mt-2">
                            <span id="pm-de" class="text-xs text-gray-400 line-through"></span>
                            <p id="pm-por" class="text-2xl font-bold text-slate-900"></p>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600 mb-2">Cor/modelo: <strong id="pm-cor-nome" class="text-slate-900"></strong></p>
                        <div id="pm-cores" class="flex flex-wrap gap-2"></div>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600 mb-2">Tamanho: <strong id="pm-tam-nome" class="text-slate-900">selecione</strong></p>
                        <div id="pm-tamanhos" class="flex flex-wrap gap-2"></div>
                    </div>
                    <div class="mt-auto">
                        <p id="pm-erro" class="hidden text-sm text-red-600 mb-2">Escolha um tamanho para continuar.</p>
                        <button id="pm-add" type="button" onclick="adicionarDoModal(this)"
                            class="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg text-sm font-semibold transition cursor-pointer">
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
}

function abrirProduto(i) {
    const p = PRODUTOS[i];
    const tams = tamanhosDe(p);
    const unico = tams.length <= 1;
    modalSel = { p, cor: 0, tam: unico ? (tams[0] || 'Único') : null };

    $('pm-nome').textContent = p.nome;
    $('pm-de').textContent = brl(p.de);
    $('pm-por').textContent = brl(p.por);
    $('pm-erro').classList.add('hidden');

    $('pm-cores').innerHTML = p.imgs.map((f, k) => `
        <img src="${imgSrc(f)}" alt="${esc(corNome(p, k))}" title="${esc(corNome(p, k))}" onclick="escolherCor(${k})"
             class="pm-cor w-16 h-16 object-cover rounded-lg border-2 cursor-pointer hover:opacity-80 transition">`).join('');
    escolherCor(0);

    if (unico) {
        $('pm-tam-nome').textContent = modalSel.tam;
        $('pm-tamanhos').innerHTML = '';
    } else {
        $('pm-tam-nome').textContent = 'selecione';
        $('pm-tamanhos').innerHTML = tams.map((t) => `
            <button type="button" data-tam="${esc(t)}" onclick="escolherTamanho('${esc(t)}')"
                class="pm-tam min-w-11 h-11 px-3 border rounded-lg text-sm font-semibold transition cursor-pointer hover:border-slate-900">${esc(t)}</button>`).join('');
        marcarTamanho(null);
    }

    $('pm-add').textContent = 'Adicionar ao carrinho';
    $('pm-add').disabled = false;
    $('produto-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharProduto() {
    const m = $('produto-modal');
    if (!m || m.classList.contains('hidden')) return;
    m.classList.add('hidden');
    document.body.style.overflow = panelOpen ? 'hidden' : '';
}

function escolherCor(k) {
    const p = modalSel.p;
    modalSel.cor = k;
    $('pm-img').src = imgSrc(p.imgs[k]);
    $('pm-img').alt = p.nome + ' - ' + corNome(p, k);
    $('pm-cor-nome').textContent = corNome(p, k);
    document.querySelectorAll('.pm-cor').forEach((el, idx) => {
        el.classList.toggle('border-slate-900', idx === k);
        el.classList.toggle('border-gray-200', idx !== k);
    });
}

function marcarTamanho(valor) {
    document.querySelectorAll('.pm-tam').forEach((b) => {
        const ativo = b.dataset.tam === valor;
        ['border-slate-900', 'bg-slate-900', 'text-white'].forEach((c) => b.classList.toggle(c, ativo));
        ['border-gray-300', 'bg-white', 'text-slate-800'].forEach((c) => b.classList.toggle(c, !ativo));
    });
}

function escolherTamanho(t) {
    modalSel.tam = t;
    $('pm-tam-nome').textContent = t;
    $('pm-erro').classList.add('hidden');
    marcarTamanho(t);
}

function adicionarDoModal(btn) {
    if (!modalSel.tam) {
        $('pm-erro').classList.remove('hidden');
        return;
    }
    const { p, cor, tam } = modalSel;
    addItem({
        name: p.nome,
        price: p.por,
        cor: corNome(p, cor),
        size: tam,
        img: imgSrc(p.imgs[cor]),
        category: grupoDe(p)
    });

    btn.textContent = 'Adicionado ✓';
    btn.disabled = true;
    setTimeout(fecharProduto, 600);
}

// ---------- ADICIONAR AO CARRINHO ----------
// Função única que grava o item; usada pela janela do produto e pelo addCart antigo
function addItem({ name, price, cor, size, img, category }) {
    const existing = cart.find((i) =>
        i.name === name && i.cor === cor && i.size === size);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: Date.now() + Math.random(),
            name, price, cor, img, category, size,
            qty: 1
        });
    }

    saveCart();
    renderCart();
}

// Mantida para botões "Adicionar" antigos que ainda existam no HTML
function addCart(name, price, btn) {
    const card = btn ? btn.closest('.product-item') : null;
    const category = card ? card.dataset.category : '';
    const selected = card ? (card.querySelector('.thumbs img.is-selected') || card.querySelector('.thumbs img')) : null;
    const cor = selected ? (selected.dataset.cor || '') : '';
    const img = selected ? selected.getAttribute('src') : '';
    const sizes = SIZES[category] || [];
    const defaultSize = sizes.length === 1 ? sizes[0] : '';

    addItem({ name, price, cor, size: defaultSize, img, category });

    // Feedback visual no botão
    if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Adicionado ✓';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = original.trim(); btn.disabled = false; }, 900);
    }
}

// ---------- AÇÕES NO CARRINHO ----------
function changeQty(id, delta) {
    const item = cart.find((i) => String(i.id) === String(id));
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter((i) => i !== item);
    saveCart();
    renderCart();
}
function removeItem(id) {
    cart = cart.filter((i) => String(i.id) !== String(id));
    saveCart();
    renderCart();
}
function setSize(id, size) {
    const item = cart.find((i) => String(i.id) === String(id));
    if (!item) return;
    item.size = size;
    saveCart();
    renderCart();
}

// ---------- RENDERIZAÇÃO ----------
function renderCart() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const total = cart.reduce((s, i) => s + i.qty * i.price, 0);

    $('cartBadge').textContent = totalQty;
    $('cartCount').textContent = `${totalQty} item(ns)`;
    $('cartTotal').textContent = brl(total);

    // Barra flutuante: aparece quando há itens e o painel está fechado
    $('cartBar').classList.toggle('translate-y-full', totalQty === 0 || panelOpen);

    const box = $('cartItems');
    if (cart.length === 0) {
        box.innerHTML = `
            <div class="text-center text-gray-400 py-16">
                <i class="fa-solid fa-cart-shopping text-4xl mb-3"></i>
                <p class="text-sm">Seu carrinho está vazio.</p>
            </div>`;
        return;
    }

    box.innerHTML = cart.map((i) => {
        const sizes = SIZES[i.category] || [];
        // O tamanho agora é escolhido na janela do produto. O seletor só aparece
        // para itens antigos (salvos antes da mudança) que ficaram sem tamanho.
        const sizeSelect = (!i.size && sizes.length > 1)
            ? `<select data-action="size" data-id="${i.id}" class="size-select mt-1 text-xs border border-gray-300 rounded-md px-2 py-1 bg-white">
                   <option value="">Tamanho...</option>
                   ${sizes.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join('')}
               </select>`
            : `<p class="text-xs text-gray-500 mt-1">Tamanho: ${esc(i.size || 'Único')}</p>`;

        return `
        <div class="flex gap-3 border border-gray-200 rounded-xl p-2">
            <img src="${esc(i.img)}" alt="${esc(i.name)}" class="w-16 h-16 object-cover rounded-lg shrink-0">
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-slate-900 leading-tight">${esc(i.name)}</p>
                ${i.cor ? `<p class="text-xs text-gray-500">Cor: ${esc(i.cor)}</p>` : ''}
                ${sizeSelect}
                <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center gap-2">
                        <button data-action="dec" data-id="${i.id}" class="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-bold cursor-pointer" aria-label="Diminuir">−</button>
                        <span class="text-sm font-semibold w-4 text-center">${i.qty}</span>
                        <button data-action="inc" data-id="${i.id}" class="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-bold cursor-pointer" aria-label="Aumentar">+</button>
                    </div>
                    <span class="text-sm font-bold text-slate-900">${brl(i.price * i.qty)}</span>
                </div>
            </div>
            <button data-action="del" data-id="${i.id}" class="text-gray-400 hover:text-red-500 self-start cursor-pointer" aria-label="Remover">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`;
    }).join('');
}

// ---------- ABRIR / FECHAR CARRINHO ----------
function toggleCart() {
    panelOpen = !panelOpen;
    $('cartPanel').classList.toggle('translate-x-full', !panelOpen);
    $('cartOverlay').classList.toggle('hidden', !panelOpen);
    document.body.style.overflow = panelOpen ? 'hidden' : '';
    renderCart();
}

// ---------- ENVIAR PEDIDO PELO WHATSAPP ----------
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    // Exige tamanho em todos os itens
    const missing = cart.filter((i) => !i.size);
    if (missing.length) {
        alert('Escolha o tamanho de todos os itens antes de enviar o pedido.');
        document.querySelectorAll('.size-select').forEach((sel) => {
            if (!sel.value) sel.classList.add('border-red-500');
        });
        return;
    }

    const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
    let msg = '*Novo pedido - The Grife*\n\n';
    cart.forEach((i, idx) => {
        msg += `*${idx + 1}. ${i.name}*\n`;
        if (i.cor) msg += `   Cor: ${i.cor}\n`;
        msg += `   Tamanho: ${i.size}\n`;
        msg += `   Qtd: ${i.qty} x ${brl(i.price)} = ${brl(i.qty * i.price)}\n\n`;
    });
    msg += `*Total: ${brl(total)}*\n\nGostaria de finalizar este pedido!`;

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

// ---------- FILTRO DE CATEGORIAS ----------
// Cada botão .category-item mostra só os produtos da própria categoria (data-sub).
// O data-category do card é o grupo, usado apenas para definir os tamanhos.
function filterCategory(category) {
    document.querySelectorAll('.product-item').forEach((p) => {
        const show = category === 'todos' || p.dataset.sub === category;
        p.classList.toggle('hidden', !show);
        p.style.display = show ? '' : 'none';
    });

    document.querySelectorAll('.category-item').forEach((c) => {
        const active = c.dataset.category === category;
        c.classList.toggle('ring-2', active);
        c.classList.toggle('ring-slate-900', active);
    });
}

// Contagem de produtos por categoria: qualquer elemento com data-count="camisetas"
// (ou "todos", "bermudas", "bones"...) mostra o número certo automaticamente.
function atualizarContagens() {
    document.querySelectorAll('[data-count]').forEach((el) => {
        const c = el.dataset.count;
        el.textContent = PRODUTOS.filter((p) =>
            c === 'todos' || p.cat === c).length;
    });
}

// ---------- INICIALIZAÇÃO ----------
document.addEventListener('DOMContentLoaded', () => {
    ['cartBadge', 'cartBar', 'cartCount', 'cartOverlay', 'cartPanel', 'cartItems', 'cartTotal']
        .forEach((id) => { if (!$(id)) console.error('[The Grife] Elemento não encontrado no HTML: #' + id); });
    console.log('[The Grife] script.js carregado com sucesso');

    // Produtos e janela do produto (precisam existir antes do filtro)
    renderProdutos();
    criarModal();
    atualizarContagens();

    // Link do WhatsApp do cabeçalho
    const contact = $('contactLink');
    if (contact) {
        const text = encodeURIComponent('Olá! Vim pelo site e gostaria de tirar dúvidas.');
        contact.href = `https://wa.me/${PHONE}?text=${text}`;
    }

    // Categorias
    document.querySelectorAll('.category-item').forEach((c) => {
        c.addEventListener('click', () => filterCategory(c.dataset.category));
    });
    filterCategory('todos');
    document.querySelectorAll('.thumbs').forEach((t) => {
        const first = t.querySelector('img');
        if (first) first.classList.add('is-selected');
    });

    // Eventos dentro do carrinho (delegação)
    const box = $('cartItems');
    box.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const { action, id } = btn.dataset;
        if (action === 'inc') changeQty(id, 1);
        if (action === 'dec') changeQty(id, -1);
        if (action === 'del') removeItem(id);
    });
    box.addEventListener('change', (e) => {
        if (e.target.dataset.action === 'size') setSize(e.target.dataset.id, e.target.value);
    });

    // ESC fecha a janela do produto ou o carrinho
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const m = $('produto-modal');
        if (m && !m.classList.contains('hidden')) fecharProduto();
        else if (panelOpen) toggleCart();
    });

    renderCart();
});




// Funções usadas pelos onclick="" do HTML precisam ser globais
window.mudarImagem = mudarImagem;
window.addCart = addCart;
window.toggleCart = toggleCart;
window.checkoutWhatsApp = checkoutWhatsApp;
window.abrirProduto = abrirProduto;
window.fecharProduto = fecharProduto;
window.escolherCor = escolherCor;
window.escolherTamanho = escolherTamanho;
window.adicionarDoModal = adicionarDoModal;