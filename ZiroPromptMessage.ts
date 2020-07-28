import { ZiroMessage, ZiroMessageProps, ZiroMessageData } from "./ZiroMessage"

export type Button = {
    title: string
    action: () => void
}

export interface ZiroPromptMessageData {
    type: "neutral"|"destructive"|"success"
    userResolution: string
    internalDescription: string
}

type Buttons = {
    firstButton?: Button
    secondButton?: Button
}

type ZiroPromptMessageProps = ZiroMessageProps & ZiroPromptMessageData & Buttons

export class ZiroPromptMessage extends ZiroMessage implements ZiroPromptMessageProps {

    type: "neutral"|"destructive"|"success"
    userResolution: string
    firstButton?: Button
    secondButton?: Button

    constructor(props: ZiroPromptMessageProps) {
        const { type, userResolution, firstButton, secondButton, ...rest } = props
        super(rest)
        this.type = type
        this.userResolution = userResolution
        this.firstButton = firstButton
        this.secondButton = secondButton
        this.withButtons = this.withButtons.bind(this)
        this.set = this.set.bind(this)
    }

    withButtons(buttons: [Button]|[Button,Button]) {
        this.firstButton = buttons[0]
        this.secondButton = buttons[1]
        return this
    }

    set<K extends keyof (ZiroPromptMessageData & ZiroMessageData)>(variable: K, value: (ZiroPromptMessageData&ZiroMessageData)[K]) {
        this[variable] = value as any
        return this
    }

    get() {
        return {
            name: this.name,
            code: this.code,
            type: this.type,
            title: this.title,
            illustration: this.illustration,
            userDescription: this.userDescription,
            userResolution: this.userResolution,
            internalDescription: this.internalDescription,
        } as ZiroPromptMessageData & ZiroMessageData & { name: string }
    }
}