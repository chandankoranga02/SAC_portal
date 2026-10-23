export const BLOG_CATEGORIES = [
  'All',
  'Campus Updates',
  'Technical Council',
  'Cultural & Arts',
  'Sports & Adventure',
  'Student Governance',
];

export const blogsData = [
  {
    id: 'goonj-2026-dates-announced',
    title: "Goonj 2026: North India's Premier College Cultural Fest Returns to Garhwal Hills",
    excerpt:
      'The Student Activity Cell officially announces the dates and grand theme for Goonj 2026, bringing three days of music, theatre, literary duels, and celebrity night performances to the Pauri campus.',
    date: 'October 14, 2026',
    category: 'Cultural & Arts',
    readTime: '4 min read',
    featured: true,
    coverPhoto:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Ayush Bisht',
      role: 'Convenor, Cultural Affairs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Goonj 2026', 'Cultural Fest', 'Music', 'Theatre', 'Celebrity Night'],
    relatedIds: ['rads-rover-national-victory', 'spandan-sports-meet-preview', 'literary-society-annual-anthology'],
    content: {
      lead: 'With the arrival of autumn across the Garhwal range, GBPIET is once again preparing to host its hallmark cultural carnival — Goonj 2026. Sanctioned under the patronage of the Directorate of Student Welfare, the three-day extravaganza promises unprecedented participation from colleges across Uttarakhand and North India.',
      sections: [
        {
          heading: 'Theme Unveiling: "Dhwanikiran — Resonance of the Hills"',
          paragraphs: [
            'This year’s theme, "Dhwanikiran", celebrates the fusion of traditional Himalayan folklore with modern contemporary arts. From classical pahadi ragas reimagined with electronic acoustic synthesis to high-energy street theatre highlighting youth mental health and environmental conservation, Goonj 2026 aims to set a new benchmark for college festivals in the region.',
            'The central amphitheatre has undergone a complete acoustic overhaul, featuring high-fidelity line array audio monitors and dual panoramic projection arrays courtesy of the recently sanctioned SAC modernization grant.',
          ],
        },
        {
          heading: 'Flagship Competitions & Star Attractions',
          paragraphs: [
            'Over 35 competitions will span the three-day fiesta, including "Battle of the Bands", "Nrityangan (Solo & Group Dance)", "Natyamanch (Stage Play)", and "Aawaz (Street Play)". Cash prizes totaling over ₹3.5 Lakhs have been announced for podium finishers.',
            'While the identity of the star night headliner remains closely guarded by the Fest Directorate, student organizers hint at a nationally celebrated indie-fusion band that has previously topped collegiate music charts across the subcontinent.',
          ],
          quote: 'Goonj is not merely an annual event on our academic calendar; it is the heartbeat of student expression in these mountains.',
        },
        {
          heading: 'Volunteer & Leadership Inductions',
          paragraphs: [
            'Recruitment for the 18 sub-committees — including Guest Relations, Stage Design, Safety & First-Aid, and Digital Live-Streaming — is currently underway. Interested students can register via the Join SAC portal by October 25 to be part of the core crew.',
          ],
        },
      ],
    },
  },
  {
    id: 'rads-rover-national-victory',
    title: 'Robotics & Aero-Design Society (RADS) Clinches 2nd Place at National Himalayan Rover Conclave',
    excerpt:
      'Engineered within the SAC Innovation Lab, GBPIET’s 8-member multidisciplinary engineering contingent bested 32 premier institutes with their high-gradient autonomous rover prototype.',
    date: 'October 11, 2026',
    category: 'Technical Council',
    readTime: '3 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Rohan Verma',
      role: 'Lead System Architect, RADS',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Robotics', 'RADS', 'Autonomous Navigation', 'Innovation Lab', 'Hardware'],
    relatedIds: ['hackathon-innovate-gbpiet-recap', 'goonj-2026-dates-announced'],
    content: {
      lead: 'In a landmark technical milestone for the institute, the student-led Robotics & Aero-Design Society (RADS) secured the 1st Runner-Up position alongside a ₹50,000 research award at the Inter-NIT/IIT Himalayan Tech Summit held in Shimla.',
      sections: [
        {
          heading: 'Tackling 45-Degree Terrains with Computer Vision',
          paragraphs: [
            'The competition evaluated planetary rovers against stringent search-and-rescue simulations, extreme incline stability tests, and remote telemetry reliability over complex terrain.',
            'The team’s prototype, christened "Garud-IV", featured custom 3D-printed rocker-bogie suspension geometries, stereoscopic visual SLAM for simultaneous mapping without GPS, and a 4-degree-of-freedom robotic arm capable of retrieving soil samples weighing up to 2.5 kg.',
          ],
          quote: 'We spent countless sleepless nights soldering circuits and running outdoor incline tests right on the campus hills behind the hostel blocks.',
        },
        {
          heading: 'Next Stop: International Rover Challenge 2027',
          paragraphs: [
            'Building on this triumph, RADS has received an invitation to submit qualification telemetry for the International Rover Challenge. The SAC Technical Council has committed additional lab hardware compute units and high-torque brushless drive motors to accelerate the team’s next generation build.',
          ],
        },
      ],
    },
  },
  {
    id: 'winter-alpine-trek-chandrashila',
    title: 'SAC Adventure Club Sets Summit Goals: Chandrashila Winter Expedition 2026',
    excerpt:
      'The Himalayan Mountaineering & Adventure Club issues medical checklists, training regimens, and itinerary details for the upcoming high-altitude trek to Tungnath and Chandrashila Peak.',
    date: 'October 08, 2026',
    category: 'Sports & Adventure',
    readTime: '4 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Capt. R. S. Bhandari',
      role: 'Adventure Sports Advisor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Adventure', 'Trekking', 'Chandrashila', 'Himalayas', 'Fitness'],
    relatedIds: ['spandan-sports-meet-preview', 'green-campus-sac-sustainability'],
    content: {
      lead: 'Perched amidst the majestic snow-capped peaks of Rudraprayag, the Chandrashila summit at 13,100 feet offers one of the most breathtaking panoramic vistas of Nanda Devi, Trishul, and Chaukhamba. This November, 40 selected student mountaineers will embark on this demanding expedition.',
      sections: [
        {
          heading: 'Physical Conditioning & Altitude Preparedness',
          paragraphs: [
            'High-altitude winter trekking demands robust stamina and disciplined acclimatization. All registered students are undergoing mandatory morning endurance conditioning on the institute athletic track, including stair-climb drills with weighted rucksacks.',
            'Institute medical officers will conduct pulmonary and cardiovascular screening from November 10th to 15th. Only students cleared by the medical wing and possessing signed parental consent will be issued clearance certificates.',
          ],
        },
        {
          heading: 'Leave-No-Trace & Eco-Conservation Protocol',
          paragraphs: [
            'In accordance with Uttarakhand Forest Department regulations, the expedition will maintain a strict zero-single-use-plastic regime. The club has procured compostable ration packs and biodegradable sanitation kits to ensure pristine mountain trails remain untouched.',
          ],
          quote: 'The mountains do not demand that we conquer them; they demand that we learn humility and camaraderie in their presence.',
        },
      ],
    },
  },
  {
    id: 'student-senate-elections-guide',
    title: 'Student Senate Elections 2026: Eligibility, Nomination Timeline & Model Code of Conduct',
    excerpt:
      'The Chief Returning Officer outlines critical milestones for the upcoming SAC Senate elections, ensuring transparent representation across all academic years and engineering departments.',
    date: 'October 05, 2026',
    category: 'Student Governance',
    readTime: '3 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Dr. Yatindra Kumar',
      role: 'Chief Returning Officer, SAC',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Elections', 'Senate', 'Governance', 'Democracy', 'Leadership'],
    relatedIds: ['goonj-2026-dates-announced', 'hackathon-innovate-gbpiet-recap'],
    content: {
      lead: 'The Student Activity Cell functions as the primary democratic bridge between the student fraternity and institute administration. As the academic session transitions into mid-semester, the SAC Election Commission has notified the formal schedule for the 2026-27 Student Senate elections.',
      sections: [
        {
          heading: 'Key Electoral Positions & Eligibility Benchmarks',
          paragraphs: [
            'Nominations are officially open for Student President, Vice-President (Reserved for Women Representation), Technical Secretary, Cultural Secretary, Sports Secretary, and Branch Executive Representatives.',
            'In adherence to the Lyngdoh Committee guidelines, candidates must possess a minimum cumulative CGPA of 7.5, zero active academic backlogs, 75% minimum classroom attendance, and an untarnished disciplinary track record certified by the Chief Proctor’s office.',
          ],
        },
        {
          heading: 'Electoral Calendar & Central Hustings',
          paragraphs: [
            'Nomination filing opens on October 18 and closes on October 21. Following rigorous scrutiny and manifesto validation, the central open-air debate (General Hustings) will take place at the Central Amphitheatre on October 24.',
            'Voting will be executed via secure biometric electronic polling booths set up inside the Administrative Block to ensure maximum turnout and complete ballot transparency.',
          ],
        },
      ],
    },
  },
  {
    id: 'hackathon-innovate-gbpiet-recap',
    title: 'Innovate GBPIET 2026: 36-Hour Hackathon Showcases High-Impact Student Prototypes',
    excerpt:
      'From AI-driven agricultural crop surveillance for hill farmers to decentralized hostel resource managers, over 180 student developers built solutions around the clock.',
    date: 'September 28, 2026',
    category: 'Technical Council',
    readTime: '3 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Sneha Dobhal',
      role: 'Lead, SAC Coding Syndicate',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Hackathon', 'AI/ML', 'Web Dev', 'Innovation', 'Coding'],
    relatedIds: ['rads-rover-national-victory', 'literary-society-annual-anthology'],
    content: {
      lead: 'Caffeine, code, and cutting-edge creativity dominated the SAC Innovation Wing this past weekend as 45 teams competed across five core problem tracks at "Innovate GBPIET 2026".',
      sections: [
        {
          heading: 'Winning Solution: "KisanDrishti" Edge-AI Drone Analytics',
          paragraphs: [
            'Taking home the Grand Champion trophy and ₹40,000 cash grant was Team AgroTech, composed of 3rd-year CSE and ECE students. They deployed an ultra-lightweight computer vision model onto Raspberry Pi hardware that detects early apple scab fungal infestations from drone imagery in mountainous orchards.',
            'Mentors from alumni in tech hubs including Bengaluru and Seattle evaluated the prototypes during Sunday’s 5-minute live demo gauntlet.',
          ],
          quote: 'What impressed the jury most was that every prototype addressed practical, real-world constraints faced by regional communities in Uttarakhand.',
        },
        {
          heading: 'Incubation & Patent Support',
          paragraphs: [
            'The Top 3 teams have been fast-tracked into the GBPIET Technology Incubation Cell (TBI), receiving seed funding, free cloud server credits, and dedicated IP filing guidance from faculty advisors.',
          ],
        },
      ],
    },
  },
  {
    id: 'literary-society-annual-anthology',
    title: 'Unfolding Words: Literary & Debating Society Unveils Annual Anthology "Oorja"',
    excerpt:
      'The 2026 edition of Oorja brings together 80 original student poems, bilingual essays, investigative campus editorials, and evocative mountain photography.',
    date: 'September 20, 2026',
    category: 'Cultural & Arts',
    readTime: '3 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Tanmay Rawat',
      role: 'Editor-in-Chief, Oorja',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Literature', 'Poetry', 'Oorja', 'Creative Writing', 'Anthology'],
    relatedIds: ['goonj-2026-dates-announced', 'student-senate-elections-guide'],
    content: {
      lead: 'In a quiet campus surrounded by pine valleys, literature provides a sanctuary of deep reflection. The Literary & Debating Society officially released the physical and digital print editions of "Oorja 2026".',
      sections: [
        {
          heading: 'A Dual-Language Celebration of Voice',
          paragraphs: [
            'Featuring works written in both Hindi and English, the anthology traverses themes of identity, transition from rural towns to technical institutes, nostalgic winter evenings, and hope for sustainable engineering futures.',
            'The cover art was designed by the SAC Design Wing, utilizing a minimalist linocut depiction of the Trishul peak intertwined with a fountain pen quill.',
          ],
        },
        {
          heading: 'Open Mic & Book Launch Event',
          paragraphs: [
            'To commemorate the launch, an intimate open mic session took place under the faculty lawn gazebos. Over 30 student poets recited their original pieces to an attentive gathering of faculty, peers, and alumni guests.',
            'Copies of Oorja are now accessible at the Central Library Reference Desk and in digital PDF format via the SAC Publications repository.',
          ],
        },
      ],
    },
  },
  {
    id: 'green-campus-sac-sustainability',
    title: 'Prakriti Club Launches Zero-Plastic Green Campus Drive with 500 Native Saplings',
    excerpt:
      'Students and faculty unite in a campus-wide reforestation and sustainability drive, establishing composting pits and indigenous deodar saplings across hostel perimeters.',
    date: 'September 15, 2026',
    category: 'Campus Updates',
    readTime: '3 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Priyanka Semwal',
      role: 'Convenor, Prakriti Environmental Cell',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Sustainability', 'Green Campus', 'Environment', 'Tree Plantation'],
    relatedIds: ['winter-alpine-trek-chandrashila', 'goonj-2026-dates-announced'],
    content: {
      lead: 'Recognizing our shared stewardship for the pristine Garhwali ecology, the Prakriti Environmental Club under SAC conducted its biggest plantation campaign of the decade this Friday.',
      sections: [
        {
          heading: 'Restoring Indigenous Oak and Deodar Canopies',
          paragraphs: [
            'Volunteers planted 500 indigenous saplings — primarily Banjh (Himalayan Oak), Deodar, and Buransh (Rhododendron) — known for their soil retention capabilities and moisture preservation in steep hill terrains.',
            'Each hostel wing has been assigned maintenance custodianship over dedicated plantation plots, with progress monitored via geo-tagged student logs.',
          ],
          quote: 'We study engineering so that we can leave the planet better than we inherited it. Preserving our home campus is our first test.',
        },
        {
          heading: 'Phasing Out Single-Use Plastics',
          paragraphs: [
            'Alongside the plantation drive, all campus cafeterias and tuck shops have signed a charter eliminating single-use plastic cups and cutlery, replacing them with biodegradable leaf plates and reusable steel tumblers.',
          ],
        },
      ],
    },
  },
  {
    id: 'spandan-sports-meet-preview',
    title: 'Spandan Inter-Branch Sports Meet 2026: Fixtures, Venues, and Rivalries Reignited',
    excerpt:
      'Over 600 athletes gear up for two weeks of intense competition in football, cricket, volleyball, badminton, athletics, and chess for the coveted Overall Championship Trophy.',
    date: 'September 08, 2026',
    category: 'Sports & Adventure',
    readTime: '4 min read',
    featured: false,
    coverPhoto:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Vikram Singh Negi',
      role: 'Sports Secretary, SAC',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    },
    tags: ['Spandan', 'Sports', 'Cricket', 'Athletics', 'Championship'],
    relatedIds: ['winter-alpine-trek-chandrashila', 'rads-rover-national-victory'],
    content: {
      lead: 'The thunderous cheers of hostel cheering squads are set to echo across the sports complex as the Spandan Inter-Branch Sports Meet kicks off this Wednesday.',
      sections: [
        {
          heading: 'Inter-Branch Rivalries on the Pitch',
          paragraphs: [
            'Defending champions Computer Science & Engineering face a fierce challenge from Mechanical Engineering in the opening cricket clash at the Main Oval. Meanwhile, the basketball and volleyball courts feature illuminated floodlights for thrilling evening clashes.',
            'A brand-new synthetic surface for the table tennis and badminton arena will host matches under international tournament guidelines.',
          ],
        },
        {
          heading: 'Focus on Inclusivity and Fair Play',
          paragraphs: [
            'For the first time, Spandan features mixed-gender track relays and e-sports tournaments (Valorant & BGMI) alongside traditional field events.',
            'The SAC Sports Council has instituted a "Fair Play & Sportsmanship Accolade" to honor branch contingents that exhibit exemplary respect toward opponents and referees throughout the tournament.',
          ],
        },
      ],
    },
  },
];

export const getBlogById = (id) => {
  return blogsData.find((b) => b.id === id);
};

export const getRelatedBlogs = (currentId, limit = 3) => {
  const current = getBlogById(currentId);
  if (!current) return blogsData.slice(0, limit);

  // First pick explicitly related IDs
  if (current.relatedIds && current.relatedIds.length > 0) {
    const explicitlyRelated = blogsData.filter(
      (b) => b.id !== currentId && current.relatedIds.includes(b.id)
    );
    if (explicitlyRelated.length >= limit) {
      return explicitlyRelated.slice(0, limit);
    }
  }

  // Fallback to same category
  const sameCategory = blogsData.filter(
    (b) => b.id !== currentId && b.category === current.category
  );
  const others = blogsData.filter(
    (b) => b.id !== currentId && b.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};
