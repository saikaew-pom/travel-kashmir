// Root app — routing + tweaks panel

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "typePairing": "a",
  "heroVariant": "editorial"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = useState('home');
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-type', tweaks.typePairing || 'a');
  }, [tweaks.typePairing]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const go = (p) => setPage(p);

  return (
    <div data-screen-label={page}>
      <Nav page={page} go={go} />
      {page === 'home' && <Home go={go} tweaks={tweaks} />}
      {page === 'tour' && <Tour go={go} />}
      {page === 'journal' && <Journal go={go} />}
      {page === 'post' && <Post go={go} />}
      {page === 'about' && <About go={go} />}
      <Footer go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Typography">
          <TweakRadio
            label="Type pairing"
            value={tweaks.typePairing}
            onChange={(v)=>setTweak('typePairing', v)}
            options={[
              {value:'a', label:'Newsreader'},
              {value:'b', label:'Cormorant'},
              {value:'c', label:'Playfair'},
            ]}
          />
        </TweakSection>
        <TweakSection label="Home hero layout">
          <TweakRadio
            label="Variant"
            value={tweaks.heroVariant}
            onChange={(v)=>setTweak('heroVariant', v)}
            options={[
              {value:'editorial', label:'Editorial'},
              {value:'stacked', label:'Stacked'},
              {value:'split', label:'Split'},
            ]}
          />
          <div style={{fontSize:11, color:'#888', marginTop:8, lineHeight:1.5}}>
            Hero variants apply to the homepage. Switch to Home from the nav.
          </div>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
