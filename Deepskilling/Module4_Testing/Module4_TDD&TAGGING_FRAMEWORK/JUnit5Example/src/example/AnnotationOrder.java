package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class AnnotationOrder {

	@Test
	@Order(2)
	public void testDiff() {
		program p = new program();
		assertEquals(2,p.findDiff(4, 2));
		System.out.println("In testDiff");
	}
	
	@Test
	@Order(1)
	public void testMulti() {
		program p = new program();
		assertEquals(4,p.findMult(2, 2));
		System.out.println("In testMulti");
	}
}
