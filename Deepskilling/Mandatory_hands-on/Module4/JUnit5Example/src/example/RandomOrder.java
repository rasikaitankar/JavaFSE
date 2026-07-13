package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.Random.class)
class RandomOrder {
	
	@Test
	public void testA() {
		program p = new program();
		assertEquals(2,p.findDiff(4, 2));
		System.out.println("In testDiff");
	}
	
	@Test
	public void testB() {
		program p = new program();
		assertEquals(8,p.findMult(4, 2));
		System.out.println("In testMult");
	}
}
