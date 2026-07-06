package example;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class MathUtilsTest {

    @Test
    void testGetFibonacciNumber() {

        // Arrange
        MathUtils mathUtils = new MathUtils();

        // Act
        int result = mathUtils.getFibonacciNumber(6);

        // Assert
        assertEquals(8, result);
    }
}