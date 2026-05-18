// About page

function About({ go }) {
  return (
    <>
      <Crumb trail={[
        {label:'Home', href:true, onClick:()=>go('home')},
        {label:'About the studio'},
      ]} />
      <section className="about-hero wrap">
        <div className="eyebrow"><span className="num">§</span> The Studio · Est. 2017</div>
        <h1 className="display" style={{marginTop:24}}>Two people, three valleys,<br/>a <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>nine-year</em> habit of taking the slow road.</h1>
        <div className="lede" style={{marginTop:36, maxWidth:'58ch'}}>
          We are Sarah and Tashi. We started Travel &amp; Kashmir in a guesthouse in Leh in the summer of 2017, with no website and one very patient driver named Jigmet. Eleven itineraries and four staff later, we are still small on purpose.
        </div>
      </section>

      <div className="wrap">
        <hr className="rule" />

        <div className="about-grid">
          <img src="uploads/img-10.png" alt="Sarah, on a road outside Leh" />
          <div>
            <div className="eyebrow"><span className="num">01</span> The Studio</div>
            <h2 className="display" style={{marginTop:18}}>We make trips for<br/>about <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>140 people</em> a year.</h2>
            <div className="body" style={{marginTop:24}}>
              <p>Most agencies aim to move volume. We aim for the opposite. A small number of journeys, mostly private, mostly two-to-four travellers, all run by people who live in the region — and a few we run ourselves when the mood takes us.</p>
              <p>Our office is split between Phuket (where Sarah handles logistics, because Thailand is where the visas and the spreadsheets work) and Leh (where Tashi handles the ground, because Leh is where the mountains are). It is a strange arrangement that has, against the odds, kept working.</p>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <img src="uploads/img-23.png" alt="Tashi on a mountain road" />
          <div>
            <div className="eyebrow"><span className="num">02</span> The Idea</div>
            <h2 className="display" style={{marginTop:18}}>Less, but more <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>carefully.</em></h2>
            <div className="body" style={{marginTop:24}}>
              <p>We don't sell experiences. We make introductions. The herder you have butter tea with in Sham is someone Tashi went to school with. The cottage at Pangong belongs to a woman who used to run a roadside dhaba in Leh. The driver-guide who picks you up at the airport has driven you the previous six days and will not be replaced halfway through.</p>
              <p>The trips look planned on paper. They are not. They are a structure inside which the actual trip — yours, this time, with this weather, with these people — has room to happen.</p>
            </div>
          </div>
        </div>

        <hr className="rule" />
      </div>

      <section className="block">
        <div className="wrap">
          <div className="section-label">
            <span className="n">§ 03</span>
            <span className="t">How we work</span>
            <span className="meta">Three things we will not change</span>
          </div>
          <div className="values">
            <div className="v">
              <div className="n">№ 01</div>
              <h3 className="display">Local first, always.</h3>
              <p>Every guide on every trip is from the region they guide in. We don't bring drivers up from Delhi. We don't fly in Western "expedition leaders." When you eat dinner in someone's house, the house belongs to someone we have known for years.</p>
            </div>
            <div className="v">
              <div className="n">№ 02</div>
              <h3 className="display">Small numbers.</h3>
              <p>Maximum four travellers on any departure. One driver-guide per group. Two cars on a trip is the exception, not the rule. If you want a big group tour with thirty people on a coach, the website you want is not this one.</p>
            </div>
            <div className="v">
              <div className="n">№ 03</div>
              <h3 className="display">Honest pricing.</h3>
              <p>We publish what we charge. There is no haggling, no two-tier pricing for foreign passports, no kickbacks from monasteries or hotels. If a quote feels expensive, ask — there's a reason, and we'll tell you what it is.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block tight" style={{background:'var(--paper)'}}>
        <div className="wrap">
          <div className="intro-grid">
            <div>
              <div className="eyebrow"><span className="num">§ 04</span> Press &amp; Recognition</div>
              <h2 className="display" style={{marginTop:18}}>Some <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>kind words</em>, from kind people.</h2>
            </div>
            <div style={{display:'grid', gap:24}}>
              {[
                { quote: '"The trip didn\'t feel like a trip. It felt like staying with friends who happened to live in extraordinary places."', src: 'Condé Nast Traveller · 2024' },
                { quote: '"For travellers who want a Himalaya that doesn\'t feel curated to within an inch of its life."', src: 'Wallpaper* Travel Almanac · 2025' },
                { quote: '"We have never been more thoroughly looked after, or less spoken-down-to."', src: 'Alice & James · Edinburgh, repeat guests' },
              ].map((q, i) => (
                <div key={i} style={{paddingTop:24, borderTop:'1px solid var(--rule)'}}>
                  <div className="display italic" style={{fontStyle:'italic', fontSize:22, lineHeight:1.4, color:'var(--ink)'}}>{q.quote}</div>
                  <div className="caption" style={{marginTop:12}}>— {q.src}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{textAlign:'center'}}>
          <div className="eyebrow"><span className="num">§ 05</span> Get in touch</div>
          <h2 className="display" style={{marginTop:24, marginBottom:24, maxWidth:'22ch', margin:'24px auto 24px'}}>
            We answer every <em style={{fontStyle:'italic',color:'var(--terracotta)'}}>enquiry</em> within a working day.
          </h2>
          <div className="lede" style={{maxWidth:'52ch', margin:'0 auto 36px'}}>
            Write us a paragraph about what you have in mind — when, how long, what kind of pace — and we will write a paragraph back. No forms, no auto-replies.
          </div>
          <div style={{display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap'}}>
            <a className="btn" href="mailto:hello@travelkashmir.co">hello@travelkashmir.co</a>
            <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); go('tour');}}>See the journeys</a>
          </div>
          <div className="caption" style={{marginTop:32, color:'var(--ink-2)'}}>
            Phuket office · +66 81 970 6495 ✦ Leh office · +91 1982 250 077
          </div>
        </div>
      </section>
    </>
  );
}

window.About = About;
