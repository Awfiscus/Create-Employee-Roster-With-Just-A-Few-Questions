//create a function that takes the users input from prompts and generates the HTML
const index = require("./index")

//write a function that can plug the info from the roster array into the require html stuff.
const generateCards = (roster) => {
    roster.forEach(employee => {
        return `
        <div class="card text-dark bg-light mb-3 employee" style="max-width: 18rem;">
        <div class="card-header"><h1>Name</h1></div>
        <div class="card-body">
          <h5 class="card-title">Role</h5>
        </div>
        <ul>
            <li>email</li>
            <li>id</li>
            <li>random</li>
        </ul>
        </div>`
    });
}


const generateHTMLPage = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Roster</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="header">
            <h1>Employee Roster</h1>
        </header>
        <div class="container">
            <div class="card text-dark bg-light mb-3 employee" style="max-width: 18rem;">
                <div class="card-header"><h1>Name</h1></div>
                <div class="card-body">
                  <h5 class="card-title">Role</h5>
                </div>
                <ul>
                    <li>email</li>
                    <li>id</li>
                    <li>random</li>
                </ul>
            </div>
        </div>
    </body>
    </html>`
}