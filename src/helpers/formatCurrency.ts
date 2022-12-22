export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("pl", { style: "currency", currency: 'PLN' }).format(amount)
}