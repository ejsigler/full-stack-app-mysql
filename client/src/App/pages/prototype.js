import { Component } from 'react';

class PT extends Component {
   
    saveEdits() {
    var schoolTest = document.getElementById("school");

    if (schoolTest.tagName === "TEXTAREA") {
    var schoolTA = document.getElementById("school");
    var schoolP = document.createElement("p");
    schoolP.innerHTML = schoolTA.value;
    schoolTA.parentNode.insertBefore(schoolP, schoolTA);
    schoolTA.parentNode.removeChild(schoolTA);
    schoolP.setAttribute('id', 'school');
    var editSchool = document.getElementById("school");
    var newSchool = editSchool.innerHTML;
    localStorage.schoolEdits = newSchool;
    editSchool.contentEditable="false";
    editSchool.setAttribute('onclick', 'createSchoolTA()');
    var schoolBTN = document.getElementById("schoolBTN");
    schoolBTN.setAttribute('value', 'edit');
    schoolBTN.setAttribute('onclick', 'createSchoolTA()');
    }
    var coursesTest = document.getElementById("courses");
    if(coursesTest.tagName === "TEXTAREA") {
    var coursesTA = document.getElementById("courses");
    var coursesP = document.createElement("p");
    coursesP.innerHTML = coursesTA.value;
    coursesTA.parentNode.insertBefore(coursesP, coursesTA);
    coursesTA.parentNode.removeChild(coursesTA);
    coursesP.setAttribute('id', 'courses');
    var editCourses = document.getElementById("courses");
    var newCourses = editCourses.innerHTML;
    localStorage.coursesEdits = newCourses;
    editCourses.contentEditable="false";
    editCourses.setAttribute('onclick', 'createCoursesTA()');
    var coursesBTN = document.getElementById("coursesBTN");
    coursesBTN.setAttribute('value', 'edit');
    coursesBTN.setAttribute('onclick', 'createCoursesTA()');
    }
    var peTest = document.getElementById("pastEmployment");
    if(peTest.tagName === "TEXTAREA") {
    var pastEmploymentTA = document.getElementById("pastEmployment");
    var pastEmploymentP = document.createElement("p");
    pastEmploymentP.innerHTML = pastEmploymentTA.value;
    pastEmploymentTA.parentNode.insertBefore(pastEmploymentP, pastEmploymentTA);
    pastEmploymentTA.parentNode.removeChild(pastEmploymentTA);
    pastEmploymentP.setAttribute('id', 'pastEmployment');
    var editPastEmployment = document.getElementById("pastEmployment");
    var newPastEmployment = editPastEmployment.innerHTML;
    localStorage.pastEmploymentEdits = newPastEmployment;
    editPastEmployment.contentEditable="false";
    editPastEmployment.setAttribute('onclick', 'createPETA()');
    var peBTN = document.getElementById("peBTN");
    peBTN.setAttribute('value', 'edit');
    peBTN.setAttribute('onclick', 'createPETA()');
    }
    var ceTest = document.getElementById("currentEmployment");
    if(ceTest.tagName === "TEXTAREA") {
    var currentEmploymentTA = document.getElementById("currentEmployment");
    var currentEmploymentP = document.createElement("p");
    currentEmploymentP.innerHTML = currentEmploymentTA.value;
    currentEmploymentTA.parentNode.insertBefore(currentEmploymentP, currentEmploymentTA);
    currentEmploymentTA.parentNode.removeChild(currentEmploymentTA);
    currentEmploymentP.setAttribute('id', 'currentEmployment');
    var editCurrentEmployment = document.getElementById("currentEmployment");
    var newCurrentEmployment = editCurrentEmployment.innerHTML;
    localStorage.currentEmploymentEdits = newCurrentEmployment;
    editCurrentEmployment.contentEditable="false";
    editCurrentEmployment.setAttribute('onclick', 'createCETA()');
    var ceBTN = document.getElementById("ceBTN");
    ceBTN.setAttribute('value', 'edit');
    ceBTN.setAttribute('onclick', 'createCETA()');
    }
    var contactTest = document.getElementById("contact");
    if(contactTest.tagName === "TEXTAREA") {
    var contactTA = document.getElementById("contact");
    var contactP = document.createElement("p");
    contactP.innerHTML = contactTA.value;
    contactTA.parentNode.insertBefore(contactP, contactTA);
    contactTA.parentNode.removeChild(contactTA);
    contactP.setAttribute('id', 'contact');
    var editContact = document.getElementById("contact");
    var newContact = editContact.innerHTML;
    localStorage.contactEdits = newContact;
    editContact.contentEditable="false";
    editContact.setAttribute('onclick', 'createContactTA()');
    var contactBTN = document.getElementById("contactBTN");
    contactBTN.setAttribute('value', 'edit');
    contactBTN.setAttribute('onclick', 'createContactTA()');
    }
    
    document.getElementById("update").innerHTML="Edits saved!";
    }
    checkEdits() {
    
    //find out if the user has previously saved edits
    if(localStorage.schoolEdits!=null)
    document.getElementById("school").innerHTML = localStorage.schoolEdits;
    if(localStorage.coursesEdits!=null)
    document.getElementById("courses").innerHTML = localStorage.coursesEdits;
    if(localStorage.pastEmploymentEdits!=null)
    document.getElementById("pastEmployment").innerHTML = localStorage.pastEmploymentEdits;
    if(localStorage.currentEmploymentEdits!=null)
    document.getElementById("currentEmployment").innerHTML = localStorage.currentEmploymentEdits;
    if(localStorage.contactEdits!=null)
    document.getElementById("contact").innerHTML = localStorage.contactEdits;
    }

