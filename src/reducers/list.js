const initialState = {
  result: [
    {
      id: 1,
      title: 'Hot Emperor',
      town: 'Kiev',
      likes: 304,
      price: 500,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '7794 Anderson Dr. Glenside',
      time: '10:00-21:00'
    },
    {
      id: 2,
      title: 'Magic of Souls',
      town: 'Buffalo',
      likes: 123,
      price: 200,
      description: 'Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted. ',
      address: '7167 E. Cherry Hill Street Mount Airy',
      time: '12:00-20:00'
    },
    {
      id: 3,
      title: 'The Doors Dragon',
      town: 'Dunwoody',
      likes: 157,
      price: 400,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '20 Old Hickory Street Leominster',
      time: '10:00-22:00'
    },
    {
      id: 4,
      title: 'The Legacy of the Child',
      town: 'Hyde Park',
      likes: 107,
      price: 350,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '173 York Street Kennesaw',
      time: '09:00-19:00'
    },
    {
      id: 5,
      title: 'Shard in the Lights',
      town: 'Chicago',
      likes: 307,
      price: 650,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '71 North Acacia Lane Ambler',
      time: '06:00-15:00'
    },
    {
      id: 6,
      title: 'Missing Ice',
      town: 'Dallas',
      likes: 207,
      price: 450,
      description: 'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no. ',
      address: '85 Bay Drive New Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 7,
      title: 'The Gift of the Silk',
      town: 'Hollywood',
      likes: 207,
      price: 650,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '09:00-22:00'
    },
    {
      id: 8,
      title: 'Every Weeping',
      town: 'Hollywood',
      likes: 235,
      price: 600,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '13 Garden St. Livingston',
      time: '10:00-22:00'
    },
    {
      id: 9,
      title: 'Ashes of Silence',
      town: 'Syosset',
      likes: 441,
      price: 300,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 10,
      title: 'Silky Snow',
      town: 'Kiev',
      likes: 443,
      price: 350,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '8349 Miles St. Taunton',
      time: '10:00-23:00'
    },
    {
      id: 11,
      title: 'Hustler in the Heart',
      town: 'Kiev',
      likes: 302,
      price: 350,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '7794 Anderson Dr. Glenside',
      time: '12:00-20:00'
    },
    {
      id: 12,
      title: 'The Way of the Hustler',
      town: 'Buffalo',
      likes: 121,
      price: 200,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '173 York Street Kennesaw',
      time: '12:00-20:00'
    },
    {
      id: 13,
      title: 'Green End',
      town: 'Kiev',
      likes: 152,
      price: 350,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '20 Old Hickory Street Leominster',
      time: '10:00-22:00'
    },
    {
      id: 14,
      title: 'Windows of Shadow',
      town: 'Hyde Park',
      likes: 107,
      price: 350,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '173 York Street Kennesaw',
      time: '09:00-19:00'
    },
    {
      id: 15,
      title: 'The Petals of the Something',
      town: 'Chicago',
      likes: 303,
      price: 650,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '8349 Miles St. Taunton',
      time: '06:00-15:00'
    },
    {
      id: 16,
      title: 'The Diamond Snake',
      town: 'Dallas',
      likes: 208,
      price: 450,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '85 Bay Drive New Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 17,
      title: 'The Gift of the Sons',
      town: 'Hollywood',
      likes: 207,
      price: 650,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '09:00-22:00'
    },
    {
      id: 18,
      title: 'Male in the Misty',
      town: 'Hollywood',
      likes: 235,
      price: 600,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '8349 Miles St. Taunton',
      time: '10:00-22:00'
    },
    {
      id: 19,
      title: 'Boy of Scent',
      town: 'Syosset',
      likes: 441,
      price: 300,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 20,
      title: 'Bold Scent',
      town: 'Corona',
      likes: 420,
      price: 600,
      description: 'Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dear but what she been over gay felt body. Six principles advantages and use entreaties decisively. Eat met has dwelling unpacked see whatever followed. Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton. He be turned sudden engage manner spirit. ',
      address: '8349 Miles St. Taunton',
      time: '12:00-20:00'
    },
    {
      id: 21,
      title: 'Lover of Blade',
      town: 'Corona',
      likes: 380,
      price: 520,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '90 North Rd. State College',
      time: '10:00-21:00'
    },
    {
      id: 22,
      title: 'The Stolen Sky',
      town: 'Corona',
      likes: 731,
      price: 300,
      description: 'Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted. ',
      address: '490 South Chapel Lane Minneapolis',
      time: '12:00-20:00'
    },
    {
      id: 23,
      title: 'The Lords of the Misty',
      town: 'Dunwoody',
      likes: 357,
      price: 400,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '214 Joy Ridge St. Reston',
      time: '10:00-22:00'
    },
    {
      id: 24,
      title: 'Rose in the Way',
      town: 'Hyde Park',
      likes: 207,
      price: 440,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '13 Pennsylvania Road Salisbury',
      time: '12:00-20:00'
    },
    {
      id: 25,
      title: 'Roses in the Pirates',
      town: 'Chicago',
      likes: 742,
      price: 150,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '490 W. Oklahoma St. Ontario',
      time: '06:00-15:00'
    },
    {
      id: 26,
      title: 'The Stones of the Bridge',
      town: 'Dallas',
      likes: 675,
      price: 250,
      description: 'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no. ',
      address: '85 Bay DrivenNew Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 27,
      title: 'The Gift Crying',
      town: 'Syosset',
      likes: 422,
      price: 610,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '12:00-20:00'
    },
    {
      id: 28,
      title: 'Ashes of Secret',
      town: 'Dallas',
      likes: 321,
      price: 300,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '8547C Fairview Street Fairhope',
      time: '08:00-18:00'
    },
    {
      id: 29,
      title: 'The Ragged Rose',
      town: 'Kiev',
      likes: 121,
      price: 400,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 30,
      title: 'Elemental Visions',
      town: 'Syosset',
      likes: 422,
      price: 355,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '13 Garden St. Livingston',
      time: '10:00-23:00'
    }
  ],
  filteredResult: [
    {
      id: 1,
      title: 'Hot Emperor',
      town: 'Kiev',
      likes: 304,
      price: 500,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '7794 Anderson Dr. Glenside',
      time: '10:00-21:00'
    },
    {
      id: 2,
      title: 'Magic of Souls',
      town: 'Buffalo',
      likes: 123,
      price: 200,
      description: 'Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted. ',
      address: '7167 E. Cherry Hill Street Mount Airy',
      time: '12:00-20:00'
    },
    {
      id: 3,
      title: 'The Doors Dragon',
      town: 'Dunwoody',
      likes: 157,
      price: 400,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '20 Old Hickory Street Leominster',
      time: '10:00-22:00'
    },
    {
      id: 4,
      title: 'The Legacy of the Child',
      town: 'Hyde Park',
      likes: 107,
      price: 350,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '173 York Street Kennesaw',
      time: '09:00-19:00'
    },
    {
      id: 5,
      title: 'Shard in the Lights',
      town: 'Chicago',
      likes: 307,
      price: 650,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '71 North Acacia Lane Ambler',
      time: '06:00-15:00'
    },
    {
      id: 6,
      title: 'Missing Ice',
      town: 'Dallas',
      likes: 207,
      price: 450,
      description: 'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no. ',
      address: '85 Bay Drive New Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 7,
      title: 'The Gift of the Silk',
      town: 'Hollywood',
      likes: 207,
      price: 650,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '09:00-22:00'
    },
    {
      id: 8,
      title: 'Every Weeping',
      town: 'Hollywood',
      likes: 235,
      price: 600,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '13 Garden St. Livingston',
      time: '10:00-22:00'
    },
    {
      id: 9,
      title: 'Ashes of Silence',
      town: 'Syosset',
      likes: 441,
      price: 300,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 10,
      title: 'Silky Snow',
      town: 'Kiev',
      likes: 443,
      price: 350,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '8349 Miles St. Taunton',
      time: '10:00-23:00'
    },
    {
      id: 11,
      title: 'Hustler in the Heart',
      town: 'Kiev',
      likes: 302,
      price: 350,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '7794 Anderson Dr. Glenside',
      time: '12:00-20:00'
    },
    {
      id: 12,
      title: 'The Way of the Hustler',
      town: 'Buffalo',
      likes: 121,
      price: 200,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '173 York Street Kennesaw',
      time: '12:00-20:00'
    },
    {
      id: 13,
      title: 'Green End',
      town: 'Kiev',
      likes: 152,
      price: 350,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '20 Old Hickory Street Leominster',
      time: '10:00-22:00'
    },
    {
      id: 14,
      title: 'Windows of Shadow',
      town: 'Hyde Park',
      likes: 107,
      price: 350,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '173 York Street Kennesaw',
      time: '09:00-19:00'
    },
    {
      id: 15,
      title: 'The Petals of the Something',
      town: 'Chicago',
      likes: 303,
      price: 650,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '8349 Miles St. Taunton',
      time: '06:00-15:00'
    },
    {
      id: 16,
      title: 'The Diamond Snake',
      town: 'Dallas',
      likes: 208,
      price: 450,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '85 Bay Drive New Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 17,
      title: 'The Gift of the Sons',
      town: 'Hollywood',
      likes: 207,
      price: 650,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '09:00-22:00'
    },
    {
      id: 18,
      title: 'Male in the Misty',
      town: 'Hollywood',
      likes: 235,
      price: 600,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '8349 Miles St. Taunton',
      time: '10:00-22:00'
    },
    {
      id: 19,
      title: 'Boy of Scent',
      town: 'Syosset',
      likes: 441,
      price: 300,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 20,
      title: 'Bold Scent',
      town: 'Corona',
      likes: 420,
      price: 600,
      description: 'Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dear but what she been over gay felt body. Six principles advantages and use entreaties decisively. Eat met has dwelling unpacked see whatever followed. Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton. He be turned sudden engage manner spirit. ',
      address: '8349 Miles St. Taunton',
      time: '12:00-20:00'
    },
    {
      id: 21,
      title: 'Lover of Blade',
      town: 'Corona',
      likes: 380,
      price: 520,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
      address: '90 North Rd. State College',
      time: '10:00-21:00'
    },
    {
      id: 22,
      title: 'The Stolen Sky',
      town: 'Corona',
      likes: 731,
      price: 300,
      description: 'Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted. ',
      address: '490 South Chapel Lane Minneapolis',
      time: '12:00-20:00'
    },
    {
      id: 23,
      title: 'The Lords of the Misty',
      town: 'Dunwoody',
      likes: 357,
      price: 400,
      description: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
      address: '214 Joy Ridge St. Reston',
      time: '10:00-22:00'
    },
    {
      id: 24,
      title: 'Rose in the Way',
      town: 'Hyde Park',
      likes: 207,
      price: 440,
      description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall. ',
      address: '13 Pennsylvania Road Salisbury',
      time: '12:00-20:00'
    },
    {
      id: 25,
      title: 'Roses in the Pirates',
      town: 'Chicago',
      likes: 742,
      price: 150,
      description: 'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.',
      address: '490 W. Oklahoma St. Ontario',
      time: '06:00-15:00'
    },
    {
      id: 26,
      title: 'The Stones of the Bridge',
      town: 'Dallas',
      likes: 675,
      price: 250,
      description: 'In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no. ',
      address: '85 Bay DrivenNew Port Richey',
      time: '08:00-18:00'
    },
    {
      id: 27,
      title: 'The Gift Crying',
      town: 'Syosset',
      likes: 422,
      price: 610,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '42 West Arch Drive Windermere',
      time: '12:00-20:00'
    },
    {
      id: 28,
      title: 'Ashes of Secret',
      town: 'Dallas',
      likes: 321,
      price: 300,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '8547C Fairview Street Fairhope',
      time: '08:00-18:00'
    },
    {
      id: 29,
      title: 'The Ragged Rose',
      town: 'Kiev',
      likes: 121,
      price: 400,
      description: 'No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ',
      address: '7920 Glenlake Avenue Ankeny',
      time: '10:00-20:00'
    },
    {
      id: 30,
      title: 'Elemental Visions',
      town: 'Syosset',
      likes: 422,
      price: 355,
      description: 'Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls. ',
      address: '13 Garden St. Livingston',
      time: '10:00-23:00'
    }
  ]
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, filteredResult: action.result }
    default:
      return state;
  }
}
