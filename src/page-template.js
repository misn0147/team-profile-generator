const generateManagerCard = data => {
    return `
    
    <div class="card bg-info" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    Manager
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
    </ul>
    </div>
    
    `
}
const generateEngineerCard = data => {
    return `
    
    <div class="card bg-primary" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    Engineer
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">Github: ${data.github}</li>
    </ul>
    </div>
    
    `
}
const generateInternCard = data => {
    return `
    
    <div class="card bg-success" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    Intern
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">School: ${data.school}</li>
    </ul>
    </div>
    
    `
}

module.exports = { generateManagerCard, generateEngineerCard, generateInternCard };