    createTA() {
        var schoolP = document.getElementById("school");
        var schoolTA = document.createElement("textarea");
        schoolTA.innerHTML = schoolP.innerHTML;
        schoolP.parentNode.insertBefore(schoolTA, schoolP);
        schoolP.parentNode.removeChild(schoolP);
        schoolTA.setAttribute('id', 'school');
        document.getElementById("school").rows = "10";
        document.getElementById("school").cols = "100";
        var coursesP = document.getElementById("courses");
        var coursesTA = document.createElement("textarea");
        coursesTA.innerHTML = coursesP.innerHTML;
        coursesP.parentNode.insertBefore(coursesTA, coursesP);
        coursesP.parentNode.removeChild(coursesP);
        coursesTA.setAttribute('id', 'courses');
        document.getElementById("courses").rows = "10";
        document.getElementById("courses").cols = "100";
        var pastEmploymentP = document.getElementById("pastEmployment");
        var pastEmploymentTA = document.createElement("textarea");
        pastEmploymentTA.innerHTML = pastEmploymentP.innerHTML;
        pastEmploymentP.parentNode.insertBefore(pastEmploymentTA, pastEmploymentP);
        pastEmploymentP.parentNode.removeChild(pastEmploymentP);
        pastEmploymentTA.setAttribute('id', 'pastEmployment');
        document.getElementById("pastEmployment").rows = "10";
        document.getElementById("pastEmployment").cols = "100";
        var currentEmploymentP = document.getElementById("currentEmployment");
        var currentEmploymentTA = document.createElement("textarea");
        currentEmploymentTA.innerHTML = currentEmploymentP.innerHTML;
        currentEmploymentP.parentNode.insertBefore(currentEmploymentTA, currentEmploymentP);
        currentEmploymentP.parentNode.removeChild(currentEmploymentP);
        currentEmploymentTA.setAttribute('id', 'currentEmployment');
        document.getElementById("currentEmployment").rows = "10";
        document.getElementById("currentEmployment").cols = "100";
        var contactP = document.getElementById("contact");
        var contactTA = document.createElement("textarea");
        contactTA.innerHTML = contactP.innerHTML;
        contactP.parentNode.insertBefore(contactTA, contactP);
        contactP.parentNode.removeChild(contactP);
        contactTA.setAttribute('id', 'contact');
        document.getElementById("contact").rows = "10";
        document.getElementById("contact").cols = "100";
        var news = document.getElementById("update");
        news.innerHTML = " ";
        var schoolBTN = document.getElementById("schoolBTN");
        schoolBTN.setAttribute('value', 'save');
        schoolBTN.setAttribute('onclick', 'saveSchool()');
        var coursesBTN = document.getElementById("coursesBTN");
        coursesBTN.setAttribute('value', 'save');
        coursesBTN.setAttribute('onclick', 'saveCourses()');
        var peBTN = document.getElementById("peBTN");
        peBTN.setAttribute('value', 'save');
        peBTN.setAttribute('onclick', 'savePE()');
        var ceBTN = document.getElementById("ceBTN");
        ceBTN.setAttribute('value', 'save');
        ceBTN.setAttribute('onclick', 'saveCE()');
        var contactBTN = document.getElementById("contactBTN");
        contactBTN.setAttribute('value', 'save');
        contactBTN.setAttribute('onclick', 'saveContact()');
    }
    
