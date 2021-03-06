import { ZiroMessage, ZiroProps, ZiroData } from "./ZiroMessage";

interface ZiroWaitingData {
	promise?: Promise<any>;
}

export type ZiroWaitingFullData<C, D = undefined> = ZiroData<C, D> & ZiroWaitingData;

type ZiroWaitingProps<C, N, D> = ZiroProps<C, N, D> & ZiroWaitingData;

export class ZiroWaitingMessage<C, N, D = undefined> extends ZiroMessage<C, N, D> implements ZiroWaitingProps<C, N, D> {
	private readonly $$waitingMessage = true;

	readonly promise?: Promise<any>;

	constructor(props: ZiroWaitingProps<C, N, D>) {
		super(props);
		this.promise = props.promise;
		this.withPromise = this.withPromise.bind(this);
	}

	withPromise(promise: Promise<any>) {
		return new ZiroWaitingMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			promise,
		} as any);
	}

	set<K extends keyof ZiroWaitingFullData<C, D>>(variable: K, value: ZiroWaitingFullData<C, D>[K]) {
		return new ZiroWaitingMessage<C, N, D>({
			...this.getData(),
			isDefaultMessage: true,
			[variable]: value,
		} as any);
	}

	getData(): Omit<ZiroWaitingProps<C, N, D>, "promise"> {
		return super.getData();
	}

	withAdditionalData<ND>(data: ND) {
		const { additionalData, ...rest } = this.getData();
		return new ZiroWaitingMessage<C, N, D & ND>({
			...rest,
			isDefaultMessage: true,
			additionalData: { ...additionalData, ...data },
		} as any);
	}
}

export function isWaiting<C = string, N = string, D = any>(obj: any): obj is ZiroWaitingMessage<C, N, D> {
	if (obj === null) return false;
	if (typeof obj !== "object") return false;
	if (!("$$waitingMessage" in obj)) return false;
	return obj.$$waitingMessage;
}

type WaitingMessageCollection = { [key: string]: ZiroWaitingMessage<string, string, any> };
export type GetWaitingCode<V extends WaitingMessageCollection, N extends keyof V> = V[N] extends ZiroWaitingFullData<
	infer C,
	any
>
	? C
	: never;
export type GetWaitingData<V extends WaitingMessageCollection, N extends keyof V> = V[N] extends ZiroWaitingFullData<
	any,
	infer D
>
	? D
	: never;
export type WaitingMessage<V extends WaitingMessageCollection, N extends keyof V, D> = ZiroWaitingMessage<
	GetWaitingCode<V, N>,
	N,
	D
>;
