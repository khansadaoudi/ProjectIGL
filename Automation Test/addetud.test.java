package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class UntitledTestCase {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "https://www.katalon.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testUntitledTestCase() throws Exception {
    driver.get("http://localhost:3000/");
    driver.findElement(By.xpath("//div[@id='root']/section/aside/div/ul/li/a")).click();
    driver.findElement(By.xpath("//div[@id='root']/section/aside/div/ul/li[2]/a")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::span[2]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::div[1]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Home'])[1]/following::ul[2]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::div[1]")).click();
    driver.findElement(By.xpath("//ul[@id='sub1$Menu']/li/a")).click();
    driver.findElement(By.name("nom")).click();
    driver.findElement(By.name("nom")).clear();
    driver.findElement(By.name("nom")).sendKeys("kkkkk");
    driver.findElement(By.name("prenom")).click();
    driver.findElement(By.name("prenom")).clear();
    driver.findElement(By.name("prenom")).sendKeys("lllmmll");
    driver.findElement(By.name("age")).click();
    driver.findElement(By.name("age")).click();
    driver.findElement(By.name("age")).clear();
    driver.findElement(By.name("age")).sendKeys("12");
    driver.findElement(By.name("date")).click();
    driver.findElement(By.name("date")).clear();
    driver.findElement(By.name("date")).sendKeys("2020-01-10");
    driver.findElement(By.name("email")).click();
    driver.findElement(By.name("email")).clear();
    driver.findElement(By.name("email")).sendKeys("hh@jjjj");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).clear();
    driver.findElement(By.name("password")).sendKeys("123456");
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Mot de passe'])[1]/following::button[1]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::span[2]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::span[2]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Home'])[1]/following::ul[2]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Afficher articles'])[1]/following::div[1]")).click();
    driver.findElement(By.xpath("//ul[@id='sub1$Menu']/li/a")).click();
    driver.findElement(By.name("nom")).click();
    // ERROR: Caught exception [ERROR: Unsupported command [doubleClick | name=nom | ]]
    driver.findElement(By.name("nom")).clear();
    driver.findElement(By.name("nom")).sendKeys("daoudi");
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Nom'])[1]/following::label[1]")).click();
    driver.findElement(By.name("prenom")).clear();
    driver.findElement(By.name("prenom")).sendKeys("khansa");
    driver.findElement(By.name("age")).click();
    driver.findElement(By.name("age")).click();
    driver.findElement(By.name("age")).clear();
    driver.findElement(By.name("age")).sendKeys("20");
    driver.findElement(By.name("date")).click();
    driver.findElement(By.name("date")).clear();
    driver.findElement(By.name("date")).sendKeys("2020-01-16");
    driver.findElement(By.name("email")).click();
    driver.findElement(By.name("email")).clear();
    driver.findElement(By.name("email")).sendKeys("hk_daoudi@esi.dz");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).clear();
    driver.findElement(By.name("password")).sendKeys("123456");
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Mot de passe'])[1]/following::button[1]")).click();
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
