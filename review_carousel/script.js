function generateReview() {
    const names = ['Susan', 'Bobby', 'Tom', 'Kate', 'Josh', 'Cleo', 'Cara', 'Isabella', 'Justice', 'Jaeden', 'Abigayle', 'Savion', 'Zack', 'Steven', 'Mareli', 'Johnston', 'Lynch', 'Frye', 'Mcfarland', 'Hayes', 'Wyatt', 'House', 'Emma', 'Noah', 'Ethan', 'Olivia', 'Jacob', 'Ava', 'Liam', 'Logan', 'Sophia', 'Emily', 'Michael', 'Madison', 'Matthew', 'Jack', 'Mia', 'Hannah', 'Ryan', 'Abigail', 'Mason', 'Chloe', 'Joshua', 'Aiden', 'Ella', 'Jackson', 'Lily', 'Grace', 'James', 'Amelia'];
    let randomName = names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];

    const careers = ['WEB DEVELOPER', 'IOS DEVELOPER', 'ANDROID DEVELOPER', 'GAME DEVELOPER', 'DATABASE MANAGER', 'CYBERSECURITY APRRENTICE', 'MOBILE DEVELOPER'];
    let randomCareer = careers[Math.floor(Math.random() * careers.length)];

    document.getElementById('name').innerHTML = randomName;
    document.getElementById('occupation').innerHTML = randomCareer;
}

generateReview();