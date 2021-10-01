export interface Order {
    id: number,
    orderNumber: string,
    deliveryDate: string,
    creationDate: string,
    orderType: string,
    orderStore: string,
    orderStatus: string,                
    invoiceIncluded: string,
    invoiceScripted: string,
    orderPrinted: string,
    picking: string,
    check: string,
    orderFisinhed: string,
    missingIncluded: string,
    isChecked: boolean,
    select: any
}

export interface OrderFilters {
    orderCodes: Array<string>,
    deliveryDate: string,
    store: number
}