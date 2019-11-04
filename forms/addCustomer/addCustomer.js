addCustomer.onshow=function(){
  lgCustomerData.clear()
  let Query = "SELECT DISTINCT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + Query)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        for (i=0; i<= results.length - 1; i++){
           lgCustomerData.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)
}


btnAddNew.onclick=function(){
  newCustomer = inptNewCustomer.value
  newCustomer = newCustomer.split(",")
  query3 = 'INSERT INTO customer (name, street, city, state, zipcode) VALUES ('+ '"' + newCustomer[0] + '"' + "," + '"' + newCustomer[1] + '"' + "," + '"' + newCustomer[2] + '"' + "," + '"' + newCustomer[3] + '"'+ "," + '"' + newCustomer[4] + '"' +")" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + query3)
  console.log(query3)
 if (req1.status == 200) { //transit worked
      Modal1.value = newCustomer
      Modal1.toggle()
      lgCustomerData.clear()
  let Query = "SELECT DISTINCT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=cmg58665&query=" + Query)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        for (i=0; i<= results.length - 1; i++){
           lgCustomerData.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)
      }
  
  
}


hmbFinal.onclick=function(m){
    if (typeof(m) == "object") 
    return
    else{
    switch(m){
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
