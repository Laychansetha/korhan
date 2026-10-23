/**
 * Koh Han Resort (រមណីយដ្ឋានកោះហាន)
 * Community-Based Ecotourism Web Application Logic
 */

// Bilingual Content Dictionary
const i18n = {
  km: {
    // Nav
    navHome: "ទំព័រដើម",
    navAbout: "អំពីរមណីយដ្ឋាន",
    navExperiences: "បទពិសោធន៍",
    navDestinations: "គោលដៅទេសចរណ៍",
    navPackages: "កញ្ចប់ដំណើរកម្សាន្ត",
    navMap: "ផែនទីកាយ៉ាក់",
    navContact: "ទំនាក់ទំនង",
    bookBtn: "កក់ឥឡូវនេះ",

    // Hero
    heroTag: "អេកូទេសចរណ៍សហគមន៍ • ខេត្តស្ទឹងត្រែង",
    heroTitle: "ស្វាគមន៍មកកាន់រមណីយដ្ឋានកោះហាន",
    heroSubtitle: "តំបន់ដីសើមរ៉ាមសារ ខេត្តស្ទឹងត្រែង — ឋានសួគ៌ធម្មជាតិព្រៃលិចទឹកកណ្ដាលដងទន្លេមេគង្គ ឆ្នេរខ្សាច់កោះដ៏ស្ងប់ស្ងាត់ និងបដិសណ្ឋារកិច្ចសហគមន៍",
    heroCtaLearn: "ស្វែងយល់បន្ថែម",
    heroCtaBook: "ទាក់ទងកក់ដំណើរកម្សាន្ត",

    // Key Stats
    statDistance: "២៤ គ.ម ពីទីរួមខេត្ត",
    statDistanceSub: "តាមផ្លូវជាតិលេខ ៧ ឆ្លងស្ពានសេកុង",
    statRamsar: "តំបន់ដីសើមរ៉ាមសារ",
    statRamsarSub: "ប្រព័ន្ធអេកូឡូស៊ីព្រៃលិចទឹកទន្លេមេគង្គ",
    statEst: "បង្កើតតាំងពីឆ្នាំ ២០១៨",
    statEstSub: "គ្រប់គ្រងនិងបម្រើផ្ទាល់ដោយសហគមន៍",
    statSpots: "៩ ទីតាំងសំខាន់ៗ",
    statSpotsSub: "ព្រៃលិចទឹក ឆ្នេរខ្សាច់ និងវប្បធម៌",

    // About Section
    aboutBadge: "អំពីសហគមន៍យើង",
    aboutTitle: "ធម្មជាតិពិត បទពិសោធន៍ពិត គាំទ្រសហគមន៍ពិតប្រាកដ",
    aboutPara1: "រមណីយដ្ឋានកោះហាន ស្ថិតនៅក្នុងសង្កាត់សាមគ្គី ជាប់ព្រំប្រទល់ស្រុកបុរីអូរស្វាយសែនជ័យ។ លោកអ្នកអាចធ្វើដំណើរឆ្លងកាត់ស្ពានសេកុង តាមបណ្តោយផ្លូវជាតិលេខ ៧ ចេញពីទីរួមខេត្តស្ទឹងត្រែង ឆ្ពោះទៅកាន់ព្រំប្រទល់ប្រទេសឡាវ ដែលមានចម្ងាយប្រហែល ២៤ គីឡូម៉ែត្រ រហូតដល់កំពង់ទូករមណីយដ្ឋានកោះហាន។",
    aboutPara2: "នៅទីនេះ យើងខ្ញុំមានចំណតរថយន្តធំទូលាយ រោងទទួលភ្ញៀវដ៏កក់ក្តៅ និងសួនលំហែបៃតង ព្រមទាំងមានផ្ទះស្នាក់ ឬផ្ទះលំហែឈើប្រណីតនៅក្បែរមាត់ទឹក ទល់មុខព្រៃលិចទឹកកោះហាន ប្រកបដោយបរិយាកាសខ្យល់បរិសុទ្ធ ស្ថិតក្នុងតំបន់ដីសើមរ៉ាមសារ ខេត្តស្ទឹងត្រែង។",
    aboutPara3: "រមណីយដ្ឋាននេះត្រូវបានបង្កើតឡើងតាំងពីឆ្នាំ ២០១៨ ក្នុងគោលបំណងគាំទ្រផ្ទាល់ដល់សេវាកម្មសហគមន៍ និងបងប្អូនប្រជាពលរដ្ឋរស់នៅលើកោះក្នុងតំបន់កោះហាន ឲ្យមានជីវភាពប្រសើរឡើង តាមរយៈការបម្រើសេវាទេសចរណ៍ប្រកបដោយគុណភាព សុវត្ថិភាព និងការទទួលខុសត្រូវខ្ពស់។",
    featParking: "ចំណតរថយន្តធំទូលាយ មានសុវត្ថិភាព",
    featReception: "រោងទទួលភ្ញៀវ និងផ្ដល់ព័ត៌មាន",
    featStays: "ផ្ទះស្នាក់មាត់ទឹក និងទីធ្លាលំហែ",
    featEco: "អភិរក្សធម្មជាតិ និងគាំទ្រអ្នកភូមិ",

    // Experiences
    expBadge: "សកម្មភាពពិសេស",
    expTitle: "បទពិសោធន៍ដែលមិនអាចបំភ្លេចបាននៅកោះហាន",
    expSub: "រីករាយជាមួយសកម្មភាពចម្រុះ وسطធម្មជាតិដងទន្លេមេគង្គ ផ្ដល់ភាពស្រស់ស្រាយ និងភាពស្ងប់ស្ងាត់",
    exp1Title: "ជិះទូកកាយ៉ាក់ក្នុងព្រៃលិចទឹក",
    exp1Desc: "អុំទូកកាយ៉ាក់ផ្សងព្រេងកាត់តាមព្រៃលិចទឹកបុរាណ ជ្រែករវាងមែកធាងឫសឈើធំៗ និងទស្សនាសត្វស្លាបទឹកកម្រនៃដងទន្លេមេគង្គ។",
    exp2Title: "បោះតង់លើកោះខ្សាច់ស្ងប់ស្ងាត់",
    exp2Desc: "គេងតង់លើឆ្នេរខ្សាច់សកណ្ដាលទន្លេ អាំងភ្លើងគង គយគន់មេឃផ្កាយរះរាត្រី និងទទួលពន្លឺព្រះអាទិត្យរះដ៏ស្រស់បំព្រង។",
    exp3Title: "ជិះទូកកម្សាន្ត មើលសត្វស្លាប និងស្ទូចត្រី",
    exp3Desc: "ជិះទូកឈើសហគមន៍គយគន់ទស្សនីយភាពដងទន្លេ ស្វែងយល់ពីរបៀបរស់នៅ និងរីករាយជាមួយការស្ទូចត្រីលេងកម្សាន្ត។",
    exp4Title: "ផ្ទះស្នាក់សហគមន៍ និងម្ហូបអ្នកកោះ",
    exp4Desc: "ស្នាក់នៅក្នុងផ្ទះឈើលំហែប្រពៃណី ស្រូបយកខ្យល់ត្រជាក់បរិសុទ្ធ និងភ្លក្សរសជាតិម្ហូបស្រុកស្រែត្រីទន្លេធម្មជាតិ។",
    exp5Title: "បួងសួងសុំសេចក្តីសុខនៅព្រៃអ្នកតា",
    exp5Desc: "ទស្សនាដើមឈើយក្សដែលមានឫសប្រទាក់ក្រឡាអស្ចារ្យ និងអុចធូបបួងសួងសុំសេចក្តីសុខចម្រើនតាមជំនឿអ្នកស្រុក។",
    exp6Title: "ផ្ទាំងថ្មកំបោរស និងឡបុរាណ",
    exp6Desc: "ទស្សនាផ្ទាំងថ្មកំបោរពណ៌សក្បុសកណ្តាលទឹករលក និងស្វែងយល់ពីស្លាកស្នាមប្រវត្តិសាស្ត្រនៃឡបុរាណ។",

    // Destinations Gallery
    destBadge: "៩ ទីតាំងទេសចរណ៍ល្បីៗ",
    destTitle: "គោលដៅទស្សនានៅតំបន់កោះហាន",
    destSub: "រុករកគោលដៅទាំង ៩ ដូចមានចែងក្នុងឯកសារសេវាកម្មរមណីយដ្ឋានកោះហាន",
    filterAll: "ទាំងអស់ (៩)",
    filterWater: "ឆ្នេរខ្សាច់ & កោះ",
    filterForest: "ព្រៃលិចទឹក",
    filterHeritage: "វប្បធម៌ & ថ្មកំបោរ",

    // Packages & Pricing
    pkgBadge: "តម្លៃ & កញ្ចប់សេវាកម្ម",
    pkgTitle: "កញ្ចប់ដំណើរកម្សាន្តពេញនិយម",
    pkgSub: "តម្លៃច្បាស់លាស់ ផ្អែកលើចំនួនសមាជិក គាំទ្រផ្ទាល់ដល់ជីវភាពសហគមន៍",
    pkgIncludedTitle: "សេវាកម្មរួមបញ្ចូល៖",
    pkgBookBtn: "កក់កញ្ចប់នេះឥឡូវ",
    paxUnit: "នាក់",
    perPax: "/ ម្នាក់",
    perTrip: "/ ជើង",

    // Kayak Map Section
    mapBadge: "ផែនទីតំបន់ & ផ្លូវកាយ៉ាក់",
    mapTitle: "ផែនទីរុករកតំបន់កោះហាន",
    mapSub: "ខ្សែផ្លូវជិះកាយ៉ាក់ និងទូកយន្តកាត់តាមដងទន្លេមេគង្គ ព្រៃលិចទឹក និងកោះធម្មជាតិនានា",
    mapZoomHint: "ចុចលើរូបភាពដើម្បីពង្រីកផែនទីពេញលេញ",

    // Contact & Footer
    contactBadge: "ព័ត៌មានទំនាក់ទំនង & ទីតាំង",
    contactTitle: "ត្រៀមខ្លួនសម្រាប់ដំណើរផ្សងព្រេងហើយឬនៅ?",
    contactSub: "សូមទំនាក់ទំនងមកកាន់ក្រុមការងាររមណីយដ្ឋានសហគមន៍កោះហាន ដើម្បីរៀបចំដំណើរកម្សាន្តរបស់លោកអ្នក",
    phoneTitle: "លេខទូរស័ព្ទទំនាក់ទំនង",
    socialTitle: "បណ្តាញសង្គមផ្លូវការ",
    locTitle: "ទីតាំងនៅលើផែនទី Google Maps",
    openMapBtn: "បើកក្នុង Google Maps",
    callNow: "ទូរស័ព្ទឥឡូវ",
    footerText: "© ២០២៦ រមណីយដ្ឋានអេកូទេសចរណ៍កោះហាន (Koh Han Resort). រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    footerSub: "សហគមន៍អេកូទេសចរណ៍តំបន់ដីសើមរ៉ាមសារ ខេត្តស្ទឹងត្រែង ប្រទេសកម្ពុជា។"
  },
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navExperiences: "Experiences",
    navDestinations: "Destinations",
    navPackages: "Tour Packages",
    navMap: "Kayak Map",
    navContact: "Contact",
    bookBtn: "Book Now",

    // Hero
    heroTag: "Community Ecotourism • Stung Treng Ramsar",
    heroTitle: "Welcome to Koh Han Resort",
    heroSubtitle: "Stung Treng Ramsar Wetland — A pristine flooded forest sanctuary along the Mekong River featuring tranquil sandbars, kayaking adventures, and warm community hospitality.",
    heroCtaLearn: "Learn More",
    heroCtaBook: "Contact & Book",

    // Key Stats
    statDistance: "24 km from Town",
    statDistanceSub: "Via National Road 7 across Sekong Bridge",
    statRamsar: "Ramsar Wetland Site",
    statRamsarSub: "Mekong River flooded forest ecosystem",
    statEst: "Founded in 2018",
    statEstSub: "Directly operated by local villagers",
    statSpots: "9 Key Destinations",
    statSpotsSub: "Flooded forests, sand beaches & heritage",

    // About Section
    aboutBadge: "About Our Community",
    aboutTitle: "Pure Nature, Authentic Memories, Real Community Support",
    aboutPara1: "Koh Han Community Resort is located in Samaki Sangkat, bordering Borei O'Svay Sen Chey District. You can travel across the Sekong Bridge along National Road 7 from Stung Treng provincial town heading towards the Laos border (approximately 24 km) directly to the Koh Han boat pier.",
    aboutPara2: "At our resort base, we provide spacious parking, a cozy guest reception pavilion, leisure gardens, and waterfront wooden homestays directly facing the flooded forest of Koh Han with refreshing river breezes within the protected Stung Treng Ramsar wetland.",
    aboutPara3: "Established in 2018, this community-based ecotourism initiative was created to directly support local island villagers, enhancing their livelihoods through sustainable, high-quality, and deeply responsible hospitality.",
    featParking: "Spacious & secure vehicle parking",
    featReception: "Guest reception & orientation pavilion",
    featStays: "Waterfront homestays & gardens",
    featEco: "Nature conservation & local livelihoods",

    // Experiences
    expBadge: "Highlights",
    expTitle: "Unforgettable Experiences at Koh Han",
    expSub: "Immerse yourself in Mekong wilderness adventures, peaceful river tranquility, and warm local hospitality.",
    exp1Title: "Flooded Forest Kayaking",
    exp1Desc: "Paddle through ancient flooded tree canopies, navigating surreal giant root tangles while spotting rare Mekong waterfowl.",
    exp2Title: "Sandbar Beach Camping",
    exp2Desc: "Sleep under starlit skies on pristine river sandbars with cozy campfires, fresh night breezes, and golden sunrises.",
    exp3Title: "Boat Cruise, Birdwatching & Fishing",
    exp3Desc: "Cruise on traditional longboats, observe majestic wetland birds, and try recreational fishing alongside community fishermen.",
    exp4Title: "Community Homestay & Cuisine",
    exp4Desc: "Stay in rustic wooden cabins right beside the water, recharge in fresh river air, and savor wholesome fresh Mekong fish dishes.",
    exp5Title: "Preay Nakta Sacred Tree Blessing",
    exp5Desc: "Marvel at the monumental sacred banyan roots rising out of the river and join local traditions of praying for peace and goodwill.",
    exp6Title: "White Limestone Cliffs & Ancient Kilns",
    exp6Desc: "Witness gleaming white limestone formations sculpted by river waters and discover archaeological heritage from ancient kilns.",

    // Destinations Gallery
    destBadge: "9 Key Destinations",
    destTitle: "Explore the 9 Iconic Koh Han Locations",
    destSub: "Discover the 9 signature highlights documented in the official Koh Han services guide.",
    filterAll: "All (9)",
    filterWater: "Beaches & Islands",
    filterForest: "Flooded Forests",
    filterHeritage: "Heritage & Rocks",

    // Packages & Pricing
    pkgBadge: "Rates & Tour Packages",
    pkgTitle: "Popular Guided Tour Packages",
    pkgSub: "Transparent tiered pricing based on group size, directly supporting local village guides and boat operators.",
    pkgIncludedTitle: "What's Included:",
    pkgBookBtn: "Book This Package",
    paxUnit: "pax",
    perPax: "/ person",
    perTrip: "/ trip",

    // Kayak Map Section
    mapBadge: "Regional & Kayak Route Map",
    mapTitle: "Koh Han Exploration Map",
    mapSub: "Detailed navigation trails for kayaks and motorized longboats across the Mekong flooded forests and sandbars.",
    mapZoomHint: "Click image to inspect high-resolution map",

    // Contact & Footer
    contactBadge: "Contact & Getting Here",
    contactTitle: "Ready to Plan Your Eco Adventure?",
    contactSub: "Get in touch directly with our community tour coordinators via Telegram, WhatsApp, Facebook, or Phone.",
    phoneTitle: "Direct Phone Numbers",
    socialTitle: "Official Social Channels",
    locTitle: "Location on Google Maps",
    openMapBtn: "Open in Google Maps",
    callNow: "Call Now",
    footerText: "© 2026 Koh Han Ecotourism Resort (រមណីយដ្ឋានកោះហាន). All rights reserved.",
    footerSub: "Community-Based Ecotourism in the Stung Treng Ramsar Wetland, Cambodia."
  }
};

