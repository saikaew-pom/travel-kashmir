// Single journal post

function Post({ go }) {
  return (
    <>
      <header className="post-hero">
        <img src="uploads/img-19.png" alt="Turtuk valley" />
        <div className="scrim"></div>
        <div className="copy">
          <div className="wrap">
            <div className="eyebrow"><span className="num">№ 047</span> Field Notes · Nubra</div>
            <h1 className="display" style={{marginTop:24}}>On Turtuk: the village India only<br/>knew for <em style={{fontStyle:'italic', color:'#f0b78a'}}>forty years.</em></h1>
          </div>
        </div>
      </header>

      <div className="wrap-narrow">
        <div className="post-meta">
          <span>14 May 2026</span>
          <span>12 min read</span>
          <span>By <span className="author">Sarah Khanna</span></span>
          <span style={{marginLeft:'auto', color:'var(--terracotta)'}}>Field Notes</span>
        </div>

        <div className="post-body body">
          <p className="dropcap">The road to Turtuk is the kind of road you only believe halfway through. It leaves the Hunder sand dunes and runs west along the Shyok river, narrowing where the cliffs lean in, opening where the valley remembers it was once a river plain. Eighty kilometres takes the better part of three hours. By the last hour you stop checking the time. You stop checking, frankly, the road.</p>

          <p>Turtuk sits in a hairpin of the river at the foot of mountains that, if you walked far enough, would put you in Pakistan. Until 1971 it was Pakistan — a Balti village in the Baltistan region, one of four such villages annexed by India during the Indo-Pakistani war that year. Until 2009 it was closed to outsiders. So in a real sense the village has only been visited by the rest of India, let alone the rest of the world, for fifteen years.</p>

          <h2 className="display">A different country, by a few kilometres</h2>

          <p>You notice the moment you get out of the car. The faces are different. The language is Balti, not Ladakhi — the script is Arabic, not Tibetan. There are mosques where, two valleys back, there were stupas. The food is rich with apricot and walnut and dried mulberry. The houses are stacked-stone, two stories, with the cattle on the ground floor and the family above for warmth.</p>

          <figure>
            <img src="uploads/img-18.png" alt="Turtuk village" />
            <figcaption><span>Turtuk · the lower village, looking east</span><span>Photograph · Tashi Wangchuk</span></figcaption>
          </figure>

          <p>Yasin Khan, sixty-two, runs a small guesthouse near the polo ground. He was eight when the soldiers came, and he tells the story in three sentences. <em style={{fontStyle:'italic'}}>"They told us we were now Indians. We did not know what that meant. After a week, we still did not know."</em> What is now Turtuk, India, is across the line of control from his grandmother's village, which is Turtuk, Pakistan. They have not spoken in fifty-five years.</p>

          <div className="pullquote">
            "It was as if a country had been moved while we slept, and not the other way around."
          </div>

          <p>The village is not on display. There is no museum, no information board. There is a 16th-century mosque you can ask to see if you ask politely, and an old polo ground that turns into a cricket pitch in summer, and an orchard belonging to a man named Mohammed Imran who will sell you a kilo of apricots for very little money and refuse to be photographed.</p>

          <h2 className="display">Lunch with the Yul family</h2>

          <p>We eat in a house — not a restaurant, a house — belonging to a family we have visited every summer since 2019. The mother, Zaira, cooks <em style={{fontStyle:'italic'}}>balay</em>, a thick wheat noodle in a tomato and dried-apricot stock, and we sit on the floor cushions while her two daughters quiz us in extremely good English about Phuket. There is no menu. The bill comes to less than a coffee in Leh.</p>

          <p>After lunch Zaira's older daughter — fifteen, very serious — walks us up the lane to the orchard her grandfather planted in 1962, while it was still Pakistan. The trees are now sixty-four years old. The apricots are extraordinary. She tells us, very deliberately, that she would like to study in Srinagar one day, and to come back.</p>

          <figure>
            <img src="uploads/img-16.png" alt="A house in the valley" />
            <figcaption><span>One of the upper village houses, Turtuk</span><span>Photograph · Sarah K.</span></figcaption>
          </figure>

          <h2 className="display">If you go</h2>

          <p>Turtuk is a long day-trip from Hunder — three hours each way, leave by 8 a.m., back by 6 p.m. You can also stay a night, which we recommend if you have the time; the village empties of day visitors after four o'clock and the silence afterwards is its own argument. Carry cash; ATMs do not exist this far west. And please — don't photograph people without asking. The village is gentle about a great many things, but not about that.</p>

          <p>We will write about Turtuk again. There is too much here for one essay, and one of us has gotten quite attached to the family that feeds us.</p>

          <div className="signature">
            — Sarah
            <span className="author">Sarah Khanna · Co-founder</span>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', padding:'40px 0 80px', borderTop:'1px solid var(--rule)'}}>
          <a className="link-arrow" href="#" onClick={(e)=>{e.preventDefault(); go('journal');}}>← Back to the journal</a>
          <a className="link-arrow" href="#" onClick={(e)=>{e.preventDefault(); go('post');}}>Next: Diskit's giant Buddha →</a>
        </div>
      </div>

      <Newsletter />
    </>
  );
}

window.Post = Post;
