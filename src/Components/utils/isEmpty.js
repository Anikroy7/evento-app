const isEmpty = (data) => {
    return Object.values(data).every(i => i === 0);
}

export default isEmpty;