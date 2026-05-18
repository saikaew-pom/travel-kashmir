// Home page
const { useState: useStateH } = React;

function HomeHero({ variant, go }) {
  if (variant === 'stacked') {
    return (
      <div className="hero hero-stacked wrap">
        <div className="eyebrow" style={{marginBottom:32}}><span className="num">№ 01 / 04</span> Summer 2026 · Now Booking</div>
        <h1 className="display">A quieter way through the <em>high Himalaya</em>.</h1>
        <div className="lede">
          Small-group and private journeys across Ladakh, Kashmir Valley and Zanskar — written, scouted and led by people who live here. No coaches, no rushing, no checklist tourism.
        </div>
        <div style={{display:'flex',gap:18,justifyContent:'center'}}>
          <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>See the journeys <span className="arrow">→</span></a>
          <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>Read the journal</a>
        </div>
        <div className="hero-image">
          <img src="uploads/img-07.png" alt="Monastery at sunset above the Indus" />
          <div className="badge">Thiksey Monastery · golden hour</div>
        </div>
      </div>
    );
  }
  if (variant === 'split') {
    return (
      <div className="hero hero-split">
        <div className="left wrap" style={{maxWidth:'none'}}>
          <div>
            <div className="eyebrow" style={{marginBottom:48}}><span className="num">№ 01</span> Travel &amp; Kashmir · Est. 2017</div>
            <h1 className="display">Small journeys, <em className="italic" style={{fontStyle:'italic',color:'var(--terracotta)'}}>long memory.</em></h1>
            <div className="lede" style={{marginTop:36, maxWidth:'34ch'}}>
              We design slow, private journeys through Ladakh and the Kashmir Valley. Real homestays, mountain roads, the time it takes to actually look around.
            </div>
          </div>
          <div style={{display:'flex',gap:18,marginTop:48}}>
            <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Plan a trip <span className="arrow">→</span></a>
            <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); go('about');}}>Our story</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="uploads/img-07.png" alt="Monastery on the cliff at sunset" />
          <div className="badge">Thiksey Monastery · 3,600 m</div>
        </div>
      </div>
    );
  }
  // default editorial
  return (
    <div className="hero wrap">
      <div className="hero-meta">
        <div className="eyebrow"><span className="num">№ 01</span> Issue · Summer 2026</div>
        <div className="eyebrow" style={{textAlign:'right'}}>Ladakh ✦ Kashmir ✦ Zanskar</div>
      </div>
      <div className="hero-grid">
        <div className="hero-side">
          <h1 className="display hero-title">
            A quieter way<br/>through the<br/><em>high Himalaya.</em>
          </h1>
        </div>
        <div className="hero-side">
          <div className="lede">
            We design slow, private journeys across Ladakh, Kashmir Valley and Zanskar — scouted, written and led by people who live here. No buses. No rushing. Time enough to actually look.
          </div>
          <div style={{display:'flex',gap:18, flexWrap:'wrap'}}>
            <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>Plan a trip <span className="arrow">→</span></a>
            <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>Read the journal</a>
          </div>
        </div>
      </div>
      <div className="hero-bleed-wrap">
        <div className="hero-bleed">
          <img src="uploads/img-01.png" alt="Khardung La road" />
        </div>
        <div className="hero-bleed-cap">
          <span>Khardung La, 5,602 m · the road north to Nubra</span>
          <span>Photograph · Sarah K.</span>
        </div>
      </div>
    </div>
  );
}

const TOURS = [
  {
    img: 'uploads/img-04.png',
    region: 'Ladakh',
    days: '6 nights',
    title: 'Six Nights in Ladakh',
    blurb: 'Leh, Nubra dunes, Pangong Lake — our oldest, most-loved journey. Private vehicle, three monasteries, one cottage on the lake.',
    price: 'From $485 / person',
    months: 'Apr – Oct',
  },
  {
    img: 'uploads/img-06.png',
    region: 'Kashmir Valley',
    days: '5 nights',
    title: 'Tulip Season in Srinagar',
    blurb: 'Shikara mornings on Dal Lake, the tulip gardens at peak, a walnut-wood houseboat, a day at Gulmarg meadows.',
    price: 'From $435 / person',
    months: 'Apr – May',
  },
  {
    img: 'uploads/img-22.png',
    region: 'Zanskar',
    days: '8 nights',
    title: 'Chadar · Frozen River',
    blurb: 'Walk the iced Zanskar river to remote villages. Cold, demanding, unforgettable. Limited to four travellers per departure.',
    price: 'From $725 / person',
    months: 'Jan – Feb',
  },
];

