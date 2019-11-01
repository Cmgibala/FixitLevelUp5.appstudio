/*
 Then they can pick one, and the program will show them all of the information for that company in a nice format like this:   

          Bobs Company
          2112 F St.
          Omaha, NE 55678

Requirements:
Use only controls (no popups unless Modal, no prompts, etc).
Use only template literals.
Use a dropdown for showing the company names
Use a control of your choice to display the company details
Change at least 5 properties of the form and/or controls to improve how it looks visually. 


seeCustomers.onshow=function(){
  let custQuery = "SELECT DISTINCT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + custQuery)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        

        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        let message = ""
        for (i=0; i<= results.length - 1; i++){
            message = (message + (results[i][0]) + "\n");
          }
        console.log(message)
        taCustomers.value = message;
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)
}

*/

btnSubmit.onclick=function(){
  customer = inptCustomer.value
  query = "SELECT * FROM customer WHERE name =" + '"' + customer + '"';
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query)

  if (req2.status == 200) { //transit worked
          let results = JSON.parse(req2.responseText)
          console.log(results)
           if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        results = results[0]
        message = (`${results[1]} \n${results[2]} \n${results[3]}, ${results[4]}, ${results[5]}`);
        console.log(message)
        taData.value = message;
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req2.status)
}
