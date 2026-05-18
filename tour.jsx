// Tour detail — Six Nights in Ladakh

const TOUR_DAYS = [
  {
    n: '01',
    label: 'Day One',
    title: 'Arrival in Leh',
    where: 'Leh · 3,524 m',
    summary: 'Land at Kushok Bakula. Acclimatise. Sunset from Shanti Stupa over the old town.',
    distance: '0 km',
    altitude: '3,524 m',
    drive: '—',
    body: [
      'Your guide meets you at Kushok Bakula airport mid-morning. We drive straight to the hotel — twenty minutes through the old city — and ask you to do almost nothing for the rest of the day. The air at this altitude is roughly two-thirds the oxygen you breathe at sea level. The trick is patience.',
      'In the afternoon, once you have rested, we walk the lanes of the old town up to Leh Palace — a nine-storey palace built in 1630, modelled on the Potala in Lhasa. From there, a short drive takes us up to Shanti Stupa on Chanspa hill in time for sunset. Dinner at the hotel; an early night.',
    ],
    bullets: ['Leh Palace — c.1630', 'Shanti Stupa & sunset', 'Old Town walk', 'Stay: Kuzey Resort'],
    pic: 'uploads/img-25.png',
  },
  {
    n: '02',
    label: 'Day Two',
    title: 'Around Leh',
    where: 'Leh · Sangam Valley',
    summary: 'Spituk Gompa, Magnetic Hill curiosities, the confluence of Indus and Zanskar.',
    distance: '110 km',
    altitude: '3,200–3,500 m',
    drive: '3 h',
    body: [
      'A gentler second day to let the altitude settle. We start at Hall of Fame, the small army-run museum that holds the story of how Ladakh became Indian. Then west along the highway: Spituk Gompa on its hilltop, the optical illusion of Magnetic Hill where the road appears to flow uphill, and finally the Sangam — the meeting of the Indus and Zanskar rivers, two distinct colours of water that refuse to mix.',
      'We return to Leh in the late afternoon. Your guide will collect passports at the hotel tonight to apply for the Inner Line Permits we need for Nubra and Pangong tomorrow.',
    ],
    bullets: ['Hall of Fame', 'Spituk Gompa', 'Magnetic Hill', 'Indus–Zanskar Sangam', 'Permits processed'],
    pic: 'uploads/img-08.png',
  },
  {
    n: '03',
    label: 'Day Three',
    title: 'Over the Pass to Nubra',
    where: 'Khardung La · Nubra Valley',
    summary: 'The world\'s highest motorable pass; sand dunes and Bactrian camels by sunset.',
    distance: '160 km',
    altitude: '5,602 m',
    drive: '5 h',
    body: [
      'After breakfast we head north on what was for many years the highest road in the world: Khardung La, 5,602 m. The pass is usually under snow until June, sometimes longer. We stop briefly at the top for tea and photographs — but not too long; the air is thin enough that headaches arrive without warning.',
      'On the far side, the road drops into Nubra Valley. We arrive at Hunder in time for the late-afternoon light on the sand dunes — and the absurd, lovely sight of double-humped Bactrian camels grazing among them, descendants of the Silk Road caravans.',
    ],
    bullets: ['Khardung La pass', 'Diskit valley descent', 'Hunder sand dunes', 'Bactrian camel ride (optional)', 'Stay: Sha Cho Guesthouse'],
    pic: 'uploads/img-13.png',
  },
  {
    n: '04',
    label: 'Day Four',
    title: 'A Day in Turtuk',
    where: 'Turtuk · 2,900 m',
    summary: 'The last village in India, eighty kilometres from anywhere — and a different culture entirely.',
    distance: '160 km return',
    altitude: '2,900 m',
    drive: '3 h each way',
    body: [
      'Turtuk is the last Indian village before Pakistan. Until 1971 it belonged to Pakistan; until 2009 it was closed to outsiders. The people are Balti, the language and food and faces are different from anywhere else in Ladakh — and the orchards of apricots and walnuts feel like they were planted by another country, which in a real sense they were.',
      'We walk the village with a local guide, meet the headman, look at the old polo ground and a 16th-century mosque. Lunch is in a family home — buckwheat noodles, fresh apricot, mint tea. We return to Hunder by late afternoon, in time for a second night under the same stars.',
    ],
    bullets: ['Turtuk village walk', 'Royal house & old mosque', 'Lunch with a local family', 'Apricot orchards'],
    pic: 'uploads/img-19.png',
  },
  {
    n: '05',
    label: 'Day Five',
    title: 'Diskit Monastery & Pangong Lake',
    where: 'Diskit · Pangong Tso',
    summary: 'The Maitreya Buddha at Diskit; an afternoon arrival at the lake; a night under more stars than you have ever seen.',
    distance: '160 km',
    altitude: '4,250 m',
    drive: '6 h',
    body: [
      'A short drive in the morning to Diskit Monastery, 3,144 m, with its enormous 32-metre Maitreya Buddha staring out across the valley toward the border. Then a long, beautiful drive south-east via Shyok village to Pangong Tso — the lake on the Tibet border made famous, somewhat embarrassingly, by the closing scene of the Bollywood film 3 Idiots.',
      'Our cottages are a fifteen-minute walk from the water. Dinner is early. There is no real artificial light here, and the Milky Way appears almost without preamble.',
    ],
    bullets: ['Diskit Monastery', 'Shyok village stop', 'Pangong Tso arrival', 'Stargazing', 'Stay: Lakeside cottage'],
    pic: 'uploads/img-04.png',
  },
  {
    n: '06',
    label: 'Day Six',
    title: 'Back to Leh via Chang La',
    where: 'Chang La · Thiksey · Shey',
    summary: 'Third-highest road in the world, then the great monastery at Thiksey, then home.',
    distance: '160 km',
    altitude: '5,360 m',
    drive: '6 h',
    body: [
      'Back over the mountains, this time by Chang La — 5,360 m, third-highest motorable pass in the world. Yaks and ponies graze the high meadows on the way down. We re-enter the Indus Valley by late morning.',
      'Time permitting, we stop at Thiksey Monastery — twelve storeys built into a hillside, often compared to a smaller Potala — and the old summer palace at Shey with its enormous gilded Shakyamuni Buddha. We are back in Leh by dusk for a final dinner.',
    ],
    bullets: ['Chang La pass', 'Thiksey Monastery (Maitreya hall)', 'Shey Palace', 'Final dinner in Leh'],
    pic: 'uploads/img-07.png',
  },
  {
    n: '07',
    label: 'Day Seven',
    title: 'Departure',
    where: 'Leh Airport',
    summary: 'Early morning transfer to the airport. Coffee on the way. A long road ahead, by air.',
    distance: '8 km',
    altitude: '3,524 m',
    drive: '20 min',
    body: [
      'Most flights out of Leh leave very early — usually before 8 a.m. — because the wind picks up by mid-morning and the airport closes. We will be at the hotel an hour beforehand to drive you.',
      'If you want to extend — and many guests do — we are happy to add days in the Kashmir Valley, a few quiet nights in Sham, or a side trip to Hemis or Lamayuru. Just ask.',
    ],
    bullets: ['Hotel checkout', 'Airport transfer'],
    pic: 'uploads/img-21.png',
  },
];

