function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = 2;   // Number of rows to process
  
  var d = new Date();
  
   if (d.getDay() >5 || d.getDay()==0) {
      var subject = 'Today day is ' + d.getDay() + ', Not sending scrum minutes';
      MailApp.sendEmail('manoj.bharadwaj@evivehealth.com', subject,'');
      return;
    }
  
  var month = d.getMonth() + 1;
  var date = d.getDate() + '/' + month + '/' + d.getYear()

  var subject = "Campaigns Team Scrum Minutes - " + date ;

  var first_entry = sheet.getRange(2,1,38,1);
  
  var column_data = sheet.getDataRange().getLastColumn();
  var dataRange = sheet.getRange(2, column_data-1, 38, 2);

  var first_column = first_entry.getValues();
  var last_column = dataRange.getValues();
  var index_column = first_column.length;

  var s = '<html> <table border="1"> <tr>';
  for(var i = 0; i <index_column ; i++){
   s = s + '<tr>' + '<td>' + first_column[i] + '</td>' + '<td>' + last_column[i][0] + '</td>' + '<td>' + last_column[i][1] + '</td>'
 }
   s =  s + '</tr></table></html>';
  Logger.log('Sent a scrum minutes');
  MailApp.sendEmail('qa_team@evivehealth.com', subject, 'hhh', {'htmlBody':s});
  
}
