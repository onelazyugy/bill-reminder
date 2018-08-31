export class Bill {
    public name: string;
    public dueDate: string;
    public category: string;
    public company: string;
    public amount: number;

    constructor(name: string, dueDate: string, category: string, company: string, amount: number) {
        this.name = name;
        this.dueDate = dueDate;
        this.category = category;
        this.company = company;
        this.amount = amount;
    }
}
