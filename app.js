(() => {
  'use strict';

  const STORAGE_KEY = 'forja_dos_burgers_cart_v1';

  const state = {
    search: '',
    filter: 'all',
    cart: loadCart(),
    deliveryMode: 'Retirada',
    activeItem: null,
    modalQty: 1
  };

  // DOM References
  const menuRoot = document.getElementById('menuRoot');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const catPills = document.querySelectorAll('.cat-pill');

  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartTotalValue = document.getElementById('cartTotalValue');
  const cartFooter = document.getElementById('cartFooter');

  const mobileCartBar = document.getElementById('mobileCartBar');
  const mobileCartTrigger = document.getElementById('mobileCartTrigger');
  const mobileCartCount = document.getElementById('mobileCartCount');
  const mobileCartTotal = document.getElementById('mobileCartTotal');

  const itemModalBackdrop = document.getElementById('itemModalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalQtyMinus = document.getElementById('modalQtyMinus');
  const modalQtyPlus = document.getElementById('modalQtyPlus');
  const modalQtyValue = document.getElementById('modalQtyValue');
  const modalPriceTotal = document.getElementById('modalPriceTotal');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');

  const toggleOpts = document.querySelectorAll('.toggle-opt');
  const customerName = document.getElementById('customerName');
  const customerAddress = document.getElementById('customerAddress');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const copyOrderBtn = document.getElementById('copyOrderBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const toastEl = document.getElementById('toast');

  let toastTimer = null;

  function formatBRL(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    } catch {
      // Ignore storage quota errors
    }
  }

  function gemSvg(color) {
    return `
      <svg class="gem-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,2 21,8 17,22 7,22 3,8" fill="${color}" fill-opacity="0.92" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="1.3"/>
        <polyline points="3,8 12,11 21,8" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="1"/>
        <line x1="12" y1="2" x2="12" y2="22" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1"/>
      </svg>
    `;
  }

  function cardIconSvg(type) {
    if (type === 'chips') {
      return `
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none" aria-hidden="true">
          <ellipse cx="22" cy="24" rx="11" ry="7" transform="rotate(-18 22 24)" fill="#FBBF24" stroke="#B45309" stroke-width="1.5"/>
          <ellipse cx="42" cy="24" rx="11" ry="7" transform="rotate(16 42 24)" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
          <ellipse cx="32" cy="18" rx="11" ry="7" fill="#FDE047" stroke="#B45309" stroke-width="1.5"/>
          <path d="M12 28h40l-5 34a4 4 0 0 1-4 3H21a4 4 0 0 1-4-3l-5-34z" fill="#18151B" stroke="#F59E0B" stroke-width="2"/>
          <text x="32" y="50" text-anchor="middle" fill="#FDE047" font-size="9" font-weight="800" font-family="sans-serif">CHIPS</text>
        </svg>
      `;
    }
    if (type === 'fries') {
      return `
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none" aria-hidden="true">
          <rect x="17" y="10" width="6" height="22" rx="2" transform="rotate(-8 17 10)" fill="#FBBF24"/>
          <rect x="25" y="7" width="6" height="25" rx="2" fill="#FDE047"/>
          <rect x="33" y="8" width="6" height="24" rx="2" fill="#F59E0B"/>
          <rect x="41" y="11" width="6" height="21" rx="2" transform="rotate(8 41 11)" fill="#FBBF24"/>
          <path d="M12 28h40l-5 34a4 4 0 0 1-4 3H21a4 4 0 0 1-4-3l-5-34z" fill="#18151B" stroke="#F59E0B" stroke-width="2"/>
          <text x="32" y="50" text-anchor="middle" fill="#FDE047" font-size="9" font-weight="800" font-family="sans-serif">PALITO</text>
        </svg>
      `;
    }
    if (type === 'bottle') {
      return `
        <svg width="56" height="72" viewBox="0 0 56 72" fill="none" aria-hidden="true">
          <rect x="22" y="4" width="12" height="6" rx="2" fill="#EF4444"/>
          <path d="M23 10h10l3 10c2 3 4 6 4 12v30a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V32c0-6 2-9 4-12l3-10z" fill="#1F2937" stroke="#F59E0B" stroke-width="2"/>
          <rect x="16" y="34" width="24" height="14" fill="#DC2626" fill-opacity="0.85"/>
          <text x="28" y="44" text-anchor="middle" fill="#FFF" font-size="9" font-weight="800" font-family="sans-serif">1L</text>
        </svg>
      `;
    }
    return `
      <svg width="56" height="72" viewBox="0 0 56 72" fill="none" aria-hidden="true">
        <rect x="14" y="10" width="28" height="52" rx="6" fill="#DC2626" stroke="#F59E0B" stroke-width="2"/>
        <rect x="16" y="7" width="24" height="4" rx="2" fill="#CBD5E1"/>
        <path d="M14 31h28v10H14z" fill="#111827" fill-opacity="0.55"/>
        <text x="28" y="39" text-anchor="middle" fill="#FDE047" font-size="8" font-weight="800" font-family="sans-serif">350ml</text>
      </svg>
    `;
  }

  function findItemById(itemId) {
    for (const section of MENU_SECTIONS) {
      const found = section.items.find((item) => item.id === itemId);
      if (found) return { item: found, section };
    }
    return null;
  }

  function matchesFilters(item, section) {
    const query = state.search.trim().toLowerCase();
    const haystack = [
      item.name,
      item.accent,
      item.description,
      item.mineral || '',
      section.title,
      ...(item.badges || [])
    ].join(' ').toLowerCase();

    const matchesQuery = !query || haystack.includes(query);
    const matchesChip = state.filter === 'all' || (item.tags && item.tags.includes(state.filter));
    return matchesQuery && matchesChip;
  }

  function renderMenu() {
    let totalVisible = 0;

    const sectionsHtml = MENU_SECTIONS.map((section) => {
      const filteredItems = section.items.filter((item) => matchesFilters(item, section));
      if (!filteredItems.length) return '';
      totalVisible += filteredItems.length;

      const gridClass = section.layout === 'grid-2' ? 'cards-grid grid-2' : 'cards-grid';
      const priceBadge = section.sectionPrice
        ? `<div class="section-price-badge">${formatBRL(section.sectionPrice)}</div>`
        : '';

      const cardsHtml = filteredItems.map((item) => {
        if (section.isIconCard) {
          const btnText = item.drinkOptions ? 'Escolher sabor +' : 'Adicionar +';
          return `
            <article class="item-card drink-card">
              <div class="drink-visual">${cardIconSvg(item.cardIcon)}</div>
              <div class="card-body">
                <div class="card-title-row">
                  <h3 class="card-title">${item.name} <span class="accent-word">${item.accent}</span></h3>
                </div>
                <p class="card-desc">${item.description}</p>
                <div class="card-tags">
                  ${(item.badges || []).map((b) => `<span class="mini-tag">${b}</span>`).join('')}
                </div>
                <div class="card-footer">
                  <span class="card-price">${formatBRL(item.price)}</span>
                  <button type="button" class="add-btn" data-action="select-item" data-id="${item.id}">
                    ${btnText}
                  </button>
                </div>
              </div>
            </article>
          `;
        }

        const isCombo = Boolean(item.comboConfig);
        const btnLabel = isCombo ? 'Montar combo +' : 'Adicionar +';

        return `
          <article class="item-card ${isCombo ? 'combo-card' : ''}">
            <div class="card-media">
              <img src="${item.image}" alt="${item.name} ${item.accent}" loading="lazy" />
              ${item.mineral ? `<span class="gem-tag">${gemSvg(item.gemColor || '#F59E0B')} ${item.mineral}</span>` : ''}
            </div>
            <div class="card-body">
              <div class="card-title-row">
                <h3 class="card-title">${item.name} <span class="accent-word">${item.accent}</span></h3>
              </div>
              <p class="card-desc">${item.description}</p>
              <div class="card-tags">
                ${(item.badges || []).map((b) => `<span class="mini-tag">${b}</span>`).join('')}
              </div>
              <div class="card-footer">
                <span class="card-price">${formatBRL(item.price)}</span>
                <button type="button" class="add-btn" data-action="select-item" data-id="${item.id}">
                  ${btnLabel}
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');

      return `
        <section class="menu-section" id="${section.id}" aria-labelledby="heading-${section.id}">
          <div class="section-header">
            <div class="section-title-group">
              <h2 class="section-title" id="heading-${section.id}">${section.title}</h2>
              <p class="section-subtitle">${section.subtitle}</p>
            </div>
            ${priceBadge}
          </div>
          <div class="${gridClass}">
            ${cardsHtml}
          </div>
        </section>
      `;
    }).join('');

    if (totalVisible === 0) {
      menuRoot.innerHTML = `
        <div class="empty-state">
          <h3>Nenhum minério encontrado na forja</h3>
          <p>Tente outro termo de busca ou limpe os filtros para ver todo o cardápio.</p>
          <button type="button" class="btn btn-primary" id="resetFiltersBtn">Mostrar todo o cardápio</button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', resetFilters);
      return;
    }

    menuRoot.innerHTML = sectionsHtml;
  }

  function resetFilters() {
    state.search = '';
    state.filter = 'all';
    searchInput.value = '';
    clearSearchBtn.hidden = true;
    filterChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === 'all'));
    renderMenu();
  }

  // Modal Logic
  function openItemModal(itemId) {
    const found = findItemById(itemId);
    if (!found) return;

    const { item, section } = found;
    state.activeItem = item;
    state.modalQty = 1;

    modalEyebrow.textContent = section.title;
    modalTitle.textContent = `${item.name} ${item.accent}`;
    modalQtyValue.textContent = '1';
    modalPriceTotal.textContent = formatBRL(item.price);

    let html = '';

    if (item.comboConfig) {
      const burgerSection = MENU_SECTIONS.find((s) => s.id === item.comboConfig.burgerTier);
      const burgerOptions = burgerSection ? burgerSection.items : [];
      const firstBurger = burgerOptions[0];
      const initialPreview = firstBurger
        ? (item.comboConfig.includesFries ? firstBurger.comboCompletoImage : firstBurger.comboRefriImage)
        : item.image;
      const initialLabel = firstBurger ? `${firstBurger.name} ${firstBurger.accent}` : `${item.name} ${item.accent}`;

      html += `
        <div class="modal-preview">
          <img id="modalPreviewImg" src="${initialPreview}" alt="${initialLabel}" />
          <span class="modal-preview-caption" id="modalPreviewCaption">${initialLabel}</span>
        </div>
        <p class="card-desc">${item.description}</p>
        <div class="option-group">
          <div class="option-group-title">
            <span>Escolha seu Burger</span>
            <span class="required-pill">Obrigatório</span>
          </div>
          <div class="radio-list">
            ${burgerOptions.map((b, idx) => {
              const comboImg = item.comboConfig.includesFries ? b.comboCompletoImage : b.comboRefriImage;
              return `
                <label class="radio-card">
                  <input type="radio" name="comboBurger" value="${b.name} ${b.accent}" data-preview="${comboImg}" ${idx === 0 ? 'checked' : ''} />
                  <span>${b.name} ${b.accent}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;

      if (item.comboConfig.includesFries) {
        html += `
          <div class="option-group">
            <div class="option-group-title">
              <span>Escolha a Batata</span>
              <span class="required-pill">Obrigatório</span>
            </div>
            <div class="radio-list">
              ${BATATA_OPCOES.map((fries, idx) => `
                <label class="radio-card">
                  <input type="radio" name="comboFries" value="${fries}" ${idx === 0 ? 'checked' : ''} />
                  <span>${fries}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
      }

      html += `
        <div class="option-group">
          <div class="option-group-title">
            <span>Escolha o Refri Lata 350ml</span>
            <span class="required-pill">Obrigatório</span>
          </div>
          <div class="radio-list">
            ${REFRI_LATA_SABORES.map((drink, idx) => `
              <label class="radio-card">
                <input type="radio" name="comboDrink" value="${drink}" ${idx === 0 ? 'checked' : ''} />
                <span>${drink}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      if (item.image) {
        html += `
          <div class="modal-preview">
            <img src="${item.image}" alt="${item.name} ${item.accent}" />
          </div>
        `;
      }
      html += `<p class="card-desc">${item.description}</p>`;

      if (item.drinkOptions) {
        html += `
          <div class="option-group">
            <div class="option-group-title">
              <span>Escolha o Sabor</span>
              <span class="required-pill">Obrigatório</span>
            </div>
            <div class="radio-list">
              ${item.drinkOptions.map((flavor, idx) => `
                <label class="radio-card">
                  <input type="radio" name="drinkFlavor" value="${flavor}" ${idx === 0 ? 'checked' : ''} />
                  <span>${flavor}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
      }
    }

    html += `
      <div class="option-group">
        <label class="option-group-title" for="itemNotesInput">
          <span>Observações (opcional)</span>
        </label>
        <textarea id="itemNotesInput" class="notes-textarea" placeholder="Ex: sem molho, ponto da carne, gelo e limão..."></textarea>
      </div>
    `;

    modalBody.innerHTML = html;

    if (item.comboConfig) {
      const previewImg = document.getElementById('modalPreviewImg');
      const previewCaption = document.getElementById('modalPreviewCaption');
      modalBody.querySelectorAll('input[name="comboBurger"]').forEach((radio) => {
        radio.addEventListener('change', () => {
          if (previewImg && radio.dataset.preview) {
            previewImg.src = radio.dataset.preview;
            previewImg.alt = radio.value;
          }
          if (previewCaption) {
            previewCaption.textContent = radio.value;
          }
        });
      });
    }
    itemModalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    closeModalBtn.focus();
  }

  function closeItemModal() {
    itemModalBackdrop.hidden = true;
    document.body.style.overflow = '';
    state.activeItem = null;
  }

  function updateModalTotal() {
    if (!state.activeItem) return;
    modalQtyValue.textContent = String(state.modalQty);
    modalPriceTotal.textContent = formatBRL(state.activeItem.price * state.modalQty);
  }

  function confirmModalAdd() {
    const item = state.activeItem;
    if (!item) return;

    const details = [];
    if (item.comboConfig) {
      const burger = modalBody.querySelector('input[name="comboBurger"]:checked')?.value;
      const fries = modalBody.querySelector('input[name="comboFries"]:checked')?.value;
      const drink = modalBody.querySelector('input[name="comboDrink"]:checked')?.value;
      if (burger) details.push(`Burger: ${burger}`);
      if (fries) details.push(`Batata: ${fries}`);
      if (drink) details.push(`Refri: ${drink}`);
    } else if (item.drinkOptions) {
      const flavor = modalBody.querySelector('input[name="drinkFlavor"]:checked')?.value;
      if (flavor) details.push(`Sabor: ${flavor}`);
    }

    const notes = document.getElementById('itemNotesInput')?.value.trim();
    if (notes) details.push(`Obs: ${notes}`);

    const detailString = details.join(' · ');
    const cartKey = `${item.id}::${detailString}`;

    const existing = state.cart.find((entry) => entry.key === cartKey);
    if (existing) {
      existing.qty += state.modalQty;
    } else {
      state.cart.push({
        key: cartKey,
        id: item.id,
        name: `${item.name} ${item.accent}`,
        price: item.price,
        qty: state.modalQty,
        details: detailString
      });
    }

    saveCart();
    renderCart();
    closeItemModal();
    showToast(`${item.name} ${item.accent} adicionado à comanda!`);
  }

  // Cart Drawer Logic
  function openCart() {
    cartBackdrop.hidden = false;
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    openCartBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeCartBtn.focus();
  }

  function closeCart() {
    cartBackdrop.hidden = true;
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    openCartBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function updateCartQty(key, delta) {
    const index = state.cart.findIndex((i) => i.key === key);
    if (index === -1) return;

    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }

    saveCart();
    renderCart();
  }

  function renderCart() {
    const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const totalValue = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    cartBadge.textContent = String(totalItems);
    cartTotalValue.textContent = formatBRL(totalValue);

    mobileCartCount.textContent = String(totalItems);
    mobileCartTotal.textContent = formatBRL(totalValue);
    mobileCartBar.hidden = totalItems === 0 || window.innerWidth > 640;

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty">
          <strong>Sua comanda está vazia</strong>
          <span>Escolha seus burgers, combos, batatas ou bebidas no cardápio.</span>
        </div>
      `;
      cartFooter.style.display = 'none';
      return;
    }

    cartFooter.style.display = 'flex';
    cartItemsContainer.innerHTML = state.cart.map((entry) => `
      <div class="cart-item">
        <div class="cart-item-top">
          <div>
            <div class="cart-item-name">${entry.qty}x ${entry.name}</div>
            ${entry.details ? `<div class="cart-item-meta">${entry.details}</div>` : ''}
          </div>
        </div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">${formatBRL(entry.price * entry.qty)}</span>
          <div class="qty-control">
            <button type="button" data-cart-action="dec" data-key="${encodeURIComponent(entry.key)}" aria-label="Remover uma unidade">−</button>
            <span>${entry.qty}</span>
            <button type="button" data-cart-action="inc" data-key="${encodeURIComponent(entry.key)}" aria-label="Adicionar uma unidade">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function buildOrderMessage() {
    const total = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const lines = [
      `🔥 *PEDIDO — ${FORJA_CONFIG.brand.toUpperCase()}*`,
      ''
    ];

    state.cart.forEach((entry) => {
      lines.push(`• ${entry.qty}x *${entry.name}* — ${formatBRL(entry.price * entry.qty)}`);
      if (entry.details) {
        lines.push(`  _${entry.details}_`);
      }
    });

    lines.push('');
    lines.push(`*Modalidade:* ${state.deliveryMode}`);
    if (customerName.value.trim()) {
      lines.push(`*Cliente:* ${customerName.value.trim()}`);
    }
    if (state.deliveryMode === 'Entrega' && customerAddress.value.trim()) {
      lines.push(`*Endereço:* ${customerAddress.value.trim()}`);
    }
    lines.push(`*Total:* ${formatBRL(total)}`);

    return lines.join('\n');
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  // Event Listeners
  menuRoot.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-action="select-item"]');
    if (!btn) return;
    openItemModal(btn.dataset.id);
  });

  searchInput.addEventListener('input', (event) => {
    state.search = event.target.value;
    clearSearchBtn.hidden = !state.search;
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    state.search = '';
    searchInput.value = '';
    clearSearchBtn.hidden = true;
    renderMenu();
    searchInput.focus();
  });

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      state.filter = chip.dataset.filter;
      filterChips.forEach((c) => c.classList.toggle('active', c === chip));
      renderMenu();
    });
  });

  modalQtyMinus.addEventListener('click', () => {
    if (state.modalQty > 1) {
      state.modalQty -= 1;
      updateModalTotal();
    }
  });

  modalQtyPlus.addEventListener('click', () => {
    state.modalQty += 1;
    updateModalTotal();
  });

  modalConfirmBtn.addEventListener('click', confirmModalAdd);
  closeModalBtn.addEventListener('click', closeItemModal);
  itemModalBackdrop.addEventListener('click', (event) => {
    if (event.target === itemModalBackdrop) closeItemModal();
  });

  openCartBtn.addEventListener('click', openCart);
  mobileCartTrigger.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);

  cartItemsContainer.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-cart-action]');
    if (!btn) return;
    const key = decodeURIComponent(btn.dataset.key);
    updateCartQty(key, btn.dataset.cartAction === 'inc' ? 1 : -1);
  });

  toggleOpts.forEach((opt) => {
    opt.addEventListener('click', () => {
      state.deliveryMode = opt.dataset.mode;
      toggleOpts.forEach((btn) => {
        const active = btn === opt;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-checked', String(active));
      });
      customerAddress.hidden = state.deliveryMode !== 'Entrega';
    });
  });

  sendWhatsAppBtn.addEventListener('click', () => {
    if (!state.cart.length) return;
    const msg = encodeURIComponent(buildOrderMessage());
    const phone = FORJA_CONFIG.whatsappPhone.replace(/\D/g, '');
    const url = phone
      ? `https://wa.me/${phone}?text=${msg}`
      : `https://wa.me/?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  copyOrderBtn.addEventListener('click', async () => {
    if (!state.cart.length) return;
    const text = buildOrderMessage();
    try {
      await navigator.clipboard.writeText(text);
      showToast('Resumo do pedido copiado!');
    } catch {
      showToast('Não foi possível copiar automaticamente.');
    }
  });

  clearCartBtn.addEventListener('click', () => {
    state.cart = [];
    saveCart();
    renderCart();
    showToast('Comanda limpa.');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!itemModalBackdrop.hidden) closeItemModal();
      if (cartDrawer.classList.contains('open')) closeCart();
    }
  });

  window.addEventListener('resize', () => {
    const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
    mobileCartBar.hidden = totalItems === 0 || window.innerWidth > 640;
  });

  // Scroll Spy for Category Nav
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          catPills.forEach((pill) => {
            pill.classList.toggle('active', pill.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: '-180px 0px -65% 0px', threshold: 0.05 }
  );

  // Initial Render
  renderMenu();
  renderCart();
  document.querySelectorAll('.menu-section').forEach((sec) => observer.observe(sec));
})();
