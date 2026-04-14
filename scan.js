let codeReader;
let selectedDeviceId = null;

function findProductByBarcode(code) {
  if (!window.products) return null;
  for (const cat of Object.keys(window.products)) {
    const arr = window.products[cat];
    for (const p of arr) {
      if (p.barcode && p.barcode === code) return { product: p, category: cat };
    }
  }
  return null;
}

function renderLookup(result) {
  const el = document.getElementById('scanResult');
  el.innerHTML = '';
  if (!result) {
    el.innerHTML = '<div class="product-card"><div style="padding:18px">No product found for this barcode.</div></div>';
    return;
  }

  const p = result.product;
  const cat = result.category;

  const card = document.createElement('div');
  card.className = 'product-card';

  const img = document.createElement('img');
  img.className = 'product-image';
  img.src = p.image || 'https://picsum.photos/seed/' + encodeURIComponent(p.name) + '/400/300';

  const details = document.createElement('div');
  details.className = 'details';

  details.innerHTML = `<h3>${p.name} <span class="risk-badge risk-${p.riskLevel}">${p.riskLevel || 'Unknown'} Risk</span></h3>
    <p><strong>Brand:</strong> ${p.brand}</p>
    <p><strong>Category:</strong> ${cat}</p>`;

  const flagged = document.createElement('div');
  flagged.className = 'chemical-list';
  const harmful = p.harmfulSubstances || [];
  flagged.innerHTML = harmful.length ? `<strong>⚠️ Flagged Ingredients:</strong><ul>${harmful.map(s=>`<li><strong>${s.name}:</strong> ${s.effect}</li>`).join('')}</ul>` : '<strong>⚠️ Flagged Ingredients:</strong> None';

  const alts = document.createElement('div');
  alts.className = 'alternative-box';
  const safer = p.saferAlternatives || [];
  alts.innerHTML = `<strong>✅ Better Choices:</strong> ${safer.length ? safer.map(a=>`${a.name} ${a.brand? '('+a.brand+')' : ''}`).join(', ') : 'No suggestions available'}`;

  const src = document.createElement('div');
  if (p.source) {
    const a = document.createElement('a');
    a.className = 'source-link';
    a.href = p.source;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerText = 'View label ↗';
    src.appendChild(a);
  }

  details.appendChild(flagged);
  details.appendChild(alts);
  if (p.source) details.appendChild(src);

  card.appendChild(img);
  card.appendChild(details);
  el.appendChild(card);
}

async function startScanner() {
  if (!window.ZXing) {
    document.getElementById('status').textContent = 'Scanner library not loaded';
    return;
  }

  codeReader = new ZXing.BrowserMultiFormatReader();
  document.getElementById('status').textContent = 'Starting camera...';

  try {
    const devices = await codeReader.listVideoInputDevices();
    const videoInputDevices = devices.filter(d => d.label && d.label.toLowerCase().includes('back'));
    const deviceId = (videoInputDevices.length ? videoInputDevices[0].deviceId : (devices[0] && devices[0].deviceId));
    selectedDeviceId = deviceId;

    await codeReader.decodeFromVideoDevice(deviceId, 'video', (result, err) => {
      if (result) {
        document.getElementById('status').textContent = 'Scanned: ' + result.getText();
        const found = findProductByBarcode(result.getText());
        renderLookup(found);
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        console.debug(err);
      }
    });

    document.getElementById('status').textContent = 'Scanning...';
  } catch (e) {
    console.error(e);
    document.getElementById('status').textContent = 'Camera access denied or unavailable.';
  }
}

function stopScanner() {
  if (codeReader) {
    codeReader.reset();
    document.getElementById('status').textContent = 'Stopped';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startBtn').addEventListener('click', startScanner);
  document.getElementById('stopBtn').addEventListener('click', stopScanner);
  document.getElementById('lookupBtn').addEventListener('click', () => {
    const v = document.getElementById('manualCode').value.trim();
    if (!v) return;
    document.getElementById('status').textContent = 'Lookup: ' + v;
    const found = findProductByBarcode(v);
    renderLookup(found);
  });
});
