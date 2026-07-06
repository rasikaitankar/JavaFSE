package example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
//This package contains tests for timeout functionality.
import java.time.Duration; // Import for handling time durations.
import java.util.concurrent.TimeUnit; // Import for time-related utility classes.
import org.junit.jupiter.api.Assertions; // Import for JUnit assertions.
import org.junit.jupiter.api.Test; // Import for JUnit test annotations.
import org.junit.jupiter.api.Timeout; // Import for setting test timeouts.

//This class demonstrates different ways to apply timeouts in JUnit tests.
class TimeOutTest {

//Section 1: Using Timeout() annotation

 // Test 1: Demonstrates using Timeout annotation with Thread.sleep
 @Test
 @Timeout(6) // Set timeout to 6 seconds
 public void test1() throws InterruptedException {
     Thread.sleep(5000); // Simulate a 5-second delay
     System.out.println("Test1 Passed within the time");
 }

 // Test 2: Demonstrates using Timeout annotation with TimeUnit.SECONDS.sleep
 @Test
 @Timeout(6) // Set timeout to 6 seconds
 public void test2() throws InterruptedException {
     TimeUnit.SECONDS.sleep(5); // Another way to simulate a 5-second delay
     System.out.println("Test2 Passed within the time");
 }

//Section 2: Using Assertions

 // Test 3: Demonstrates using Assertions.assertTimeout
 @Test
 public void test3() {
     Assertions.assertTimeout(Duration.ofSeconds(7), () -> delaySeconds(6)); // Assert a timeout of 7 seconds for a
                                                                             // 6-second delay
     System.out.println("Test3 Passed within the time");
 }

 // Helper method to simulate delays
 private void delaySeconds(int seconds) throws InterruptedException {
     TimeUnit.SECONDS.sleep(seconds);
 }

//Section 3: Demonstrating timeout failures

 //Test 4: Using Assertions.assertTimeout to handle timeout failure
 @Test
 public void test4() {
     Assertions.assertTimeout(Duration.ofSeconds(4), () -> {
         try {
             Thread.sleep(5000); // Delay of 5 seconds, expected to fail
         } catch (InterruptedException e) {
             // Handle interruption if needed
         }
     });
 }

 //Test 5: Same as Test 4, using TimeUnit.SECONDS.sleep
 @Test
 public void test5() {
     Assertions.assertTimeout(Duration.ofSeconds(4), () -> {
         try {
             TimeUnit.SECONDS.sleep(5); // Delay of 5 seconds, expected to fail
         } catch (InterruptedException e) {
             // Handle interruption if needed
         }
     });
 }

 // Test 6: Using Assertions.assertTimeout with a shorter timeout than delay
 @Test
 public void test6() {
     Assertions.assertTimeout(Duration.ofSeconds(5), () -> delaySeconds1(6)); 
       // Assert a timeout of 5 seconds for a 6-second delay
 }

 // Helper method for Test 6
 private void delaySeconds1(int seconds) throws InterruptedException {
     TimeUnit.SECONDS.sleep(seconds);
 }
}