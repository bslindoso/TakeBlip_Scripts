// CHANNEL TAGS

// <<<<Var of input>>>> 
// platform

// <<<<var de saida>>>>
// channelTags

// <<<<novas variaveis>>>>
/*
n1 : {{channelTags@bold.open}}
n2 : {{channelTags@bold.close}}
i1 : {{channelTags@italic.open}}
i2 : {{channelTags@italic.close}}
boldValue : {{channelTags@bold}}
italicValue : {{channelTags@italic}}
*/

// <<<condição>>>

// <<<Script>>>>

function run(userChannel) {
    userChannel = userChannel.toLowerCase();
    return getChannelStylingTags(userChannel);
}

function getChannelStylingTags(userChannel) {
    const TAGS = {
        bold: {
            empty: {
                open: '',
                close: ''
            },
            default: {
                open: '*',
                close: '*'
            },
            html: {
                open: '<b>',
                close: '</b>'
            },
            markdown: {
                open: '**',
                close: '**'
            }
        },
        italic: {
            empty: {
                open: '',
                close: ''
            },
            default: {
                open: '_',
                close: '_'
            },
            html: {
                open: '<i>',
                close: '</i>'
            },
            markdown: {
                open: '__',
                close: '__'
            }
        },
        strikethrough: {
            empty: {
                open: '',
                close: ''
            },
            default: {
                open: '~',
                close: '~'
            },
            html: {
                open: '<strike>',
                close: '</strike>'
            },
            markdown: {
                open: '~~',
                close: '~~'
            }
        }
    };

    const CHANNELS = {
        default: {
            bold: TAGS.bold.empty,
            italic: TAGS.italic.empty,
            strikethrough: TAGS.strikethrough.empty
        },
        whatsapp: {
            bold: TAGS.bold.default,
            italic: TAGS.italic.default,
            strikethrough: TAGS.strikethrough.default
        },
        blipchat: {
            bold: TAGS.bold.html,
            italic: TAGS.italic.html,
            strikethrough: TAGS.strikethrough.html
        },
        messenger: {
            bold: TAGS.bold.default,
            italic: TAGS.italic.default,
            strikethrough: TAGS.strikethrough.default
        },
        teams: {
            bold: TAGS.bold.markdown,
            italic: TAGS.italic.markdown,
            strikethrough: TAGS.strikethrough.markdown
        },
        gbm: {
            bold: TAGS.bold.markdown,
            italic: TAGS.italic.markdown,
            strikethrough: TAGS.strikethrough.markdown
        },
        telegram: {
            bold: TAGS.bold.empty,
            italic: TAGS.italic.empty,
            strikethrough: TAGS.strikethrough.empty
        },
        workplace: {
            bold: TAGS.bold.default,
            italic: TAGS.italic.default,
            strikethrough: TAGS.strikethrough.default
        }
        // takeSMS:  ,
        // instagram:  ,
        // skype:  ,
        // email:  ,
        // pagseguro:  ,
    };

    return CHANNELS[userChannel] || CHANNELS.default;
}