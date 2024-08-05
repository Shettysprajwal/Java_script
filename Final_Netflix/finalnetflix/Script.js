import data from './data.js'; // Adjust the path if necessary

document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('dataList');
    
    data.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Email: ${item.email}, Password: ${item.password}`;
        dataList.appendChild(listItem);
    });
});
