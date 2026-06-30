package example;

import java.util.Arrays;
import java.util.Comparator;

public class Library {

    private Book[] books;

    public Library(Book[] books) {
        this.books = books;
    }
    public Book linearSearch(String title) {
        for(Book book : books) {
            if(book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    public Book binarySearch(String title) {
        Arrays.sort(books,Comparator.comparing(Book::getTitle));
        int low = 0;
        int high = books.length - 1;
        while(low <= high) {
            int mid = (low + high) / 2;
            int compare = books[mid].getTitle().compareToIgnoreCase(title);
            if(compare == 0) {
                return books[mid];
            }
            if(compare < 0) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return null;
    }
    public void displayBooks() {
        for(Book book : books) {
            System.out.println(book);
        }
    }
}