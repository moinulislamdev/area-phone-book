const userData = [
  {
    id: 1,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "জনসেবা ফার্মেসী",
    number: "01811017855",
    wordNo: "৫",
    location: "আমতলা",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়। <br>চোখের ও দাতের ডাক্তার বসে (ডাক্তার দেখাতে উল্লেখিত নাম্বারে যোগাযোগ করুন)।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 2,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "ভাই ভাই ফার্মেসি",
    number: "01677255264",
    wordNo: "৫",
    location: "নিশ্চিন্ত পূর",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 3,
    photo: "../cdn/pharmacy/al-latif-drug-house.jpg",
    name: "আল লতিফ ড্রাগ হাউস",
    number: "01880118922",
    wordNo: "৫",
    location: "শরীফবাগ, শাহীবাজার",
    detail: "সকল প্রকারের মেডিসিন পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 4,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "কালাম মেডিকেল হল",
    number: "01918934496",
    wordNo: "৫",
    location: "কদমতলী পাকার মাথা ব্রিজ সংলগ্ন, পশ্চিম দৌলতপুর।",
    detail: "ফার্মেসি এবং চোখের ডাক্তার বসে।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 5,
    photo: "../cdn/pharmacy/ma-medical-hall.jpg",
    name: "মা মেডিকেল হল",
    number: "01712649188",
    wordNo: "৬",
    location: "দক্ষিণ রসুলপুর, মাদ্রাসা রোড",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 6,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "সেবা ফার্মেসি",
    number: "Hidden",
    wordNo: "৬",
    location: "ভাঙ্গাপুল, রসুলপুর",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 7,
    photo: "../cdn/pharmacy/tajmir-pharma.jpg",
    name: "আজমির ফার্মা",
    number: "01886626026",
    wordNo: "৬",
    location: "ভাঙ্গাপুল, রসুলপুর",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 8,
    photo: "../cdn/pharmacy/arafa-medicine-corner.jpg",
    name: "আরাফা মেডিসিন কর্নার",
    number: "01916061648",
    wordNo: "৪",
    location: "নুরবাগ পুরাতন সি এন জি স্ট্যান্ড, নুরবাগ",
    detail: "সকল প্রকারের মেডিসিন পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 9,
    photo: "../cdn/pharmacy/ibn-sina-medicine-corner.jpg",
    name: "ইবনে সিনা মেডিসিন কর্নার",
    number: "01916204618",
    wordNo: "৪",
    location: "নুরবাগ জামে মসজিদ সংলগ্ন, নুরবাগ",
    detail: "সকল প্রকারের মেডিসিন পাওয়া যায়।<br> ডাক্তার বসে চোখের, মেডিসিন ও চক্ষু।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 10,
    photo: "../cdn/pharmacy/Janasheba-pharmacy.jpg",
    name: "জনসেবা ফার্মেসী",
    number: "01902322132",
    wordNo: "৪",
    location: "নুরবাগ জামে মসজিদ সংলগ্ন, নুরবাগ",
    detail: "ডাক্তার বসে, মেডিসিন বিশেষজ্ঞ।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 11,
    photo: "../cdn/pharmacy/dewar-pharmacy.jpg",
    name: "দেওয়ার ফার্মেসি",
    number: "01911798538",
    wordNo: "৪",
    location: "ইকরা স্কুল সংলগ্ন, কুসুমবাগ",
    detail: "ডাক্তার বসে, শিশু, গাইনি, নাক-কান গলা, মেডিসিন।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 12,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "মা মেডিকেল হল",
    number: "01682542020",
    wordNo: "৪",
    location: "দেলপাড়া বাজার সংলগ্ন, দেলপাড়া",
    detail: "দেশি-বিদেশি সকল  ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 13,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "মানব কল্যাণ মেডিকেল",
    number: "01912987018",
    wordNo: "৫",
    location: "বউবাজার শাহীবাজার রোড, বউবাজার",
    detail: "সকল প্রকারের মেডিসিন পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 14,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "সেতু ফার্মেসি",
    number: "01912247622",
    wordNo: "৬",
    location: "বউবাজার বটতলা সংলগ্ন",
    detail: "সকল প্রকারের ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 15,
    photo: "../cdn/pharmacy/jannat-medicine-corner.jpg",
    name: "জান্নাত মেডিসিন কর্নার",
    number: "01676284786",
    wordNo: "৬",
    location: "বউবাজার নতুন বাজার সংলগ্ন",
    detail: "সকল প্রকারের প্রাথমিক চিকিৎসা করা হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 16,
    photo: "../cdn/pharmacy/rejia-medical-hall.jpg",
    name: "রেজিয়া মেডিকেল হল",
    number: "01771230556",
    wordNo: "৬",
    location: "বউবাজার রেললাইন সংলগ্ন",
    detail: "সকল প্রকারের ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 17,
    photo: "../cdn/pharmacy/abdullah-medical-hall.jpg",
    name: "আব্দুল্লাহ মেডিকেল হল",
    number: "01717833419",
    wordNo: "৫",
    location: "নয়ামাটি মুসলিম পাড়া",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায় এবং পাইকারি বিক্রি করা হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 18,
    photo: "../cdn/pharmacy/bismillah-medicine-corner.jpg",
    name: "বিসমিল্লাহ মেডিসিন কর্নার",
    number: "01999560168",
    wordNo: "৫",
    location: "বাইতুল আমান কেন্দ্রীয় জামে মসজিদ সংলগ্ন, নয়ামাটি।",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 19,
    photo: "../cdn/pharmacy/care-medicine-corner.jpg",
    name: "কেয়ার মেডিসিন কর্নার",
    number: "01630243900",    
    wordNo: "৬",
    location: "নয়ামাটি জামে মসজিদ সংলগ্ন, নয়ামাটি",
    detail: "সকল ধরনের চিকিৎসা করা হয়। ওষুধ হোম ডেলিভারি করা হয়। সরাসরী কোম্পানি থেকে ক্রয়-ক্রীত ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 20,
    photo: "../cdn/pharmacy/new-al-hassan-pharmacy.jpg",
    name: "নিউ আল হাসান ফার্মেসী",
    number: "01777151142",
    wordNo: "৬",
    location: "দেলপাড়া রোড, নয়ামাটি জামে মসজিদ সংলগ্ন",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায় এবং পাইকারি বিক্রি হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 21,
    photo: "../cdn/pharmacy/bisala-drug-house.jpg",
    name: "বিশাল ড্রাগ হাউজ",
    number: "01732839890",
    wordNo: "৪",
    location: "দেলপাড়া বাজার, দেলপাড়া",
    detail: "দেশি-বিদেশি সকল প্রকার ওষুধ পাইকারী ও খুচরা বিক্রি হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 22,
    photo: "../cdn/pharmacy/bismillah-pharmacy.jpg",
    name: "বিসমিল্লাহ ফার্মেসি",
    number: "01864221924",
    wordNo: "৪",
    location: "দেলপাড়া উচ্চ বিদ্যালয় সংলগ্ন",
    detail: "সকল প্রকার ঔষধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 23,
    photo: "../cdn/pharmacy/naim-medicine-corner.jpg",
    name: "নাঈম মেডিসিন কর্নার",
    number: "01680034159",
    wordNo: "৬",
    location: "মধ্য রসুলপুর, কমিউনিটি সেন্টার সংলগ্ন",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 24,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "মোল্লা মেডিকেল হল",
    number: "01914909753",
    wordNo: "৬",
    location: "বউবাজার বাজার সংলগ্ন",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 25,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "সৌরভ ফার্মেসি",
    number: "01711052055",
    wordNo: "৬",
    location: "জসিম মার্কেট, রসুলপুর",
    detail: "সকল প্রকার ওষুধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 26,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "জনসেবা ফার্মেসি",
    number: "01917566006",
    wordNo: "৫",
    location: "আমতলা মোড়",
    detail: "চোখের ডাক্তার বসে - প্রতি মঙ্গলবার ১০ টা থেকে ৩ টা।<br>দাতের ডাক্তার বসে - প্রতি বৃহস্পতিবার ৩ টা থেকে ৬ টা।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 27,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "আল-ইহসান ফার্মা",
    number: "01672664134",
    wordNo: "৫",
    location: "কুমিল্লা সমিতি মার্কেট, শাহী-বাজার",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 28,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "নিলকন্ঠ ফার্মেসি",
    number: "01672259059",
    wordNo: "৬",
    location: "নয়ামাটি, মতিউর রহমান মডেল টাউন সংলগ্ন।",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 29,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "মা মেডিসিন কর্নার",
    number: "01824639560",
    wordNo: "৪",
    location: "দেলপাড়া রোড, এ এস এম সুপার মার্কেট",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 30,
    photo: "../cdn/pharmacy/pharmacy.png",
    name: "আল-মদিনা মেডিসিন কর্নার",
    number: "01964615001",
    wordNo: "৪",
    location: "আদর্শনগর মসজিদ রোড",
    detail: "ডাঃ মোঃ সাইফুল ইসলাম (DMA)<br> সকল প্রকার ওষুধ সূলভ মূল্যে বিক্রি করা হয়। ডাইবেটিস, প্রেসার মাপা হয় ও নেবুলাইজার দিয়ে গ্যাস দেওয়া হয়।<br> এবং প্রেগন্যান্সি টেস্ট ও মহিলাদের যাবতীয় চিকিৎসা করানো হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbashundharasnacks%2Fvideos%2F897735790751548%2F&width=500&show_text=false&height=280&appId"
  }
];
