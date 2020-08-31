import { BiometryPromptData } from "../../../../codes";

export const DOC_TOO_MANY_FACES: BiometryPromptData<"0050"> = {
		code: "0050",
		type: "destructive",
		title: "DOC_TOO_MANY_FACES",
		illustration: "paymentError",
		userDescription: "DOC_TOO_MANY_FACES",
		userResolution: "DOC_TOO_MANY_FACES",
		internalDescription: "DOC_TOO_MANY_FACES",
		additionalData: undefined,
	},
	SELFIE_TOO_MANY_FACES: BiometryPromptData<"0051"> = {
		code: "0051",
		type: "destructive",
		title: "SELFIE_TOO_MANY_FACES",
		illustration: "paymentError",
		userDescription: "SELFIE_TOO_MANY_FACES",
		userResolution: "SELFIE_TOO_MANY_FACES",
		internalDescription: "SELFIE_TOO_MANY_FACES",
		additionalData: undefined,
	},
	DOC_NO_FACE: BiometryPromptData<"0052"> = {
		code: "0052",
		type: "destructive",
		title: "DOC_NO_FACE",
		illustration: "paymentError",
		userDescription: "DOC_NO_FACE",
		userResolution: "DOC_NO_FACE",
		internalDescription: "DOC_NO_FACE",
		additionalData: undefined,
	},
	SELFIE_NO_FACE: BiometryPromptData<"0053"> = {
		code: "0053",
		type: "destructive",
		title: "SELFIE_NO_FACE",
		illustration: "paymentError",
		userDescription: "SELFIE_NO_FACE",
		userResolution: "SELFIE_NO_FACE",
		internalDescription: "SELFIE_NO_FACE",
		additionalData: undefined,
	},
	FAILED_COMPARISON: BiometryPromptData<"0054"> = {
		code: "0054",
		type: "destructive",
		title: "FAILED_COMPARISON",
		illustration: "paymentError",
		userDescription: "FAILED_COMPARISON",
		userResolution: "FAILED_COMPARISON",
		internalDescription: "FAILED_COMPARISON",
		additionalData: undefined,
	},
	NOT_IDENTICAL: BiometryPromptData<"0055"> = {
		code: "0055",
		type: "destructive",
		title: "NOT_IDENTICAL",
		illustration: "paymentError",
		userDescription: "NOT_IDENTICAL",
		userResolution: "NOT_IDENTICAL",
		internalDescription: "NOT_IDENTICAL",
		additionalData: undefined,
	},
	CONFIDENCE_UNDER_60: BiometryPromptData<"0056"> = {
		code: "0056",
		type: "destructive",
		title: "CONFIDENCE_UNDER_60",
		illustration: "paymentError",
		userDescription: "CONFIDENCE_UNDER_60",
		userResolution: "CONFIDENCE_UNDER_60",
		internalDescription: "CONFIDENCE_UNDER_60",
		additionalData: undefined,
	},
	CONFIDENCE_UNDER_90: BiometryPromptData<"0057"> = {
		code: "0057",
		type: "destructive",
		title: "CONFIDENCE_UNDER_90",
		illustration: "paymentError",
		userDescription: "CONFIDENCE_UNDER_90",
		userResolution: "CONFIDENCE_UNDER_90",
		internalDescription: "CONFIDENCE_UNDER_90",
		additionalData: undefined,
	},
	UNRECOGNIZED_RESPONSE: BiometryPromptData<"0058"> = {
		code: "0058",
		type: "destructive",
		title: "Erro na análise",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro ao tentar analisar a selfie.",
		userResolution: "Entre em contato com o suporte.",
		internalDescription:
			"A resposta recebida da nextcode é diferente da esperada e o código não está pronto para processa-la (necessário tipagem e lógica). Entre em contato com os devs",
		additionalData: undefined,
	},
	UNEXPECTED_CARD_STATUS: BiometryPromptData<"0059"> = {
		code: "0059",
		type: "destructive",
		title: "UNEXPECTED_CARD_STATUS",
		illustration: "paymentError",
		userDescription: "UNEXPECTED_CARD_STATUS",
		userResolution: "UNEXPECTED_CARD_STATUS",
		internalDescription: "UNEXPECTED_CARD_STATUS",
		additionalData: undefined,
	},
	INITIAL_SELFIE: BiometryPromptData<"0060"> = {
		code: "0060",
		type: "destructive",
		title: "INITIAL_SELFIE",
		illustration: "paymentError",
		userDescription: "INITIAL_SELFIE",
		userResolution: "INITIAL_SELFIE",
		internalDescription: "INITIAL_SELFIE",
		additionalData: undefined,
	};
