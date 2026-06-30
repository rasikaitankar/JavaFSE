package example;

public class Test {

    public static void main(String[] args) {

        Book[] books = {
                new Book(101, "Java", "James Gosling"),
                new Book(102, "Python", "Guido"),
                new Book(103, "DBMS", "Korth"),
                new Book(104, "Operating System", "Galvin"),
                new Book(105, "C++", "Bjarne")
        };

        Library library = new Library(books);
        library.displayBooks();
        System.out.println("Linear Search");
        Book result1 = library.linearSearch("Python");
        if(result1 != null)
            System.out.println(result1);
        else
            System.out.println("Book Not Found");
        System.out.println();
        System.out.println("Binary Search");
        Book result2 = library.binarySearch("DBMS");
        if(result2 != null)
            System.out.println(result2);
        else
            System.out.println("Book Not Found");
    }
}