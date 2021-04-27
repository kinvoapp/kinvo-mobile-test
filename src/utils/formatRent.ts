const formatRent = (value: number): string => {
    if (value > 0) {
        return '#AED335';
    }
    if (value < 0) {
        return '#E85D1F';
    }
    return '#627179';
}

export default formatRent;