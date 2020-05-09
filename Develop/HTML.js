const colors = {
  blue: {
    wrapperBackground: "#4BB3FD",
    headerBackground: "#26175A",
    headerColor: "fffcf9",
    photoBorderColor: "#3066BE"
  },
  green: {
    wrapperBackground: "#69b578",
    headerBackground: "#12b1a",
    headerColor: "fffcf9",
    photoBorderColor: "#C4E2A4"
  },
  pink: {
    wrapperBackground: "#F59CC3",
    headerBackground: "#A50F5B",
    headerColor: "fffcf9",
    photoBorderColor: "#FFCAD4"
  },
  red: {
    wrapperBackground: "#990033",
    headerBackground: "#6E0000",
    headerColor: "fffcf9",
    photoBorderColor: "CE4257"
  }
};

function getHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Profile</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #fffcf9;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
        }
      </style>
    </head>
    <body>
      <header>
        <div class="wrapper">
          <div class="photoHeader">
            <img>Profile Image</>
            <h1>Hello!</h1>
            <h2>I'm x-name</h2>
            <h3>I'm currently at x-company </h3>
          </div>
        </div>
        <nav class="navbarLinks">
          <a class="nav-link">location</a>
          <a class="nav-link">github</a>
          <a class="nav-link">blog</a>
        </nav>
      </header>

      <div class="container">
        <div class="row">
          <divclass="col">
            <h4>bio data</h4>
          </div>
        </div>

        <div class="row">
          <div class="col card">
            <h2>public rep data</h2>
          </div>
        </div>
        
        <div class="col card">
          <h2>followers data</h2>
        </div>

        <div class="row">
          <div class="col card">
            <h2>stars</h2>
          </div>
        </div>

        <div class="col card">
          <h2>following data</h2>
        </div>

      </div>
    </body>
  </html>`
};

module.export = {getHTML};