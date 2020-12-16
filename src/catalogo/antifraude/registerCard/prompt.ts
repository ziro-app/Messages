import { RegisterCardPromptData } from "../../../../codes";

export const WRONG_TRANSACTION_VALUE: RegisterCardPromptData<"0001"> = {
		code: "0001",
		type: "destructive",
		title: "Valor incorreto",
		illustration: "paymentError",
		userDescription: "O valor digitado não corresponde ao valor na fatura.",
		userResolution: "Verifique a fatura e digite novamente.",
		internalDescription: "O usuário colocou o valor errado.",
		additionalData: undefined,
	},
	CONFIRM_TRANSACTION: RegisterCardPromptData<"0002"> = {
		code: "0002",
		type: "destructive",
		title: "Uma transação será enviada",
		illustration: "paymentError",
		userDescription:
			"Uma transação de pequeno valor será enviada e estornada. Utilize o valor para validar seu cartão.",
		userResolution: "Caso seu cartão expire após uma compra, utilize outro método de validação.",
		internalDescription: "O usuário está requisitando uma nova transação",
		additionalData: undefined,
	},
	INITIAL_TRANSACTION: RegisterCardPromptData<"0003"> = {
		code: "0003",
		type: "neutral",
		title: "Uma trasação foi enviada",
		illustration: "creditCard",
		userDescription: "Para sua segurança, o vendedor solicitou a validação do titular.",
		userResolution: "Digite o valor recebido na sua fatura.",
		internalDescription: "O usuário iniciou a verificação através de uma transação",
		additionalData: undefined,
	},
	TRANSACTION_SEND: RegisterCardPromptData<"0004"> = {
		code: "0004",
		type: "success",
		title: "Transação enviada com sucesso",
		illustration: "creditCard",
		userDescription: "Transação enviada com sucesso",
		userResolution: "Verifique na fatura e digite o valor no app.",
		internalDescription: "Transação enviada com sucesso para o usuário",
		additionalData: undefined,
	},
	WRONG_SEND_TRANSACTION: RegisterCardPromptData<"0005"> = {
		code: "0005",
		type: "destructive",
		title: "Falha ao enviar transação",
		illustration: "paymentError",
		userDescription: "Ocorreu um erro ao enviarmos uma nova transação.",
		userResolution: "Tente novamente mais tarde.",
		internalDescription: "Falha ao enviar nova transação para o usuário",
		additionalData: undefined,
	};
