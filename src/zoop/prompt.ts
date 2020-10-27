import { ZoopPromptData } from "../../codes";

export const UNKNOWN_ERROR: ZoopPromptData<"2000", 418, "", ""> = {
		code: "2000",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "A requisição para a Zoop retornou um erro desconhecido.",
		additionalData: { status: 418, type: "", category: "" }, // error 418 is not used on real HTTP transactions, so it can be mapped to an unknown error
	},
	TRANSACTION_AMOUNT_ERROR: ZoopPromptData<"2001", 400, "invalid_request_error", "transaction_amount_error"> = {
		code: "2001",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "TRANSACTION_AMOUNT_ERROR.",
		additionalData: { status: 400, type: "invalid_request_error", category: "transaction_amount_error" },
	},
	TRANSFER_AMOUNT_ERROR: ZoopPromptData<"2002", 400, "invalid_request_error", "transfer_amount_error"> = {
		code: "2002",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "TRANSFER_AMOUNT_ERROR",
		additionalData: { status: 400, type: "invalid_request_error", category: "transfer_amount_error" },
	},
	MISSING_REQUIRED_PARAM: ZoopPromptData<"2003", 400, "invalid_request_error", "missing_required_param"> = {
		code: "2003",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "MISSING_REQUIRED_PARAM",
		additionalData: { status: 400, type: "invalid_request_error", category: "missing_required_param" },
	},
	UNSUPPORTED_PAYMENT_TYPE: ZoopPromptData<"2004", 400, "invalid_request_error", "unsupported_payment_type"> = {
		code: "2004",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "UNSUPPORTED_PAYMENT_TYPE",
		additionalData: { status: 400, type: "invalid_request_error", category: "unsupported_payment_type" },
	},
	INVALID_PAYMENT_INFORMATION: ZoopPromptData<"2005", 400, "invalid_request_error", "invalid_payment_information"> = {
		code: "2005",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "INVALID_PAYMENT_INFORMATION",
		additionalData: { status: 400, type: "invalid_request_error", category: "invalid_payment_information" },
	},
	INVALID_PARAMETER: ZoopPromptData<"2006", 400, "invalid_request_error", "invalid_parameter"> = {
		code: "2006",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "INVALID_PARAMETER",
		additionalData: { status: 400, type: "invalid_request_error", category: "invalid_parameter" },
	},
	AUTHENTICATION_FAILED: ZoopPromptData<"2007", 401, "invalid_request_error", "authentication_failed"> = {
		code: "2007",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "AUTHENTICATION_FAILED",
		additionalData: { status: 401, type: "invalid_request_error", category: "authentication_failed" },
	},
	EXPIRED_SECURITY_KEY: ZoopPromptData<"2007", 401, "invalid_request_error", "expired_security_key"> = {
		code: "2007",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "EXPIRED_SECURITY_KEY",
		additionalData: { status: 401, type: "invalid_request_error", category: "expired_security_key" },
	},
	INVALID_KEY_FOR_API_CALL: ZoopPromptData<"2008", 401, "invalid_request_error", "invalid_key_for_api_call"> = {
		code: "2008",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "INVALID_KEY_FOR_API_CALL",
		additionalData: { status: 401, type: "invalid_request_error", category: "invalid_key_for_api_call" },
	},
	FILE_SIZE_TOO_LARGE: ZoopPromptData<"2009", 402, "file_upload", "file_size_too_large"> = {
		code: "2009",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "FILE_SIZE_TOO_LARGE",
		additionalData: { status: 402, type: "file_upload", category: "file_size_too_large" },
	},
	INSUFFICIENT_ESCROW_FUNDS_ERROR: ZoopPromptData<
		"2010",
		402,
		"invalid_request_error",
		"insufficient_escrow_funds_error"
	> = {
		code: "2010",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "INSUFFICIENT_ESCROW_FUNDS_ERROR",
		additionalData: { status: 402, type: "invalid_request_error", category: "insufficient_escrow_funds_error" },
	},
	CAPTURE_TRANSACTION_ERROR: ZoopPromptData<"2011", 402, "invalid_request_error", "capture_transaction_error"> = {
		code: "2011",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "CAPTURE_TRANSACTION_ERROR",
		additionalData: { status: 402, type: "invalid_request_error", category: "capture_transaction_error" },
	},
	NO_ACTION_TAKEN: ZoopPromptData<"2012", 402, "invalid_request_error", "no_action_taken"> = {
		code: "2012",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "NO_ACTION_TAKEN",
		additionalData: { status: 402, type: "invalid_request_error", category: "no_action_taken" },
	},
	SELLER_AUTHORIZATION_REFUSED: ZoopPromptData<
		"2013",
		402,
		"invalid_request_error",
		"seller_authorization_refused"
	> = {
		code: "2013",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "SELLER_AUTHORIZATION_REFUSED",
		additionalData: { status: 402, type: "invalid_request_error", category: "seller_authorization_refused" },
	},
	VOID_TRANSACTION_ERROR: ZoopPromptData<"2014", 402, "invalid_request_error", "void_transaction_error"> = {
		code: "2014",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "VOID_TRANSACTION_ERROR",
		additionalData: { status: 402, type: "invalid_request_error", category: "void_transaction_error" },
	},
	INVALID_EXPIRY_MONTH: ZoopPromptData<"2015", 402, "card_error", "invalid_expiry_month"> = {
		code: "2015",
		type: "destructive",
		title: "Cartão vencido",
		illustration: "paymentError",
		userDescription: "O emissor do cartão (seu banco) recusou a transação por que este expirou.",
		userResolution: "Refaça o cadastro do cartão e tente novamente.",
		internalDescription: "INVALID_EXPIRY_MONTH",
		additionalData: { status: 402, type: "card_error", category: "invalid_expiry_month" },
	},
	INVALID_EXPIRY_YEAR: ZoopPromptData<"2016", 402, "card_error", "invalid_expiry_year"> = {
		code: "2016",
		type: "destructive",
		title: "Cartão vencido",
		illustration: "paymentError",
		userDescription: "O emissor do cartão (seu banco) recusou a transação por que este expirou.",
		userResolution: "Refaça o cadastro do cartão e tente novamente.",
		internalDescription: "INVALID_EXPIRY_YEAR",
		additionalData: { status: 402, type: "card_error", category: "invalid_expiry_year" },
	},
	CARD_CUSTOMER_NOT_ASSOCIATED: ZoopPromptData<"2017", 402, "card_error", "card_customer_not_associated"> = {
		code: "2017",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "CARD_CUSTOMER_NOT_ASSOCIATED",
		additionalData: { status: 402, type: "card_error", category: "card_customer_not_associated" },
	},
	INSUFFICIENT_FUNDS_ERROR: ZoopPromptData<"2018", 402, "card_error", "insufficient_funds_error"> = {
		code: "2018",
		type: "destructive",
		title: "Cartão sem saldo",
		illustration: "paymentError",
		userDescription: "O emissor do cartão (seu banco) recusou a transação por falta de saldo.",
		userResolution: "Fale com seu banco para liberar o cartão e tente novamente.",
		internalDescription: "INSUFFICIENT_FUNDS_ERROR",
		additionalData: { status: 402, type: "card_error", category: "insufficient_funds_error" },
	},
	EXPIRED_CARD_ERROR: ZoopPromptData<"2019", 402, "card_error", "expired_card_error"> = {
		code: "2019",
		type: "destructive",
		title: "Cartão vencido",
		illustration: "paymentError",
		userDescription: "O emissor do cartão (seu banco) recusou a transação por que o cartão está expirado.",
		userResolution: "Fale com seu banco para liberar o cartão ou cadastre outro cartão.",
		internalDescription: "EXPIRED_CARD_ERROR",
		additionalData: { status: 402, type: "card_error", category: "expired_card_error" },
	},
	INVALID_CARD_NUMBER: ZoopPromptData<"2020", 402, "card_error", "invalid_card_number"> = {
		code: "2020",
		type: "destructive",
		title: "Cartão não existe",
		illustration: "paymentError",
		userDescription:
			"O emissor do cartão (seu banco) recusou a transação devido ao número do cartão estar incorreto.",
		userResolution: "Refaça o cadastro do cartão e tente novamente.",
		internalDescription: "INVALID_CARD_NUMBER",
		additionalData: { status: 402, type: "card_error", category: "invalid_card_number" },
	},
	INVALID_PIN_CODE: ZoopPromptData<"2021", 402, "card_error", "invalid_pin_code"> = {
		code: "2021",
		type: "destructive",
		title: "Código de segurança incorreto",
		illustration: "paymentError",
		userDescription:
			"O emissor do cartão (seu banco) recusou a transação devido ao código de segurança estar incorreto.",
		userResolution: "Refaça o cadastro do cartão e tente novamente.",
		internalDescription: "INVALID_PIN_CODE",
		additionalData: { status: 402, type: "card_error", category: "invalid_pin_code" },
	},
	AUTHORIZATION_REFUSED: ZoopPromptData<"2021", 402, "card_error", "authorization_refused"> = {
		code: "2021",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "AUTHORIZATION_REFUSED",
		additionalData: { status: 402, type: "card_error", category: "authorization_refused" },
	},
	ENDPOINT_NOT_FOUND: ZoopPromptData<"2022", 404, "invalid_request_error", "endpoint_not_found"> = {
		code: "2022",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "ENDPOINT_NOT_FOUND",
		additionalData: { status: 404, type: "invalid_request_error", category: "endpoint_not_found" },
	},
	SERVICE_REQUEST_TIMEOUT: ZoopPromptData<"2023", 408, "invalid_request_error", "service_request_timeout"> = {
		code: "2023",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "SERVICE_REQUEST_TIMEOUT",
		additionalData: { status: 408, type: "invalid_request_error", category: "service_request_timeout" },
	},
	DUPLICATE_TAXPAYER_ID: ZoopPromptData<"2024", 409, "invalid_request_error", "duplicate_taxpayer_id"> = {
		code: "2024",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "DUPLICATE_TAXPAYER_ID",
		additionalData: { status: 409, type: "invalid_request_error", category: "duplicate_taxpayer_id" },
	},
	SERVER_API_ERROR: ZoopPromptData<"2025", 500, "processing_error", "server_api_error"> = {
		code: "2025",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "SERVER_API_ERROR",
		additionalData: { status: 500, type: "processing_error", category: "server_api_error" },
	},
	RESOURCE_NOT_FOUND: ZoopPromptData<"2026", 404, "invalid_request_error", "resource_not_found"> = {
		code: "2026",
		type: "destructive",
		title: "Ocorreu um erro na solicitação",
		illustration: "paymentError",
		userDescription: "",
		userResolution: "Tente novamente após um tempo. Se o erro persistir contate o suporte.",
		internalDescription: "RESOURCE_NOT_FOUND",
		additionalData: { status: 404, type: "invalid_request_error", category: "resource_not_found" },
	};
