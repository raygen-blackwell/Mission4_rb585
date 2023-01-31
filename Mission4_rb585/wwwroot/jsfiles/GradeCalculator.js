$("#btnCalc").click(function () {
    // variable names
    var assignments = ($("#AGrade").val() * .5)
    var groupProjects = ($("#GPGrade").val() * .1)
    var quizes = ($("#QGrade").val() * .1) 
    var midtermExam = ($("#MEGrade").val() * .1)
    var finalExam = ($("#FEGrade").val() * .1)
    var intex = ($("#IGrade").val() * .1)

    // grade calculation
    var finalGrade = assignments + groupProjects + quizes + midtermExam + finalExam + intex

    // if statement to assign letter grade
    if (finalGrade >= 94) {
        $("#LetterGrade").html("A")
    }
    else if (finalGrade >= 90) {
        $("#LetterGrade").html("A-")
    }
    else if (finalGrade >= 87) {
        $("#LetterGrade").html("B+")
    }
    else if (finalGrade >= 84) {
        $("#LetterGrade").html("B")
    }
    else if (finalGrade >= 80) {
        $("#LetterGrade").html("B-")
    }
    else if (finalGrade >= 77) {
        $("#LetterGrade").html("C+")
    }
    else if (finalGrade >= 74) {
        $("#LetterGrade").html("C")
    }
    else if (finalGrade >= 70) {
        $("#LetterGrade").html("C-")
    }
    else if (finalGrade >= 67) {
        $("#LetterGrade").html("D+")
    }
    else if (finalGrade >= 64) {
        $("#LetterGrade").html("D")
    }
    else if (finalGrade >= 60) {
        $("#LetterGrade").html("D-")
    }
    else {
        $("#LetterGrade").html("E")
    }
})