const container = document.querySelector('.container');

const request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/name/australia');
request.send()

request.addEventListener('load',function(){
    
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
  
    const htmlData = `
    <div class="box">
                <span></span>

                <div class="content">
                    <img class="center" src="${data.flag}" />
                    <h2 class="text-center">
                        ${data.name}
                    </h2>
                    <p class="text-center">
                        Capital : ${data.capital}
                    </p>
                    <hr class="divider">

                    <div class="row">
                    
                        <p class="col-md-6">
                           ${data.nativeName}<br>Language
                        </p>
                        <p class="col-md-6">
                            ${data.population}<br>Population
                        </p>
                        <p class="col-md-6">
                            ${data.demonym}<br>Demonym
                        </p>
                        <p class="col-md-6">
                        ${data.currencies[0].name}<br>Currency
                        </p>
                        
                    </div>
                </div>
    `;
    
   
    container.insertAdjacentHTML('afterbegin', htmlData);
});