// 9 Key Destinations Data from PDF
const destinationsData = [
  {
    id: 1,
    category: "water",
    titleKm: "១. ក្បាលកោះទន្លេមួយ",
    titleEn: "1. Koh Tonlemouy Head",
    descKm: "ចុះលេងទឹកថ្លាឈ្វេង ថតរូបទេសភាព រាវខ្ចៅទន្លេធម្មជាតិ និងទីតាំងបោះតង់ដ៏ស្រស់ស្អាតលើឆ្នេរខ្សាច់។",
    descEn: "Swim in crystal clear waters, capture scenic photos, forage river clams, and camp on scenic sandbanks.",
    image: "images_web/dji_fly_20260118_072542_752_1768961621843_photo_optimized.webp",
    tagKm: "ឆ្នេរខ្សាច់ & បោះតង់",
    tagEn: "Beach & Camping"
  },
  {
    id: 2,
    category: "forest",
    titleKm: "២. កន្ទុយកោះហិប",
    titleEn: "2. Koh Hib Tail",
    descKm: "ទស្សនាព្រៃលិចទឹកដ៏ស្រស់បំព្រង លេងលំហែកាយលើឆ្នេរ និងថតរូបអនុស្សាវរីយ៍ជាមួយធម្មជាតិដងទន្លេ។",
    descEn: "Explore lush flooded river forests, relax on sandy shores, and photograph serene Mekong waterways.",
    image: "images_web/dji_fly_20260118_072618_754_1768961615817_photo_optimized.webp",
    tagKm: "ព្រៃលិចទឹក & ឆ្នេរ",
    tagEn: "Flooded Forest & Beach"
  },
  {
    id: 3,
    category: "heritage",
    titleKm: "៣. ទស្សនាផ្ទាំងថ្មកំបោរ",
    titleEn: "3. White Limestone Cliffs",
    descKm: "ទស្សនា និងថតរូបផ្ទាំងថ្មសកំបោរធម្មជាតិដ៏កម្រ ដែលឆ្លាក់ដោយកម្លាំងទឹករាប់ពាន់ឆ្នាំ។",
    descEn: "Marvel at dramatic white limestone cliff formations sculpted naturally by ancient river currents.",
    image: "images_web/IMG_20250518_065132_199.webp",
    tagKm: "ផ្ទាំងថ្មសធម្មជាតិ",
    tagEn: "White Stone Cliffs"
  },
  {
    id: 4,
    category: "water",
    titleKm: "៤. ទៅលេងកោះតាឃូន",
    titleEn: "4. Koh Takhoun Island",
    descKm: "ទស្សនាព្រៃលិចទឹក គយគន់ទឹកជួរហូរកាត់យ៉ាងខ្លាំងក្លា បោះតង់លើខ្សាច់ និងស្ទូចត្រីលេងកម្សាន្ត។",
    descEn: "Witness dynamic river rapids, explore flooded greenery, pitch tents, and enjoy recreational fishing.",
    image: "images_web/IMG_20250518_065147_022.webp",
    tagKm: "ទឹកជួរ & ស្ទូចត្រី",
    tagEn: "River Rapids & Angling"
  },
  {
    id: 5,
    category: "heritage",
    titleKm: "៥. ព្រៃអ្នកតា (ដើមឈើយក្ស)",
    titleEn: "5. Preay Nakta Sacred Tree",
    descKm: "ភ្ញៀវឡើងទៅទស្សនាដើមឈើបុរាណយក្សមានឫសដុះប្រទាក់ក្រឡា និងអុចធូបសុំសេចក្តីសុខសប្បាយ។",
    descEn: "Visit the legendary giant sacred tree rising above the river roots and light incense for blessings and peace.",
    image: "images_web/20260417_171908.webp",
    tagKm: "ជំនឿ & ដើមឈើធំ",
    tagEn: "Sacred Tree & Blessing"
  },
  {
    id: 6,
    category: "heritage",
    titleKm: "៦. ឡបុរាណ",
    titleEn: "6. Ancient Kiln Site",
    descKm: "ថតរូប និងទស្សនាសំណង់ឡបុរាណប្រវត្តិសាស្ត្រដែលបន្សល់ទុកជាមរតកវប្បធម៌ក្នុងតំបន់។",
    descEn: "Discover and photograph historical ancient kilns embedded along the cultural river landscape.",
    image: "images_web/20260410_082317.webp",
    tagKm: "ប្រវត្តិសាស្ត្រ & វប្បធម៌",
    tagEn: "History & Heritage"
  },
  {
    id: 7,
    category: "water",
    titleKm: "៧. ឆ្នេរខ្សាច់កន្ទុយកោះហាន",
    titleEn: "7. Koh Han Tail Sand Beach",
    descKm: "ចុះដើរលេងលើឆ្នេរខ្សាច់កណ្ដាលទន្លេ ថតរូបថ្ងៃលិចដ៏រ៉ូមែនទិក និងបោះតង់ជួបជុំគ្នា។",
    descEn: "Stroll across vast golden river sandbars, capture golden sunsets, and gather by the camp beach fire.",
    image: "images_web/IMG_20260109_134455_304.webp",
    tagKm: "ឆ្នេរខ្សាច់ & ថ្ងៃលិច",
    tagEn: "Sandbar & Sunset"
  },
  {
    id: 8,
    category: "forest",
    titleKm: "៨. ព្រៃលិចទឹកកន្ទុយកោះហាន",
    titleEn: "8. Koh Han Tail Flooded Forest",
    descKm: "ថតរូបស្អាតៗ និងចុះលេងទឹកក្នុងព្រៃលិចទឹកកន្ទុយកោះហាន ក្រោមម្លប់ឈើត្រឈឹងត្រឈៃ។",
    descEn: "Swim in tranquil shady waters and navigate kayaks under the dense submerged tree canopies.",
    image: "images_web/20261015_100910.webp",
    tagKm: "ព្រៃលិចទឹក & ហែលទឹក",
    tagEn: "Flooded Forest & Swimming"
  },
  {
    id: 9,
    category: "forest",
    titleKm: "៩. ព្រៃលិចទឹកកោះសំរោង",
    titleEn: "9. Koh Samraong Flooded Forest",
    descKm: "ជិះទូកកម្សាន្តទស្សនាព្រៃលិចទឹកដ៏ស្រស់ត្រកាលតាមបណ្ដោយដងទន្លេមេគង្គ និងស្វែងយល់ពីជីវចម្រុះ។",
    descEn: "Take a scenic boat cruise through Koh Samraong flooded wetlands and experience vibrant river biodiversity.",
    image: "images_web/20260417_170039.webp",
    tagKm: "ជិះទូកទស្សនាព្រៃ",
    tagEn: "Boat Tour & Canopy"
  }
];

