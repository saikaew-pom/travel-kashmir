// Journal index

const JOURNAL_POSTS = [
  {
    img: 'uploads/img-19.png',
    tag: 'Field Notes',
    region: 'Nubra',
    date: '14 May 2026',
    title: 'On Turtuk: the village India only knew for forty years',
    blurb: 'A walk through the apricot orchards of the last village before Pakistan — closed to outsiders until 2009, and still tender about it.',
    read: '12 min',
  },
  {
    img: 'uploads/img-13.png',
    tag: 'Guide',
    region: 'Ladakh',
    date: '02 May 2026',
    title: 'When to go to Ladakh, by altitude and intent',
    blurb: 'A month-by-month guide to the high passes, the lake openings, and what you can actually see in shoulder season.',
    read: '8 min',
  },
  {
    img: 'uploads/img-02.png',
    tag: 'Stays',
    region: 'Ladakh',
    date: '28 Apr 2026',
    title: 'Six places we send guests, and one we still keep to ourselves',
    blurb: 'A rambling, partial list of the homestays, cottages and one absurd luxury lodge we have come to love.',
    read: '10 min',
  },
  {
    img: 'uploads/img-07.png',
    tag: 'Essay',
    region: 'Ladakh',
    date: '19 Apr 2026',
    title: 'Why Thiksey is the monastery to visit first',
    blurb: 'Hemis is grander and Lamayuru older, but Thiksey is the one we keep returning to. A short defence of the obvious choice.',
    read: '6 min',
  },
  {
    img: 'uploads/img-04.png',
    tag: 'Field Notes',
    region: 'Pangong',
    date: '08 Apr 2026',
    title: 'Pangong Lake, before the season',
    blurb: 'A March visit, before the road properly opens. Ice still on the western shore; nobody else for miles.',
    read: '14 min',
  },
  {
    img: 'uploads/img-22.png',
    tag: 'Essay',
    region: 'Zanskar',
    date: '29 Mar 2026',
    title: 'A week on the frozen Zanskar',
    blurb: 'The Chadar trek, told honestly: how cold it really gets, how hard it really is, and why we still walk it.',
    read: '18 min',
  },
  {
    img: 'uploads/img-06.png',
    tag: 'Guide',
    region: 'Kashmir',
    date: '20 Mar 2026',
    title: 'A first-timer\'s week in the Kashmir Valley',
    blurb: 'Where to stay on Dal Lake, when to drive up to Gulmarg, what to skip, where the tulips actually peak.',
    read: '11 min',
  },
  {
    img: 'uploads/img-08.png',
    tag: 'Packing',
    region: 'All regions',
    date: '12 Mar 2026',
    title: 'What to pack for high-altitude Ladakh',
    blurb: 'A short, opinionated kit list — what we carry ourselves, what we have learned the hard way, what we now leave at home.',
    read: '7 min',
  },
];

function Journal({ go }) {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Field Notes', 'Essay', 'Guide', 'Stays', 'Packing'];
  const filtered = filter === 'All' ? JOURNAL_POSTS : JOURNAL_POSTS.filter(p => p.tag === filter);
  const [feat, ...rest] = filtered.length ? filtered : [JOURNAL_POSTS[0]];

  return (
    <>
      <Crumb trail={[
        {label:'Home', href:true, onClick:()=>go('home')},
        {label:'The Journal'},
      ]} />
      <section className="journal-header">
        <div className="wrap">
          <div className="eyebrow"><span className="num">№ 03</span> The Journal · 2017—present</div>
          <h1 className="display" style={{marginTop:24}}>Long-form notes,<br/>scouted on the <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>road.</em></h1>
          <div className="lede">
            Essays, guides and quiet observations from across the Himalaya, written between trips. New ones go out roughly every Friday. Free, no popups, no affiliate links.
          </div>
          <div className="filter-row">
            {tags.map(t => (
              <button key={t} className={'chip' + (filter === t ? ' on' : '')} onClick={()=>setFilter(t)}>
                {t}
              </button>
            ))}
            <div style={{marginLeft:'auto', fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.06em', color:'var(--ink-2)', alignSelf:'center'}}>
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </div>
          </div>
        </div>
      </section>

      {filtered.length > 0 && (
        <section className="wrap">
          <div className="featured-post" onClick={()=>go('post')}>
            <div className="img"><img src={feat.img} alt={feat.title} /></div>
            <div>
              <div className="tag-row">
                <span className="tag" style={{fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--terracotta)'}}>{feat.tag} · {feat.region}</span>
                <span className="date" style={{fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.06em', color:'var(--ink-2)', marginLeft:14}}>{feat.date}</span>
              </div>
              <h2 className="display">{feat.title}</h2>
              <div className="lede">{feat.blurb}</div>
              <a className="link-arrow" href="#" onClick={(e)=>{e.preventDefault(); go('post');}}>Read · {feat.read} →</a>
            </div>
          </div>
        </section>
      )}

      <section className="wrap">
        <div className="section-label">
          <span className="n">{filter}</span>
          <span className="t">All Entries</span>
          <span className="meta">Reverse chronological</span>
        </div>
        <div className="post-grid">
          {rest.map((p, i) => (
            <a key={i} className="journal-card" href="#" onClick={(e)=>{e.preventDefault(); go('post');}}>
              <div className="img"><img src={p.img} alt={p.title} /></div>
              <div className="tag-row">
                <span className="tag">{p.tag} · {p.region}</span>
                <span className="date">{p.date}</span>
              </div>
              <h3 className="display">{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="caption" style={{marginTop:'auto', paddingTop:8}}>{p.read} read</div>
            </a>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}

window.Journal = Journal;
