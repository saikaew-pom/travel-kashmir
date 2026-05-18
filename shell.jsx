// Shared shell: Nav, Footer, Newsletter, Crumb, Marquee, Lightbox

const { useState, useEffect, useRef } = React;

function Nav({ page, go }) {
  const items = [
    ['home', 'Home'],
    ['tour', 'Journeys'],
    ['journal', 'Journal'],
    ['about', 'About'],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#" onClick={(e)=>{e.preventDefault(); go('home');}}>
          <span className="mark">Travel <span className="amp">&amp;</span> Kashmir</span>
          <span className="tag">est. Phuket · Leh</span>
        </a>
        <div className="nav-links">
          {items.map(([k, l]) => (
            <a key={k} href="#" className={page === k ? 'active' : ''} onClick={(e)=>{e.preventDefault(); go(k);}}>
              {l}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <span className="nav-meta">LEH · 11°C · CLEAR</span>
          <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>
            Plan a trip <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Crumb({ trail }) {
  return (
    <div className="wrap">
      <div className="crumb">
        {trail.map((t, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            {t.href ? <a href="#" onClick={(e)=>{e.preventDefault(); t.onClick?.();}}>{t.label}</a>
                    : <span className="here">{t.label}</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="kicker-banner">
      <div className="track">
        {loop.map((s, i) => (
          <React.Fragment key={i}>
            <span>{s}</span>
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Newsletter() {
  const [val, setVal] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="eyebrow"><span className="num">№ 04</span> Field Notes</div>
            <h2 className="display" style={{marginTop:18,marginBottom:18}}>A letter from the <em style={{fontStyle:'italic',color:'#f0b78a'}}>mountains</em>, twice a month.</h2>
            <div className="lede" style={{maxWidth:'52ch'}}>
              Honest dispatches from the road — quiet villages we love, when the passes open, the long-form journals we publish, and the occasional small trip we open up for travellers.
            </div>
          </div>
          <div>
            {!done ? (
              <form onSubmit={(e)=>{e.preventDefault(); if(val.includes('@')) setDone(true);}}>
                <input
                  type="email"
                  placeholder="your@inbox.com"
                  value={val}
                  onChange={(e)=>setVal(e.target.value)}
                  required
                />
                <button type="submit">Subscribe →</button>
              </form>
            ) : (
              <div>
                <div style={{borderBottom:'1px solid rgba(244,237,224,0.3)', paddingBottom:14}}>
                  <span className="display italic" style={{fontSize:22, color:'#f0b78a'}}>Welcome aboard.</span>
                </div>
                <div className="ok">Check your inbox to confirm — first dispatch on the 1st.</div>
              </div>
            )}
            <div className="small">No spam. Unsubscribe anywhere, anytime. ✦ 2,400 readers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="mark">Travel <span className="amp">&amp;</span> Kashmir</div>
            <p style={{marginTop:18, maxWidth:'30ch', color:'rgba(244,237,224,0.7)', fontSize:14, lineHeight:1.7}}>
              A small team of guides and writers running unhurried journeys across Ladakh, Kashmir Valley and Zanskar since 2017.
            </p>
            <div style={{marginTop:18, fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(244,237,224,0.5)'}}>
              Licence № 31/01092
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Six Nights in Ladakh</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Kashmir Valley · Spring</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Zanskar Frozen River</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Private Itineraries</a></li>
            </ul>
          </div>
          <div>
            <h5>Read</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>The Journal</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('post');}}>Field Notes</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>Guides</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>Packing Lists</a></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); go('about');}}>About</a></li>
              <li><a href="mailto:hello@travelkashmir.co">hello@travelkashmir.co</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Substack</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>© 2026 Travel &amp; Kashmir · A Leisure Corner studio</div>
          <div>Made slowly · Leh ✦ Phuket</div>
        </div>
      </div>
    </footer>
  );
}

function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, onNav]);
  if (index === null || index === undefined) return null;
  const img = images[index];
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={(e)=>{e.stopPropagation(); onClose();}}>✕</button>
      <button className="lb-nav prev" onClick={(e)=>{e.stopPropagation(); onNav(-1);}}>←</button>
      <button className="lb-nav next" onClick={(e)=>{e.stopPropagation(); onNav(1);}}>→</button>
      <img src={img.src} alt={img.cap} onClick={(e)=>e.stopPropagation()} />
      <div className="lb-cap">{img.cap} · {index+1} / {images.length}</div>
    </div>
  );
}

Object.assign(window, { Nav, Crumb, Marquee, Newsletter, Footer, Lightbox });
