//create a function that takes the users input from prompts and generates the HTML

//write a function that can plug the info from the roster array into the require html stuff.

const generateCards = (roster) => {
  const htmlArray = [];
  let index = 0;
  while (index < roster.length) {
    const htmlRoster = `
    <div class="card text-dark bg-light mb-3 employee" style="max-width: 18rem;">
    <div class="card-header"><h1>${roster[index].name}</h1></div>
    <div class="card-body">
      <h5 class="card-title">${roster[index].role}</h5>
    </div>
    <ul>
        <li><a href="mailto:${roster[index].email}">${roster[index].email}</a></li>
        <li>Id Number:${roster[index].id}</li>
        <li>Officenuber/School/Github: ${roster[index].random}</li>
    </ul>
    </div>`;
    htmlArray.push(htmlRoster);
    index++;
  }
  const htmlFinalRoster = `${htmlArray.reduce((x, y) => x + y)}`;
  return htmlFinalRoster;
};

//const htmlFinalRoster = `${htmlArray.reduce((x, y) => x + y)}`;

const generateHTMLPage = (roster) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Roster</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header class="header">
            <h1>Employee Roster</h1>
        </header>
        <div class="container">
            ${generateCards(roster)}
        </div>
    </body>
    </html>`;
};

module.exports = {
  generateHTMLPage,
  generateCards,
};
