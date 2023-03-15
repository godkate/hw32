function generateList (arr) {
    const list = document.createElement('ul');
    arr.forEach((number) => {
        if (Array.isArray(number)) {
            const listItem = document.createElement('li');
            const secondList = document.createElement('ul');
            number.forEach((num) => {
                const secondListItem = document.createElement('li');
                secondListItem.innerText = `${num}`;
                secondList.append(secondListItem);
            })
            listItem.append(secondList);
            list.append(listItem);
        } else {
            const listItem = document.createElement('li');
            listItem.innerText = `${number}`;
            list.append(listItem);
        }
    })
    document.body.append(list)
}

const numbers = [1, 2, [1.1, 1.2, 1.3], 3];
const num = [1, 2, 3]

generateList(numbers);
generateList(num);