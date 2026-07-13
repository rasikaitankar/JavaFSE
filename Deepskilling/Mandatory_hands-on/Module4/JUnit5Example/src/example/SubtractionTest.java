package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SubtractionTest {

	@Test
	void subtractionTest() {
		Calculator c = new Calculator();
		int result = c.Subtraction(3, 2);
		assertEquals(1,result);
	}

}
