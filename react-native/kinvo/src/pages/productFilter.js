
export const contains = ({ productName, financialInstitutionName }, search) => {
    const product = productName.toString().toLowerCase();
    const financialInstitution = financialInstitutionName.toString().toLowerCase();
    if (product.includes(search) || financialInstitution.includes(search)) {
        return true;
    }
    return false;
};
