package example;

import static org.junit.jupiter.api.Assertions.*;


import org.junit.jupiter.api.Test;
import org.junit.platform.suite.api.*;

@Suite
@SelectClasses({AdditionTest.class,SubtractionTest.class})
public class CalculatorTestSuite {


}
