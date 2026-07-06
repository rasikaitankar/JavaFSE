package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

class MyAssumptionTest {

	@Test
	void exampleTest() {
		boolean condition = "true".equalsIgnoreCase(System.getProperty("runTest"));
		Assumptions.assumeTrue(condition);
		Assertions.assertEquals(42,someMethod());	
	}

	private int someMethod() {
		return 42;
	}
}