function FeaturedTours({ go }) {
  return (
    <section className="block">
      <div className="wrap">
        <div className="section-label">
          <span className="n">№ 02</span>
          <span className="t">The Journeys</span>
          <span className="meta">3 of 11 itineraries</span>
        </div>
        <div className="intro-grid" style={{marginBottom:64}}>
          <h2 className="display">Where we<br/><em style={{fontStyle:'italic',color:'var(--terracotta)'}}>travel slowly.</em></h2>
          <div className="body">
            <p>Eleven itineraries across three regions, each scouted and refined over multiple seasons. Pick one and we'll tailor it; or write us with what you have in mind and we'll build the journey from scratch.</p>
          </div>
        </div>
        <div className="tour-grid">
          {TOURS.map((t, i) => (
            <a key={i} className="tour-card" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>
              <div className="img">
                <img src={t.img} alt={t.title} />
                <div className="pill">{t.region}</div>
              </div>
              <div className="meta-row">
                <span>{t.days}</span>
                <span>{t.months}</span>
              </div>
              <h3 className="display">{t.title}</h3>
              <p>{t.blurb}</p>
              <div className="price">{t.price}</div>
            </a>
          ))}
        </div>
        <div style={{marginTop:48, display:'flex', justifyContent:'flex-end'}}>
          <a className="link-arrow" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>See all eleven journeys →</a>
        </div>
      </div>
    </section>
  );
}

function StoryStrip() {
  return (
    <section className="block tight" style={{background:'var(--paper)'}}>
      <div className="wrap">
        <div className="intro-grid">
          <div>
            <div className="eyebrow" style={{marginBottom:32}}><span className="num">№ 03</span> The Studio</div>
            <h2 className="display">We don't sell <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>"experiences."</em> We make the introductions.</h2>
          </div>
          <div className="body">
            <p>The first time I drove the road from Leh to Pangong it took eight hours. Now it takes five. The road is better, sure — but we still take eight, because the road is the trip. You stop where the light is. You sit with a yak herder for an hour over butter tea. You realise the lake doesn't actually need you to "see" it; it does the seeing.</p>
            <p>That's the philosophy. Our guides are from these valleys. The houses we stay in belong to people we know. There's an enquiry form somewhere on this site — read it as <em style={{fontStyle:'italic'}}>"start a conversation."</em></p>
            <div className="signature">
              — Sarah &amp; Tashi
              <span className="author">Founders · Travel &amp; Kashmir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const JOURNAL_PREVIEW = [
  {
    img: 'uploads/img-19.png',
    tag: 'Field Notes',
    date: '14 May 2026',
    title: 'On Turtuk: the village India only knew for forty years',
    blurb: 'A walk through the apricot orchards of the last village before Pakistan — closed to outsiders until 2009, and still tender about it.',
  },
  {
    img: 'uploads/img-13.png',
    tag: 'Guide',
    date: '02 May 2026',
    title: 'When to go to Ladakh, by altitude and intent',
    blurb: 'A month-by-month guide to the high passes, the lake openings, and what you can actually see in shoulder season.',
  },
  {
    img: 'uploads/img-02.png',
    tag: 'Stays',
    date: '28 Apr 2026',
    title: 'Six places we send guests, and one we still keep to ourselves',
    blurb: 'A rambling, partial list of the homestays, cottages and one absurd luxury lodge we have come to love.',
  },
];

function JournalTeaser({ go }) {
  return (
    <section className="block">
      <div className="wrap">
        <div className="section-label">
          <span className="n">№ 03</span>
          <span className="t">The Journal</span>
          <span className="meta">Updated weekly</span>
        </div>
        <div className="intro-grid" style={{marginBottom:64}}>
          <h2 className="display">Long-form notes,<br/>scouted on the <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>road.</em></h2>
          <div className="body">
            <p>Essays and guides we write between trips — partly so we remember, partly so you can plan better. Roughly two a week, free, no popups.</p>
          </div>
        </div>
        <div className="journal-row">
          {JOURNAL_PREVIEW.map((p, i) => (
            <a key={i} className={'journal-card' + (i === 0 ? ' feat' : '')} href="#" onClick={(e)=>{e.preventDefault(); go('post');}}>
              <div className="img"><img src={p.img} alt={p.title} /></div>
              <div className="tag-row">
                <span className="tag">{p.tag}</span>
                <span className="date">{p.date}</span>
              </div>
              <h3 className="display">{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="link-arrow" style={{alignSelf:'flex-start', marginTop:8, fontSize:11}}>Read on →</div>
            </a>
          ))}
        </div>
        <div style={{marginTop:56, display:'flex', justifyContent:'flex-end'}}>
          <a className="link-arrow" href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>The whole journal →</a>
        </div>
      </div>
    </section>
  );
}

function Home({ go, tweaks }) {
  return (
    <>
      <HomeHero variant={tweaks.heroVariant} go={go} />
      <Marquee items={['Leh', 'Nubra Valley', 'Pangong Tso', 'Turtuk', 'Zanskar', 'Sham Valley', 'Hemis', 'Lamayuru', 'Srinagar', 'Gulmarg', 'Pahalgam']} />
      <FeaturedTours go={go} />
      <StoryStrip />
      <JournalTeaser go={go} />
      <Newsletter />
    </>
  );
}

window.Home = Home;
