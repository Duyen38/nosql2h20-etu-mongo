export default class Employee {
    constructor(name,
        academic_degree,
        academic_title,
        position,
        lectures,
        classes,
        professional_interests,
        publications,
        other_informations) {

        academic_degree = academic_degree ? academic_degree : []
        academic_title = academic_title ? academic_title : []

        lectures = lectures ? lectures : []
        classes = classes ? classes : []

        professional_interests = professional_interests ? professional_interests : []
        publications = publications ? publications : []
        other_informations = other_informations ? other_informations : []


        this.name = name;
        this.academic_degree = academic_degree;
        this.academic_title = academic_title;
        this.position = position;
        this.lectures = lectures;
        this.classes = classes;
        this.professional_interests = professional_interests;
        this.publications = publications;
        this.other_informations = other_informations;
    }
}