// Tour Packages Data from PDF
const packagesData = [
  {
    id: "half-day",
    durationKm: "កន្លះថ្ងៃ",
    durationEn: "Half Day",
    titleKm: "ដំណើរកម្សាន្តជិះកាយ៉ាក់កន្លះថ្ងៃ",
    titleEn: "Half Day Kayaking Experience",
    summaryKm: "ជិះទូកកាយ៉ាក់ទស្សនាព្រៃលិចទឹក មើលសត្វស្លាប និងកោះធម្មជាតិនានាតាមដងទន្លេមេគង្គ (មានការណែនាំផ្លូវតាមផែនទី)។",
    summaryEn: "Kayaking adventure visiting the flooded forest, bird watching, and exploring Mekong islands with map orientation.",
    pricing: [
      { rangeKm: "១ នាក់", rangeEn: "1 person", price: "$50", unitKm: "ជើង", unitEn: "trip" },
      { rangeKm: "២ នាក់", rangeEn: "2 persons", price: "$25", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៣ - ៥ នាក់", rangeEn: "3 - 5 persons", price: "$20", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៦ - ១០ នាក់", rangeEn: "6 - 10 persons", price: "$15", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "១១ - ២០ នាក់", rangeEn: "11 - 20 persons", price: "$10", unitKm: "ម្នាក់", unitEn: "per pax" }
    ],
    includedKm: ["ទូកកាយ៉ាក់ (Kayak)", "ទូកយន្តសហគមន៍ (Boat)", "មគ្គុទ្ទេសក៍មូលដ្ឋាន (Local Guide)"],
    includedEn: ["Kayaks & safety paddles", "Community motorized boat", "Local guide & orientation"],
    popular: false
  },
  {
    id: "full-day-koh-han",
    durationKm: "១ ថ្ងៃពេញ",
    durationEn: "Full Day",
    titleKm: "កញ្ចប់ជិះកាយ៉ាក់ពេញមួយថ្ងៃនៅកោះហាន",
    titleEn: "Full Day Kayaking in Koh Han",
    summaryKm: "ព្រឹកជិះទូកទស្សនាព្រៃលិចទឹក និងជីវភាពអ្នកកោះ ញ៉ាំបាយលើកោះ។ រសៀលជិះកាយ៉ាក់មើលសត្វស្លាប និងកោះទន្លេមេគង្គ។",
    summaryEn: "Morning boat trip to flooded forest & island village lifestyle with lunch on island. Afternoon kayak tour & bird watching.",
    pricing: [
      { rangeKm: "១ នាក់", rangeEn: "1 person", price: "$75", unitKm: "ជើង", unitEn: "trip" },
      { rangeKm: "២ នាក់", rangeEn: "2 persons", price: "$35", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៣ - ៥ នាក់", rangeEn: "3 - 5 persons", price: "$25", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៦ - ១០ នាក់", rangeEn: "6 - 10 persons", price: "$20", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "១១ - ២០ នាក់", rangeEn: "11 - 20 persons", price: "$15", unitKm: "ម្នាក់", unitEn: "per pax" }
    ],
    includedKm: ["ទូកកាយ៉ាក់", "ទូកយន្តជូនដំណើរ", "អាហារ ១ពេល (បាយថ្ងៃត្រង់)", "មគ្គុទ្ទេសក៍ប្រចាំដំណើរ"],
    includedEn: ["Kayaks & gear", "Motorized river boat", "1 Local lunch meal", "Experienced local guide"],
    popular: true
  },
  {
    id: "full-day-osvay",
    durationKm: "១ ថ្ងៃពេញ",
    durationEn: "Full Day",
    titleKm: "កញ្ចប់កាយ៉ាក់ពី អូរស្វាយ មក កោះហាន",
    titleEn: "Full Day Kayak: O'Svay to Koh Han",
    summaryKm: "ព្រឹកជិះកាយ៉ាក់ពីអូរស្វាយមកកោះហាន មើលព្រៃលិចទឹក ភូមិវៀងសៀន និងញ៉ាំបាយថ្ងៃត្រង់។ រសៀលទៅមើលផ្ទាំងថ្មស និងកោះហាន។",
    summaryEn: "Morning kayak from O'Svay to Koh Han via flooded forests & Vien Sien village with lunch. Afternoon visit white stone cliffs.",
    pricing: [
      { rangeKm: "២ - ៥ នាក់", rangeEn: "2 - 5 persons", price: "$75", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៦ - ១០ នាក់", rangeEn: "6 - 10 persons", price: "$55", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "១១ - ២០ នាក់", rangeEn: "11 - 20 persons", price: "$35", unitKm: "ម្នាក់", unitEn: "per pax" }
    ],
    includedKm: ["អាហារថ្ងៃត្រង់ ១ពេល", "ទូកយន្តអមដំណើរ", "មគ្គុទ្ទេសក៍ក្នុងតំបន់ពេញមួយដំណើរ"],
    includedEn: ["1 Authentic island lunch", "Motorized escort boat", "Full-day dedicated local guide"],
    popular: false
  },
  {
    id: "2d1n-camping",
    durationKm: "២ ថ្ងៃ ១ យប់",
    durationEn: "2 Days 1 Night",
    titleKm: "ដំណើរកម្សាន្តកាយ៉ាក់ & បោះតង់លើកោះ",
    titleEn: "2D1N Kayaking & Island Beach Camping",
    summaryKm: "ថ្ងៃទី១៖ ជិះកាយ៉ាក់កាត់កោះសំរោង មើលថ្ងៃលិច និងបោះតង់រាត្រីលើកោះខ្សាច់។ ថ្ងៃទី២៖ ទៅព្រៃអ្នកតា ដើមឈើធំ ជីវភាពអ្នកកោះ និងព្រៃលិចទឹក។",
    summaryEn: "Day 1: Kayak through Koh Samraong, sunset & sandbar island camping. Day 2: Sacred giant tree blessing, island villagers & flooded forest.",
    pricing: [
      { rangeKm: "២ - ៤ នាក់", rangeEn: "2 - 4 persons", price: "$65", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "៥ - ១០ នាក់", rangeEn: "5 - 10 persons", price: "$45", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "១១ - ៣០ នាក់", rangeEn: "11 - 30 persons", price: "$35", unitKm: "ម្នាក់", unitEn: "per pax" }
    ],
    includedKm: ["អាហារ ៣ពេល (ល្ងាច & ព្រឹក)", "ទូកយន្ត & កាយ៉ាក់", "តង់បោះ & មគ្គុទ្ទេសក៍", "បង្គន់ចល័ត & សន្តិសុខយាមការពារ"],
    includedEn: ["3 Meals (Dinner & Breakfast)", "Boat & Kayaks", "Camping tents & local guide", "Mobile camp toilet & overnight security"],
    popular: true
  },
  {
    id: "3d2n-adventure",
    durationKm: "៣ ថ្ងៃ ២ យប់",
    durationEn: "3 Days 2 Nights",
    titleKm: "ដំណើរផ្សងព្រេងកោះហាន ៣ថ្ងៃ ២យប់",
    titleEn: "3D2N Ultimate Mekong Eco Adventure",
    summaryKm: "ទស្សនាអន្លង់កំបោរ កោះតាឃូន ព្រៃអ្នកតា ដើមឈើយក្ស ក្បាលកោះទន្លេមួយ ឆ្នេរខ្សាច់ធំ ផ្ទាំងថ្មស និងបោះតង់កណ្តាលទន្លេមេគង្គ។",
    summaryEn: "Comprehensive expedition: Anlong Kambor, Koh Takhoun, Preay Nakta sacred tree, Koh Tonlemouy beach, white stones & island camping.",
    pricing: [
      { rangeKm: "២ - ៥ នាក់", rangeEn: "2 - 5 persons", price: "$125", unitKm: "ម្នាក់ (ចរចាបាន)", unitEn: "per pax (negotiable)" },
      { rangeKm: "៥ - ១០ នាក់", rangeEn: "5 - 10 persons", price: "$95", unitKm: "ម្នាក់", unitEn: "per pax" },
      { rangeKm: "១១ - ២០ នាក់", rangeEn: "11 - 20 persons", price: "$75", unitKm: "ម្នាក់", unitEn: "per pax" }
    ],
    includedKm: ["អាហារ ៥ពេល (ថ្ងៃត្រង់ ល្ងាច ព្រឹក)", "ទូកយន្ត កាយ៉ាក់ និងតង់", "មគ្គុទ្ទេសក៍ ចុងភៅ & សន្តិសុខ", "កាហ្វេ & តែសម្រាក (Coffee Break)"],
    includedEn: ["5 Full meals (Lunch, Dinner, Breakfast)", "Boat, Kayaks & Tents", "Local guide, chef & night security", "Tea & coffee break service"],
    popular: false
  }
];

// Current State
let currentLang = localStorage.getItem("koh_han_lang") || "km";
let currentLightboxIdx = 0;
let currentCategoryFilter = "all";

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  setupLanguage();
  renderDestinations();
  renderPackages();
  setupEventListeners();
  setupScrollEffects();
});

