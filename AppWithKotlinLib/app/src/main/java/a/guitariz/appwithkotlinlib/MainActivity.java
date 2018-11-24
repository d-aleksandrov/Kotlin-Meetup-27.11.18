package a.guitariz.appwithkotlinlib;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import sample.SimpleKotlin;
import sample.pro.Animal;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        SimpleKotlin simple = new SimpleKotlin(2,12,"hello");
        System.out.print(simple.desc());

        SimpleKotlin simple2 = new SimpleKotlin(8,20, "world");
        SimpleKotlin simple3 = simple.summarize(simple2);
        System.out.println(simple3.desc());

        System.out.println(new Animal.Cat(Animal.Mice.INSTANCE).sound());
    }
}