function TourHero() {
  return (
    <header className="tour-hero">
      <img src="uploads/img-05.png" alt="The road to Pangong" />
      <div className="scrim"></div>
      <div className="copy">
        <div className="wrap" style={{padding:0}}>
          <div className="eyebrow"><span className="num">№ 01 / 11</span> Signature Journey · Ladakh</div>
          <h1 className="display" style={{marginTop:24}}>Six nights in <em>Ladakh</em>.</h1>
          <div className="meta-row">
            <div><div className="l">Duration</div><div className="v">6 nights, 7 days</div></div>
            <div><div className="l">Best months</div><div className="v">April – October</div></div>
            <div><div className="l">Group size</div><div className="v">1 – 4 travellers</div></div>
            <div><div className="l">From</div><div className="v">$485 / person</div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function TourIntro() {
  return (
    <section className="wrap">
      <div className="tour-intro">
        <div className="l">
          <div className="eyebrow"><span className="num">§</span> The Idea</div>
          <div style={{marginTop:18}}>
            <h2 className="display">A long, slow loop through <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>three landscapes.</em></h2>
          </div>
        </div>
        <div className="body">
          <p className="dropcap">There are itineraries that try to <em style={{fontStyle:'italic'}}>do</em> Ladakh in six nights and itineraries that try to <em style={{fontStyle:'italic'}}>understand</em> it. This is the second kind. You will spend two unhurried nights in Leh learning the town and acclimatising properly. You will cross two of the highest roads on earth. You will sleep two nights in a small guesthouse in Nubra and one night in a cottage by Pangong Lake.</p>
          <p>You will also do less than you think. We give you 5–6 hours of road on the long days and almost nothing on the slow ones. The point of the trip is the quiet that happens between things. Bring a book.</p>
          <p>Every journey is private — just you, your driver-guide, and the road. Inner Line permits, fuel, breakfasts and dinners are included; lunch we leave free because half the joy is choosing a place at random in a village you weren't expecting to like.</p>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [open, setOpen] = useState(0);
  return (
    <section className="timeline">
      <div className="wrap">
        <div className="section-label">
          <span className="n">§ 02</span>
          <span className="t">Day by Day</span>
          <span className="meta">7 days · 4 stays · 2 high passes</span>
        </div>
        {TOUR_DAYS.map((d, i) => (
          <div key={i} className={'day' + (open === i ? ' open' : '')} onClick={()=>setOpen(open === i ? -1 : i)}>
            <div className="num">{d.n}<small>{d.label}</small></div>
            <div className="title">
              <h3 className="display">{d.title}</h3>
              <div className="where">{d.where}</div>
            </div>
            <div className="summary">
              <p>{d.summary}</p>
            </div>
            <div className="chev">+</div>
            {open === i && (
              <div className="detail fade-in" onClick={(e)=>e.stopPropagation()}>
                <div className="stats">
                  <div>Distance<b>{d.distance}</b></div>
                  <div>Max altitude<b>{d.altitude}</b></div>
                  <div>Driving<b>{d.drive}</b></div>
                </div>
                {d.body.map((p, j) => <p key={j} dangerouslySetInnerHTML={{__html: p}} />)}
                <div className="pic"><img src={d.pic} alt={d.title} /></div>
                <ul>
                  {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="section-label">
          <span className="n">§ 03</span>
          <span className="t">What's Included</span>
          <span className="meta">All-inclusive on the road</span>
        </div>
        <div className="includes-grid">
          <div className="col">
            <h4 className="display">In the price</h4>
            <ul>
              <li>Six nights' accommodation — three-star hotels in Leh, family guesthouse in Nubra, cottage at Pangong</li>
              <li>Private vehicle with driver-guide for the full seven days</li>
              <li>All breakfasts and dinners at your accommodation</li>
              <li>Airport pickup and drop-off at Leh</li>
              <li>Inner Line Permits for Nubra Valley and Pangong Tso</li>
              <li>Travel insurance for the in-country portion</li>
              <li>Bottled water, oxygen on demand in the vehicle</li>
              <li>A Thailand-based support team coordinating end-to-end</li>
            </ul>
          </div>
          <div className="col">
            <h4 className="display">Not included</h4>
            <ul style={{listStyle:'none'}}>
              <li>International flights — we will help you find them, no markup</li>
              <li>Lunch ($4–8 / person — we always stop somewhere good)</li>
              <li>Monastery and museum entrance fees (~$1–6 / site)</li>
              <li>Optional activities: camel ride, ATV, zipline, rafting</li>
              <li>Tips for guides, drivers and house staff</li>
              <li>Anything personal — laundry, calls, that second bottle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: 'uploads/img-07.png', cap: 'Thiksey at sunset', cls: 'span3' },
  { src: 'uploads/img-04.png', cap: 'Pangong Tso · evening', cls: 'span3' },
  { src: 'uploads/img-13.png', cap: 'Bactrian camels, Hunder', cls: 'span2' },
  { src: 'uploads/img-01.png', cap: 'Khardung La road', cls: 'span2' },
  { src: 'uploads/img-19.png', cap: 'Nubra in autumn', cls: 'span2' },
  { src: 'uploads/img-22.png', cap: 'Frozen river, Zanskar', cls: 'span2' },
  { src: 'uploads/img-08.png', cap: 'A village on the Indus', cls: 'span2' },
  { src: 'uploads/img-02.png', cap: 'Lodge above Nubra', cls: 'span2' },
];

function Gallery() {
  const [lb, setLb] = useState(null);
  return (
    <section className="block tight" style={{background:'var(--paper)'}}>
      <div className="wrap-wide">
        <div className="wrap" style={{paddingLeft:0, paddingRight:0}}>
          <div className="section-label">
            <span className="n">§ 04</span>
            <span className="t">Field Photography</span>
            <span className="meta">Click to enlarge</span>
          </div>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <div key={i} className={'g ' + (g.cls || '')} onClick={()=>setLb(i)}>
              <img src={g.src} alt={g.cap} />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        images={GALLERY}
        index={lb}
        onClose={()=>setLb(null)}
        onNav={(d)=>setLb((lb + d + GALLERY.length) % GALLERY.length)}
      />
    </section>
  );
}

function TourCTA({ go }) {
  return (
    <section className="block" style={{background:'var(--ink)', color:'var(--cream)'}}>
      <div className="wrap" style={{textAlign:'center'}}>
        <div className="eyebrow" style={{color:'rgba(244,237,224,0.7)'}}><span className="num" style={{color:'#f0b78a'}}>§ 05</span> Next Step</div>
        <h2 className="display" style={{color:'var(--cream)', margin:'24px auto 24px', maxWidth:'18ch'}}>
          When were you thinking of <em style={{fontStyle:'italic', color:'#f0b78a'}}>coming?</em>
        </h2>
        <div className="lede" style={{color:'rgba(244,237,224,0.75)', maxWidth:'52ch', margin:'0 auto 40px'}}>
          We accept up to four travellers per departure. June and September are the most-asked months — book those eight weeks ahead. Other months, four is usually fine.
        </div>
        <div style={{display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap'}}>
          <a className="btn" style={{background:'var(--terracotta)'}} href="mailto:hello@travelkashmir.co">Send an enquiry →</a>
          <a className="btn ghost" style={{color:'var(--cream)', borderColor:'var(--cream)'}} href="#" onClick={(e)=>{e.preventDefault(); go('about');}}>About the studio</a>
        </div>
      </div>
    </section>
  );
}

function Tour({ go }) {
  return (
    <>
      <Crumb trail={[
        {label:'Home', href:true, onClick:()=>go('home')},
        {label:'Journeys', href:true, onClick:()=>go('home')},
        {label:'Six Nights in Ladakh'},
      ]} />
      <TourHero />
      <TourIntro />
      <Timeline />
      <Includes />
      <Gallery />
      <TourCTA go={go} />
    </>
  );
}

window.Tour = Tour;