// Setup Language
function setupLanguage() {
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "km" ? "en" : "km";
      localStorage.setItem("koh_han_lang", currentLang);
      applyLanguage();
    });
  }
  applyLanguage();
}

function applyLanguage() {
  const dict = i18n[currentLang];
  document.documentElement.lang = currentLang;
  
  if (currentLang === "en") {
    document.body.classList.add("lang-en");
  } else {
    document.body.classList.remove("lang-en");
  }

  // Update text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update Toggle Button Label
  const langLabel = document.getElementById("langToggleLabel");
  if (langLabel) {
    langLabel.textContent = currentLang === "km" ? "English" : "ភាសាខ្មែរ";
  }

  // Re-render dynamic components
  renderDestinations();
  renderPackages();
}

// Render 9 Destinations Gallery
function renderDestinations() {
  const container = document.getElementById("destinationsGrid");
  if (!container) return;

  const isKm = currentLang === "km";
  const filtered = currentCategoryFilter === "all" 
    ? destinationsData 
    : destinationsData.filter(d => d.category === currentCategoryFilter);

  container.innerHTML = filtered.map((item, idx) => `
    <div class="dest-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/60 flex flex-col cursor-pointer" onclick="openLightbox(${item.id})">
      <div class="relative h-60 sm:h-64 overflow-hidden bg-stone-100">
        <img 
          src="${item.image}" 
          alt="${isKm ? item.titleKm : item.titleEn}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          ${isKm ? item.tagKm : item.tagEn}
        </span>
        <button class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition-transform group-hover:scale-110" title="View photo">
          <i class="fas fa-expand-alt text-xs"></i>
        </button>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-lg text-stone-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
            ${isKm ? item.titleKm : item.titleEn}
          </h3>
          <p class="text-sm text-stone-600 leading-relaxed">
            ${isKm ? item.descKm : item.descEn}
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-medium">
          <span>${isKm ? 'ចុចមើលរូបធំ' : 'View High-Res Photo'}</span>
          <i class="fas fa-arrow-right text-emerald-700 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  `).join("");
}

