package a.guitariz.appwithkotlinlib;

import org.junit.Test;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import sample.SimpleKotlin;
import sample.medium.JokeProcessor;
import sample.pro.Animal;
import sample.pro.BackendProcessorKt;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }

    @Test public void testSimple(){
        SimpleKotlin simple = new SimpleKotlin(2,12,"hello");
        System.out.print(simple.desc());

        SimpleKotlin simple2 = new SimpleKotlin(8,20, "world");
        SimpleKotlin simple3 = simple.summarize(simple2);
        System.out.println(simple3.desc());
    }

    @Test public void testMedium(){
        TestMediumClass joker = new TestMediumClass();

        String joke = JokeProcessor.INSTANCE.tryToJoke("Tony", joker);
        System.out.println(joke);

        joke = JokeProcessor.INSTANCE.tryToJoke( "Gabriel", joker);
        System.out.println(joke);
    }

    @Test public void testPro(){
        Animal.Dog dog = new Animal.Dog(true);
        System.out.println(dog);

        System.out.println(new Animal.Cat(Animal.Mice.INSTANCE).sound());
    }

    @Test public void testBackend(){
        BackendProcessorKt.simpleCabackUser("KotlinUser", new Function1<String, Unit>() {
            @Override
            public Unit invoke(String s) {
                System.out.println(s);
                return null;
            }
        });

        BackendProcessorKt.testWeatherPage(new TestProClass());
    }
}