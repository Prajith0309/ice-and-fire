function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('books.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
function submitted(){
    alert ("Thanks for ur feedback!");
 }
 const answerDiv = document.createElement('answerdiv')
answerDiv.innerHTML = "";
 const answer = document.createElement('answer')
 const solve = document.createElement('slv')
//  slv.innerText = str;
 answer.append(solve);
 answerDiv.append(answer);


const sample = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/1");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }
}
sample();

const sample1 = async () => {
        try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/2");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }
}
sample1();

const sample2 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/3");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }     
}
sample2();

 const sample3 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/4");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }        
} 
 sample3();

 const sample4 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/5");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }          
}
sample4();

const sample5 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/6");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }                
}
sample5();


const sample6 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/7");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }                     
}
sample6();

 const sample7 = async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/8");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }                        
 }
sample7();


const sample8= async () => {
    try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/9");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }                            
}
sample8();


 const sample9 = async () => {
     try{
        const response = await fetch("https://www.anapioficeandfire.com/api/books/10");
        const data = await response.json();
            console.log(data.name);
            console.log(data.isbn);
            console.log(data.numberOfPages);
            console.log(data.authors[0]);
            console.log(data.publisher);
            console.log(data.released);
        }
        catch (error) {
          console.log("Error occured");
        }                              
} 
sample9();