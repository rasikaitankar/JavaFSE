package example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MyTest {

    @Test
    void exampleTest() {

        int result = someMethod();

        Assertions.assertEquals(42, result);

    }

    private int someMethod() {
        return 42;
    }

}