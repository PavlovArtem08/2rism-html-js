const countryList = [
'British',	
'United Kingdom',
'English',
'Scottish',
'Scotland',
'English',
'Gaelic',
'Irish',
'Northern',
'Irelandi',
'English',
'Welsh',	
'Wales',	
'English/Welsh',
'Danish',	
'Denmark',	
'Danish',
'Finnish',	
'Finland',	
'Finnish',
'Norwegian',	
'Norway',
'Norwegian',
'Swedish',	
'Sweden',	
'Swedish',
'Swiss',	
'Switzerland',	
'German/French/Italian',
'Estonian',	
'Estonia',	
'Estonian',
'Latvian',	
'Latvia',	
'Latvian',
'Lithuanian',	
'Lithuania',	
'Lithuanian',
'Austrian',	
'Austria',	
'German',
'Belgian',	
'Belgium',	
'French/Flemish',
'French',	
'France',	
'French',
'German',	
'Germany',	
'German',
'Italian',	
'Italy',	
'Italian',
'Dutch',	
'Netherlands',	
'Dutch',
'American',	
'United States',	
'English',
'Canadian',	
'Canada',	
'English/French',
'Mexican',	
'Mexico',	
'Spanish',
'Ukrainian',	
'Ukraine',	
'Ukrainian',
'Russian',	
'Russia',
'Russian',
'Belarusian',	
'Belarus',	
'Belarusian',
'Polish',	
'Poland',	
'Polish',
'Czech',	
'Czech Republic', 
'Czech',
'Slovak/Slovakian',	
'Slovakia',	
'Slovakian',
'Hungarian',	
'Hungary',	
'Hungarian',
'Romanian',	
'Romania', 
'Romanian',
'Bulgarian',	
'Bulgaria',	
'Bulgarian',
'Greek',	
'Greece',	
'Greek',
'Spanish',	
'Spain',
'Spanish',
];
const autoCompleteJS = new autoComplete({
    selector: '#location',
    placeHolder: 'Coutry name...',
    data: {
        src: countryList,
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            },
        },
    },
    resultsList: {
        maxResults: 15,
    },
    searchEngine: 'strict', /*strict | loose*/

});  