// Render Tour Packages with exact pricing
function renderPackages() {
  const container = document.getElementById("packagesContainer");
  if (!container) return;

  const isKm = currentLang === "km";
  const dict = i18n[currentLang];

  container.innerHTML = packagesData.map(pkg => `
    <div class="bg-white rounded-3xl p-6 lg:p-7 shadow-lg border ${pkg.popular ? 'border-emerald-600 ring-2 ring-emerald-500/20' : 'border-stone-200/80'} relative flex flex-col justify-between transition-all hover:shadow-2xl">
      ${pkg.popular ? `
        <div class="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-700 to-green-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider">
          ${isKm ? 'ពេញនិយមបំផុត' : 'Most Popular'}
        </div>
      ` : ''}

      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            <i class="far fa-clock mr-1"></i> ${isKm ? pkg.durationKm : pkg.durationEn}
          </span>
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-2">
          ${isKm ? pkg.titleKm : pkg.titleEn}
        </h3>
        
        <p class="text-sm text-stone-600 mb-6 leading-relaxed">
          ${isKm ? pkg.summaryKm : pkg.summaryEn}
        </p>

        <!-- Pricing Tier Box -->
        <div class="bg-stone-50 rounded-2xl p-4 mb-6 border border-stone-200/70">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
            ${isKm ? 'តារាងតម្លៃតាមចំនួនសមាជិក' : 'Group Size Rates'}
          </div>
          <div class="space-y-2">
            ${pkg.pricing.map(tier => `
              <div class="flex items-center justify-between text-sm py-1 border-b border-stone-200/40 last:border-none">
                <span class="text-stone-700 font-medium">${isKm ? tier.rangeKm : tier.rangeEn}</span>
                <span class="font-bold text-emerald-900">
                  ${tier.price} <span class="text-xs font-normal text-stone-500">${isKm ? '/' + tier.unitKm : '/' + tier.unitEn}</span>
                </span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Included List -->
        <div class="mb-6">
          <div class="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
            ${dict.pkgIncludedTitle}
          </div>
          <ul class="space-y-1.5 text-xs text-stone-600">
            ${(isKm ? pkg.includedKm : pkg.includedEn).map(inc => `
              <li class="flex items-center">
                <i class="fas fa-check-circle text-emerald-600 mr-2 text-sm"></i>
                <span>${inc}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>

      <!-- Action Button -->
      <a 
        href="https://t.me/kohhancbet" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full text-center py-3 px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center space-x-2 ${pkg.popular ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-md' : 'bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-800'}"
      >
        <i class="fab fa-telegram-plane"></i>
        <span>${dict.pkgBookBtn}</span>
      </a>
    </div>
  `).join("");
}

// Lightbox modal logic
function openLightbox(destinationId) {
  const index = destinationsData.findIndex(d => d.id === destinationId);
  if (index === -1) return;
  currentLightboxIdx = index;
  updateLightboxContent();

  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.add("opacity-100"), 10);
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("opacity-100");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 200);
  }
}

