function getOptionSelected(input, inputType, list, validation, intent, listMenu, listShortcut, apiName, contentAssistant, apiStatusCode, apiStatus) {
    apiStatusCode = (typeof apiStatusCode !== 'undefined') ? apiStatusCode : null;
    apiStatus = (typeof apiStatus !== 'undefined') ? apiStatus : null;

    if (input == null || input == "" || input == "null") {
        return {
            'type': 'Inativo',
            'input': "Inatividade",
            'inputRecognized': 'inactivity'
        };
    }

    if (validation.hasOwnProperty('apiStatus') && apiStatus !== null) {
        if (validation.apiStatus) {
            const result = validateStatusCode(apiStatusCode, apiStatus);

            return result;
        }
    }

    if (validation.hasOwnProperty('allowLinks') && validation.hasOwnProperty('allowedMediaFormat')) {
        if (validation.allowLinks) {
            const result = validateInputIsLink(input);

            if (!result) {
                if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                    const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                    if (response !== undefined && response !== false) {
                        return response;
                    }
                }
            }

            return {
                'type': 'LinkInput',
                'input': result,
                'inputRecognized': 'allowed_link'
            };
        }

        if (!isValidInputType(inputType)) {
            if (!validation.allowMedia) {
                return typeInputof(input, inputType);
            }

            if (validation.allowMedia) {
                if (validation.allowedMediaFormat.length > 0) {
                    return allowedMediaInputof(input, inputType, validation.allowedMediaFormat);
                }

                return {
                    'type': 'Media',
                    'input': true,
                    'inputRecognized': 'allowed_media'
                };
            }
        }

        if (validation.allowMedia) {
            return {
                'type': 'Media',
                'input': false,
                'inputRecognized': 'allowed_media'
            };
        }
    }


    if (validateInputIsEmoticons(input)) {
        return {
            'type': 'Emoticons',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    if (validateInputIsLink(input)) {
        return {
            'type': 'Link',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    if (validation.hasOwnProperty('intentValidate') && validation.hasOwnProperty('isOptionMenu')) {
        if (validation.intentValidate && !validation.isOptionMenu) {
            if (getIntent(intent)) {
                return {
                    'type': 'Intent',
                    'input': intent,
                    'inputRecognized': 'valid_NLP'
                };
            }
        }
    }

    if (validation.hasOwnProperty('isIntent')) {
        if (validation.isIntent) {
            return {
                'type': 'Intencao',
                'input': 'Erro Intencao',
                'inputRecognized': 'invalid_NLP'
            };
        }
    }

    if (validation.hasOwnProperty('Nome')) {
        if (validation.Nome) {
            const result = validateNome(input, apiName);

            if (!result || result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Nome',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('contentAssistant')) {
        if (validation.contentAssistant) {
            const result = validateContentAssistant(contentAssistant);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'contentAssistant',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('NPS')) {
        if (validation.NPS) {
            const result = validateNPS(input);

            return {
                'type': 'NPS',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Serial') && validation.hasOwnProperty('OnlyNumber') && validation.hasOwnProperty('CharTotal')) {
        if (validation.Serial) {
            const result = validateSerial(input, validation.OnlyNumber, validation.CharTotal);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Serial',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Cartao') && validation.hasOwnProperty('CharTotal')) {
        if (validation.Cartao) {
            const result = validateCartao(input, validation.CharTotal);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Cartao',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Pedido') && validation.hasOwnProperty('OnlyNumber') && validation.hasOwnProperty('CharTotal')) {
        if (validation.Pedido) {
            const result = validatePedido(input, validation.OnlyNumber, validation.CharTotal);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Pedido',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Id') && validation.hasOwnProperty('OnlyNumber') && validation.hasOwnProperty('CharTotal')) {
        if (validation.Id) {
            const result = validateId(input, validation.OnlyNumber, validation.CharTotal);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Id',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Numero')) {
        if (validation.Numero) {
            const result = validateNumero(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Numero',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Email')) {
        if (validation.Email) {
            const result = validateEmail(input, validation);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            if (validation.hasOwnProperty('NoPersonalEmail')) {
                if (validation.NoPersonalEmail) {
                    return {
                        'type': 'EmailPersonal',
                        'input': result,
                        'inputRecognized': 'email_personal'
                    };
                }
            }

            return {
                'type': 'Email',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Cep')) {
        if (validation.Cep) {
            const result = validadeCep(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CEP',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Telefone')) {
        if (validation.Telefone) {
            const result = validadeTelefone(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Telefone',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Celular')) {
        if (validation.Celular) {
            const result = validadeCelular(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Celular',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CPFAndCNPJ')) {
        if (validation.CPFAndCNPJ) {
            const result = getValidationCpfCnpj(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            const doc = input.replace(/\D/g, "");

            if (doc.match(/^\d{14}/)) {
                return {
                    'type': 'CNPJ',
                    'input': result,
                    'inputRecognized': 'validation'
                };
            }

            if (doc.match(/^\d{11}/)) {
                return {
                    'type': 'CPF',
                    'input': result,
                    'inputRecognized': 'validation'
                };
            }

            return {
                'type': 'CPF/CNPJ',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CPFAndCNPJValido')) {
        if (validation.CPFAndCNPJValido) {
            const result = getValidationCpfCnpjValido(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            const doc = input.replace(/\D/g, "");

            if (doc.match(/^\d{14}/)) {
                return {
                    'type': 'CNPJValido',
                    'input': result,
                    'inputRecognized': 'validation'
                };
            }

            if (doc.match(/^\d{11}/)) {
                return {
                    'type': 'CPFValido',
                    'input': result,
                    'inputRecognized': 'validation'
                };
            }

            return {
                'type': 'CPF/CNPJValido',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CNPJ')) {
        if (validation.CNPJ) {
            const result = validateCnpj(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CNPJ',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CNPJValido')) {
        if (validation.CNPJValido) {
            const result = isCnpjValido(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CNPJValido',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CPF')) {
        if (validation.CPF) {
            const result = validateCpf(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CPF',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CPFValido')) {
        if (validation.CPFValido) {
            const result = isCpfValido(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CPFValido',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Quantidade')) {
        if (validation.Quantidade) {
            const result = validateQuantidade(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Quantidade',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Data')) {
        if (validation.Data) {
            const result = validateData(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Data',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('CidadeOrigemDestino')) {
        if (validation.CidadeOrigemDestino) {
            const result = validateCidadeOrigemDestino(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'CidadeOrigemDestino',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('Horas')) {
        if (validation.Horas) {
            const result = validateHoras(input);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'Horas',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    if (validation.hasOwnProperty('TextLength') && validation.hasOwnProperty('CharLength')) {
        if (validation.TextLength) {
            const result = validateTextLength(input, validation.CharLength);

            if (!result) {
                if (validation.hasOwnProperty('shortcut') && validation.hasOwnProperty('shortcutMenu') && validation.hasOwnProperty('textLong') && validation.hasOwnProperty('badWord')) {
                    if (validation.shortcut || validation.shortcutMenu || validation.textLong || validation.badWord) {
                        const response = getShortcutValidation(input, validation, listShortcut, listMenu);
                        if (response !== undefined && response !== false) {
                            return response;
                        }
                    }
                }
            }

            return {
                'type': 'TextLength',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }

    const selected = removeUnnecessaryInput(input);

    if (validation.hasOwnProperty('shortcut')) {
        if (validation.shortcut) {
            const result = validateInputMenu(selected, listShortcut);

            if (result !== false) {
                return {
                    'type': 'Shortcut',
                    'input': result,
                    'inputRecognized': 'shortcut'
                };
            }
        }
    }

    if (validation.hasOwnProperty('shortcutMenu')) {
        if (validation.shortcutMenu) {
            const result = validateInputMenu(selected, listMenu);

            if (result !== false) {
                return {
                    'type': 'Shortcut',
                    'input': result,
                    'inputRecognized': 'shortcut'
                };
            }
        }
    }

    if (validation.hasOwnProperty('badWord')) {
        if (validation.badWord) {
            const result = validateWordBads(selected);

            if (result !== false) {
                return result;
            }
        }
    }

    if (validation.hasOwnProperty('textLong')) {
        if (validation.textLong) {
            const text = validateTextLong(input);

            if (text) {
                return {
                    'type': 'TextoLongos',
                    'input': "Input Inesperado",
                    'inputRecognized': 'block_return'
                };
            }
        }
    }

    if (validation.hasOwnProperty('isInputNoValidate')) {
        if (validation.isInputNoValidate) {
            return {
                'type': 'CampoLivre',
                'input': "Input Validado",
                'inputRecognized': 'no_validation'
            };
        }
    }

    return getInputInList(selected, list, validation, intent);
}

function getShortcutValidation(input, validation, listShortcut, listMenu) {
    const selected = removeUnnecessaryInput(input);

    if (validation.hasOwnProperty('shortcut')) {
        if (validation.shortcut) {
            const result = validateInputMenu(selected, listShortcut);

            if (result !== false) {
                return {
                    'type': 'Shortcut',
                    'input': result,
                    'inputRecognized': 'shortcut'
                };
            }
        }
    }

    if (validation.hasOwnProperty('shortcutMenu')) {
        if (validation.shortcutMenu) {
            const result = validateInputMenu(selected, listMenu);

            if (result !== false) {
                return {
                    'type': 'Shortcut',
                    'input': result,
                    'inputRecognized': 'shortcut'
                };
            }
        }
    }

    if (validation.hasOwnProperty('badWord')) {
        if (validation.badWord) {
            const result = validateWordBads(selected);

            if (result !== false) {
                return result;
            }
        }
    }

    if (validation.hasOwnProperty('textLong')) {
        if (validation.textLong) {
            const text = validateTextLong(selected);

            if (text) {
                return {
                    'type': 'TextoLongos',
                    'input': "Input Inesperado",
                    'inputRecognized': 'block_return'
                };
            }
        }
    }

    return false;
}

function validateStatusCode(input, apiStatus) {
    const message = apiStatus.find(element => element.code === parseInt(input));

    return {
        'type': message.type,
        'input': message.status,
        'inputRecognized': 'error_api'
    };
}

function getIntent(intent) {
    if (intent == "" || intent == "null" || intent == null || intent == "None") {
        return false;
    }

    return true;
}

function isValidInputType(inputType) {
    const INPUT_TYPES_ACCEPTED = ['text/plain'];

    return INPUT_TYPES_ACCEPTED.some(
        (type) => type.toLowerCase() === inputType.toString().toLowerCase()
    );
}

function validateInputIsEmoticons(input) {
    if (/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/.test(input)) {
        const fraseEmojis = input.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '*');
        const countEmojis = (fraseEmojis.match(/\*/g) || []).length;
        const fraseSemEmojis = input.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '');
        const countFrase = fraseSemEmojis.length;

        if (countEmojis > 0 && countFrase === 0) {
            return true;
        }
        return false;
    }

    return false;
}

function validateInputIsLink(input) {
    if (/^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/.test(input)) {
        return true;
    }

    return false;
}

function typeInputof(input, inputType) {
    if (inputType == 'application/vnd.lime.contact+json') {
        return {
            'type': 'Contatos',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    const optionsRegexType = {
        '(application/octet-stream|image/webp)': 'Figurinhas',
        '(image)': 'Images',
        '(audio)': 'Audios',
        '(video)': 'Videos',
        '(application|text/csv|text/html)': 'Arquivos',
    };

    for (let key in optionsRegexType) {
        const matching = new RegExp(key, 'i');
        if (matching.test(input)) {
            return {
                'type': optionsRegexType[key],
                'input': "Input Inesperado",
                'inputRecognized': 'block_return'
            };
        }
    }
}

function allowedMediaInputof(input, inputType, listMediaFormat) {
    let selected = input;
    if (typeof input === typeof toString()) {
        selected = JSON.parse(input);
    }

    for (const value of listMediaFormat) {
        const matching = new RegExp(value, 'gi');

        if (matching.test(selected.type)) {
            return {
                'type': 'Media',
                'input': true,
                'inputRecognized': 'allowed_media'
            };
        }
    }

    return {
        'type': 'Media',
        'input': false,
        'inputRecognized': 'allowed_media'
    };
}

function replaceSpecialLetters(input) {
    input = input.trim();
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function removeUnnecessaryInput(input) {
    const EMPTY_STR = '';
    const UNNECESSARY_INPUT = RegExp('(^0+|^\\s+|\\s+$)', 'gi');
    if (input.length > 1) {
        input = input.replace(UNNECESSARY_INPUT, EMPTY_STR);
    }

    const inputLow = input.toLowerCase();
    const removeEmojis = inputLow.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '');
    let selected = replaceSpecialLetters(removeEmojis);

    selected = removeExcessWhiteSpace(selected);

    return formatWhiteSpace(selected);
}

function removeExcessWhiteSpace(input) {
    const SPACE_STR = ' ';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, SPACE_STR);
}

function removeWhiteSpace(input) {
    const SPACE_STR = '';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, SPACE_STR);
}

function formatWhiteSpace(input) {
    const STRING_SPLIT = input.split(' ');

    if (STRING_SPLIT.length > 1) {
        let NEW_STRING = [];

        for (let i = 0; i < STRING_SPLIT.length; i++) {
            const element = STRING_SPLIT[i];

            if (element !== '') {
                NEW_STRING.push(element);
            }
        }

        return NEW_STRING.join(' ');
    }

    return STRING_SPLIT;
}

function validateEmail(value, validate) {
    const email_format = removeWhiteSpace(value);

    if (validate.hasOwnProperty('NoPersonalEmail') && validate.hasOwnProperty('ListNoEmail')) {
        if (validate.NoPersonalEmail) {
            if (validate.ListNoEmail.length > 0) {
                for (let i = 0; i < validate.ListNoEmail.length; i++) {
                    const element = validate.ListNoEmail[i];
                    const matching = RegExp(element, "gi");
                    if (matching.test(email_format)) {
                        return false;
                    }
                }
            }
        }
    }

    if (/^[\w+.?:\-]+@\w+\.\w{2,}(?:\.\w{2})?$/gi.test(email_format)) {
        return true;
    }

    return false;
}

function validadeCep(value) {
    const cep = removeWhiteSpace(value);

    if (/^\d{2}.?\d{3}-?\d{3}$/.test(cep)) {
        return true;
    }

    return false;
}

function validadeTelefone(value) {
    const telefone = removeWhiteSpace(value);

    if (/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(telefone)) {
        return true;
    }

    return false;
}

function validadeCelular(value) {
    const celular = removeWhiteSpace(value);

    if (/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(celular)) {
        return true;
    }

    return false;
}

function getValidationCpfCnpj(value) {
    const doc = value.replace(/\D/g, "");

    if (doc.match(/^\d{14}/)) {
        return validateCnpj(doc);
    }

    if (doc.match(/^\d{11}/)) {
        return validateCpf(doc);
    }

    return false;
}

function getValidationCpfCnpjValido(value) {
    const doc = value.replace(/\D/g, "");

    if (doc.match(/^\d{14}/)) {
        return isCnpjValido(doc);
    }

    if (doc.match(/^\d{11}/)) {
        return isCpfValido(doc);
    }

    return false;
}

function validateCpf(value) {
    if (value.match(/0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}/g)) {
        return false;
    }

    if (/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/.test(value)) {
        return true;
    }

    return false;
}

function isCpfValido(value) {
    let CPFv = value.replace(/\D/g, "");

    let cpf = CPFv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return false;
    }

    for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
        v1 += cpf[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
        v1 = 0;
    }

    if (v1 != cpf[9]) {
        return false;
    }

    for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
        v2 += cpf[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
        v2 = 0;
    }

    if (v2 != cpf[10]) {
        return false;
    } else {
        return true;
    }
}

function validateCnpj(value) {
    if (value.match(/0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14}/g)) {
        return false;
    }

    if (/^\d{2}.?\d{3}.?\d{3}\/?\d{4}-?\d{2}$/.test(value)) {
        return true;
    }

    return false;
}

function isCnpjValido(value) {
    let CNPJv = value.replace(/\D/g, "");

    let cnpj = CNPJv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return false;
    }

    for (let i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
        if (p1 >= 2) {
            v1 += cnpj[i] * p1;
        } else {
            v1 += cnpj[i] * p2;
        }
    }

    v1 = (v1 % 11);

    if (v1 < 2) {
        v1 = 0;
    } else {
        v1 = (11 - v1);
    }

    if (v1 != cnpj[12]) {
        return false;
    }

    for (let i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
        if (p1 >= 2) {
            v2 += cnpj[i] * p1;
        } else {
            v2 += cnpj[i] * p2;
        }
    }

    v2 = (v2 % 11);

    if (v2 < 2) {
        v2 = 0;
    } else {
        v2 = (11 - v2);
    }

    if (v2 != cnpj[13]) {
        return false;
    } else {
        return true;
    }
}

function validateQuantidade(value) {
    let quanti = removeWhiteSpace(value);
    quanti = quanti.replace(/[^0-9]/g, '');

    if (/^[0-9.]+$/.test(quanti)) {
        return true;
    }

    return false;
}

function validateData(value) {
    const data = removeWhiteSpace(value);

    if (/^\d{2}(\/|-)\d{2}(\/|-)\d{4}$/.test(data)) {
        return true;
    }

    if (/^\d{4}(\/|-)\d{2}(\/|-)\d{2}$/.test(data)) {
        return true;
    }

    return false;
}

function validateCidadeOrigemDestino(value) {  

    if (/[0-9]/gm.test(value)) {
        return false;
    }
    return true;
}

function validateHoras(value) {
    const hora = removeWhiteSpace(value);

    if (/^\d{2}(:)\d{2}$/.test(hora)) {
        return true;
    }

    return false;
}

function check(value) {
    return value === true;
}

function validateNome(input, result) {
    if (result == null) {
        const splitName = input.split(' ');
        let returnValidate = [];

        for (let j = 0; j < splitName.length; j++) {
            const item = splitName[j].toLowerCase();

            if (/[^a-zà-ú]/.test(item)) {
                returnValidate.push(false);
            } else {
                returnValidate.push(true);
            }
        }

        const val = returnValidate.every(check);

        if (val) {
            return true;
        }

        return false;
    }

    if (result.code == 200) {
        return result.data.isExist;
    }

    return false;
}

function validateContentAssistant(result) {
    if (result == null) {
        return false;
    }

    let PARSED = result;
    if (typeof result === typeof toString()) {
        PARSED = JSON.parse(result);
    }

    if (PARSED.hasOwnProperty('HasCombination')) {
        if (PARSED.HasCombination) {
            return PARSED.Value;
        }
    }

    return false;
}

function validateTextLong(input, list) {
    const value = input.split(' ');

    if (value.length > 5) {
        return true;
    }

    return false;
}

function validateTextLength(input, charLength) {
    const value = input.length;

    if (value < charLength) {
        return true;
    }

    if (value == charLength) {
        return true;
    }

    return false;
}

function validateNumero(input) {
    if (isNumeric(input)) {
        return true;
    }

    return false;
}

function validateSerial(input, only, total) {
    let number = input;

    if (only) {
        number = input.replace(/[^0-9]/g, '');
    }

    if (number == '') {
        return false;
    }

    if (total > 0) {
        if (only) {
            if (isNumeric(number)) {
                const lengthInput = number.length;
                return lengthInput === total ? true : false;
            }

            return false;
        } else {
            const lengthInput = number.length;
            return lengthInput === total ? true : false;
        }
    }

    if (!only) {
        return true;
    }

    if (only) {
        if (isNumeric(number)) {
            return true;
        }
    }

    return false;
}

function validateCartao(input, CharTotal) {
    let number = input;

    number = input.replace(/[^0-9]/g, '');

    if (number == '') {
        return false;
    }

    if (/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/.test(number)) {
        return true;
    }

    if (CharTotal > 0) {
        if (isNumeric(number)) {
            const lengthInput = number.length;
            return lengthInput === CharTotal ? true : false;
        }
    }

    return false;
}

function validatePedido(input, only, total) {
    let number = input;

    if (only) {
        number = input.replace(/[^0-9]/g, '');
    }

    if (number == '') {
        return false;
    }

    if (total > 0) {
        if (only) {
            if (isNumeric(number)) {
                const lengthInput = number.length;
                return lengthInput === total ? true : false;
            }

            return false;
        } else {
            const lengthInput = number.length;
            return lengthInput === total ? true : false;
        }
    }

    if (!only) {
        return true;
    }

    if (only) {
        if (isNumeric(number)) {
            return true;
        }
    }

    return false;
}

function validateId(input, only, total) {
    let number = input;

    if (only) {
        number = input.replace(/[^0-9]/g, '');
    }

    if (number == '') {
        return false;
    }

    if (total > 0) {
        if (only) {
            if (isNumeric(number)) {
                const lengthInput = number.length;
                return lengthInput === total ? true : false;
            }

            return false;
        } else {
            const lengthInput = number.length;
            return lengthInput === total ? true : false;
        }
    }

    if (!only) {
        return true;
    }

    if (only) {
        if (isNumeric(number)) {
            return true;
        }
    }

    return false;
}

function validateNPS(input) {
    if (isNumeric(input)) {
        return true;
    }

    input = replaceSpecialLetters(input);
    const numberName = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

    for (let i = 0; i < numberName.length; i++) {
        const element = numberName[i];

        if (element == input) {
            return true;
        }
    }

    const number = input.replace(/[^0-9]/g, '');

    if (number == '') {
        return false;
    }

    if (isNumeric(number)) {
        return true;
    }

    return false;
}

function isNumeric(num) {
    return !isNaN(num);
}

function validateInputMenu(input, list) {
    for (i = 0; i < list.length; i++) {
        for (x = 0; x < list[i].name.length; x++) {
            if (input == list[i].name[x]) {
                return list[i].name[0];
            }
        }
    }

    return false;
}

function validateWordBads(input) {
    const optionsRegexType = {
        '(p[o0]rr[a4]|tmnc|(([t7][o0]m([a4]|[a4]r)\s*n[o0])?\s?[s5][e3]u?\s?cu)|(ci|[s5][e3])?\s?fud([e3]|[e3]r)|f[o0]d[a4](-[s5][e3]|[s5][e3]|\s*[s5][e3])|d[e3][s5][g9]r[a4]c([a4]|[a4]d[o0])(v[a4][i1])?\s?([s5][e3])?\s*fud[e3]r|cr[l1]h|c[a4]r[a4]y|c[a4]r[a4][l1]h[o0]|fdp|fdm|(f[i1][l1]h([o0]|[a4])|f[i1])\s*(d[a4]|d[e3]|dum[a4])\s*(m[a4][e3]|m[e3]rd[a4]|pu[t7][a4]|[e3][g9]u[a4])|d[e3][s5][g9]r[a4]m([a4]|[a4]d([o0]|[a4]))|m[e3]rd[a4]|f(u|[o0])d([e3]u|[e3]r|[e3][o0]|[a4]))': 'SwearWord',
        '([i1]nf[e3]rn[o0]|[a4]rr[o0]m[b8][a4]d[o0]|c[o0]rn[o0]|m[o0]rf[e3][t7][i1]c[o0]|[s5][a4]f[a4]d([a4]|[o0])|[o0]rd[i1]n[a4]r[i1]([a4]|[o0])|p[i1][l1][a4]n[t7]r[a4]|c[a4]ch[o0]rr([a4]|[o0])|[e3][s5][t7]rum[e3]|[e3][s5]druxu[l1][o0]|[e3][s5]qu[i1][s5][i1][t7]([o0]|[a4])|[i1]nf[e3]l[i1][z2]|[s5][e3]m\s*v[e3]r[g9][o0]nh[a4]|[t7][a4][l1][a4]r[i1]c[o0]|cu[z2][a4]([o0]|um)|[z2][e3]\s*(ru[e3][l1][a4]|p[i1][l1][a4]n[t7]r[a4])|[b8][o0][b8][a4][o0]|[t7]r[o0]ux[a4]|[b8][a4][b8][a4]c[a4]|v[a4][i1]\s*([s5][e3]\s*)?([l1][a4][s5]c[a4]r|f[e3]rr[a4]r|c[a4][g9][a4]r))': 'Insult',
        '(v[a4]d[i1]([a4]|[o0])|v[i1][a4]d([o0]|[a4]um)|pu[t7]([a4]|[i1]nh[a4])|[g9][o0]rd([o0]|[a4])|m[a4][g9]r[e3][l1]([o0]|[a4])|v[i1][a4]d[i1]nh([o0]|[a4])|m[a4]c[a4]c([o0]|[a4])|pr[e3][t7][o0]|[t7][i1][z2][i1][l1]|[t7][i1]fu|c[a4]rv[a4][o0]|br[a4]nqu[e3][l1]([a4]|[o0])|p[a4][l1]m[i1][t7][o0]|h[o0]rr[i1]v[e3][l1])|[b8][i1](ch|x)[o0]n[a4]': 'Preconception',
        '([l1][i1]x([o0]|[i1]n|[i1]nh[o0])|f([e3]|[i1])d[i1]d([o0]|[a4])|[t7][o0]x[i1]c[o0]|[b8][o0][s5][t7]([a4]|[a4]um)|f[e3]rr[o0]u|m[e3]rd[i1]nh[a4])': 'Depreciate',
        '(v[a4][g9][a4][b8]und([a4]|[o0])|v[o0]u\s*[t7][e3]\s*c[o0]m[e3]r|[b8]uc[e3][t7]([a4]|ud[a4])|[t7][e3][t7]ud[a4]|[a4]rr[o0]m[b8][a4]d[a4]|cuzud([o0]|[a4])|[b8][i1][s5]c[a4][t7]([e3]|[i1]nh[a4])|[b8][i1]x[o0]n[a4]|[b8][a4][i1][t7][o0][l1][a4]|[t7]r[a4]v[e3]c[o0]|(k|qu)[e3]n[g9][a4]|r[o0][l1][a4]|m[e3]\s*f[o0]d[e3]|chup[a4]r\s*[s5][e3]u\s*p[a4]u|[a4]ndr[o0][g9][e3]n[o0])': 'Injury',
        '([e3]xu|[s5][a4][t7][a4]n[a4][s5]|d[i1][a4][b8][o0]|[l1]uc[i1]f[e3]r)': 'Prejudgement',
    };

    for (let key in optionsRegexType) {
        const matching = new RegExp(key, 'i');
        if (matching.test(input)) {
            return {
                'type': optionsRegexType[key],
                'input': "Input Inesperado",
                'inputRecognized': 'bad_word'
            };
        }
    }

    return false;
}

function getInputInList(input, list, validation, intent) {
    for (i = 0; i < list.length; i++) {
        for (x = 0; x < list[i].name.length; x++) {
            if (input == list[i].name[x].trim()) {
                if (validation.hasOwnProperty('isTrueFalse')) {
                    if (validation.isTrueFalse) {
                        return {
                            'type': 'Escolha',
                            'input': list[i].name[0],
                            'inputRecognized': 'menu_return'
                        };
                    }
                }

                if (validation.hasOwnProperty('menuDinamic')) {
                    if (validation.menuDinamic) {
                        return {
                            'type': 'Dinamico',
                            'input': list[i].name[0],
                            'inputRecognized': 'menu_return'
                        };
                    }
                }

                return {
                    'type': 'Menu',
                    'input': list[i].name[0],
                    'inputRecognized': 'menu_return'
                };
            }
        }
    }

    if (getIntent(intent)) {
        return {
            'type': 'Intent',
            'input': intent,
            'inputRecognized': 'valid_NLP'
        };
    }

    if (validation.hasOwnProperty('isTrueFalse')) {
        if (validation.isTrueFalse) {
            return {
                'type': 'Escolha',
                'input': "Input Inesperado",
                'inputRecognized': 'block_return'
            };
        }
    }

    if (validation.hasOwnProperty('menuDinamic')) {
        if (validation.menuDinamic) {
            return {
                'type': 'Dinamico',
                'input': "Input Inesperado",
                'inputRecognized': 'block_return'
            };
        }
    }

    return {
        'type': 'Menu',
        'input': "Input Inesperado",
        'inputRecognized': 'block_return'
    };
}