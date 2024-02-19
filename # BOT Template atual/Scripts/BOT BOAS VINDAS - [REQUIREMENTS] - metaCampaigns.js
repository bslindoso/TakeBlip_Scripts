// =======================================
// META Campaigns
// =======================================
// Variáveis de entrada: input.message
// Nome da variável: metaCampaigns
// =======================================

function run(inputMessage) {
    try {
        let inputMessageFormatted = JSON.parse(inputMessage);
        let metadata = inputMessageFormatted.metadata;

        if (metadata && metadata['#wa.referral.headline']) {
            return getWhatsAppCampaign(metadata);
        } else if (metadata && metadata['#ig.referral.ref']) {
            return getInstagramCampaign(metadata);
        } else if (metadata && metadata['#m.referral.ref']) {
            return getMessengerCampaign(metadata);
        } else {
            return "";
        }
    } catch (e) {
        return "";
    }
}

const getWhatsAppCampaign = (metadata) => {
    return JSON.stringify({
        platform: 'WhatsApp',
        headline: metadata['#wa.referral.headline'],
        body: metadata['#wa.referral.body'],
        source_type: metadata['#wa.referral.source_type'],
        source_id: metadata['#wa.referral.source_id'],
        source_url: metadata['#wa.referral.source_url'],
        media_id: metadata['#wa.referral.image.id']
    });
}

const getInstagramCampaign = (metadata) => {
    return JSON.stringify({
        platform: 'Instagram',
        ref: metadata['#ig.referral.ref'],
        type: metadata['#ig.referral.type'],
        source: metadata['#ig.referral.source']
    });
}

const getMessengerCampaign = (metadata) => {
    return JSON.stringify({
        platform: 'Messenger',
        ref: metadata['#m.referral.ref'],
        type: metadata['#m.referral.type'],
        source: metadata['#m.referral.source']
    });
}