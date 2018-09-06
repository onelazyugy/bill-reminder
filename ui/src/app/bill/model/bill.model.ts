export class Bill {
    public name: string;
    public dueDate: Date;
    public category: string;
    public company: string;
    public amount: number;
    public isRecurring: boolean;

    constructor(name: string, dueDate: Date, category: string, company: string, amount: number, isRecurring: boolean) {
        this.name = name;
        this.dueDate = dueDate;
        this.category = category;
        this.company = company;
        this.amount = amount;
        this.isRecurring = isRecurring;
    }
}
