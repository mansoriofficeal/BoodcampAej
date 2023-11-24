$(document).ready(function() {
    // Data array
    var data = [
      { number: 1, info: "Data pertama", date: "2023-06-18T08:30:00" },
      { number: 2, info: "Data kedua", date: "2023-06-19T14:45:00" },
      { number: 3, info: "Data ketiga", date: "2023-06-20T10:15:00" },
      { number: 4, info: "Data keempat", date: "2023-06-21T09:30:00" },
      { number: 5, info: "Data kelima", date: "2023-06-22T16:45:00" },
      { number: 6, info: "Data keenam", date: "2023-06-23T11:30:00" },
      { number: 7, info: "Data ketujuh", date: "2023-06-24T14:15:00" },
      { number: 8, info: "Data kedelapan", date: "2023-06-25T10:45:00" },
      { number: 9, info: "Data kesembilan", date: "2023-06-26T12:30:00" },
      { number: 10, info: "Data kesepuluh", date: "2023-06-27T15:45:00" },
      { number: 11, info: "Data kesebelas", date: "2023-06-28T13:30:00" },
      { number: 12, info: "Data kedua belas", date: "2023-06-29T17:15:00" },
      { number: 13, info: "Data ketiga belas", date: "2023-06-30T09:30:00" },
      { number: 14, info: "Data keempat belas", date: "2023-07-01T14:45:00" },
      { number: 15, info: "Data kelima belas", date: "2023-07-02T10:15:00" },
      { number: 16, info: "Data keenam belas", date: "2023-07-03T11:30:00" },
      { number: 17, info: "Data ketujuh belas", date: "2023-07-04T14:15:00" },
      { number: 18, info: "Data kedelapan belas", date: "2023-07-05T10:45:00" },
      { number: 19, info: "Data kesembilan belas", date: "2023-07-06T12:30:00" },
      { number: 20, info: "Data kedua puluh", date: "2023-07-07T15:45:00" }
    ];
      // Tambahkan data lainnya di sini...
  
    // Loop through the data and append to the table
    $.each(data, function(index, item) {
      var row = "<tr>" +
        "<td>" + item.number + "</td>" +
        "<td>" + item.info + "</td>" +
        "<td>" + new Date(item.date).getFullYear() + "</td>" +
        "<td>" + (new Date(item.date).getMonth() + 1) + "</td>" +
        "<td>" + new Date(item.date).getDate() + "</td>" +
        "<td>" + new Date(item.date).toLocaleTimeString() + "</td>" +
        "</tr>";
  
      $("#data-table tbody").append(row);
    });
  });
  