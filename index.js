let input=document.querySelector("#inputs")
let source_lang=document.querySelector("#select1")
let target_lang=document.querySelector("#select2")
let button=document.querySelector("button")
let results=document.querySelector("#results")
async function getlanguage(){
    let url = "https://text-translator2.p.rapidapi.com/getLanguages";
    const headers={
         "x-rapidapi-key": "fcc2337bc8msh42ed8779cd4654cp181e15jsn3854dedb9b02",
        "x-rapidapi-host": "text-translator2.p.rapidapi.com"
    }
    let response=await fetch(url,{
        method:"get",
        headers:headers
    })
    let result=await response.json();
    // console.log(result.data)
    getlanguagecodes(result.data)
}
getlanguage()

function  getlanguagecodes(obj){
    obj.languages.forEach((element) => {
           let option=document.createElement("option")
           option.value=element.code
           option.innerHTML=element.name
           source_lang.append(option)
           let option1=document.createElement("option")
           option1.value=element.code
           option1.innerHTML=element.name
           target_lang.append(option1)
    });
}



button.addEventListener("click",async()=>{
if(source_lang.value=="" && target_lang.value=="" && input.value==""){
   alert("hello")
}
else{
    const URL=`https://text-translator2.p.rapidapi.com/translate`
    const data = `?source_language=${source_lang.value}&target_language=${target_lang.value}&text=${input.value}`;

    const headers = {
        'x-rapidapi-key':'fcc2337bc8msh42ed8779cd4654cp181e15jsn3854dedb9b02',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const response = await fetch(URL,{
        method:"POST",
        headers:headers,
        body:data
    })
    let result=await response.json();
    console.log(result.data)
    getdata(result.data)
    input.value=""
    source_lang.value=""
    target_lang.value=""
}
   

    
})
function getdata(obj){
    results.innerHTML=" "
   let value=document.createElement("h1")
   value.classList.add("names")
   value.innerHTML=obj.translatedText
   console.log(value)
   results.append(value)

}

