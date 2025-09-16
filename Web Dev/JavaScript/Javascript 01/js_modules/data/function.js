const showPeople = (people) => {
    const newPeople = people
        .map((person) => {
            const { name, job } = person;
            return `Name: ${name} - Job: ${job}`;
        })
        .join("");
    return newPeople;
};

// default export - só pode ter um por arquivo
export default showPeople;
