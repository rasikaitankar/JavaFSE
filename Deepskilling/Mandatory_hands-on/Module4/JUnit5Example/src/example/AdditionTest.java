package example;

import static org.junit.jupiter.api.Assertions.*;


import org.junit.jupiter.api.*;

class AdditionTest {

	
//	@BeforeEach
//	void setup() {
//		
//	}
	@Test
	void additionTest() {
		Calculator c = new Calculator();
		int result = c.Addition(3, 2);
		assertEquals(5,result);
	}

}
