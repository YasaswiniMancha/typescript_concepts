abstract class TakePhoto {
    // Abstract class "TakePhoto" is created

    constructor(
        public cameraMode: string,
        public filter: string
    ) {
        // Constructor initializing cameraMode and filter properties
    }

    abstract getSepia(): void;
    // Abstract method "getSepia" which must be implemented by any derived class

    getReelTime(): number {
        return 8;
        // Concrete method "getReelTime" that returns a number (8)
    }
}

class Instagram extends TakePhoto {
    // Class "Instagram" extending the abstract class "TakePhoto"

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
        // Calling the parent class (TakePhoto) constructor with cameraMode and filter
    }

    getSepia(): void {
        console.log("getSepia");
        // Implementing the abstract method "getSepia"
    }
}

const hc = new Instagram("TestCamera", "TestFilter", 4);
// Creating an instance of the Instagram class with cameraMode "TestCamera", filter "TestFilter", and burst 4

// const hg = new TakePhoto("cam", "filter");
// Cannot create an instance of an abstract class "TakePhoto"

hc.getReelTime();
// Calling the "getReelTime" method on the Instagram instance "hc"




//DETALED EXPLANATION

// Abstract Class:
// TakePhoto is an abstract class, meaning it cannot be instantiated directly. It serves as a blueprint for other classes.
// The constructor of TakePhoto initializes two properties: cameraMode and filter.
// It includes an abstract method getSepia(), which must be implemented by any subclass that extends TakePhoto.
// It also includes a concrete method getReelTime() that returns the number 8. This method can be used by any subclass of TakePhoto.


// Class Inheritance:
// Instagram extends the abstract class TakePhoto.
// The constructor of Instagram calls the constructor of TakePhoto using super(), passing the cameraMode and filter arguments.
// The Instagram class also introduces an additional property burst.
// The abstract method getSepia() is implemented in the Instagram class. The implementation simply logs "getSepia" to the console.


// Creating Instances:
// An instance of the Instagram class is created with the specified arguments: cameraMode set to "TestCamera", filter set to "TestFilter", and burst set to 4.
// You cannot create an instance of TakePhoto directly because it is an abstract class.


// Method Call:
// The method getReelTime() is called on the hc instance of the Instagram class. This method is inherited from the TakePhoto class and returns the number 8.
// This code demonstrates the concepts of abstract classes, inheritance, constructors, and method overriding in TypeScript.