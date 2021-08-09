let flags = ['ad','ae','af','ag','ai','al','am','ao','ar','at','au','az','ba','bb','bd','be','bf','bg',
'bh','bi','bj','bo','br','bs','bt','bw','by','bz','ca','cd','cf','cg','ch','ci','cl','cm','cn','co','cr','cu',
'cv','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','fi','fj','fm','fr','ga','gb',
'gd','ge','gf','gh','gm','gn','gq','gr','gt','gw','gy','hn','hr','ht','hu','id','ie','il','in','iq','ir','is',
'it','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','kz','la','lb','lc','li','lk','lr','ls','lt',
'lu','lv','ly','ma','md','me','mg','mk','ml','mm','mn','mr','mt','mu','mv','mw','mx','my','mz','na','ne','ng',
'ni','nl','no','np','nr','nz','om','pa','pe','pg','ph','pk','pl','ps','pt','pw','py','qa','ro','rs','ru','rw',
'sa','sc','sd','se','sg','si','sk','sl','sm','sn','so','sr','ss','st','sv','sy','sz','td','tg','th','tj','tl',
'tm','tn','to','tr','tt','tv','tz','ua','ug','us','uy','uz','va','vc','ve','vn','vu','ye','za','zm','zw']

let flagObjects = [{'code': 'ad', 'name': 'andorra'},{'code': 'ae', 'name': 'united arab emirates', 'altNames': 'uae'},
{'code': 'af', 'name': 'afghanistan'},{'code': 'ag', 'name': 'antigua and barbuda'},{'code': 'ai', 'name': 'anguilla'},
{'code': 'al', 'name': 'albania'},{'code': 'am', 'name': 'armenia'},{'code': 'ao', 'name': 'angola'},
{'code': 'ar', 'name': 'argentina'},{'code': 'at', 'name': 'austria'},{'code': 'au', 'name': 'australia'},
{'code': 'az', 'name': 'azerbaijan'},{'code': 'ba', 'name': 'bosnia and herzegovina'},{'code': 'bb', 'name': 'barbados'},
{'code': 'bd', 'name': 'bangladesh'},{'code': 'be', 'name': 'belgium'},{'code': 'bf', 'name': 'burkina faso'},
{'code': 'bg', 'name': 'bulgaria'},{'code': 'bh', 'name': 'bahrain'},{'code': 'bi', 'name': 'burundi'},
{'code': 'bj', 'name': 'benin'},{'code': 'bo', 'name': 'bolivia'},{'code': 'br', 'name': 'brazil'},
{'code': 'bs', 'name': 'bahamas'},{'code': 'bt', 'name': 'bhutan'},{'code': 'bw', 'name': 'botswana'},
{'code': 'by', 'name': 'belarus'},{'code': 'bz', 'name': 'belize'},{'code': 'ca', 'name': 'canada'},
{'code': 'cd', 'name': 'drc', 'altNames': 'democratic republic of the congo'},{'code': 'cf', 'name': 'central african republic'},{'code': 'cg', 'name': 'congo'},
{'code': 'ch', 'name': 'switzerland'},{'code': 'ci', 'name': 'ivory coast', 'altNames': "cote d'ivoire"},{'code': 'cl', 'name': 'chile'},
{'code': 'cm', 'name': 'cameroon'},{'code': 'cn', 'name': 'china'},{'code': 'co', 'name': 'colombia'},
{'code': 'cr', 'name': 'costa rica'},{'code': 'cu', 'name': 'cuba'},{'code': 'cv', 'name': 'cape verde'},
{'code': 'cy', 'name': 'cyprus'},{'code': 'cz', 'name': 'czech republic'},{'code': 'de', 'name': 'germany'},
{'code': 'dj', 'name': 'djibouti'},{'code': 'dk', 'name': 'denmark'},{'code': 'dm', 'name': 'dominica'},
{'code': 'do', 'name': 'dominican republic'},{'code': 'dz', 'name': 'algeria'},{'code': 'ec', 'name': 'ecuador'},
{'code': 'ee', 'name': 'estonia'},{'code': 'eg', 'name': 'egypt'},{'code': 'eh', 'name': 'western sahara'},
{'code': 'er', 'name': 'eritrea'},{'code': 'es', 'name': 'spain'},{'code': 'et', 'name': 'ethiopia'},
{'code': 'fi', 'name': 'finland'},{'code': 'fj', 'name': 'fiji'},{'code': 'fm', 'name': 'micronesia'},
{'code': 'fr', 'name': 'france'},{'code': 'ga', 'name': 'gabon'},{'code': 'gb', 'name': 'united kingdom', 'altNames': 'great britain'},
{'code': 'gd', 'name': 'grenada'},{'code': 'ge', 'name': 'georgia'},{'code': 'gf', 'name': 'french guiana'},
{'code': 'gh', 'name': 'ghana'},{'code': 'gm', 'name': 'gambia'},{'code': 'gn', 'name': 'guinea'},
{'code': 'gq', 'name': 'equatorial guinea'},{'code': 'gr', 'name': 'greece'},{'code': 'gt', 'name': 'guatemala'},
{'code': 'gw', 'name': 'guinea-bissau'},{'code': 'gy', 'name': 'guyana'},{'code': 'hn', 'name': 'honduras'},
{'code': 'hr', 'name': 'croatia'},{'code': 'ht', 'name': 'haiti'},{'code': 'hu', 'name': 'hungary'},
{'code': 'id', 'name': 'indonesia'},{'code': 'ie', 'name': 'ireland', 'altNames': 'republic of ireland'},{'code': 'il', 'name': 'israel'},
{'code': 'in', 'name': 'india'},{'code': 'iq', 'name': 'iraq'},{'code': 'ir', 'name': 'iran'},{'code': 'is', 'name': 'iceland'},
{'code': 'it', 'name': 'italy'},{'code': 'jm', 'name': 'jamaica'},{'code': 'jo', 'name': 'jordan'},
{'code': 'jp', 'name': 'japan'},{'code': 'ke', 'name': 'kenya'},{'code': 'kg', 'name': 'kyrgyzstan'},
{'code': 'kh', 'name': 'cambodia'},{'code': 'ki', 'name': 'kiribati'},{'code': 'km', 'name': 'comoros'},
{'code': 'kn', 'name': 'saint kitts and nevis'},{'code': 'kp', 'name': 'north korea'},{'code': 'kr', 'name': 'south korea'},
{'code': 'kw', 'name': 'kuwait'},{'code': 'kz', 'name': 'kazakhstan'},{'code': 'la', 'name': 'laos'},
{'code': 'lb', 'name': 'lebanon'},{'code': 'lc', 'name': 'saint lucia'},{'code': 'li', 'name': 'liechtenstein'},
{'code': 'lk', 'name': 'sri lanka'},{'code': 'lr', 'name': 'liberia'},{'code': 'ls', 'name': 'lesotho'},
{'code': 'lt', 'name': 'lithuania'},{'code': 'lu', 'name': 'luxembourg'},{'code': 'lv', 'name': 'latvia'},
{'code': 'ly', 'name': 'libya'},{'code': 'ma', 'name': 'morocco'},{'code': 'md', 'name': 'moldova'},
{'code': 'me', 'name': 'montenegro'},{'code': 'mg', 'name': 'madagascar'},{'code': 'mk', 'name': 'macedonia'},
{'code': 'ml', 'name': 'mali'},{'code': 'mm', 'name': 'myanmar'},{'code': 'mn', 'name': 'mongolia'},
{'code': 'mr', 'name': 'mauritania'},{'code': 'mt', 'name': 'malta'},{'code': 'mu', 'name': 'mauritius'},
{'code': 'mv', 'name': 'maldives'},{'code': 'mw', 'name': 'malawi'},{'code': 'mx', 'name': 'mexico'},
{'code': 'my', 'name': 'malaysia'},{'code': 'mz', 'name': 'mozambique'},{'code': 'na', 'name': 'namibia'},
{'code': 'ne', 'name': 'niger'},{'code': 'ng', 'name': 'nigeria'},{'code': 'ni', 'name': 'nicaragua'},
{'code': 'nl', 'name': 'netherlands'},{'code': 'no', 'name': 'norway'},{'code': 'np', 'name': 'nepal'},
{'code': 'nr', 'name': 'nauru'},{'code': 'nz', 'name': 'new zealand'},{'code': 'om', 'name': 'oman'},
{'code': 'pa', 'name': 'panama'},{'code': 'pe', 'name': 'peru'},{'code': 'pg', 'name': 'papua new guinea'},
{'code': 'ph', 'name': 'philippines'},{'code': 'pk', 'name': 'pakistan'},{'code': 'pl', 'name': 'poland'},
{'code': 'ps', 'name': 'palestine'},{'code': 'pt', 'name': 'portugal'},{'code': 'pw', 'name': 'palau'},
{'code': 'py', 'name': 'paraguay'},{'code': 'qa', 'name': 'qatar'},{'code': 'ro', 'name': 'romania'},
{'code': 'rs', 'name': 'serbia'},{'code': 'ru', 'name': 'russia'},{'code': 'rw', 'name': 'rwanda'},
{'code': 'sa', 'name': 'saudi arabia'},{'code': 'sc', 'name': 'seychelles'},{'code': 'sd', 'name': 'sudan'},
{'code': 'se', 'name': 'sweden'},{'code': 'sg', 'name': 'singapore'},{'code': 'si', 'name': 'slovenia'},
{'code': 'sk', 'name': 'slovakia'},{'code': 'sl', 'name': 'sierra leone'},{'code': 'sm', 'name': 'san marino'},
{'code': 'sn', 'name': 'senegal'},{'code': 'so', 'name': 'somalia'},{'code': 'sr', 'name': 'suriname'},
{'code': 'ss', 'name': 'south sudan'},{'code': 'st', 'name': 'sao tome and principe'},{'code': 'sv', 'name': 'el salvador'},
{'code': 'sy', 'name': 'syria'},{'code': 'sz', 'name': 'swaziland'},{'code': 'td', 'name': 'chad'},{'code': 'tg', 'name': 'togo'},
{'code': 'th', 'name': 'thailand'},{'code': 'tj', 'name': 'tajikistan'},{'code': 'tl', 'name': 'east timor','altNames': "timor-leste"},
{'code': 'tm', 'name': 'turkmenistan'},{'code': 'tn', 'name': 'tunisia'},{'code': 'to', 'name': 'tonga'},
{'code': 'tr', 'name': 'turkey'},{'code': 'tt', 'name': 'trinidad and tobago'},{'code': 'tv', 'name': 'tuvalu'},
{'code': 'tz', 'name': 'tanzania'},{'code': 'ua', 'name': 'ukraine'},{'code': 'ug', 'name': 'uganda'},
{'code': 'us', 'name': 'united states', 'altNames': 'usa'},{'code': 'uy', 'name': 'uruguay'},{'code': 'uz', 'name': 'uzbekistan'},
{'code': 'va', 'name': 'vatican city'},{'code': 'vc', 'name': 'saint vincent and the grenadines'},
{'code': 've', 'name': 'venezuela'},{'code': 'vn', 'name': 'vietnam'},{'code': 'vu', 'name': 'vanuatu'},
{'code': 'ye', 'name': 'yemen'},{'code': 'za', 'name': 'south africa'},{'code': 'zm', 'name': 'zambia'},
{'code': 'zw', 'name': 'zimbabwe'}
]
