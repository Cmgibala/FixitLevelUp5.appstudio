/*
 Then they can pick one, and then select if they want to delete or update their choice. If they update, they will be able to update the name only to a name they enter. Then the list of names must change to reflect the change. 
Requirements
Use only controls (no popups unless Modal, no prompts, etc).
Use only template literals.
Use a dropdown for showing the company names
Use radio buttons for the 'delete' or 'update' choices
Use a button to submit the request. 

*/

deleteUpdateCustomers.onshow=function(){
    drpCustomers.clear()
    custQuery = "SELECT DISTINCT name FROM customer;" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + custQuery)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        for (i=0; i<= results.length - 1; i++){
           drpCustomers.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)
}


drpCustomers.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else 
        company = s
}


btnSubmit.onclick=function(){
  if (rdoOptions.value == 0){
  
  check = company
  newName = inptNewName.value
  query5 = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query5)
    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
        if (results.length == 0)
            NSB.MsgBox("There are no customers of that name.")
          else { 
            query6 = "UPDATE customer SET name = " + '"' + newName + '"' + "WHERE name =" + '"' + check + '"' ;
            req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query6)
            query7 = "SELECT DISTINCT name FROM customer;" 
            req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query7)
            results = JSON.parse(req4.responseText)
            console.log("the parsed JSON is " + results)
            let message = ""
            for (i=0; i<= results.length - 1; i++){
                message = (message + (results[i][0]) + "\n");
              }
            console.log(message)
            taCustomers.value = message;
          } 
          

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
      
  }
  else {
  check = company
   let query = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query)

    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else { 
        query = "DELETE FROM customer WHERE name =  " + '"' + check + '"'  ;
        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query)
        query2 = "SELECT * FROM customer";
        req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query2)
        results = JSON.parse(req3.responseText)
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        taCustomers.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
  
  
  }
  
}


hmbMenu1.onclick=function(){
  
    if (typeof(s) == "object") 
    return
  else{
    switch(s){
    case "See Customer":
      ChangeForm(seeCustomers);
      break;
    case "Add Customer": 
      ChangeForm(addCustomer);
      break;
    case "Edit Customer": 
      ChangeForm(deleteUpdateCustomers);
      break;
      }
    
  }
}
