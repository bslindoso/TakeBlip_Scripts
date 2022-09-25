// GET PLATFORM

// <<<<Var of input>>>> 
// contact.identity

// <<<<var de saida>>>>
// platform

// <<<condição>>>

// <<<Script>>>>

function run(contactIdentity) {
    return getUserChannel(contactIdentity);
}

function getUserChannel(contactIdentity) {
    const DEFAULT_CHANNEL = 'default';
    const CHANNEL_INDEX = 1;

    const CHANNEL_IDENTIFIERS = {
        'wa.gw.msging.net': 'WhatsApp',
        '0mn.io': 'BlipChat',
        'take.io': 'TakeSMS',
        'messenger.gw.msging.net': 'Messenger',
        'instagram.gw.msging.net': 'Instagram',
        'abs.gw.msging.net': 'Teams',
        'businessmessages.gw.msging.net': 'gbm',
        'skype.gw.msging.net': 'Skype',
        'telegram.gw.msging.net': 'Telegram',
        'workplace.gw.msging.net': 'Workplace',
        'mailgun.gw.msging.net': 'Email',
        'pagseguro.gw.msging.net': 'PageSeguro'
    };

    let contactChannelId = contactIdentity.split('@')[CHANNEL_INDEX];

    return CHANNEL_IDENTIFIERS[contactChannelId] || DEFAULT_CHANNEL;
}