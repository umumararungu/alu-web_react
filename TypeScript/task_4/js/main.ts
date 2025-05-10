namespace Subjects {
    export const cTeacher: Teacher = {
        firstName: "Guillaume",
        lastName: "Salva",
        experienceTeachingC: 10
    };

    // C++
    console.log("C++");
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());

    // Java
    console.log("Java");
    java.setTeacher(cTeacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());

    // React
    console.log("React");
    react.setTeacher(cTeacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}