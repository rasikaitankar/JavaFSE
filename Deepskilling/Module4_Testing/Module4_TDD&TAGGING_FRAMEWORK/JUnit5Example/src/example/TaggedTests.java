package example;

import static org.junit.jupiter.api.Assertions.*;


import org.junit.jupiter.api.Test;


import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TaggedTests {

    @Test
    @Tag("fast")
    void fastTest() {
        assertTrue(true, "This is a fast test");
    }

    @Test
    @Tag("slow")
    void slowTest() {
        assertTrue(true, "This is a slow test");
    }

    @Test
    @Tag("fast")
    @Tag("integration")
    void fastIntegrationTest() {
        assertTrue(true, "This is a fast integration test");
    }
}