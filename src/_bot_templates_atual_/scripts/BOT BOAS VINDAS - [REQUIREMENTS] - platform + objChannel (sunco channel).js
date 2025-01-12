// DEPOIS DESTA FUNÇÃO, ADICIONA UMA VARIABLE CHAMADA PLATFORM
// variable: platform
// value: {{objChannel@channel}}

function run(inputMessage) {
    try {
        
        inputMessage = JSON.parse(inputMessage);
        const DEFAULT_METADATA_FIELD_NAME = "#sunshine.custom.sourceIntegrationId";
        const SECONDARY_METADATA_FIELD_NAME = "#sunshine.sourceIntegrationId";

        let channelId = inputMessage.metadata[DEFAULT_METADATA_FIELD_NAME];

        if(channelId) {
            return handleChannelById(channelId);
        }

        channelId = inputMessage.metadata[SECONDARY_METADATA_FIELD_NAME];

        return handleChannelById(channelId);
    }
    catch(e) {
        return e.message;
    }
}

function handleChannelById(channelId) {
    const EID_WHATSAPP_CHANNEL_ID = "62a26500cf092c00f1d2e26b";
    const EID_WEB_CHANNEL_ID = "645545a8cd68621f0ca3a3f7";
    const LARGE_AND_PME_WHATSAPP_CHANNEL_ID = "6206f5b566f1d400ed9aa4d7";
    const LARGE_AND_PME_WEB_CHANNEL_ID = "6323447d99dde000f32209b5";
    const TLVS_WHATSAPP_CHANNEL_ID = "620bae03e538d700eead41af";
    const TLVS_WEB_CHANNEL_ID = "64554498b61f483103cc36f5";

    switch(channelId) {
        case LARGE_AND_PME_WHATSAPP_CHANNEL_ID:
            return new CustomerChannel("whatsapp", "pme|large");
        case TLVS_WHATSAPP_CHANNEL_ID:
            return new CustomerChannel("whatsapp", "tlvs");
        case LARGE_AND_PME_WEB_CHANNEL_ID:
            return new CustomerChannel("BlipChat", "pme|large");
        case TLVS_WEB_CHANNEL_ID:
            return new CustomerChannel("BlipChat", "tlvs");
        case EID_WHATSAPP_CHANNEL_ID:
            return new CustomerChannel("whatsapp", "eid");
        case EID_WEB_CHANNEL_ID:
            return new CustomerChannel("sunco", "eid");
        default:
            return new CustomerChannel("BlipChat", "dev");
    }
}

function CustomerChannel(channel, customerType) {
    this.channel = channel;
    this.customerType = customerType;
}

