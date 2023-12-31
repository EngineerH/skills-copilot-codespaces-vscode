function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSelected = member.options[member.selectedIndex].selected;
    var memberDisabled = member.options[member.selectedIndex].disabled;

    var memberResult = document.getElementById("memberResult");
    memberResult.innerHTML = "value: " + memberValue + "<br>" +
        "text: " + memberText + "<br>" +
        "selected: " + memberSelected + "<br>" +
        "disabled: " + memberDisabled;
}