function nextLightbox() {
  currentLightboxIdx = (currentLightboxIdx + 1) % destinationsData.length;
  updateLightboxContent();
}

function prevLightbox() {
  currentLightboxIdx = (currentLightboxIdx - 1 + destinationsData.length) % destinationsData.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = destinationsData[currentLightboxIdx];
  const isKm = currentLang === "km";
  
  const imgEl = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  const countEl = document.getElementById("lightboxCount");

  if (imgEl) imgEl.src = item.image;
  if (titleEl) titleEl.textContent = isKm ? item.titleKm : item.titleEn;
  if (descEl) descEl.textContent = isKm ? item.descKm : item.descEn;
  if (countEl) countEl.textContent = `${currentLightboxIdx + 1} / ${destinationsData.length}`;
}

// Open custom map modal
function openMapModal() {
  const modal = document.getElementById("mapModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeMapModal() {
  const modal = document.getElementById("mapModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    // Close menu when clicking link
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Gallery Category Filter Buttons
  document.querySelectorAll(".dest-filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".dest-filter-btn").forEach(b => {
        b.classList.remove("bg-emerald-800", "text-white");
        b.classList.add("bg-stone-100", "text-stone-700");
      });
      btn.classList.add("bg-emerald-800", "text-white");
      btn.classList.remove("bg-stone-100", "text-stone-700");

      currentCategoryFilter = btn.getAttribute("data-filter") || "all";
      renderDestinations();
    });
  });

  // Lightbox Controls
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  const backdrop = document.getElementById("lightboxBackdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextLightbox);
  if (prevBtn) prevBtn.addEventListener("click", prevLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  // Map Modal
  const mapImg = document.getElementById("kayakMapPreview");
  const mapCloseBtn = document.getElementById("mapModalClose");
  const mapBackdrop = document.getElementById("mapModalBackdrop");
  if (mapImg) mapImg.addEventListener("click", openMapModal);
  if (mapCloseBtn) mapCloseBtn.addEventListener("click", closeMapModal);
  if (mapBackdrop) mapBackdrop.addEventListener("click", closeMapModal);

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightboxModal");
    if (modal && !modal.classList.contains("hidden")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    }
    const mapModal = document.getElementById("mapModal");
    if (mapModal && !mapModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeMapModal();
    }
  });
}

// Scroll Effects (Navbar transparency, Back to top)
function setupScrollEffects() {
  const navbar = document.getElementById("mainNavbar");
  const backToTop = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    
    // Navbar appearance
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-emerald-950/95");
        navbar.classList.remove("bg-emerald-950/80");
      } else {
        navbar.classList.add("bg-emerald-950/80");
        navbar.classList.remove("shadow-lg", "bg-emerald-950/95");
      }
    }

    // Back to top button
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.remove("opacity-0", "pointer-events-none");
        backToTop.classList.add("opacity-100");
      } else {
        backToTop.classList.add("opacity-0", "pointer-events-none");
        backToTop.classList.remove("opacity-100");
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
