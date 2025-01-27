
export type PersonalInfo = {
    name: string,
    email :string,
    phone :string
}
export type Plan = {
    name: string,
    price: number
    freeMonthsYearly: number
    icon: string,
}
export type AddOn = {
    name: string,
    details: string,
    price: number
}

export type MultiStepsFormType = {
    step1: PersonalInfo,
    step2: Plan,
    step3: AddOn[]
}

