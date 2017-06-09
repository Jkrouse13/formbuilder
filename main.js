// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": [],
    "type": "textarea",
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
// for(let i=0; i<formData.length; i++){
//
//   // Check your dev tools console for what the items in formData have
//   console.log(formData[i])
//
// }


// -------- Your Code Goes Here --------
let formdiv = document.querySelector('.fields')
console.log(formdiv)
for(let i=0; i<formData.length; i++){
  if (formData[i].options.length > 0){

    let object = formData[i]
    let select =  document.createElement('select')
    select.setAttribute('id', 'select');
    formdiv.appendChild(select);
    for(let o=0; o<formData[i].options.length; o++){
      let option = document.createElement('option');
      option.setAttribute('value', object.options[o].value);
      option.textContent = object.options[o].label;
      select.appendChild(option);
    }

  } else if (formData[i].type === 'textarea') {

    let area = document.createElement('textarea')
    area.setAttribute('id', formData[i].id);
    area.setAttribute('icon', formData[i].icon);
    area.setAttribute('placeholder', formData[i].label);
    formdiv.appendChild(area);

  } else{

    let input = document.createElement('input')
    input.setAttribute('placeholder', formData[i].label);
    input.setAttribute('type',formData[i].type);
    input.setAttribute('id', formData[i].id);
    input.setAttribute('icon', formData[i].icon);
    formdiv.appendChild(input);
  }


  // Check your dev tools console for what the items in formData have
  console.log(formData[i])

}
