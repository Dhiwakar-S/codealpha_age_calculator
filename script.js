function calculateAge() {
    const dobDay = document.getElementById('dobDay').value;
    const dobMonth = document.getElementById('dobMonth').value;
    const dobYear = document.getElementById('dobYear').value;
    const dob = new Date(`${dobYear}-${dobMonth}-${dobDay}`);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>You are <strong>${age}</strong> years old.</p>`;
    let iconElement = document.getElementById('icon');
    let iconClass = '';
    if (age < 3) {
        iconClass = 'fas fa-baby';
    } else if (age < 18) {
        iconClass = 'fas fa-child';
    } else if (age < 65) {
        iconClass = 'fas fa-user-tie';
    } else {
        iconClass = 'fas fa-user-alt';
    }
    iconElement.innerHTML = `<i class="${iconClass}"></i>`;
}
