// ques1 :Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$('button').click(function(){
    $('p').hide();
    // $(this).toggle();
});




//ques2 :Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
 

// $('button').click(function(){
//     $ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/12",
//         type: "GET",
//         success: function(data){
//             console.log(data);
//             document.getElementsByTagName("p")[0].innerText = data.title;
//         }
//     })
// })