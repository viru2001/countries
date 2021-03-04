const container = document.querySelector('.container');

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2');
request.send()

request.addEventListener('load', function () {

    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data[100]);
    // const [data1] = data[0];
    // console.log(data1);
    // console.log(data[100].name);
    // console.log(data[100].currencies[0].name);
    // const htmlData = `
    // <div class="box">
    //             <span></span>

    //             <div class="content">
    //                 <img class="center" src="${data.flag}" />
    //                 <h2 class="text-center">
    //                     ${data.name}
    //                 </h2>
    //                 <p class="text-center">
    //                     Capital : ${data.capital}
    //                 </p>
    //                 <hr class="divider">

    //                 <div class="row">

    //                     <p class="col-md-6">
    //                        ${data.nativeName}<br>Language
    //                     </p>
    //                     <p class="col-md-6">
    //                         ${data.population}<br>Population
    //                     </p>
    //                     <p class="col-md-6">
    //                         ${data.demonym}<br>Demonym
    //                     </p>
    //                     <p class="col-md-6">
    //                     ${data.currencies[0].name}<br>Currency
    //                     </p>

    //                 </div>
    //             </div>
    // `;
    let i = 0;
    let htmlData = "";
    for (i = 0; i < data.length; i++) {
        // console.log(data.name);
        htmlData += `
        <div class="box">
            <span></span>
    
            <div class="content">
                <img class="center" src="${data[i].flag}" />
                <h2 class="text-center">${data[i].name}</h2>
                <p class="text-center">
                    Capital : ${data[i].capital}
                </p>
                <hr class="divider">
    
                <div class="row">
                        
                    <p class="col-md-6">
                        ${data[i].languages[0].nativeName}<br>Language
                    </p>
                    <p class="col-md-6">
                        ${data[i].population}<br>Population
                    </p>
                    <p class="col-md-6">
                        ${data[i].demonym}<br>Demonym
                    </p>
                    <p class="col-md-6">
                    ${data[i].currencies[0].name}<br>Currency
                    </p>
                    
                </div>
            </div>
        </div>
        `;
    }
    // <spanclass="transparent" style="color:#4dff03;backgorund-color:rgba(0, 0, 0, 0.6);"> ${data.nativeName}</span><br>Language

    container.insertAdjacentHTML('afterbegin', htmlData);
});


