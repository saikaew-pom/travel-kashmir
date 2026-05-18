// ───────────────────────────────────────────────────────────────────
// Thai translations + runtime DOM translator
// ───────────────────────────────────────────────────────────────────
// Approach: a flat English → Thai dictionary, plus a tiny translator that
// walks the rendered DOM after mount and on every mutation, swapping
// text-node values and select attributes. Each node remembers its original
// English so toggling back is lossless. Re-renders by React don't break
// it — the MutationObserver re-runs the walker, and write-if-different
// prevents infinite loops.

(function () {
  const TR_EN_TH = {
    // ── Top bar ──
    "Travel": "Travel",
    "Kashmir": "Kashmir",
    "est. Phuket · Leh": "ก่อตั้งที่ ภูเก็ต · เลห์",
    "From": "เริ่มต้น",
    "Book on WhatsApp →": "จองผ่าน WhatsApp →",

    // ── Hero ──
    "Summer 2026 · 11 dates open": "ฤดูร้อน 2026 · เปิดจอง 11 รอบ",
    "· 142 travellers": "· นักเดินทาง 142 ท่าน",
    "Private departures · max 4": "ทริปส่วนตัว · สูงสุด 4 ท่าน",
    "Six nights in": "หกคืนใน",
    "Ladakh.": "ลาดักห์",
    "A signature journey.": "ทริปซิกเนเจอร์ของเรา",
    "Two of the world's highest motorable passes. The Indus Valley by morning, Pangong Tso by dusk. A private driver-guide who lives here, eats with you, and knows every village we pass through. From $485 per person.":
      "ผ่านสองในเส้นทางถนนที่สูงที่สุดในโลก ตื่นเช้าที่หุบเขาสินธุ ค่ำที่ทะเลสาบแพงกอน ไกด์-คนขับส่วนตัวที่อาศัยอยู่ที่นี่ ทานข้าวกับคุณ และรู้จักทุกหมู่บ้านที่เราผ่าน เริ่มต้น $485 ต่อท่าน",
    "Book on WhatsApp": "จองผ่าน WhatsApp",
    "→": "→",
    "See the itinerary": "ดูโปรแกรมทัวร์",
    "Reply within the hour, Mon–Sat · +66 081 970 6495":
      "ตอบกลับภายใน 1 ชั่วโมง จันทร์–เสาร์ · +66 081 970 6495",

    // Hero stats
    "Duration": "ระยะเวลา",
    "6 nights, 7 days": "6 คืน 7 วัน",
    "Group size": "ขนาดกรุ๊ป",
    "1 – 4 travellers": "1 – 4 ท่าน",
    "High point": "จุดสูงสุด",
    "Khardung La · 5,602 m": "คาร์ดุงลา · 5,602 ม.",
    "Best months": "เดือนที่ดีที่สุด",
    "April – October": "เมษายน – ตุลาคม",

    // ── Promise (§ 01) ──
    "Why this trip": "ทำไมต้องทริปนี้",
    "The way Ladakh": "ลาดักห์",
    "was meant to be": "ในแบบที่",
    "seen.": "ควรได้สัมผัส",
    "We've been running this exact loop since 2017. It is our most-asked-for itinerary because the pacing works: enough altitude to feel the place, enough rest to actually enjoy it.":
      "เราจัดเส้นทางนี้มาตั้งแต่ปี 2017 เป็นโปรแกรมที่ลูกค้าถามถึงมากที่สุด เพราะจังหวะการเดินทางลงตัว — ขึ้นที่สูงพอจะรู้สึกถึงเสน่ห์ของที่นี่ แต่พักผ่อนพอจะสนุกกับมันจริง ๆ",
    "Private from start to end": "ทริปส่วนตัวตั้งแต่ต้นจนจบ",
    "Just you, your travelling party, and one local driver-guide. No shared vehicles, no fixed dates, no other groups in the way.":
      "มีเพียงคุณ คณะของคุณ และไกด์-คนขับท้องถิ่นคนเดียว ไม่มีรถร่วม ไม่มีวันออกตายตัว ไม่มีกรุ๊ปอื่นมาขัดจังหวะ",
    "Permits & logistics handled": "เอกสาร & การเดินทาง เราจัดให้",
    "Inner Line permits for Nubra and Pangong, oxygen in the vehicle, breakfast and dinner every day. You bring the camera.":
      "ใบอนุญาต Inner Line เข้านูบร้าและแพงกอน ถังออกซิเจนประจำรถ อาหารเช้าและเย็นทุกวัน คุณแค่หยิบกล้องมา",
    "Real homestays, real food": "ที่พักของจริง อาหารของจริง",
    "A cottage by the lake. A family guesthouse in Hunder. Buckwheat noodles in Turtuk made by someone we have known for years.":
      "กระท่อมริมทะเลสาบ เกสต์เฮาส์ครอบครัวที่ฮันเดอร์ ก๋วยเตี๋ยวบักวีตที่ทูร์ทุก ปรุงโดยคนที่เรารู้จักมาหลายปี",
    "Local guides, every leg": "ไกด์ท้องถิ่นทุกช่วง",
    "Every driver-guide is from Ladakh. The school you pass in Diskit is the school they went to. The herder you meet is their cousin.":
      "ไกด์-คนขับทุกคนเป็นชาวลาดักห์ โรงเรียนที่คุณผ่านในดิสกิตคือโรงเรียนที่เขาเรียน คนเลี้ยงสัตว์ที่คุณเจออาจเป็นญาติของเขา",

    // ── Gallery (§ 02) ──
    "Field photography": "ภาพถ่ายจากสนามจริง",
    "56 photographs.": "56 ภาพถ่าย",
    "One": "หนึ่งสัปดาห์ที่",
    "extraordinary": "ไม่ธรรมดา",
    "week.": "",
    "Every image was shot on a past departure by our guests and guides. The light in Ladakh does most of the work — we just have to show up. Use the arrows, scroll the filmstrip, or hit play.":
      "ภาพทุกใบถ่ายโดยลูกค้าและไกด์ของเราจากทริปที่ผ่านมา แสงในลาดักห์ทำหน้าที่ส่วนใหญ่อยู่แล้ว — เราแค่ไปอยู่ตรงนั้น ใช้ลูกศร เลื่อนฟิล์ม หรือกดเล่นได้",
    "Travel & Kashmir · Field Library": "Travel & Kashmir · คลังภาพภาคสนาม",
    "↗ View full": "↗ ดูเต็มจอ",
    "❚❚ Pause": "❚❚ หยุด",
    "▶ Play": "▶ เล่น",
    "Esc to close · ← → to navigate": "กด Esc เพื่อปิด · ← → เพื่อเลื่อน",

    // ── Itinerary strip (§ 03) ──
    "The itinerary": "โปรแกรมทัวร์",
    "Seven days,": "เจ็ดวัน",
    "three": "สาม",
    "landscapes.": "ภูมิประเทศ",
    "The bones of the trip. Every day is private, every drive is in a 4×4 with one driver-guide who stays with you the whole week.":
      "โครงร่างของทริป ทุกวันเป็นส่วนตัว ทุกการเดินทางใช้รถ 4×4 พร้อมไกด์-คนขับที่อยู่กับคุณตลอดสัปดาห์",
    "Day One": "วันที่ 1",
    "Day Two": "วันที่ 2",
    "Day Three": "วันที่ 3",
    "Day Four": "วันที่ 4",
    "Day Five": "วันที่ 5",
    "Day Six": "วันที่ 6",
    "Day Seven": "วันที่ 7",
    "Arrive Leh — acclimatise": "ถึงเลห์ — ปรับตัวกับความสูง",
    "Around Leh & the Sangam": "รอบเมืองเลห์ & สังกัม",
    "Over Khardung La to Nubra": "ข้ามคาร์ดุงลาสู่นูบร้า",
    "A day in Turtuk village": "หนึ่งวันที่หมู่บ้านทูร์ทุก",
    "Diskit & Pangong Lake": "ดิสกิต & ทะเลสาบแพงกอน",
    "Chang La · Thiksey · Leh": "ฌางลา · ทิคเซ่ · เลห์",
    "Departure": "เดินทางกลับ",
    "Altitude": "ความสูง",
    "Read the day-by-day in full ↓": "อ่านโปรแกรมรายวันแบบเต็ม ↓",

    // ── Full itinerary (§ 04) ──
    "Day by day, in detail": "โปรแกรมรายวัน แบบละเอียด",
    "Every morning,": "ทุกเช้า",
    "every road, every": "ทุกเส้นทาง ทุก",
    "stay.": "ที่พัก",
    "What the seven days actually look like on the ground — what time we start, what altitude you'll sleep at, what you'll see, eat and walk through. The trip we'd describe over coffee if you asked.":
      "เจ็ดวันบนพื้นจริงเป็นอย่างไร — เริ่มออกกี่โมง นอนที่ระดับความสูงเท่าไร เห็นอะไร กินอะไร เดินผ่านอะไร เหมือนเราเล่าให้คุณฟังตอนนั่งจิบกาแฟกัน",
    "Distance": "ระยะทาง",
    "Max altitude": "ความสูงสูงสุด",
    "Driving": "เวลาขับ",
    "Highlights": "ไฮไลต์",
    "Stay": "ที่พัก",

    // Day 01
    "Day 01": "วันที่ 01",
    "Leh": "เลห์",
    "3,524 m": "3,524 ม.",
    "0 km": "0 กม.",
    "—": "—",
    "Arrival in Leh — and the slowest possible day": "ถึงเลห์ — กับวันที่ช้าที่สุดเท่าที่จะเป็นไปได้",
    "Your driver-guide meets you at Kushok Bakula airport mid-morning. We drive twenty minutes through the old city and ask you to do almost nothing for the rest of the day. The air here is two-thirds the oxygen at sea level — the trick is patience.":
      "ไกด์-คนขับของคุณจะมารับที่สนามบินกุชอก บาคุลา ช่วงสาย เราขับรถยี่สิบนาทีผ่านเมืองเก่าและขอให้คุณแทบไม่ทำอะไรในวันที่เหลือ อากาศที่นี่มีออกซิเจนเพียงสองในสามของระดับน้ำทะเล — เคล็ดลับคือความอดทน",
    "Late afternoon, once you've rested, a walk through the old town up to Leh Palace, then up Chanspa hill to Shanti Stupa in time for sunset. Dinner at the hotel, an early night.":
      "ช่วงเย็น เมื่อพักพอแล้ว เดินผ่านเมืองเก่าขึ้นไปยังพระราชวังเลห์ จากนั้นขึ้นเนินชานสปาไปสันติสถูปก่อนพระอาทิตย์ตก กลับมาทานข้าวที่โรงแรม นอนแต่หัวค่ำ",
    "Leh Palace (c.1630)": "พระราชวังเลห์ (ราว ค.ศ. 1630)",
    "Shanti Stupa sunset": "พระอาทิตย์ตกที่สันติสถูป",
    "Old Town walk": "เดินเล่นเมืองเก่า",
    "Welcome dinner": "ดินเนอร์ต้อนรับ",
    "Kuzey Resort · 3★": "Kuzey Resort · 3★",

    // Day 02
    "Day 02": "วันที่ 02",
    "Sangam Valley": "หุบเขาสังกัม",
    "3,200 m": "3,200 ม.",
    "3,500 m": "3,500 ม.",
    "110 km": "110 กม.",
    "3 h": "3 ชม.",
    "Around Leh — monasteries, museums, the meeting of two rivers":
      "รอบเมืองเลห์ — วัด พิพิธภัณฑ์ และจุดบรรจบของแม่น้ำสองสาย",
    "A gentler second day to let the altitude settle. We start at the small army-run Hall of Fame, where the story of how Ladakh became Indian is told without varnish. Then west along the highway: Spituk Gompa on its hilltop, the optical illusion of Magnetic Hill, and finally the Sangam — the confluence of the Indus and Zanskar rivers, where two distinct colours of water refuse to mix.":
      "วันที่สองค่อยเป็นค่อยไป ให้ร่างกายปรับกับความสูง เริ่มที่ Hall of Fame พิพิธภัณฑ์เล็ก ๆ ที่ดูแลโดยกองทัพ เล่าเรื่องราวว่าลาดักห์มาเป็นของอินเดียได้อย่างไรอย่างตรงไปตรงมา จากนั้นไปทางตะวันตกตามทางหลวง: วัดสปิตุกบนยอดเขา ภาพลวงตาที่เนินแม่เหล็ก และสุดท้ายที่สังกัม — จุดบรรจบของแม่น้ำสินธุและแม่น้ำซันสการ์ ที่น้ำสองสีไม่ยอมผสมกัน",
    "We return to Leh in the late afternoon. Your guide collects passports at the hotel tonight to apply for the Inner Line Permits we need tomorrow for Nubra and Pangong.":
      "เรากลับเลห์ช่วงเย็น ไกด์จะรับพาสปอร์ตของคุณที่โรงแรมคืนนี้เพื่อยื่นเรื่องขอใบอนุญาต Inner Line ที่ใช้พรุ่งนี้สำหรับนูบร้าและแพงกอน",
    "Hall of Fame museum": "พิพิธภัณฑ์ Hall of Fame",
    "Spituk Gompa": "วัดสปิตุก",
    "Magnetic Hill": "เนินแม่เหล็ก",
    "Indus–Zanskar Sangam": "สังกัม สินธุ–ซันสการ์",
    "Permits processed": "จัดทำใบอนุญาต",

    // Day 03
    "Day 03": "วันที่ 03",
    "Khardung La · Hunder": "คาร์ดุงลา · ฮันเดอร์",
    "5,602 m": "5,602 ม.",
    "160 km": "160 กม.",
    "5 h": "5 ชม.",
    "Over Khardung La to Nubra Valley": "ข้ามคาร์ดุงลาสู่หุบเขานูบร้า",
    "After breakfast we head north on what was, for many years, the highest motorable road in the world: Khardung La, 5,602 m. The pass is usually snowed in until June, sometimes longer. We stop briefly at the top for tea — not too long; the air is thin enough that headaches arrive without warning.":
      "หลังอาหารเช้า เรามุ่งหน้าขึ้นเหนือบนเส้นทางที่เคยเป็นถนนสูงที่สุดในโลกอยู่หลายปี: คาร์ดุงลา 5,602 ม. ช่องเขามักปกคลุมด้วยหิมะถึงเดือนมิถุนายน บางครั้งนานกว่า เราแวะสั้น ๆ บนยอดเพื่อจิบชา — ไม่นานนัก เพราะอากาศบางพอที่จะปวดหัวได้โดยไม่รู้ตัว",
    "On the far side, the road drops into Nubra. We arrive at Hunder in time for the late-afternoon light on the sand dunes — and the absurd, lovely sight of double-humped Bactrian camels grazing among them, descendants of Silk Road caravans.":
      "อีกฟากหนึ่ง ถนนลาดลงสู่นูบร้า เราถึงฮันเดอร์ทันแสงเย็นที่ตกบนเนินทราย — และภาพอูฐสองโหนกพันธุ์แบ็คเทรียนกินหญ้าอยู่ ทายาทของกองคาราวานเส้นทางสายไหม",
    "Khardung La summit": "ยอดคาร์ดุงลา",
    "Diskit valley descent": "ลงสู่หุบเขาดิสกิต",
    "Hunder sand dunes": "เนินทรายฮันเดอร์",
    "Bactrian camels (optional ride)": "อูฐสองโหนก (เลือกขี่ได้)",
    "Sha Cho Guesthouse · family-run": "Sha Cho Guesthouse · บริหารโดยครอบครัว",

    // Day 04
    "Day 04": "วันที่ 04",
    "Turtuk": "ทูร์ทุก",
    "2,900 m": "2,900 ม.",
    "160 km return": "ไป-กลับ 160 กม.",
    "3 h each way": "3 ชม. ต่อเที่ยว",
    "A day in Turtuk — the village India only knew for forty years":
      "หนึ่งวันที่ทูร์ทุก — หมู่บ้านที่อินเดียเพิ่งรู้จักได้เพียงสี่สิบปี",
    "Turtuk is the last Indian village before Pakistan — Balti, not Ladakhi, with its own language, food and faces. Until 1971 it was Pakistani; until 2009 it was closed to outsiders. The orchards of apricot and walnut feel planted by another country, which in a real sense they were.":
      "ทูร์ทุกเป็นหมู่บ้านอินเดียสุดท้ายก่อนถึงปากีสถาน — เป็นชาวบัลติ ไม่ใช่ลาดักห์ มีภาษา อาหาร และใบหน้าเป็นของตัวเอง จนถึงปี 1971 เคยเป็นของปากีสถาน จนถึงปี 2009 ปิดสำหรับคนนอก สวนแอปริคอตและวอลนัทดูเหมือนปลูกโดยอีกประเทศหนึ่ง ซึ่งในความจริงก็เป็นอย่างนั้น",
    "We walk the village with a local guide, meet the headman, see the old polo ground and a 16th-century mosque. Lunch is in a family home — buckwheat noodles, fresh apricot, mint tea — and we are back in Hunder by late afternoon for a second night under the same stars.":
      "เราเดินสำรวจหมู่บ้านกับไกด์ท้องถิ่น พบกับผู้ใหญ่บ้าน ชมสนามโปโลเก่าและมัสยิดสมัยศตวรรษที่ 16 อาหารกลางวันที่บ้านครอบครัวหนึ่ง — ก๋วยเตี๋ยวบักวีต แอปริคอตสด ชามินต์ — และกลับฮันเดอร์ช่วงเย็นเพื่อนอนใต้ดาวเดียวกันอีกคืน",
    "Village walk with a local": "เดินหมู่บ้านกับคนท้องถิ่น",
    "Royal house & old mosque": "บ้านราชวงศ์เก่า & มัสยิดโบราณ",
    "Lunch with a Balti family": "อาหารกลางวันกับครอบครัวบัลติ",
    "Apricot orchards": "สวนแอปริคอต",
    "Old polo ground": "สนามโปโลเก่า",

    // Day 05
    "Day 05": "วันที่ 05",
    "Diskit · Pangong Tso": "ดิสกิต · ทะเลสาบแพงกอน",
    "4,250 m": "4,250 ม.",
    "6 h": "6 ชม.",
    "Diskit Monastery, then Pangong Lake by dusk": "วัดดิสกิต แล้วต่อด้วยทะเลสาบแพงกอนยามค่ำ",
    "A short morning drive to Diskit Monastery, 3,144 m, with its enormous 32-metre Maitreya Buddha staring out across the valley toward the border. Then a long, beautiful drive south-east via Shyok village to Pangong Tso — the lake on the Tibet border made famous (somewhat embarrassingly) by the closing scene of 3 Idiots.":
      "ขับรถระยะสั้นช่วงเช้าไปวัดดิสกิต 3,144 ม. ที่มีพระศรีอริยเมตไตรยขนาด 32 เมตรมองข้ามหุบเขาไปทางชายแดน จากนั้นขับรถยาวสุดสวยลงทางตะวันออกเฉียงใต้ผ่านหมู่บ้านชโยกไปยังทะเลสาบแพงกอน — ทะเลสาบบนชายแดนทิเบตที่โด่งดัง (ในแบบที่ค่อนข้างเขิน) จากฉากปิดในหนังบอลลีวูด 3 Idiots",
    "Our cottages are a fifteen-minute walk from the water. Dinner is early. There is no real artificial light here, and the Milky Way appears almost without preamble.":
      "กระท่อมของเราเดินสิบห้านาทีจากน้ำ ดินเนอร์เร็ว ที่นี่แทบไม่มีแสงไฟประดิษฐ์ ทางช้างเผือกจึงปรากฏแทบไม่มีคำนำ",
    "Diskit Maitreya Buddha": "พระศรีอริยเมตไตรย ดิสกิต",
    "Shyok village stop": "แวะหมู่บ้านชโยก",
    "Pangong Tso arrival": "ถึงทะเลสาบแพงกอน",
    "Stargazing on the shore": "ดูดาวริมทะเลสาบ",
    "Lakeside cottage · sound of water": "กระท่อมริมทะเลสาบ · เสียงน้ำ",

    // Day 06
    "Day 06": "วันที่ 06",
    "Chang La · Thiksey": "ฌางลา · ทิคเซ่",
    "5,360 m": "5,360 ม.",
    "Back over Chang La, then Thiksey and Shey": "กลับข้ามฌางลา แล้วทิคเซ่กับเชย์",
    "Back over the mountains, this time by Chang La — 5,360 m, third-highest motorable pass in the world. Yaks and ponies graze the high meadows on the way down. We re-enter the Indus Valley by late morning.":
      "ข้ามภูเขาอีกครั้ง คราวนี้ผ่านฌางลา — 5,360 ม. ช่องเขาสูงเป็นอันดับสามของโลก จามรีและม้ากินหญ้าตามทุ่งหญ้าสูงตอนลงเขา เรากลับเข้าสู่หุบเขาสินธุก่อนเที่ยง",
    "Time permitting, we stop at Thiksey Monastery — twelve storeys built into a hillside, often compared to a smaller Potala — and the old summer palace at Shey with its gilded Shakyamuni Buddha. We are back in Leh by dusk for a final dinner.":
      "ถ้าเวลาพอ แวะวัดทิคเซ่ — สิบสองชั้นก่อสร้างเข้ากับไหล่เขา มักถูกเปรียบกับโปตาลาฉบับย่อ — และพระราชวังฤดูร้อนเก่าที่เชย์ พร้อมพระศากยมุนีปิดทอง กลับถึงเลห์ช่วงเย็นเพื่อดินเนอร์ปิดทริป",
    "Chang La pass": "ช่องเขาฌางลา",
    "Thiksey Monastery (Maitreya hall)": "วัดทิคเซ่ (หอพระศรีอริยเมตไตรย)",
    "Shey Palace gilded Buddha": "พระปิดทอง พระราชวังเชย์",
    "Farewell dinner in Leh": "ดินเนอร์อำลาที่เลห์",

    // Day 07
    "Day 07": "วันที่ 07",
    "Leh Airport": "สนามบินเลห์",
    "8 km": "8 กม.",
    "20 min": "20 นาที",
    "Departure — early morning to the airport": "เดินทางกลับ — เช้าตรู่ไปสนามบิน",
    "Most flights out of Leh leave before 8 a.m. because the wind picks up by mid-morning and the airport closes. We collect you from the hotel an hour beforehand.":
      "เที่ยวบินส่วนใหญ่ออกจากเลห์ก่อน 8 โมงเช้า เพราะลมแรงขึ้นในช่วงสายและสนามบินจะปิด เราจะไปรับคุณที่โรงแรมก่อนหน้านั้น 1 ชั่วโมง",
    "If you want to extend — and many guests do — we are happy to add days in the Kashmir Valley, a few quiet nights in Sham, or a side trip to Hemis or Lamayuru. Just ask in the enquiry form.":
      "ถ้าคุณอยากต่อทริป — และลูกค้าหลายท่านทำ — เรายินดีเพิ่มวันที่หุบเขาแคชเมียร์ หรือพักเงียบ ๆ ที่ชาม หรือไปเฮมิสกับลามายูรู เพียงแจ้งในฟอร์มสอบถาม",
    "Hotel checkout": "เช็คเอาท์จากโรงแรม",
    "Airport transfer": "ส่งสนามบิน",
    "Optional extension": "ต่อทริปได้ตามต้องการ",
    "Onward journey home": "เดินทางกลับบ้าน",

    "See pricing & reserve →": "ดูราคา & จอง →",

    // ── Pricing (§ 05) ──
    "Pricing": "ราคา",
    "Honest,": "ราคา",
    "published": "เปิดเผย",
    "pricing.": "ตรงไปตรงมา",
    "What you see here is what you pay. No haggling, no two-tier pricing, no kickbacks from monasteries or hotels. The price scales gently with party size because shared cars and rooms genuinely cost less to run.":
      "ที่เห็นคือที่จ่าย ไม่มีต่อรอง ไม่มีราคาสองชั้น ไม่มีค่าคอมมิชชั่นจากวัดหรือโรงแรม ราคาลดลงตามจำนวนคนเพราะรถและห้องร่วมกันต้นทุนต่ำกว่าจริง ๆ",
    "Looking to extend? We add nights in the Kashmir Valley, Sham, Hemis or Lamayuru at a flat $58 / person / night. Ask us.":
      "อยากต่อทริป? เพิ่มคืนที่หุบเขาแคชเมียร์ ชาม เฮมิส หรือลามายูรู ในราคาเหมา $58 / ท่าน / คืน ปรึกษาเราได้",
    "Best-price promise": "การันตีราคาดีที่สุด",
    "Find a comparable private 6-night Ladakh itinerary cheaper anywhere else, and we'll match it.":
      "ถ้าหาทัวร์ลาดักห์ส่วนตัว 6 คืนเทียบเคียงกันได้ในราคาถูกกว่า เราจะให้ราคาเดียวกัน",
    "Most booked": "จองมากที่สุด",
    "Signature journey": "ทริปซิกเนเจอร์",
    "Six Nights in Ladakh": "ลาดักห์ 6 คืน 7 วัน",
    "per person": "ต่อท่าน",
    "Party of 4 · twin sharing": "กรุ๊ป 4 ท่าน · พักคู่",
    "Solo": "เดี่ยว",
    "Couple": "คู่",
    "Trio (1 room)": "สามท่าน (1 ห้อง)",
    "Group of 4": "กรุ๊ป 4 ท่าน",
    "Private vehicle with driver-guide for 7 days": "รถส่วนตัวพร้อมไกด์-คนขับ ตลอด 7 วัน",
    "6 nights' accommodation — Leh hotel, Hunder guesthouse, Pangong cottage":
      "ที่พัก 6 คืน — โรงแรมเลห์ เกสต์เฮาส์ฮันเดอร์ กระท่อมแพงกอน",
    "All breakfasts and dinners": "อาหารเช้าและเย็นทุกมื้อ",
    "Inner Line Permits for Nubra & Pangong": "ใบอนุญาต Inner Line นูบร้า & แพงกอน",
    "Airport transfers at Leh": "รับ-ส่งสนามบินเลห์",
    "Oxygen tank in the vehicle on the Nubra & Pangong legs": "ถังออกซิเจนประจำรถช่วงนูบร้า & แพงกอน",
    "Free e-Visa filing — current government fees waived through June 2026":
      "บริการยื่น e-Visa ฟรี — ปัจจุบันรัฐยกเว้นค่าธรรมเนียมถึงมิถุนายน 2026",
    "End-to-end concierge from our Phuket office": "ดูแลครบวงจรจากออฟฟิศภูเก็ตของเรา",
    "Travel insurance (in-country portion)": "ประกันอุบัติเหตุการเดินทาง (ในประเทศ)",
    "Reserve on WhatsApp →": "จองผ่าน WhatsApp →",
    "$295 deposit to confirm · balance due 30 days before": "มัดจำ $295 เพื่อยืนยัน · ยอดที่เหลือชำระ 30 วันก่อนเดินทาง",

    // ── Testimonials (§ 06) ──
    "· 142 verified guests · Trustpilot, Tripadvisor, Google":
      "· ลูกค้ายืนยัน 142 ท่าน · Trustpilot, Tripadvisor, Google",
    "Why guests": "ทำไมลูกค้า",
    "rebook": "กลับมาจองอีก",
    "us — usually within the year.": "— ส่วนใหญ่ภายในปีเดียวกัน",
    "\"Honestly the best trip we've taken in twenty years. Tashi made us feel like we were visiting friends, not booking a tour.\"":
      "\"พูดตรง ๆ ว่าเป็นทริปที่ดีที่สุดในรอบยี่สิบปี ทาชิทำให้รู้สึกเหมือนกำลังไปเยี่ยมเพื่อน ไม่ใช่จองทัวร์\"",
    "\"We rebooked them three months later for Kashmir Valley. That's all I can say. Pricing was honest, planning was easy, the trip was magic.\"":
      "\"เรากลับมาจองอีกครั้งหลังสามเดือนสำหรับหุบเขาแคชเมียร์ พูดได้แค่นั้น ราคาตรงไปตรงมา วางแผนง่าย และทริปเป็นมายากล\"",
    "\"I have two small kids and was nervous about altitude. They built the itinerary around us — slower, lower, no pressure. Best decision.\"":
      "\"มีลูกเล็กสองคน กังวลเรื่องความสูง ทีมเขาออกแบบโปรแกรมรอบตัวเรา — ช้าลง ต่ำลง ไม่กดดัน ตัดสินใจถูก\"",
    "Edinburgh · Sep 2025": "เอดินบะระ · ก.ย. 2025",
    "Singapore · Jun 2025": "สิงคโปร์ · มิ.ย. 2025",
    "Berlin · May 2025": "เบอร์ลิน · พ.ค. 2025",

    // ── FAQ (§ 07) ──
    "FAQ": "คำถามที่พบบ่อย",
    "The questions we get": "คำถามที่ลูกค้าถามเรา",
    "most.": "บ่อยที่สุด",
    "Anything else, write us — there's a real human at the other end, usually Sarah or Tashi.":
      "ถ้ามีเรื่องอื่น เขียนหาเราได้ — มีคนจริง ๆ ตอบ ปกติคือซาร่าหรือทาชิ",

    "Is this trip safe at altitude?": "ทริปนี้ปลอดภัยจากความสูงไหม?",
    "Yes — provided you respect it. We engineer two full days at 3,500 m in Leh before crossing any high pass, carry oxygen in the vehicle, and our driver-guides are first-aid trained. We will adjust the itinerary on the fly if anyone in the group is struggling. About 1 in 50 travellers needs an extra night to acclimatise; we plan for it.":
      "ใช่ — ถ้าคุณเคารพมัน เราออกแบบให้พักที่ระดับ 3,500 ม. ในเลห์เต็ม 2 วันก่อนข้ามช่องเขาสูงใด ๆ มีถังออกซิเจนในรถ ไกด์-คนขับผ่านการอบรมปฐมพยาบาล หากใครในกรุ๊ปไม่สบายเราพร้อมปรับโปรแกรมทันที ประมาณ 1 ใน 50 ท่านต้องพักเพิ่ม 1 คืนเพื่อปรับตัว เราเผื่อไว้แล้ว",

    "How fit do I need to be?": "ต้องฟิตแค่ไหน?",
    "Reasonably. There are no compulsory hikes. You should be comfortable walking a few kilometres in a day and climbing the occasional flight of monastery steps. If you have a heart or lung condition, please check with your doctor before booking and tell us when you enquire.":
      "พอประมาณ ไม่มีการเดินป่าบังคับ ควรเดินได้สบาย ๆ ไม่กี่กิโลเมตรต่อวันและขึ้นบันไดวัดได้บ้าง ถ้ามีโรคหัวใจหรือปอด โปรดปรึกษาแพทย์ก่อนจอง และแจ้งเราตอนสอบถาม",

    "Is it private or do I share with others?": "เป็นทริปส่วนตัวหรือต้องแชร์กับคนอื่น?",
    "Every trip is private. You, your travelling party, and your driver-guide. No shared vehicles, no other groups, no fixed departure dates — we run the trip when you want it to run, between April and October.":
      "ทุกทริปเป็นส่วนตัว มีเพียงคุณ คณะของคุณ และไกด์-คนขับของคุณ ไม่มีรถร่วม ไม่มีกรุ๊ปอื่น ไม่มีวันออกตายตัว — เราออกตามที่คุณสะดวก ระหว่างเมษายน–ตุลาคม",

    "When is the best month?": "เดือนไหนดีที่สุด?",
    "June, July and September are the most reliable. May is glorious but some passes may still be snowed under; October is quiet and crisp but Pangong's cottages start to close. We're happy to advise based on what matters most to you (flowers, snow, solitude, photography).":
      "มิถุนายน กรกฎาคม และกันยายน เชื่อถือได้มากที่สุด พฤษภาคมสวยมากแต่ช่องเขาบางช่องยังมีหิมะ ตุลาคมเงียบและสดชื่นแต่กระท่อมแพงกอนเริ่มปิด เรายินดีให้คำแนะนำตามสิ่งที่คุณให้ความสำคัญ (ดอกไม้ หิมะ ความสงบ การถ่ายภาพ)",

    "What about the permits?": "เรื่องใบอนุญาตล่ะ?",
    "Nubra Valley and Pangong Tso both require Inner Line Permits. We handle them entirely — just send us a passport scan with your booking. The cost is included.":
      "ทั้งหุบเขานูบร้าและทะเลสาบแพงกอนต้องใช้ใบอนุญาต Inner Line เราจัดการให้ทั้งหมด — แค่ส่งสแกนพาสปอร์ตมาพร้อมการจอง ค่าใช้จ่ายรวมในแพ็คเกจแล้ว",

    "What is your cancellation policy?": "นโยบายการยกเลิกเป็นอย่างไร?",
    "A $295 deposit holds your dates. The balance is due 30 days before departure. Cancel more than 30 days out, you forfeit the deposit. Within 30 days, we keep the full amount — but we'll always try to rebook you for another date if circumstances change.":
      "มัดจำ $295 เพื่อยืนยันวันเดินทาง ส่วนที่เหลือชำระ 30 วันก่อนเดินทาง หากยกเลิกก่อน 30 วัน เสียมัดจำ หากภายใน 30 วัน เราเก็บทั้งหมด — แต่เราพยายามจัดวันใหม่ให้เสมอหากสถานการณ์เปลี่ยน",

    "Can you customise this?": "ปรับโปรแกรมได้ไหม?",
    "Yes. Most trips we run are variants of this one. Want to add Sham Valley, Hemis monastery, Tso Moriri, a side-trip to Srinagar? Just ask in the enquiry form.":
      "ได้ ทริปส่วนใหญ่ที่เราจัดเป็นเวอร์ชันของทริปนี้ อยากเพิ่มหุบเขาชาม วัดเฮมิส โซโมริริ หรือแวะศรีนาการ์? เพียงระบุในฟอร์มสอบถาม",

    // ── Final CTA + form (§ 08) ──
    "Next step": "ขั้นตอนถัดไป",
    "When were you": "คุณคิดจะมา",
    "thinking of": "เมื่อไร",
    "coming?": "?",
    "Send us a paragraph about what you have in mind. We answer every enquiry within a working day, no auto-replies, no boilerplate.":
      "ส่งข้อความเล่าให้เราฟังว่ามีอะไรในใจ เราตอบทุกการสอบถามภายใน 1 วันทำการ ไม่มีตอบกลับอัตโนมัติ ไม่มีคำตอบสำเร็จรูป",
    "4 of 11 summer dates still open · last booked 9 hrs ago": "เหลือ 4 จาก 11 รอบฤดูร้อน · จองล่าสุด 9 ชม. ที่แล้ว",
    "Trip enquiry": "สอบถามทริป",
    "Tell us a little.": "เล่าให้เราฟังหน่อย",
    "Your name": "ชื่อของคุณ",
    "Sarah Chen": "ชื่อคุณ",
    "Email": "อีเมล",
    "sarah@inbox.com": "you@email.com",
    "Preferred month": "เดือนที่ต้องการ",
    "Choose…": "เลือก…",
    "Party size": "จำนวนผู้เดินทาง",
    "1 traveller": "1 ท่าน",
    "2 travellers": "2 ท่าน",
    "3 travellers": "3 ท่าน",
    "4 travellers": "4 ท่าน",
    "What you have in mind (optional)": "สิ่งที่คุณคิดไว้ (ไม่บังคับ)",
    "Honeymoon, photography trip, want to add Kashmir, gentle pace…": "ฮันนีมูน ทริปถ่ายภาพ อยากเพิ่มแคชเมียร์ จังหวะสบาย ๆ…",
    "Send via WhatsApp →": "ส่งผ่าน WhatsApp →",
    "Opens a new chat on WhatsApp · +66 081 970 6495 · reply within 1 working day":
      "เปิดแชต WhatsApp ใหม่ · +66 081 970 6495 · ตอบใน 1 วันทำการ",
    "Opening WhatsApp…": "กำลังเปิด WhatsApp…",
    "tap here to message us": "แตะที่นี่เพื่อส่งข้อความ",
    "Tell us your name.": "กรุณาระบุชื่อ",
    "A valid email, please.": "กรุณาใส่อีเมลที่ถูกต้อง",

    // ── Footer ──
    "The studio": "เกี่ยวกับเรา",
    "A Leisure Corner Co., Ltd. studio": "ในเครือ Leisure Corner Co., Ltd.",
    "TAT Licence № 31/01092": "ใบอนุญาต ททท. № 31/01092",
    "Get in touch": "ติดต่อเรา",
    "Tel": "โทร",
    "WhatsApp": "WhatsApp",
    "LINE": "LINE",
    "Explore": "สำรวจ",
    "Photo gallery": "แกลเลอรีภาพ",
    "Day-by-day itinerary": "โปรแกรมรายวัน",
    "Pricing & group rates": "ราคา & เรตตามกลุ่ม",
    "Guest reviews": "รีวิวลูกค้า",
    "Frequently asked": "คำถามที่พบบ่อย",
    "Send an enquiry": "ส่งสอบถาม",
    "Made slowly · Phuket ✦ Leh": "ทำอย่างใจเย็น · ภูเก็ต ✦ เลห์",
    "Plan a trip →": "วางแผนทริป →",

    // ── Mobile sticky ──
    "WhatsApp →": "WhatsApp →",
  };

  // ── Language state + translator runtime ──
  let lang = 'en';
  const originals = new WeakMap();
  const TRANSLATABLE_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  function getOriginal(node, key) {
    if (!originals.has(node)) originals.set(node, {});
    return originals.get(node)[key];
  }
  function setOriginal(node, key, value) {
    if (!originals.has(node)) originals.set(node, {});
    originals.get(node)[key] = value;
  }

  function translateText(node) {
    let orig = getOriginal(node, '__text');
    if (orig === undefined) {
      orig = node.nodeValue;
      setOriginal(node, '__text', orig);
    }
    const trimmed = orig.trim();
    if (!trimmed) return;
    let next;
    if (lang === 'en') {
      next = orig;
    } else {
      const tr = TR_EN_TH[trimmed];
      if (tr !== undefined) {
        next = orig.replace(trimmed, tr);
      } else {
        next = orig; // no translation — keep English
      }
    }
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateAttrs(el) {
    for (const attr of TRANSLATABLE_ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      const key = '__attr_' + attr;
      let orig = getOriginal(el, key);
      if (orig === undefined) {
        orig = el.getAttribute(attr);
        setOriginal(el, key, orig);
      }
      const trimmed = orig.trim();
      let next;
      if (lang === 'en') {
        next = orig;
      } else {
        const tr = TR_EN_TH[trimmed];
        next = tr !== undefined ? orig.replace(trimmed, tr) : orig;
      }
      if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
    }
  }

  function walk(node) {
    if (node.nodeType === 3) {
      translateText(node);
    } else if (node.nodeType === 1) {
      // skip scripts/styles
      if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
      translateAttrs(node);
      let c = node.firstChild;
      while (c) { walk(c); c = c.nextSibling; }
    }
  }

  function translateAll() {
    const root = document.getElementById('root') || document.body;
    walk(root);
  }

  let pending = false;
  function scheduleTranslate() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      translateAll();
    });
  }

  window.__setLang = function (next) {
    if (next === lang) return;
    lang = next;
    document.documentElement.setAttribute('lang', next);
    translateAll();
    // Notify any React buttons that want to mark themselves active.
    window.dispatchEvent(new CustomEvent('langchange', { detail: next }));
  };
  window.__getLang = () => lang;

  // Start observing once DOM is ready.
  function start() {
    const root = document.getElementById('root');
    if (!root) { requestAnimationFrame(start); return; }
    const obs = new MutationObserver(scheduleTranslate);
    obs.observe(root, { childList: true, subtree: true, characterData: true });
    translateAll();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
