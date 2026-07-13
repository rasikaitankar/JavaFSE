package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;
import org.junit.jupiter.api.function.Executable;

import java.util.Collection;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

class MyDynamicTest {

    @TestFactory
    Collection<DynamicTest> dynamicTestsFromStream() {
        return generateTestCases().map(input ->
                dynamicTest("Test " + input, () -> assertTrue(input % 2 == 0))
        ).toList();
    }

    private Stream<Integer> generateTestCases() {
        return Stream.of(2, 4, 6, 8, 10);
    }
}