    createSchoolTA() {
        var schoolP = document.getElementById("school");
        var schoolTA = document.createElement("textarea");
        schoolTA.innerHTML = schoolP.innerHTML;
        schoolP.parentNode.insertBefore(schoolTA, schoolP);
        schoolP.parentNode.removeChild(schoolP);
        schoolTA.setAttribute('id', 'school');
        document.getElementById("school").rows = "10";
        document.getElementById("school").cols = "100";
        var schoolBTN = document.getElementById("schoolBTN");
        schoolBTN.setAttribute('value', 'save');
        schoolBTN.setAttribute('onclick', 'saveSchool()');
        var news = document.getElementById("update");
        news.innerHTML = " ";
}
saveSchool() {
    var test = document.getElementById("school");

    if (test.tagName === "TEXTAREA") {
    var schoolTA = document.getElementById("school");
    var schoolP = document.createElement("p");
    schoolP.innerHTML = schoolTA.value;
    schoolTA.parentNode.insertBefore(schoolP, schoolTA);
    schoolTA.parentNode.removeChild(schoolTA);
    schoolP.setAttribute('id', 'school');
    schoolP.setAttribute('onclick', 'createSchoolTA()');
    var editSchool = document.getElementById("school");
    var newSchool = editSchool.innerHTML;
    localStorage.schoolEdits = newSchool;
    editSchool.contentEditable="false";
    var schoolBTN = document.getElementById('schoolBTN');
    schoolBTN.setAttribute('value', 'edit');
    schoolBTN.setAttribute('onclick', 'createSchoolTA()');
    var news = document.getElementById('update');
    news.innerHTML = "Edits Saved! ";
    
    }
}
createCoursesTA() {
    var coursesP = document.getElementById("courses");
        var coursesTA = document.createElement("textarea");
        coursesTA.innerHTML = coursesP.innerHTML;
        coursesP.parentNode.insertBefore(coursesTA, coursesP);
        coursesP.parentNode.removeChild(coursesP);
        coursesTA.setAttribute('id', 'courses');
        document.getElementById("courses").rows = "10";
        document.getElementById("courses").cols = "100";
        var coursesBTN = document.getElementById("coursesBTN");
        coursesBTN.setAttribute('value', 'save');
        coursesBTN.setAttribute('onclick', 'saveCourses()');
        var news = document.getElementById("update");
        news.innerHTML = " ";
}
saveCourses() {
    var test = document.getElementById('courses');
    if (test.tagName === "TEXTAREA") {
    var coursesTA = document.getElementById("courses");
    var coursesP = document.createElement("p");
    coursesP.innerHTML = coursesTA.value;
    coursesTA.parentNode.insertBefore(coursesP, coursesTA);
    coursesTA.parentNode.removeChild(coursesTA);
    coursesP.setAttribute('id', 'courses');
    coursesP.setAttribute('onclick', 'createCoursesTA()');
    var editCourses = document.getElementById("courses");
    var newCourses = editCourses.innerHTML;
    localStorage.coursesEdits = newCourses;
    editCourses.contentEditable="false";
    var coursesBTN = document.getElementById('coursesBTN');
    coursesBTN.setAttribute('value', 'edit');
    coursesBTN.setAttribute('onclick', 'createCoursesTA()');
    var news = document.getElementById('update');
    news.innerHTML = "Edits Saved! ";
    }
}
createPETA() {
    var pastEmploymentP = document.getElementById("pastEmployment");
        var pastEmploymentTA = document.createElement("textarea");
        pastEmploymentTA.innerHTML = pastEmploymentP.innerHTML;
        pastEmploymentP.parentNode.insertBefore(pastEmploymentTA, pastEmploymentP);
        pastEmploymentP.parentNode.removeChild(pastEmploymentP);
        pastEmploymentTA.setAttribute('id', 'pastEmployment');
        document.getElementById("pastEmployment").rows = "10";
        document.getElementById("pastEmployment").cols = "100";
        var peBTN = document.getElementById('peBTN');
        peBTN.setAttribute('value', 'save');
        peBTN.setAttribute('onclick', 'savePE()');
        var news = document.getElementById("update");
        news.innerHTML = " ";
}
savePE() {
    var test = document.getElementById('pastEmployment');
    if (test.tagName === "TEXTAREA") {
        var pastEmploymentTA = document.getElementById("pastEmployment");
    var pastEmploymentP = document.createElement("p");
    pastEmploymentP.innerHTML = pastEmploymentTA.value;
    pastEmploymentTA.parentNode.insertBefore(pastEmploymentP, pastEmploymentTA);
    pastEmploymentTA.parentNode.removeChild(pastEmploymentTA);
    pastEmploymentP.setAttribute('id', 'pastEmployment');
    pastEmploymentP.setAttribute('onclick', 'createPETA()');
    var editPastEmployment = document.getElementById("pastEmployment");
    var newPastEmployment = editPastEmployment.innerHTML;
    localStorage.pastEmploymentEdits = newPastEmployment;
    editPastEmployment.contentEditable="false";
    var peBTN = document.getElementById('peBTN');
    peBTN.setAttribute('value', 'edit');
    peBTN.setAttribute('onclick', 'createPETA()');
    var news = document.getElementById('update');
    news.innerHTML = "Edits Saved! ";
    }
}
createCETA() {
    var currentEmploymentP = document.getElementById("currentEmployment");
    var currentEmploymentTA = document.createElement("textarea");
    currentEmploymentTA.innerHTML = currentEmploymentP.innerHTML;
    currentEmploymentP.parentNode.insertBefore(currentEmploymentTA, currentEmploymentP);
    currentEmploymentP.parentNode.removeChild(currentEmploymentP);
    currentEmploymentTA.setAttribute('id', 'currentEmployment');
    document.getElementById("currentEmployment").rows = "10";
    document.getElementById("currentEmployment").cols = "100";
    var ceBTN = document.getElementById("ceBTN");
    ceBTN.setAttribute('value', 'save');
    ceBTN.setAttribute('onclick', 'saveCE()');
    var news = document.getElementById("update");
    news.innerHTML = " ";

}
saveCE() {
    var test = document.getElementById("currentEmployment");
    if(test.tagName === "TEXTAREA") {
        var currentEmploymentTA = document.getElementById("currentEmployment");
        var currentEmploymentP = document.createElement("p");
        currentEmploymentP.innerHTML = currentEmploymentTA.value;
        currentEmploymentTA.parentNode.insertBefore(currentEmploymentP, currentEmploymentTA);
        currentEmploymentTA.parentNode.removeChild(currentEmploymentTA);
        currentEmploymentP.setAttribute('id', 'currentEmployment');
        var editCurrentEmployment = document.getElementById("currentEmployment");
        var newCurrentEmployment = editCurrentEmployment.innerHTML;
        localStorage.currentEmploymentEdits = newCurrentEmployment;
        editCurrentEmployment.contentEditable="false";
        var ceBTN = document.getElementById("ceBTN");
        ceBTN.setAttribute('value', 'edit');
        ceBTN.setAttribute('onclick', 'createCETA()');
        currentEmploymentP.setAttribute('onclick', 'createCETA()');
        var news = document.getElementById('update');
        news.innerHTML = "Edits Saved! ";
    }
}
createContactTA() {
    var contactP = document.getElementById("contact");
        var contactTA = document.createElement("textarea");
        contactTA.innerHTML = contactP.innerHTML;
        contactP.parentNode.insertBefore(contactTA, contactP);
        contactP.parentNode.removeChild(contactP);
        contactTA.setAttribute('id', 'contact');
        document.getElementById("contact").rows = "10";
        document.getElementById("contact").cols = "100";
        var news = document.getElementById("update");
        news.innerHTML = " ";
        var contactBTN = document.getElementById("contactBTN");
        contactBTN.setAttribute('value', 'save');
        contactBTN.setAttribute('onclick', 'saveContact()');
}
saveContact() {
    var test = document.getElementById("contact");
    if(test.tagName === "TEXTAREA") {
        var contactTA = document.getElementById("contact");
        var contactP = document.createElement("p");
        contactP.innerHTML = contactTA.value;
        contactTA.parentNode.insertBefore(contactP, contactTA);
        contactTA.parentNode.removeChild(contactTA);
        contactP.setAttribute('id', 'contact');
        var editContact = document.getElementById("contact");
        var newContact = editContact.innerHTML;
        localStorage.contactEdits = newContact;
        editContact.contentEditable="false";
        var news = document.getElementById('update');
        news.innerHTML = "Edits Saved! ";
        var contactBTN = document.getElementById("contactBTN");
        contactBTN.setAttribute('value', 'edit');
        contactBTN.setAttribute('onclick', 'createContactTA()');
        contactP.setAttribute('onclick', 'createContactTA()');

    }
}
}

export default PT;