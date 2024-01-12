function cost(item: string, numberOfItems: number) {
    switch (item) {
        case "ipd": {
            return (numberOfItems > 4) ? numberOfItems * 499.99 : numberOfItems * 549.99;
        }
        case "mbp": {
            return numberOfItems * 1399.99;
        }
        case "atv": {
            return (Math.floor(numberOfItems / 3) * 2 + numberOfItems % 3) * 109.50;
        }
        case "vga": {
            return numberOfItems * 30;
        }
        default: return 0;
    }
}
export function total(items: string[]) {
    const itemsMap = items.reduce((acc: {}, crr: string) => {
        if (acc[crr]) {
            acc[crr]++;
        } else {
            acc[crr] = 1
        }
        return acc;
    }, {});
    const total = Object.keys(itemsMap).reduce((acc: number, crr: string) => {
        acc = acc + cost(crr, itemsMap[crr])
        return acc;
    }, 0);
    return total;
}

// let customer1: string[] = []
// customer1.push('atv');
// customer1.push('ipd');
// customer1.push('ipd');
// customer1.push('atv');
// customer1.push('ipd');
// customer1.push('ipd');
// customer1.push('ipd');
// console.log(`Customer1 total: $${total(customer1)}`);