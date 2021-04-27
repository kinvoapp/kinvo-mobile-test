const formatStatus = (status: number): string => {
    if (status == 0) {
        return 'Comum';
    }
    if (status == 1) {
        return 'Novo';
    }  
    if (status == 2) {
        return 'Fechado';
    }   
    return 'Comum';
}

export default formatStatus;