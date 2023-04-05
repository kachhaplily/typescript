// an interface 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    student.getsize = function () {
        return 50;
    };
    student.prototype.getName = function () {
        return "".concat(this.name, " address is  ").concat(this.address);
    };
    return student;
}());
var lily = new student(1, "lily", { city: "vadodara", country: "india", pincode: 320012, state: "gujrat" });
console.log(student.getsize()); //you can access only static by the class name not need to create an instance.
console.log(lily.getName());
var school = /** @class */ (function (_super) {
    __extends(school, _super);
    function school(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    return school;
}(student));
var fake = new school(2, "fake", { city: "ahmedabad", country: "india", pincode: 320012, state: "gujrat" });
// console.log(fake.name) can not access bcoz name is protected 
